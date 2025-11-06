import Link from "next/link";

import { config } from "@/data/config";
import { home } from "@/data/content";
import { utilities } from "@/data/navigation";
import { sites, memberCount } from "@/data/sites";
import { pageMetadata } from "@/lib/metadata";
import OptionList from "@/components/home/OptionList";
import MemberList from "@/components/members/MemberList";
import Divider from "@/components/ui/Divider";

export const metadata = pageMetadata({
  title: `${config.name} · ${config.tagline}`,
  description: config.description,
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <h1 className="text-2xl">{home.heading}</h1>
      <p className="mt-2 max-w-prose text-sm">{home.intro}</p>
      <p className="mt-2 font-mono text-xs text-faint">
        est. {config.founded} · {memberCount}{" "}
        {memberCount === 1 ? "member" : "members"} · open source
      </p>

      <Divider />

      <h2 className="mb-3 text-lg">{home.optionsTitle}</h2>
      <OptionList options={utilities} />

      <Divider />

      <div className="mb-3 flex items-baseline justify-between gap-4">
        <h2 className="text-lg">
          {home.membersTitle}{" "}
          <span className="font-mono text-xs text-faint">{memberCount}</span>
        </h2>
        <Link href="/members" className="link text-sm text-accent">
          {home.membersAction}
        </Link>
      </div>
      <MemberList members={sites} />

      <Divider />

      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <h2 className="mb-2 text-lg">{home.joinTitle}</h2>
          <ol className="space-y-1.5 text-sm">
            {home.steps.map((step, index) => (
              <li key={step} className="flex gap-2.5">
                <span className="font-mono text-[11px] text-faint tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-muted">{step}</span>
              </li>
            ))}
          </ol>
          <Link href="/join" className="link mt-2 inline-block text-sm text-accent">
            {home.joinAction}
          </Link>
        </div>

        <div>
          <h2 className="mb-2 text-lg">{home.contactTitle}</h2>
          <p className="text-sm text-muted">
            {home.contactBody}{" "}
            <a href={`mailto:${config.email}`} className="link text-accent">
              {config.email}
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}
