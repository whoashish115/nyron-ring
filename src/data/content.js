import { config } from "./config";

export const home = {
  heading: "A webring for people who still make websites.",
  intro:
    "Personal sites, linked in a circle. Each one points to the next, so a visitor to any member can find every other. No feed, no ranking, no account. Just people who still write their own HTML.",
  optionsTitle: "What you can do",
  membersTitle: "Members",
  membersAction: "full list",
  reasonsTitle: "Why a ring",
  reasonsAction: "read more",
  joinTitle: "How to join",
  joinAction: "join page",
  contactTitle: "Questions",
  contactBody: "Anything unclear, or want to report a member? Write to",
  steps: [
    "Email your site title, URL and optional feed.",
    "Wait four to seven days for a hand review.",
    "Paste the widget on your site with the ID you are given.",
  ],
};

export const blog = {
  heading: "Blog",
  lead: "Recent posts from every member who publishes a feed, newest first.",
  feedLabel: "Subscribe to the combined feed",
  emptyNoFeeds:
    "No member has given us a feed yet. Add an `rss` URL to any entry in src/data/sites.js and their posts will appear here.",
  emptyUnreachable:
    "No posts could be read right now. The member feeds may be temporarily unreachable; this page refreshes every hour.",
  sourcesLabel: "Reading feeds from",
  readMore: "Read post",
};

export const owner = {
  title: "Owner",
  badge: "owner",
  lead: "Who keeps this ring, reads the submissions, and prunes the dead links.",
};

export const members = {
  heading: "Members",
  lead: "in ring order. Each links out to the member's own site.",
  randomLabel: "Open a random one",
  feedLabel: "combined feed",
  topicsTitle: "Topics",
  listTitle: "Members",
  listLead: "Everyone else in the ring.",
  searchLabel: "Search",
  searchPlaceholder: "Name, domain, topic or person",
  filterHint: "Pick topics to narrow the list. A site matches if it has any of them.",
  clearLabel: "clear",
  resultsOne: "site",
  resultsMany: "sites",
  noResults: "No site matches that. Try a different word or clear the filters.",
  joinPrompt: "Want to be on this list?",
  joinLabel: "Join the ring",
  empty: "The ring is empty for now. It could start with you.",
};

export const about = {
  heading: "About",
  lead: "Who this is for, and why a webring still makes sense.",
  body: [
    "Nyron Ring is a webring for computer science enthusiasts, developers, researchers and creators who enjoy building small, expressive websites that are simple, static, and thoughtfully made. It is a place for personal sites that reflect genuine creativity rather than a content management system.",
    "Today's web is crowded with templates, frameworks and identical-looking designs. Nyron Ring aims to bring back the essence of the early web: unique homepages, 88×31 buttons, playful experiments, and ideas shaped by individuals rather than trends. Neocities pages, personal blogs and hand-coded sites are all welcome. Hand-writing your HTML and CSS is encouraged, though not required.",
    "By joining you become part of a small, curated network of sites that value authenticity, minimalism and independence. It is a quiet corner of the internet for people who still believe the web can be personal.",
  ],
  reasonsTitle: "Why join",
  reasons: [
    {
      title: "Keep the indie web alive",
      body: "Personal sites are still being made. They are just hard to find. A ring makes them findable.",
      accent: "crimson",
    },
    {
      title: "Meet people, not accounts",
      body: "Everyone here chose to build something by hand. That is a decent filter for interesting company.",
      accent: "rust",
    },
    {
      title: "Traffic that isn't owned",
      body: "Visitors arrive from a neighbour's site, not from a platform deciding what you deserve.",
      accent: "rose",
    },
    {
      title: "Resist the sameness",
      body: "Every member site looks different, because a person made each one for themselves.",
      accent: "ember",
    },
  ],
  elsewhereTitle: "Elsewhere",
  elsewhere: [
    { href: "/members", label: "Members", note: "everyone in the ring" },
    { href: "/join", label: "Join", note: "rules, form and widget code" },
    {
      href: config.repository,
      label: "Source",
      note: `${config.license} licensed, fork it and run your own`,
      external: true,
    },
    {
      href: `mailto:${config.email}`,
      label: config.email,
      note: "questions and reports",
      external: true,
    },
  ],
};

export const join = {
  heading: "Join",
  lead: "Send a submission, wait for a reply, then paste the widget onto your site. Free, permanent, and you can leave whenever you like.",
  rulesTitle: "House rules",
  rules: [
    "Anyone is welcome. Showing the widget on your site is encouraged but not required.",
    "The ring especially welcomes people interested in space, the metaverse, AR/VR, creative internet experiments, or computer science in general, though none of that is mandatory.",
    "Harassment or discrimination of any kind means removal from the ring. If you see abusive behaviour, please report it.",
  ],
  formTitle: "Submit your site",
  widgetTitle: "Widget code",
  note: "Submissions are reviewed by hand. Expect a reply within four to seven days. Once you are approved you will be given a member ID.",
  questions: "Questions? Email",
  widgetIdNote: "with the ID you are given. It never changes, even as other sites come and go.",
  widgetIdPrefix: "Replace",
  form: {
    titleLabel: "Site title",
    titlePlaceholder: "Your site name",
    urlLabel: "Site URL",
    urlPlaceholder: "https://your-site.dev",
    rssLabel: "RSS feed",
    rssOptional: "optional",
    rssPlaceholder: "https://your-site.dev/rss.xml",
    rssHelp: "Used to pull your latest posts into the ring's combined feed.",
    submit: "Compose submission",
    errors: {
      required: "A site title and URL are both required.",
      badUrl: "The site URL needs to start with http:// or https://",
      badRss: "The RSS URL needs to start with http:// or https://",
    },
    sent: "Your mail client should be open. Send the message and we'll take it from there. If nothing happened, email",
  },
  snippet: {
    copy: "copy",
    copied: "copied",
  },
};

export const widget = {
  title: "ring navigation",
  intro: "Browse the ring without losing your place.",
  empty: "There are no members in the ring yet.",
  previous: "prev",
  random: "random",
  next: "next",
  positionLabel: "of",
  jumpLabel: "Jump to",
  openLabel: "Open the ring",
  drivingOpener: "Sites open in the window that launched this panel.",
  drivingSelf: "Sites open in this window.",
};

export const notFound = {
  code: "404",
  heading: "This page isn't in the ring.",
  body: "The link may be broken, or the page may have moved. The homepage is a good place to start again.",
  links: [
    { href: "/", label: "Homepage" },
    { href: "/members", label: "Members" },
    { href: "/ring/browse?action=random", label: "Random site", external: true },
  ],
};

export const serverError = {
  code: "500",
  heading: "Something went wrong on our side.",
  body: "This is not your fault. Try again in a moment. If it keeps happening, let us know.",
  retry: "try again",
};

export const ui = {
  divider: "* * * * * * * * * * * * *",
  skipToContent: "Skip to content",
  themeToLight: "Switch to light theme",
  themeToDark: "Switch to dark theme",
  themeLabel: "Switch theme",
  lightWord: "light",
  darkWord: "dark",
};

export default { home, members, about, join, widget, notFound, serverError, ui };
