import { NextResponse } from "next/server";

import { sites } from "@/data/sites";
import { absoluteUrl } from "@/data/config";

export const dynamic = "force-dynamic";

export async function GET(request) {
  if (sites.length === 0) {
    return NextResponse.redirect(absoluteUrl("/members"), 302);
  }

  const { searchParams } = new URL(request.url);
  const action = searchParams.get("action");
  const current = Number(searchParams.get("current")) || 0;

  let target;

  switch (action) {
    case "next":
      target = (current + 1) % sites.length;
      break;

    case "prev":
      target = (current - 1 + sites.length) % sites.length;
      break;

    case "random":
      target = Math.floor(Math.random() * sites.length);
      break;

    default:
      target = current;
  }

  return NextResponse.redirect(sites[target].website, {
    status: 302,
    headers: { "Cache-Control": "no-store" },
  });
}
