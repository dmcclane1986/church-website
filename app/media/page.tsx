import type { Metadata } from "next";
import { Facebook, Youtube } from "lucide-react";

export const metadata: Metadata = {
  title: "Media",
  description:
    "Watch Liberty Baptist Church on Facebook and YouTube. Sermons and services from Pine Bluff, AR.",
};

const FACEBOOK_URL = "https://www.facebook.com/libertyofpinebluff/";
const YOUTUBE_URL = "https://www.youtube.com/@libertybaptistpb"; // Update with your channel

export default function MediaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
        <h1 className="font-heading text-3xl font-bold text-navy-900 sm:text-4xl">
          Watch & Listen
        </h1>
        <p className="mt-2 text-navy-800">
          Catch our services and sermons on Facebook or YouTube.
        </p>

        <div className="mt-10 grid gap-8 sm:gap-10 sm:grid-cols-2">
          {/* Watch on Facebook */}
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="group flex flex-col rounded-xl border-2 border-navy-200 bg-navy-50/50 p-8 transition hover:border-navy-400 hover:bg-navy-50 focus:outline-none focus:ring-2 focus:ring-navy-600 focus:ring-offset-2"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1877F2] text-white" aria-hidden>
              <Facebook className="h-8 w-8" />
            </span>
            <h2 className="mt-4 font-heading text-xl font-bold text-navy-900 sm:text-2xl">
              Watch on Facebook
            </h2>
            <p className="mt-2 text-navy-800 text-sm sm:text-base">
              Live streams and videos on our Facebook page. Like and follow for updates.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-navy-600 font-medium group-hover:text-navy-800">
              Open Facebook
              <span aria-hidden>→</span>
            </span>
          </a>

          {/* Watch on YouTube */}
          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="group flex flex-col rounded-xl border-2 border-navy-200 bg-navy-50/50 p-8 transition hover:border-navy-400 hover:bg-navy-50 focus:outline-none focus:ring-2 focus:ring-navy-600 focus:ring-offset-2"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FF0000] text-white" aria-hidden>
              <Youtube className="h-8 w-8" />
            </span>
            <h2 className="mt-4 font-heading text-xl font-bold text-navy-900 sm:text-2xl">
              Watch on YouTube
            </h2>
            <p className="mt-2 text-navy-800 text-sm sm:text-base">
              Sermons and full services on our YouTube channel. Subscribe to never miss a message.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-navy-600 font-medium group-hover:text-navy-800">
              Open YouTube
              <span aria-hidden>→</span>
            </span>
          </a>
        </div>

        <p className="mt-8 text-center text-sm text-navy-600">
          Can’t join in person? Watch live or catch up anytime.
        </p>
      </div>
    </div>
  );
}
