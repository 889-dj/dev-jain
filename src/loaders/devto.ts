import type { Loader } from "astro/loaders";

const API_BASE = "https://dev.to/api";

/** Subset of the dev.to article payload we rely on. */
interface DevtoArticle {
  id: number;
  title: string;
  description: string;
  slug: string;
  url: string;
  published_at: string;
  edited_at: string | null;
  tag_list: string[];
  cover_image: string | null;
  reading_time_minutes?: number;
  body_markdown?: string;
}

interface DevtoLoaderOptions {
  username: string;
  /** How many articles to request; dev.to caps per_page at 1000. */
  perPage?: number;
}

/** dev.to rejects bodies with frontmatter, but strip it defensively anyway. */
function stripFrontmatter(markdown: string): string {
  return markdown.replace(/^\s*---\r?\n[\s\S]*?\r?\n---\r?\n/, "");
}

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url, {
    headers: { accept: "application/json" },
  });
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText} for ${url}`);
  }
  return (await response.json()) as T;
}

/**
 * Content Layer loader that pulls published dev.to articles into a collection.
 *
 * The list endpoint omits `body_markdown`, so each article needs a second
 * request. We digest `edited_at` to skip that request for unchanged posts.
 */
export function devtoLoader({
  username,
  perPage = 100,
}: DevtoLoaderOptions): Loader {
  return {
    name: "devto-loader",
    async load({ store, parseData, renderMarkdown, generateDigest, logger }) {
      let articles: DevtoArticle[];

      try {
        articles = await fetchJson<DevtoArticle[]>(
          `${API_BASE}/articles?username=${encodeURIComponent(username)}&per_page=${perPage}`,
        );
      } catch (error) {
        // Keep whatever is already in the store so a network blip never fails
        // the build — it just means no dev.to posts on a cold CI run.
        logger.warn(
          `Could not reach the dev.to API (${error instanceof Error ? error.message : error}). Keeping previously loaded articles.`,
        );
        return;
      }

      const seen = new Set<string>();

      for (const article of articles) {
        const id = article.slug;
        seen.add(id);

        const digest = generateDigest(article.edited_at ?? article.published_at);
        if (store.get(id)?.digest === digest) {
          continue;
        }

        let body: string;
        try {
          const full = await fetchJson<DevtoArticle>(
            `${API_BASE}/articles/${article.id}`,
          );
          body = full.body_markdown ?? "";
        } catch (error) {
          logger.warn(
            `Skipping dev.to article "${article.title}" — could not fetch its body (${error instanceof Error ? error.message : error}).`,
          );
          seen.delete(id);
          continue;
        }

        const data = await parseData({
          id,
          data: {
            title: article.title,
            description: article.description,
            date: article.published_at,
            updatedDate: article.edited_at ?? article.published_at,
            tags: article.tag_list ?? [],
            draft: false,
            devtoUrl: article.url,
            coverImage: article.cover_image ?? undefined,
            readingTime: article.reading_time_minutes,
          },
        });

        const rendered = await renderMarkdown(stripFrontmatter(body));

        store.set({ id, data, rendered, digest });
      }

      // Drop anything unpublished or deleted on dev.to since the last build.
      for (const { id } of store.values()) {
        if (!seen.has(id)) {
          store.delete(id);
        }
      }

      logger.info(`Loaded ${seen.size} article(s) from dev.to/${username}`);
    },
  };
}
