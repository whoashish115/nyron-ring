import { config } from "@/data/config";
import { navigation } from "@/data/navigation";

const frequency = {
  "/blog": "daily",
  "/members": "weekly",
};

export default function sitemap() {
  const lastModified = new Date();

  return navigation.map((item) => ({
    url: item.href === "/" ? config.url : new URL(item.href, config.url).toString(),
    lastModified,
    changeFrequency: frequency[item.href] ?? "monthly",
    priority: item.href === "/" ? 1 : 0.8,
  }));
}
