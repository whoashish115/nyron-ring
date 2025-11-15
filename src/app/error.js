"use client";

import { useEffect } from "react";

import InternalServerErrorView from "@/components/error/InternalServerError";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto w-full max-w-5xl px-5 py-8 sm:px-8">
      <InternalServerErrorView reset={reset} />
    </div>
  );
}
