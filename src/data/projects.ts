export interface Project {
  title: string;
  description: string;
  image: string;
  repoUrl?: string;
  backendRepoUrl?: string;
  liveUrl?: string;
  privacyUrl?: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: "subsTrack",
    description:
      "A manual subscription tracker for iOS & Android — log what you pay for, see renewal calendars and spend forecasts, and get AI-generated insights on your recurring costs.",
    image: "/images/substrack-project.svg",
    repoUrl: "https://github.com/889-dj/subsTrack",
    backendRepoUrl: "https://github.com/889-dj/subsTrack-backend",
    privacyUrl: "/projects/substrack/privacypolicy",
    tags: ["React Native", "Expo", "Neon (Postgres)", "Clerk", "RevenueCat"],
  },
];
