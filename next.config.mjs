/** @type {import('next').NextConfig} */
const nextConfig = {
  // Nothing gained by advertising the framework in every response.
  poweredByHeader: false,

  async headers() {
    return [
      {
        // The widget stylesheet and logo are loaded by member sites, so they
        // want a long cache. Both are versionless, hence the modest max-age
        // plus a long stale window rather than `immutable`.
        source: "/:file(webring.css|logo.png|logo-alt.png)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, stale-while-revalidate=604800",
          },
          { key: "Access-Control-Allow-Origin", value: "*" },
        ],
      },
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
        ],
      },
    ];
  },
};

export default nextConfig;
