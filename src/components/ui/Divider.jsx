import { ui } from "@/data/content";

export default function Divider() {
  return (
    <p
      aria-hidden="true"
      className="my-7 select-none text-center font-mono text-xs tracking-[0.5em] text-faint"
    >
      {ui.divider}
    </p>
  );
}
