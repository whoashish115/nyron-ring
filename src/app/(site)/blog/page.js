import { config, absoluteUrl } from "@/data/config";
import { blog } from "@/data/content";
import { pageMetadata } from "@/lib/metadata";
import { accent } from "@/lib/accents";
import { fetchRingPosts, membersWithFeeds } from "@/lib/feeds";
import Divider from "@/components/ui/Divider";

export const revalidate = 3600;

export const metadata = pageMetadata({
  title: "Blog",
  description: `Recent posts from every ${config.name} member who publishes a feed, gathered into one stream.`,
  path: "/blog",
});

function formatDate(value) {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return date.toLocaleDateString("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default async function BlogPage() {
  const { posts, total, sourceCount } = await fetchRingPosts({ perSite: 10 });
  const sources = membersWithFeeds();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${config.name} blog`,
    description: blog.lead,
    url: absoluteUrl("/blog"),
    inLanguage: config.language,
    blogPost: posts.slice(0, 20).map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: post.url,
      ...(post.date ? { datePublished: post.date } : {}),
      author: { "@type": "Person", name: post.member.owner ?? post.member.title },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <h1 className="text-2xl">{blog.heading}</h1>
      <p className="mt-2 max-w-prose text-sm">
        {blog.lead}{" "}
        <a href="/rss.xml" className="link text-accent">
          {blog.feedLabel}
        </a>
        .
      </p>

      {sourceCount > 0 ? (
        <p className="mt-3 flex flex-wrap gap-x-2.5 gap-y-0.5 font-mono text-[11px] text-faint">
          <span>
            {blog.sourcesLabel} {sourceCount}{" "}
            {sourceCount === 1 ? "member" : "members"}:
          </span>
          {sources.map((member) => (
            <span key={member.id}>{member.title}</span>
          ))}
        </p>
      ) : null}

      <Divider />

      {posts.length === 0 ? (
        <p className="max-w-prose border border-dashed border-border p-4 text-sm text-muted">
          {sourceCount === 0 ? blog.emptyNoFeeds : blog.emptyUnreachable}
        </p>
      ) : (
        <>
          <ol className="grid gap-2 sm:grid-cols-2">
            {posts.map((post) => {
              const tint = accent(post.member.accent);
              const date = formatDate(post.date);

              return (
                <li key={post.guid} className="flex">
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-full w-full flex-col border border-border bg-surface p-3 transition-colors hover:border-faint"
                  >
                    <span className="flex items-baseline gap-2">
                      <span className={`font-mono text-[11px] ${tint.text}`}>
                        {post.member.title}
                      </span>
                      {date ? (
                        <time
                          dateTime={post.date}
                          className="ml-auto shrink-0 font-mono text-[10px] text-faint"
                        >
                          {date}
                        </time>
                      ) : null}
                    </span>

                    <span className="link mt-1 block text-sm font-semibold text-fg">
                      {post.title}
                    </span>

                    {post.summary ? (
                      <span className="mt-1.5 block text-[13px] leading-snug text-muted">
                        {post.summary}
                      </span>
                    ) : null}
                  </a>
                </li>
              );
            })}
          </ol>

          <p className="mt-5 font-mono text-[11px] text-faint">
            {total} {total === 1 ? "post" : "posts"}
          </p>
        </>
      )}
    </>
  );
}
