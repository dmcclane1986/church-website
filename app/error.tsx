"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 text-center sm:py-24">
        <h1 className="font-heading text-2xl font-bold text-navy-900 sm:text-3xl">
          Something went wrong
        </h1>
        <p className="mt-4 text-navy-800">
          We’re sorry. An error occurred while loading this page.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-8 rounded-full bg-navy-600 px-5 py-2 font-semibold text-white hover:bg-navy-700 focus:outline-none focus:ring-2 focus:ring-navy-600 focus:ring-offset-2"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
