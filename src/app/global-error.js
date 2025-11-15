"use client";

import { useEffect } from "react";

import "../styles/globals.css";
import InternalServerErrorView from "@/components/error/InternalServerError";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <main className="mx-auto w-full max-w-3xl px-6 py-16">
          <InternalServerErrorView reset={reset} />
        </main>
      </body>
    </html>
  );
}
