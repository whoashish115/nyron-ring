// full class names on purpose, tailwind can't see `text-${accent}`
export const accentClasses = {
  crimson: { text: "text-crimson", soft: "bg-crimson-soft", dot: "bg-crimson" },
  rust: { text: "text-rust", soft: "bg-rust-soft", dot: "bg-rust" },
  rose: { text: "text-rose", soft: "bg-rose-soft", dot: "bg-rose" },
  ember: { text: "text-ember", soft: "bg-ember-soft", dot: "bg-ember" },
  plum: { text: "text-plum", soft: "bg-plum-soft", dot: "bg-plum" },
};

export const ACCENTS = Object.keys(accentClasses);

export function accent(name) {
  return accentClasses[name] ?? accentClasses.crimson;
}

export default accent;
