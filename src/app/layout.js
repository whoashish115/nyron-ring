import "../styles/globals.css";

import { config } from "@/data/config";
import Providers from "@/components/layout/Providers";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: config.surfaceColor.light },
    { media: "(prefers-color-scheme: dark)", color: config.surfaceColor.dark },
  ],
};

export const metadata = {
  metadataBase: new URL(config.url),

  title: {
    default: `${config.name} · ${config.tagline}`,
    template: `%s · ${config.name}`,
  },
  description: config.description,
  keywords: config.keywords,
  applicationName: config.name,
  authors: [{ name: config.author.name, url: config.author.url }],
  creator: config.author.name,
  publisher: config.author.name,

  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": [{ url: "/rss.xml", title: `${config.name} combined feed` }],
    },
  },

  openGraph: {
    type: "website",
    siteName: config.name,
    locale: config.locale,
    url: "/",
    title: config.name,
    description: config.description,
  },

  twitter: {
    card: "summary_large_image",
    title: config.name,
    description: config.description,
    creator: config.author.twitter,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: config.name,
  alternateName: config.shortName,
  url: config.url,
  description: config.description,
  inLanguage: config.language,
  author: { "@type": "Person", name: config.author.name, url: config.author.url },
};

export default function RootLayout({ children }) {
  return (
    <html lang={config.language} suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
