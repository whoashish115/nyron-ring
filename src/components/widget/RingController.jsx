"use client";

import { useEffect, useState } from "react";

import { widget } from "@/data/content";
import { accent } from "@/lib/accents";

export default function RingController({ members = [] }) {
  const [index, setIndex] = useState(0);
  const [drivesOpener, setDrivesOpener] = useState(false);

  useEffect(() => {
    setDrivesOpener(Boolean(window.opener) && !window.opener.closed);
  }, []);

  if (members.length === 0) {
    return <p className="text-sm text-muted">{widget.empty}</p>;
  }

  const current = members[index];
  const tint = accent(current.accent);

  const go = (nextIndex) => {
    setIndex(nextIndex);
    const url = members[nextIndex].website;

    // writing opener.location is allowed cross-origin, reading it isn't
    if (window.opener && !window.opener.closed) {
      try {
        window.opener.location.href = url;
        window.opener.focus();
        window.focus();
        return;
      } catch {
        // opener is gone, fall through
      }
    }

    window.location.href = url;
  };

  const previous = () => go((index - 1 + members.length) % members.length);
  const next = () => go((index + 1) % members.length);

  const random = () => {
    if (members.length === 1) return go(0);

    const offset = 1 + Math.floor(Math.random() * (members.length - 1));
    go((index + offset) % members.length);
  };

  const buttonClass =
    "flex-1 border border-border px-2 py-1.5 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-accent";

  return (
    <div className="space-y-3">
      <div className="flex gap-2.5 border border-border bg-surface p-2.5">
        {current.avatar ? (
          <img
            src={current.avatar}
            alt=""
            width={36}
            height={36}
            className="size-9 shrink-0 self-start rounded border border-border"
          />
        ) : null}

        <span className="min-w-0 flex-1">
          <span className={`block truncate text-sm font-semibold ${tint.text}`}>
            {current.title}
          </span>
          <span className="block truncate font-mono text-[11px] text-faint">
            {current.website.replace(/^https?:\/\//, "").replace(/\/$/, "")}
          </span>
        </span>
      </div>

      <div className="flex gap-1.5">
        <button type="button" onClick={previous} className={buttonClass}>
          {widget.previous}
        </button>
        <button type="button" onClick={random} className={buttonClass}>
          {widget.random}
        </button>
        <button type="button" onClick={next} className={buttonClass}>
          {widget.next}
        </button>
      </div>

      <p className="font-mono text-[11px] text-faint">
        {index + 1} {widget.positionLabel} {members.length}
      </p>

      <label className="block">
        <span className="mb-1 block font-mono text-[11px] text-faint">
          {widget.jumpLabel}
        </span>
        <select
          value={index}
          onChange={(event) => go(Number(event.target.value))}
          className="w-full border border-border bg-surface px-2 py-1.5 text-xs text-fg focus:border-accent focus:outline-none"
        >
          {members.map((member, position) => (
            <option key={member.id} value={position}>
              {String(member.id).padStart(2, "0")} {member.title}
            </option>
          ))}
        </select>
      </label>

      <p className="font-mono text-[10px] leading-snug text-faint">
        {drivesOpener ? widget.drivingOpener : widget.drivingSelf}
      </p>
    </div>
  );
}
