import Link from "next/link";

import { config } from "@/data/config";
import { about } from "@/data/content";
import { pageMetadata } from "@/lib/metadata";
import { accent } from "@/lib/accents";
import Divider from "@/components/ui/Divider";

export const metadata = pageMetadata({
  title: "About",
  description: `What the ${config.name} is, who it is for, and why a webring is still worth running.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <h1 className="text-2xl">{about.heading}</h1>
      <p className="mt-2 max-w-prose text-sm">{about.lead}</p>

      <div className="mt-5 max-w-prose space-y-3 text-sm">
        {about.body.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <Divider />

      <h2 className="mb-2 text-lg">{about.reasonsTitle}</h2>
      <ul className="grid gap-x-8 gap-y-2 text-sm sm:grid-cols-2">
        {about.reasons.map((reason) => {
          const tint = accent(reason.accent);

          return (
            <li key={reason.title}>
              <span className={`font-semibold ${tint.text}`}>{reason.title}.</span>{" "}
              <span className="text-muted">{reason.body}</span>
            </li>
          );
        })}
      </ul>

      <Divider />

      <h2 className="mb-2 text-lg">{about.elsewhereTitle}</h2>
      <ul className="space-y-1 text-sm">
        {about.elsewhere.map((entry) => (
          <li key={entry.href + entry.label}>
            {entry.external ? (
              <a href={entry.href} className="link text-accent">
                {entry.label}
              </a>
            ) : (
              <Link href={entry.href} className="link text-accent">
                {entry.label}
              </Link>
            )}{" "}
            <span className="text-muted">{entry.note}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
