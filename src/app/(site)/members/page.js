import Link from "next/link";

import { config } from "@/data/config";
import { members as copy } from "@/data/content";
import { sites, memberCount } from "@/data/sites";
import { pageMetadata } from "@/lib/metadata";
import MemberBrowser from "@/components/members/MemberBrowser";
import OwnerCard from "@/components/members/OwnerCard";
import Divider from "@/components/ui/Divider";

export const metadata = pageMetadata({
  title: "Members",
  description: `Every personal site currently in the ${config.name}.`,
  path: "/members",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: `${config.name} members`,
  numberOfItems: memberCount,
  itemListElement: sites.map((site, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: site.title,
    url: site.website,
  })),
};

const ringOwner = sites.find((site) => site.owner === config.author.name);
const listed = sites.filter((site) => site !== ringOwner);

export default function MembersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <h1 className="text-2xl">{copy.heading}</h1>
      <p className="mt-2 max-w-prose text-sm">
        {memberCount} {memberCount === 1 ? "site" : "sites"}, {copy.lead}{" "}
        <a href="/ring/browse?action=random" className="link text-accent">
          {copy.randomLabel}
        </a>{" "}
        or read the{" "}
        <a href="/rss.xml" className="link text-accent">
          {copy.feedLabel}
        </a>
        .
      </p>

      <Divider />

      <OwnerCard member={ringOwner} />

      <Divider />

      <h2 className="text-lg">{copy.listTitle}</h2>
      <p className="mb-3 mt-1 text-sm text-muted">{copy.listLead}</p>

      <MemberBrowser members={listed} />

      <p className="mt-5 text-sm text-muted">
        {copy.joinPrompt}{" "}
        <Link href="/join" className="link text-accent">
          {copy.joinLabel}
        </Link>
        .
      </p>
    </>
  );
}
