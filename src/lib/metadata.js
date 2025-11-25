import { config } from "@/data/config";

// a page that declares its own openGraph stops inheriting the generated
// image, so it has to be named here
const socialImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${config.name} · ${config.tagline}`,
};

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
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      creator: config.author.twitter,
      images: [socialImage],
    },
  };
}

export default pageMetadata;
