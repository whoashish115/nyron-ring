import Link from "next/link";

import { config } from "@/data/config";
import { notFound } from "@/data/content";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-5xl px-5 py-8 sm:px-8">
      <Link href="/" className="text-base font-semibold text-fg">
        {config.name}
      </Link>

      <p className="mt-8 font-mono text-xs text-faint">error {notFound.code}</p>
      <h1 className="mt-1 text-2xl">{notFound.heading}</h1>
      <p className="mt-2 max-w-prose text-sm">{notFound.body}</p>

      <p className="mt-4 flex flex-wrap gap-x-4 text-sm">
        {notFound.links.map((link) =>
          link.external ? (
            <a key={link.label} href={link.href} className="link text-accent">
              {link.label}
            </a>
          ) : (
            <Link key={link.label} href={link.href} className="link text-accent">
              {link.label}
            </Link>
          )
        )}
      </p>
    </div>
  );
}
