import { config } from "@/data/config";

export function pageMetadata({ title, description, path = "/", absoluteTitle = false }) {
  const ogTitle = absoluteTitle ? title : `${title} · ${config.name}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: config.name,
      locale: config.locale,
      title: ogTitle,
      description,
      url: path,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      creator: config.author.twitter,
    },
  };
}

export default pageMetadata;
