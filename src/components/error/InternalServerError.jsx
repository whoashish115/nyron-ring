"use client";

import { serverError } from "@/data/content";

export default function InternalServerErrorView({ reset }) {
  return (
    <section>
      <p className="font-mono text-xs text-faint">
        error {serverError.code}
      </p>

      <h1 className="mt-1 text-2xl">{serverError.heading}</h1>

      <p className="mt-2 max-w-prose text-sm">{serverError.body}</p>

      {typeof reset === "function" ? (
        <button
          type="button"
          onClick={reset}
          className="link mt-4 text-sm text-accent"
        >
          {serverError.retry}
        </button>
      ) : null}
    </section>
  );
}
