import type { Metadata } from "next";
import Link from "next/link";
import { PastorPhoto } from "@/components/PastorPhoto";

export const metadata: Metadata = {
  title: "About Pastor",
  description:
    "Meet Pastor Nathan Stone of Liberty Baptist Church, Pine Bluff AR. His testimony, call to ministry, and heart for our church family.",
};

export default function AboutPastorPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
        <h1 className="font-heading text-4xl font-bold text-navy-900 sm:text-5xl">
          About Pastor
        </h1>
        <p className="mt-2 text-navy-800">
          Meet our pastor and learn a little of his story.
        </p>

        <div className="mt-10 grid gap-10 sm:grid-cols-[minmax(0,220px)_1fr] sm:gap-12">
          {/* Pastor photo — add public/assets/pastor.jpg to show; otherwise shows initial */}
          <div className="flex justify-center sm:justify-start">
            <PastorPhoto />
          </div>

          <div className="min-w-0">
            <h2 className="font-heading text-2xl font-bold text-navy-900 sm:text-3xl">
              Pastor Nathan Stone
            </h2>
            <div className="mt-6 space-y-5 text-navy-800 leading-relaxed">
              <p>
                I grew up in Indiana, raised by God-fearing parents and active in church. Yet, for years, I felt a void that religious activity couldn’t fill. Even after marrying my high school sweetheart, Rachel, in 2005, I spent years trying to “run” from a calling to ministry, never finding true peace in my career.
              </p>
              <p>
                The turning point came at age 32. While attending Bible College and expecting our second child, I finally surrendered to the Lord during a revival meeting. I accepted God’s free gift of salvation and found the peace I had been searching for my entire life.
              </p>
              <p>
                In 2019, the Lord moved our family to Pine Bluff, Arkansas, to serve at Liberty Baptist Church. After serving as Assistant Pastor, I was honored to be called as Lead Pastor in July 2022. My passion is to see others find the same grace and purpose that transformed my life.
              </p>
            </div>
            <p className="mt-8">
              <Link
                href="/contact"
                className="inline-block rounded-full bg-navy-600 px-5 py-2 font-semibold text-white hover:bg-navy-700 focus:outline-none focus:ring-2 focus:ring-navy-600 focus:ring-offset-2"
              >
                Contact Pastor Nathan
              </Link>
            </p>
          </div>
        </div>

        
      </div>
    </div>
  );
}
