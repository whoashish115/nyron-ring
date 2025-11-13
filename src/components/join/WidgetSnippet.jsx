"use client";

import { useEffect, useState } from "react";

import { join } from "@/data/content";

export default function WidgetSnippet({ snippet }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(snippet);
      setCopied(true);
    } catch {
      // clipboard can be blocked, the code is still selectable
      setCopied(false);
    }
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={copy}
        className="absolute right-2 top-2 border border-border bg-bg px-2 py-0.5 font-mono text-[11px] text-muted transition-colors hover:border-faint hover:text-fg"
      >
        {copied ? join.snippet.copied : join.snippet.copy}
      </button>

      <pre className="overflow-x-auto border border-border bg-surface p-3 pr-16 font-mono text-[11px] leading-relaxed text-fg">
        <code>{snippet}</code>
      </pre>
    </div>
  );
}
