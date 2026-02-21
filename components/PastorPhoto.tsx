"use client";

import Image from "next/image";
import { useState } from "react";

export function PastorPhoto() {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className="flex h-56 w-48 items-center justify-center overflow-hidden rounded-xl border border-navy-200 bg-navy-100 sm:h-64 sm:w-52"
        aria-hidden
      >
        <span className="font-heading text-4xl font-bold text-navy-400">N</span>
      </div>
    );
  }

  return (
    <div className="relative h-56 w-48 overflow-hidden rounded-xl border border-navy-200 bg-navy-100 sm:h-64 sm:w-52">
      <Image
        src="/assets/pastor.jpg"
        alt="Pastor Nathan Stone"
        fill
        className="object-cover object-top"
        sizes="208px"
        unoptimized
        onError={() => setError(true)}
      />
    </div>
  );
}
