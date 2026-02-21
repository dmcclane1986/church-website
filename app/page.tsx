"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { MapPin, Clock } from "lucide-react";

const HERO_IMAGES = [
  "/assets/Liberty%20Baptist%20Church.jpg",
  "/assets/liberty-baptist-church.jpg",
];

export default function HomePage() {
  const [heroImageError, setHeroImageError] = useState(false);
  const [heroImageIndex, setHeroImageIndex] = useState(0);
  const currentHeroSrc = HERO_IMAGES[heroImageIndex];

  const onHeroError = () => {
    if (heroImageIndex < HERO_IMAGES.length - 1) {
      setHeroImageIndex((i) => i + 1);
    } else {
      setHeroImageError(true);
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero — put your image at public/assets/liberty-baptist-church.jpg */}
      <section
        aria-label="Hero"
        className={`relative min-h-[55vh] w-full overflow-hidden ${heroImageError ? "bg-gray-200" : "bg-navy-900"}`}
      >
        <div className="absolute inset-0">
          <Image
            src={currentHeroSrc}
            alt="Liberty Baptist Church"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
            unoptimized
            onError={onHeroError}
          />
        </div>

        <div className={`relative z-10 mx-auto flex min-h-[55vh] max-w-4xl flex-col items-center justify-center px-4 py-8 sm:py-10 text-center ${heroImageError ? "text-navy-900" : "text-white"}`}>
          <div className={`rounded-lg px-5 py-4 sm:px-6 sm:py-5 ${heroImageError ? "bg-gray-400/30" : "bg-gray-900/25"}`}>
            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl [text-shadow:0_0_12px_rgba(255,255,255,0.9),0_0_24px_rgba(255,255,255,0.5)]">
              Reaching Pine Bluff
            </h1>
            <p className="mt-1 font-heading text-3xl italic sm:text-4xl md:text-5xl">
              with the gospel
            </p>
          </div>

          {heroImageError && (
            <p className="mb-3 text-sm text-amber-800 bg-amber-100 rounded px-3 py-2 max-w-md">
              Hero image didn’t load. Add <strong>Liberty Baptist Church.jpg</strong> (or <strong>liberty-baptist-church.jpg</strong>) to the folder <strong>public/assets</strong>.
            </p>
          )}

          {/* Service times + address in hero */}
          <div className={`mt-6 flex flex-col gap-3 rounded-lg px-5 py-4 backdrop-blur sm:px-6 sm:py-5 ${heroImageError ? "bg-white/90 text-navy-900" : "bg-white/10"}`}>
            <p className="text-base font-medium sm:text-lg">
              Join us for worship
            </p>
            <div className="flex flex-col gap-1 text-sm sm:text-base">
              <p className="flex items-center justify-center gap-2">
                <Clock className="h-4 w-4 shrink-0" aria-hidden />
                Sunday 10:00 AM — Bible Study
              </p>
              <p className="flex items-center justify-center gap-2">
                <Clock className="h-4 w-4 shrink-0" aria-hidden />
                Sunday 11:00 AM — Worship
              </p>
              <p className="flex items-center justify-center gap-2">
                <Clock className="h-4 w-4 shrink-0" aria-hidden />
                Wednesday 7:00 PM
              </p>
            </div>
            <p className="flex items-center justify-center gap-2 text-sm sm:text-base">
              <MapPin className="h-4 w-4 shrink-0" aria-hidden />
              8454 US-79, Pine Bluff, AR 71603
            </p>
          </div>
        </div>
      </section>

      {/* Secondary CTA strip */}
      <section
        aria-label="Next steps"
        className="border-b border-navy-200 bg-navy-50 py-8"
      >
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-heading text-xl font-bold text-navy-900 sm:text-2xl">
            New here?
          </h2>
          <p className="mt-1.5 text-navy-800 text-sm sm:text-base">
            We’d love to meet you. Plan your visit and find out what to expect.
          </p>
          <Link
            href="/plan-your-visit"
            className="mt-3 inline-block rounded-full bg-navy-600 px-5 py-2 font-semibold text-white text-sm hover:bg-navy-700 focus:outline-none focus:ring-2 focus:ring-navy-600 focus:ring-offset-2"
          >
            Plan Your Visit
          </Link>
        </div>
      </section>
    </div>
  );
}
