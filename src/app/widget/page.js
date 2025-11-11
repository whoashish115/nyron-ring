import { config } from "@/data/config";
import { widget } from "@/data/content";
import { sites } from "@/data/sites";
import RingController from "@/components/widget/RingController";

export const metadata = {
  title: "Ring navigation",
  description: `Move between ${config.name} member sites.`,
  alternates: { canonical: "/widget" },
  robots: { index: false, follow: false },
};

export default function WidgetPage() {
  return (
    <main className="mx-auto min-h-screen max-w-sm p-3.5">
      <div className="mb-3 flex items-baseline justify-between gap-3 border-b border-border pb-2">
        <h1 className="text-sm font-semibold text-fg">{config.name}</h1>
        <a
          href="/"
          target="_blank"
          rel="noopener"
          className="link font-mono text-[11px] text-accent"
        >
          {widget.openLabel}
        </a>
      </div>

      <p className="mb-3 font-mono text-[11px] text-faint">{widget.title}</p>

      <RingController members={sites} />
    </main>
  );
}
