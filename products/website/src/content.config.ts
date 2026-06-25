// Coleção de conteúdo do blog — conteúdo do site em arquivos Markdown.
// O schema garante que todo post tenha os campos certos (e dá autocomplete).
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  // Lê todos os .md/.mdx de src/content/blog.
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    author: z.string().default("Equipe Builders"),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
