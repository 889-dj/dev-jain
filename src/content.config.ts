import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { devtoLoader } from "./loaders/devto";
import { siteConfig } from "./data/site";

// Shared by both collections so local and cross-posted entries stay in sync.
const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: blogSchema,
});

const devto = defineCollection({
  loader: devtoLoader({ username: siteConfig.devtoUsername }),
  schema: blogSchema.extend({
    devtoUrl: z.string().url(),
    coverImage: z.string().url().optional(),
    readingTime: z.number().optional(),
  }),
});

export const collections = { blog, devto };
