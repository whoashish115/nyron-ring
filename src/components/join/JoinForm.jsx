"use client";

import { useState } from "react";

import { config } from "@/data/config";
import { join } from "@/data/content";

const copy = join.form;
const EMPTY = { siteTitle: "", siteUrl: "", rss: "" };

const fieldClass =
  "w-full border border-border bg-surface px-2.5 py-1.5 text-sm text-fg placeholder:text-faint focus:border-accent focus:outline-none";

const labelClass = "mb-1 block text-xs text-faint";

function isValidUrl(value) {
  try {
    const { protocol } = new URL(value);
    return protocol === "http:" || protocol === "https:";
  } catch {
    return false;
  }
}

export default function JoinForm() {
  const [form, setForm] = useState(EMPTY);
  const [error, setError] = useState(null);
  const [sent, setSent] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
    setError(null);
    setSent(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const siteTitle = form.siteTitle.trim();
    const siteUrl = form.siteUrl.trim();
    const rss = form.rss.trim();

    if (!siteTitle || !siteUrl) return setError(copy.errors.required);
    if (!isValidUrl(siteUrl)) return setError(copy.errors.badUrl);
    if (rss && !isValidUrl(rss)) return setError(copy.errors.badRss);

    const subject = encodeURIComponent(config.name + " submission: " + siteTitle);
    const body = encodeURIComponent(
      [
        "Hello,",
        "",
        "I would like to join the " + config.name + ".",
        "",
        "Site title: " + siteTitle,
        "Site URL:   " + siteUrl,
        "RSS feed:   " + (rss || "none"),
        "",
        "Thanks!",
      ].join("\n")
    );

    window.location.href =
      "mailto:" + config.email + "?subject=" + subject + "&body=" + body;
    setSent(true);
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="siteTitle">
            {copy.titleLabel}
          </label>
          <input
            id="siteTitle"
            name="siteTitle"
            value={form.siteTitle}
            onChange={handleChange}
            placeholder={copy.titlePlaceholder}
            autoComplete="off"
            required
            className={fieldClass}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="siteUrl">
            {copy.urlLabel}
          </label>
          <input
            id="siteUrl"
            name="siteUrl"
            type="url"
            inputMode="url"
            value={form.siteUrl}
            onChange={handleChange}
            placeholder={copy.urlPlaceholder}
            autoComplete="url"
            required
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="rss">
          {copy.rssLabel} ({copy.rssOptional})
        </label>
        <input
          id="rss"
          name="rss"
          type="url"
          inputMode="url"
          value={form.rss}
          onChange={handleChange}
          placeholder={copy.rssPlaceholder}
          autoComplete="off"
          aria-describedby="rss-help"
          className={fieldClass}
        />
        <p id="rss-help" className="mt-1 text-xs text-faint">
          {copy.rssHelp}
        </p>
      </div>

      {error ? (
        <p role="alert" className="text-sm text-accent">
          {error}
        </p>
      ) : null}

      {sent ? (
        <p role="status" className="text-sm text-muted">
          {copy.sent}{" "}
          <a href={"mailto:" + config.email} className="link text-accent">
            {config.email}
          </a>
          .
        </p>
      ) : null}

      <button
        type="submit"
        className="border border-border bg-surface px-3 py-1.5 text-sm text-accent transition-colors hover:border-accent"
      >
        {copy.submit}
      </button>
    </form>
  );
}
