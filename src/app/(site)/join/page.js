import { config } from "@/data/config";
import { join } from "@/data/content";
import { widgetSnippet, ID_PLACEHOLDER } from "@/lib/widget";
import { pageMetadata } from "@/lib/metadata";
import JoinForm from "@/components/join/JoinForm";
import WidgetSnippet from "@/components/join/WidgetSnippet";
import Divider from "@/components/ui/Divider";

export const metadata = pageMetadata({
  title: "Join",
  description: `How to add your personal site to the ${config.name}.`,
  path: "/join",
});

export default function JoinPage() {
  return (
    <>
      <h1 className="text-2xl">{join.heading}</h1>
      <p className="mt-2 max-w-prose text-sm">{join.lead}</p>

      <Divider />

      <h2 className="mb-2 text-lg">{join.rulesTitle}</h2>
      <ol className="max-w-prose space-y-1.5 text-sm">
        {join.rules.map((rule, index) => (
          <li key={index} className="flex gap-2.5">
            <span className="font-mono text-[11px] text-faint tabular-nums">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-muted">{rule}</span>
          </li>
        ))}
      </ol>

      <Divider />

      <h2 className="mb-3 text-lg">{join.formTitle}</h2>
      <JoinForm />

      <Divider />

      <h2 className="mb-2 text-lg">{join.widgetTitle}</h2>
      <p className="mb-3 max-w-prose text-sm text-muted">
        {join.note} {join.widgetIdPrefix}{" "}
        <code className="font-mono text-xs text-accent">{ID_PLACEHOLDER}</code>{" "}
        {join.widgetIdNote}
      </p>

      <WidgetSnippet snippet={widgetSnippet()} />

      <p className="mt-3 text-sm text-muted">
        {join.questions}{" "}
        <a href={`mailto:${config.email}`} className="link text-accent">
          {config.email}
        </a>
        .
      </p>
    </>
  );
}
