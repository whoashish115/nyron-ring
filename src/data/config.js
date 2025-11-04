export const config = {
  name: "Nyron Ring",
  shortName: "Nyron",
  tagline: "A webring for computer science enthusiasts.",
  description:
    "A small webring for computer science enthusiasts. Personal, hand-made sites linked together to keep the independent web alive.",

  url: "https://nyron.metaversemagician.space",

  email: "youremail@company.com",

  founded: 2025,
  license: "MIT",

  author: {
    name: "whoashish115",
    url: "https://whoashish.com",
    twitter: "@whoashish115",
  },

  repository: "https://github.com/whoashish115/nyron-ring",

  themeColor: "#cc1f1a",
  surfaceColor: { light: "#f2f2f2", dark: "#141416" },

  locale: "en_US",
  language: "en",

  keywords: [
    "webring",
    "indie web",
    "personal websites",
    "computer science",
    "developer community",
    "small web",
    "neocities",
    "hand-coded",
    "static sites",
    "open source",
    "Nyron Ring",
  ],
};

export function absoluteUrl(path = "/") {
  return new URL(path, config.url).toString();
}

export default config;
