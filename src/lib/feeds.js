import Parser from "rss-parser";

import { sites } from "@/data/sites";

const FETCH_TIMEOUT_MS = 8000;
const DEFAULT_PER_SITE = 10;

const parser = new Parser({ timeout: FETCH_TIMEOUT_MS });

function summarise(item, limit = 220) {
  const raw = item.contentSnippet ?? item.content ?? item.summary ?? "";
  const text = raw.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  if (text.length <= limit) return text;
  return text.slice(0, limit).replace(/\s+\S*$/, "") + "…";
}

async function postsFor(member, perSite) {
  try {
    const parsed = await parser.parseURL(member.rss);

    return parsed.items.slice(0, perSite).map((item) => ({
      title: item.title?.trim() || "Untitled",
      url: item.link,
      date: item.isoDate ?? item.pubDate ?? null,
      summary: summarise(item),
      guid: item.guid ?? item.link,
      member,
    }));
  } catch (error) {
    // one dead feed shouldn't take down the whole page
    console.warn(`feeds: skipping ${member.title}: ${error.message}`);
    return [];
  }
}

export function membersWithFeeds() {
  return sites.filter((site) => typeof site.rss === "string" && site.rss.length > 0);
}

export async function fetchRingPosts({ perSite = DEFAULT_PER_SITE, limit } = {}) {
  const members = membersWithFeeds();
  const results = await Promise.all(members.map((member) => postsFor(member, perSite)));

  const posts = results
    .flat()
    .filter((post) => post.url)
    .sort((a, b) => new Date(b.date ?? 0) - new Date(a.date ?? 0));

  return {
    posts: typeof limit === "number" ? posts.slice(0, limit) : posts,
    total: posts.length,
    sourceCount: members.length,
  };
}

export default fetchRingPosts;
