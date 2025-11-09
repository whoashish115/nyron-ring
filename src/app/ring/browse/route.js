import { NextResponse } from "next/server";

import { sites, indexOfId } from "@/data/sites";
import { absoluteUrl } from "@/data/config";

export const dynamic = "force-dynamic";

// `current` is a member id, not a position, so embedded widgets keep
// working when other people join or leave
export async function GET(request) {
  if (sites.length === 0) {
    return NextResponse.redirect(absoluteUrl("/members"), 302);
  }

  const { searchParams } = new URL(request.url);
  const action = searchParams.get("action");
  const currentParam = searchParams.get("current");

  const found = currentParam === null ? -1 : indexOfId(currentParam);
  const current = found === -1 ? 0 : found;

  let target;

  switch (action) {
    case "next":
      target = (current + 1) % sites.length;
      break;

    case "prev":
      target = (current - 1 + sites.length) % sites.length;
      break;

    case "random":
      target =
        sites.length === 1
          ? 0
          : (current + 1 + Math.floor(Math.random() * (sites.length - 1))) %
            sites.length;
      break;

    default:
      target = current;
  }

  return NextResponse.redirect(sites[target].website, {
    status: 302,
    headers: { "Cache-Control": "no-store" },
  });
}
