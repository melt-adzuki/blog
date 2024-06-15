import rss from "@astrojs/rss";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";
import type { APIRoute } from "astro";
import { contentfulClient, type BlogPost } from "../lib/contentful";

export const GET: APIRoute = async (context) => {
  const entries = await contentfulClient.getEntries<BlogPost>({
    content_type: "blogPost",
  });

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site!,
    items: entries.items.map((item) => ({
      title: item.fields.subtitle,
      pubDate: new Date(item.sys.createdAt),
      link: `/articles/${item.fields.slug}/`,
    })),
  });
};
