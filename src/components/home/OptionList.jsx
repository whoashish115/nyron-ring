import Link from "next/link";

import { accent } from "@/lib/accents";
import PopupLink from "@/components/ui/PopupLink";

const rowClass = "block py-1.5 transition-opacity hover:opacity-80";

export default function OptionList({ options = [] }) {
  return (
    <ul className="grid gap-x-8 sm:grid-cols-2">
      {options.map((option) => {
        const tint = accent(option.accent);

        const inner = (
          <>
            <span className={`link text-sm font-semibold ${tint.text}`}>
              {option.label}
            </span>
            <span className="block text-sm text-muted sm:ml-2 sm:inline">
              {option.note}
            </span>
          </>
        );

        return (
          <li key={option.label}>
            {option.popup ? (
              <PopupLink href={option.href} className={rowClass}>
                {inner}
              </PopupLink>
            ) : option.external ? (
              <a href={option.href} className={rowClass}>
                {inner}
              </a>
            ) : (
              <Link href={option.href} className={rowClass}>
                {inner}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}
