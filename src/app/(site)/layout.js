import Link from "next/link";

import { config } from "@/data/config";
import { navigation, quickAction, panelAction, footerLinks } from "@/data/navigation";
import { ui } from "@/data/content";
import ThemeToggle from "@/components/layout/ThemeToggle";
import PopupLink from "@/components/ui/PopupLink";

export default function SiteLayout({ children }) {
  return (
    <div className="mx-auto w-full max-w-5xl px-5 py-8 sm:px-8">
      <a href="#main" className="sr-only focus:not-sr-only focus:underline">
        {ui.skipToContent}
      </a>

      {/* one row from sm up, wordmark + theme switch share the first line on phones */}
      <header className="mb-8 flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-4">
        <div className="flex items-baseline justify-between gap-4 sm:contents">
          <Link href="/" className="text-base font-semibold text-fg">
            {config.name}
          </Link>

          <span className="sm:order-last sm:ml-auto">
            <ThemeToggle />
          </span>
        </div>

        <nav
          aria-label="Primary"
          className="flex flex-wrap items-baseline gap-x-4 gap-y-1"
        >
          {navigation.slice(1).map((item) => (
            <Link key={item.href} href={item.href} className="link text-sm text-muted">
              {item.label}
            </Link>
          ))}
          <PopupLink href={panelAction.href} className="link text-sm text-accent">
            {panelAction.label}
          </PopupLink>
          <a href={quickAction.href} className="link text-sm text-accent">
            {quickAction.label}
          </a>
        </nav>
      </header>

      <main id="main" className="animate-rise">
        {children}
      </main>

      <footer className="mt-12 flex flex-wrap items-baseline gap-x-4 gap-y-1 border-t border-border pt-4 text-xs text-faint">
        {footerLinks.map((link) =>
          link.external ? (
            <a key={link.label} href={link.href} className="link">
              {link.label}
            </a>
          ) : (
            <Link key={link.label} href={link.href} className="link">
              {link.label}
            </Link>
          )
        )}

        <span className="ml-auto">
          {config.license} licensed &middot;{" "}
          <a href={config.author.url} className="link">
            {config.author.name}
          </a>
        </span>
      </footer>
    </div>
  );
}
