import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string().max(120),
    description: z.string().max(200),
    publishDate: z.coerce.date(),
    updateDate: z.coerce.date().optional(),
    category: z.enum(["llmo", "aio", "tecnico", "strategia", "geo"]),
    tags: z.array(z.string()).default([]),
    author: z.string().default("Rafael Patron"),
    heroImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
