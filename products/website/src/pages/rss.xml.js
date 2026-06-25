// Feed RSS do blog (/rss.xml).
// Bom pra SEO e pra distribuição — leitores e máquinas descobrem novos posts.
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE } from "../consts.ts";

export async function GET(context) {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  return rss({
    title: `${SITE.legalName} — Blog`,
    description:
      "Ideias diretas sobre site, automação e IA para pequenos e médios negócios.",
    site: context.site,
    items: posts
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .map((post) => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.pubDate,
        link: `/blog/${post.id}/`,
      })),
    customData: `<language>pt-BR</language>`,
  });
}
