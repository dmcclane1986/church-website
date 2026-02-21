import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { PlanYourVisitAccordion } from "@/components/PlanYourVisitAccordion";

export const metadata: Metadata = {
  title: "New Here – Plan Your Visit",
  description:
    "What to expect at Liberty Baptist Church, Pine Bluff AR. Service times, location, dress, childcare, and more. We can't wait to meet you.",
};

const accordionItems = [
  {
    question: "Where is the church located?",
    content: (
      <>
        <p>We are located on US Highway 79 in Pine Bluff, Arkansas.</p>
        <p>
          <Link
            href="/contact#map"
            className="font-semibold text-navy-600 underline hover:text-navy-700 focus:outline-none focus:ring-2 focus:ring-navy-600 focus:ring-offset-2 rounded"
          >
            View our map for directions.
          </Link>
        </p>
      </>
    ),
  },
  {
    question: "Where would I fit in?",
    content: (
      <p>
        There is a place for you. At Liberty Baptist, you aren’t just a face in the crowd—you’re family. Whether you’re a lifelong believer or just exploring faith, you’ll find a relaxed atmosphere, music that stirs the soul, and practical teaching from the Bible that helps you connect with God. We have opportunities for children, teens, and adults. We can’t wait to meet you.
      </p>
    ),
  },
  {
    question: "What are the Sunday service times?",
    content: (
      <>
        <p className="font-semibold text-navy-900">
          Bible Study 10:00 A.M. · Morning Worship 11:00 A.M.
        </p>
        <p>
          We believe in a church service with good, uplifting hymns and spiritual songs, prayer, and, best of all, practical preaching from the Word of God.
        </p>
      </>
    ),
  },
  {
    question: "Do you have a Wednesday Bible study?",
    content: (
      <>
        <p>Yes, beginning at <strong>7:00 P.M.</strong></p>
        <p>
          This is a time during the week when the church family gathers to hear practical, relevant truths from the Bible. You will learn truths that will help in areas such as prayer, marriage, child-rearing, relationships, and more.
        </p>
      </>
    ),
  },
  {
    question: "What about childcare?",
    content: (
      <p>
        We welcome families. Nurseries and childcare are available for your little ones, where they will be kept safe and well-supervised. Our nursery staff is available for our services.
      </p>
    ),
  },
  {
    question: "What should I wear?",
    content: (
      <p>
        There is no strict dress code for our public services. However, if you are wondering, most of our members wear their “Sunday best”—men typically wear a dress shirt and dress slacks, often with a tie, and women wear modest apparel.
      </p>
    ),
  },
  {
    question: "Will there be singing and special music?",
    content: (
      <p>
        Every service includes an opportunity to sing hymns and spiritual songs together. We love music that stirs the soul and honors the Lord.
      </p>
    ),
  },
  {
    question: "Will there be a prayer time?",
    content: (
      <p>
        We are a church that believes in prayer. Throughout the service, prayers are led by different men. Some prayers address the needs and requests of our church family and friends; others simply praise and thank God for His goodness and faithfulness.
      </p>
    ),
  },
  {
    question: "Will there be preaching?",
    content: (
      <p>
        We consider the preaching of the Word of God to be the most important time of the service. I Corinthians 1:21 reads, “…it pleased God by the foolishness of preaching to save them that believe.” We believe the best help for any struggle in life is found in the Bible, and preaching conveys those helps.
      </p>
    ),
  },
];

export default function PlanYourVisitPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <h1 className="font-heading text-4xl font-bold text-navy-900 sm:text-5xl">
          New Here?
        </h1>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">
          {/* Main: accordion */}
          <div>
            <PlanYourVisitAccordion items={accordionItems} />

            {/* Come visit + How to Heaven: stay in main column below accordion */}
            <section className="border-t border-navy-200 pt-8 mt-4">
              <h2 className="font-heading text-xl font-bold text-navy-900 sm:text-2xl">
                Come visit us
              </h2>
              <p className="mt-3 text-navy-800 leading-relaxed">
                Now that you’ve learned a little about our church, we invite you to visit. We look forward to meeting you and your family.
              </p>
            </section>

            <section className="pt-6">
              <h2 className="font-heading text-xl font-bold text-navy-900 sm:text-2xl">
                How to go to Heaven
              </h2>
              <p className="mt-3 text-navy-800 leading-relaxed">
                Here at Liberty Baptist Church, our highest concern is your eternal security. If you have any questions or concerns about what happens when we die, please{" "}
                <Link href="/contact" className="font-semibold text-navy-600 underline hover:text-navy-700">
                  contact us
                </Link>
                {" "}or visit the following link.
              </p>
              <p className="mt-4">
                <Link
                  href="/way-to-heaven"
                  className="inline-block rounded-full bg-navy-600 px-5 py-2 font-semibold text-white hover:bg-navy-700 focus:outline-none focus:ring-2 focus:ring-navy-600 focus:ring-offset-2"
                >
                  The way to Heaven
                </Link>
              </p>
            </section>
          </div>

          {/* Sidebar: location + service times */}
          <aside className="lg:sticky lg:top-8 lg:self-start space-y-6">
            <div className="rounded-xl border border-navy-200 bg-navy-50/50 p-6">
              <h2 className="font-heading text-lg font-bold text-navy-900">
                Our location
              </h2>
              <p className="mt-2 text-navy-800">
                Liberty Baptist Church<br />
                8454 US-79<br />
                Pine Bluff, AR 71603
              </p>
              <ul className="mt-4 space-y-2 text-navy-800">
                <li>
                  <a
                    href="tel:8708795415"
                    className="inline-flex items-center gap-2 hover:text-navy-600 focus:outline-none focus:ring-2 focus:ring-navy-600 focus:ring-offset-2 rounded"
                  >
                    <Phone className="h-4 w-4 shrink-0" aria-hidden />
                    (870) 879-5415
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:pastorlibertypb@gmail.com"
                    className="inline-flex items-center gap-2 hover:text-navy-600 focus:outline-none focus:ring-2 focus:ring-navy-600 focus:ring-offset-2 rounded"
                  >
                    <Mail className="h-4 w-4 shrink-0" aria-hidden />
                    pastorlibertypb@gmail.com
                  </a>
                </li>
              </ul>
              <p className="mt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 font-semibold text-navy-600 underline hover:text-navy-700 focus:outline-none focus:ring-2 focus:ring-navy-600 focus:ring-offset-2 rounded"
                >
                  <MapPin className="h-4 w-4 shrink-0" aria-hidden />
                  Directions & contact form
                </Link>
              </p>
            </div>

            <div className="rounded-xl border border-navy-200 bg-navy-50/50 p-6">
              <h2 className="font-heading text-lg font-bold text-navy-900 flex items-center gap-2">
                <Clock className="h-5 w-5 text-navy-600" aria-hidden />
                Service times
              </h2>
              <ul className="mt-3 space-y-1.5 text-navy-800">
                <li>Sunday Bible Study: 10:00 A.M.</li>
                <li>Sunday Worship: 11:00 A.M.</li>
                <li>Wednesday: 7:00 P.M.</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
