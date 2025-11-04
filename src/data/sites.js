import { ACCENTS } from "@/lib/accents";
import { avatarFor } from "@/lib/avatar";

export const siteList = [
  {
    id: 1,
    title: "whoashish",
    website: "https://whoashish.com",
    owner: "whoashish115",
    blurb: "Notes on the slow web and whatever is being built this month, from the person who runs this ring.",
    tags: ["indieweb", "notes", "projects"],
    avatar: avatarFor("ashish"),
    accent: "crimson",
    rss: "",
    joined: "2025-01-04",
  },
  {
    id: 2,
    title: "Quiet Terminal",
    website: "https://quietterminal.example",
    owner: "Wren Okonkwo",
    blurb: "A hand-rolled devlog about compilers, tiny languages and stubborn bugs.",
    tags: ["compilers", "rust", "devlog"],
    avatar: avatarFor("wren"),
    accent: "rust",
    rss: "",
    joined: "2025-02-11",
  },
  {
    id: 3,
    title: "Prism Notes",
    website: "https://prismnotes.example",
    owner: "Ines Vargas",
    blurb: "Colour theory, print experiments and a growing pile of CSS oddities.",
    tags: ["design", "css", "colour"],
    avatar: avatarFor("ines"),
    accent: "rose",
    rss: "",
    joined: "2025-03-02",
  },
  {
    id: 4,
    title: "The Fern Garden",
    website: "https://ferngarden.example",
    owner: "Tobias Lund",
    blurb: "A digital garden of half-finished thoughts on distributed systems.",
    tags: ["notes", "systems", "garden"],
    avatar: avatarFor("tobias"),
    accent: "rust",
    rss: "",
    joined: "2025-03-19",
  },
  {
    id: 5,
    title: "Slow Signal",
    website: "https://slowsignal.example",
    owner: "Priya Raman",
    blurb: "Radio, embedded hardware, and things soldered at two in the morning.",
    tags: ["hardware", "radio", "diy"],
    avatar: avatarFor("priya"),
    accent: "plum",
    rss: "",
    joined: "2025-04-07",
  },
  {
    id: 6,
    title: "Tilework",
    website: "https://tilework.example",
    owner: "Marek Dvorak",
    blurb: "Pixel art, tiling puzzles and a very slow game engine written by hand.",
    tags: ["pixel art", "gamedev", "puzzles"],
    avatar: avatarFor("marek"),
    accent: "ember",
    rss: "",
    joined: "2025-05-15",
  },
  {
    id: 7,
    title: "Comet Index",
    website: "https://cometindex.example",
    owner: "Nadia Sørensen",
    blurb: "An amateur astronomer's log, plus the scripts that draw the charts.",
    tags: ["astronomy", "python", "data"],
    avatar: avatarFor("nadia"),
    accent: "crimson",
    rss: "",
    joined: "2025-06-21",
  },
  {
    id: 8,
    title: "Loom & Lattice",
    website: "https://loomandlattice.example",
    owner: "Hana Beleke",
    blurb: "Weaving patterns as code, and code as weaving patterns. Mostly both.",
    tags: ["generative", "textiles", "svg"],
    avatar: avatarFor("hana"),
    accent: "rust",
    rss: "",
    joined: "2025-07-30",
  },
  {
    id: 9,
    title: "Ember Log",
    website: "https://emberlog.example",
    owner: "Cassian Duarte",
    blurb: "Long posts about self-hosting, backups, and refusing to use the cloud.",
    tags: ["selfhosting", "linux", "privacy"],
    avatar: avatarFor("cassian"),
    accent: "ember",
    rss: "",
    joined: "2025-09-12",
  },
];

export const sites = siteList
  .filter((site) => site && typeof site.website === "string" && site.website.length > 0)
  .map((site, index) => ({
    ...site,
    tags: site.tags ?? [],
    accent: ACCENTS.includes(site.accent) ? site.accent : ACCENTS[index % ACCENTS.length],
  }));

export const memberCount = sites.length;

export function indexOfId(id) {
  return sites.findIndex((site) => site.id === Number(id));
}

export function siteById(id) {
  return sites[indexOfId(id)];
}

export default sites;
