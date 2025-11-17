import RSS from "rss";

import { config, absoluteUrl } from "@/data/config";
import { fetchRingPosts } from "@/lib/feeds";

export const revalidate = 3600;

export async function GET() {
  const feed = new RSS({
    title: `${config.name} combined feed`,
    description: `Posts from every ${config.name} member in one place.`,
    site_url: config.url,
    feed_url: absoluteUrl("/rss.xml"),
    language: config.language,
    generator: config.name,
  });

  const { posts } = await fetchRingPosts({ perSite: 10 });

  posts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.summary,
      url: post.url,
      guid: post.guid,
      date: post.date ?? new Date(),
      author: post.member.title,
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
