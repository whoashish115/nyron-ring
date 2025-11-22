"use client";

import { useMemo, useState } from "react";

import { members as copy } from "@/data/content";
import MemberList from "./MemberList";

function haystack(member) {
  return [member.title, member.website, member.owner, member.blurb, ...(member.tags ?? [])]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

export default function MemberBrowser({ members = [] }) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState([]);

  const topics = useMemo(() => {
    const counts = new Map();
    for (const member of members) {
      for (const tag of member.tags ?? []) {
        counts.set(tag, (counts.get(tag) ?? 0) + 1);
      }
    }
    return [...counts.entries()].sort(
      (a, b) => b[1] - a[1] || a[0].localeCompare(b[0])
    );
  }, [members]);

  const index = useMemo(
    () => members.map((member) => ({ member, text: haystack(member) })),
    [members]
  );

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();

    return index
      .filter(({ text }) => !needle || text.includes(needle))
      .filter(
        ({ member }) =>
          selected.length === 0 ||
          // any tag, not all: every tag here has 1-2 sites
          selected.some((tag) => member.tags?.includes(tag))
      )
      .map(({ member }) => member);
  }, [index, query, selected]);

  const toggle = (tag) =>
    setSelected((current) =>
      current.includes(tag) ? current.filter((t) => t !== tag) : [...current, tag]
    );

  const filtering = query.trim().length > 0 || selected.length > 0;

  const clear = () => {
    setQuery("");
    setSelected([]);
  };

  return (
    <>
      <div className="mb-3">
        <label htmlFor="member-search" className="mb-1 block text-xs text-faint">
          {copy.searchLabel}
        </label>
        <input
          id="member-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={copy.searchPlaceholder}
          autoComplete="off"
          className="w-full max-w-md border border-border bg-surface px-2.5 py-1.5 text-sm text-fg placeholder:text-faint focus:border-accent focus:outline-none"
        />
      </div>

      {topics.length > 0 ? (
        <div className="mb-3">
          <p className="mb-1 text-xs text-faint">{copy.filterHint}</p>

          <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
            {topics.map(([tag, count]) => {
              const on = selected.includes(tag);

              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => toggle(tag)}
                  aria-pressed={on}
                  className={`font-mono text-[11px] transition-colors ${
                    on ? "text-accent underline underline-offset-2" : "text-faint hover:text-fg"
                  }`}
                >
                  #{tag}
                  <span className="ml-0.5 opacity-60">{count}</span>
                </button>
              );
            })}
          </div>
        </div>
      ) : null}

      <p className="mb-3 flex items-baseline gap-2.5 font-mono text-[11px] text-faint">
        <span>
          {results.length}{" "}
          {results.length === 1 ? copy.resultsOne : copy.resultsMany}
        </span>

        {filtering ? (
          <button type="button" onClick={clear} className="link text-accent">
            {copy.clearLabel}
          </button>
        ) : null}
      </p>

      {results.length === 0 ? (
        <p className="border border-dashed border-border p-4 text-sm text-muted">
          {copy.noResults}
        </p>
      ) : (
        <MemberList members={results} />
      )}
    </>
  );
}
