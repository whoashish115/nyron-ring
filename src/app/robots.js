import { config, absoluteUrl } from "@/data/config";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/widget", "/ring/browse"],
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: config.url,
  };
}
