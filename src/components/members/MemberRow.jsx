import { accent } from "@/lib/accents";

export function displayHost(url) {
  try {
    const { hostname, pathname } = new URL(url);
    const path = pathname === "/" ? "" : pathname.replace(/\/$/, "");
    return hostname.replace(/^www\./, "") + path;
  } catch {
    return url;
  }
}

function joinedLabel(value) {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return date.toLocaleDateString("en", { month: "short", year: "numeric" });
}

export default function MemberRow({ member, badge }) {
  const tint = accent(member.accent);
  const joined = joinedLabel(member.joined);

  return (
    <a
      href={member.website}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-full w-full gap-3 border border-border bg-surface p-3 transition-colors hover:border-faint"
    >
      {/* self-start or the image stretches to the card height */}
      {member.avatar ? (
        <img
          src={member.avatar}
          alt=""
          width={44}
          height={44}
          loading="lazy"
          decoding="async"
          className="size-11 shrink-0 self-start rounded border border-border"
        />
      ) : (
        <span
          aria-hidden="true"
          className={`grid size-11 shrink-0 self-start place-items-center rounded border border-border text-base font-semibold ${tint.soft} ${tint.text}`}
        >
          {member.title.charAt(0).toUpperCase()}
        </span>
      )}

      <span className="min-w-0 flex-1">
        <span className="flex items-baseline gap-2">
          <span className={`link truncate text-sm font-semibold ${tint.text}`}>
            {member.title}
          </span>
          <span className="ml-auto shrink-0 font-mono text-[10px] text-faint tabular-nums">
            {badge ?? String(member.id).padStart(2, "0")}
          </span>
        </span>

        <span className="block truncate font-mono text-[11px] text-faint">
          {displayHost(member.website)}
        </span>

        {member.blurb ? (
          <span className="mt-1.5 block text-xs leading-snug text-muted">
            {member.blurb}
          </span>
        ) : null}

        <span className="mt-1.5 flex flex-wrap items-baseline gap-x-2 font-mono text-[10px] text-faint">
          {member.tags.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
          {member.owner ? (
            <span className="ml-auto not-italic">{member.owner}</span>
          ) : null}
          {joined ? <span>{joined}</span> : null}
        </span>
      </span>
    </a>
  );
}
