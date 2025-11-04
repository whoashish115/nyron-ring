import { config } from "@/data/config";

// generated per member, fetched from dicebear by the visitor's browser
const DICEBEAR = "https://api.dicebear.com/9.x";

export const AVATAR_STYLE = config.avatarStyle ?? "lorelei";

export function avatarFor(seed, style = AVATAR_STYLE) {
  const params = new URLSearchParams({
    seed,
    radius: "12",
    scale: "88",
    backgroundColor: "ededed",
  });
  return `${DICEBEAR}/${style}/svg?${params.toString()}`;
}

export default avatarFor;
