import { config } from "./config";

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/members", label: "Members" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/join", label: "Join" },
];

export const quickAction = { href: "/ring/browse?action=random", label: "random" };

export const panelAction = { href: "/widget", label: "browse" };

export const utilities = [
  {
    href: "/widget",
    label: "Ring navigation",
    note: "Open the panel and browse without losing your place",
    accent: "crimson",
    popup: true,
  },
  {
    href: "/blog",
    label: "Ring blog",
    note: "Every member's latest posts, in one stream",
    accent: "rust",
  },
  {
    href: "/ring/browse?action=random",
    label: "Random site",
    note: "Jump to any member, chosen at random",
    accent: "crimson",
    external: true,
  },
  {
    href: "/rss.xml",
    label: "Combined feed",
    note: "Every member's posts in one RSS file",
    accent: "ember",
    external: true,
  },
  {
    href: "/join",
    label: "Widget code",
    note: "Put the ring on your own site",
    accent: "rose",
  },
  {
    href: "/about",
    label: "About the ring",
    note: "What this is and who it is for",
    accent: "plum",
  },
  {
    href: config.repository,
    label: "Source code",
    note: `${config.license} licensed, fork it and run your own`,
    accent: "crimson",
    external: true,
  },
];

export const footerLinks = [
  { href: "/members", label: "Members" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/join", label: "Join" },
  { href: "/rss.xml", label: "Feed", external: true },
  { href: "/widget", label: "Widget" },
  { href: config.repository, label: "Source", external: true },
  { href: `mailto:${config.email}`, label: "Contact", external: true },
];

export default navigation;
