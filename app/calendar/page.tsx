import type { Metadata } from "next";
import { Clock, Calendar as CalendarIcon } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Calendar",
  description:
    "Events and calendar at Liberty Baptist Church, Pine Bluff AR. Service times, special events, and activities. Join us Sundays 10am & 11am, Wednesdays 7pm.",
};

const TIMEZONE = "America/Chicago";

export default function CalendarPage() {
  const calendarId = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_ID?.trim();
  const embedSrc = calendarId
    ? `https://calendar.google.com/calendar/embed?src=${encodeURIComponent(calendarId)}&ctz=${TIMEZONE}&mode=AGENDA&showTitle=0&showNav=1&showPrint=0&showTabs=0&showCalendars=0&showTz=0`
    : null;

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
        <h1 className="font-heading text-4xl font-bold text-navy-900 sm:text-5xl">
          Calendar
        </h1>
        <p className="mt-2 text-navy-800">
          Service times and upcoming events at Liberty Baptist Church.
        </p>

        {/* Regular service times */}
        <section className="mt-10 rounded-xl border border-navy-200 bg-navy-50/50 p-6 sm:p-8" aria-label="Regular service times">
          <h2 className="font-heading text-xl font-bold text-navy-900 flex items-center gap-2">
            <Clock className="h-6 w-6 text-navy-600" aria-hidden />
            Regular service times
          </h2>
          <ul className="mt-4 space-y-2 text-navy-800">
            <li><strong>Sunday</strong> — Bible Study 10:00 A.M.</li>
            <li><strong>Sunday</strong> — Morning Worship 11:00 A.M.</li>
            <li><strong>Wednesday</strong> — 7:00 P.M.</li>
          </ul>
          <p className="mt-4 text-sm text-navy-600">
            Join us any week. No reservation needed.
          </p>
        </section>

        {/* Google Calendar embed */}
        <section className="mt-10" aria-label="Church calendar">
          <h2 className="font-heading text-xl font-bold text-navy-900 flex items-center gap-2">
            <CalendarIcon className="h-6 w-6 text-navy-600" aria-hidden />
            Church calendar
          </h2>
          {embedSrc ? (
            <div className="mt-4 overflow-hidden rounded-xl border border-navy-200 bg-white">
              <iframe
                src={embedSrc}
                title="Liberty Baptist Church calendar"
                className="h-[400px] w-full min-h-[400px] border-0"
                loading="lazy"
              />
              <p className="border-t border-navy-100 px-4 py-2 text-sm text-navy-600">
                Events are synced from our Google Calendar. Times shown in Central time.
              </p>
            </div>
          ) : (
            <div className="mt-4 rounded-xl border border-dashed border-navy-300 bg-navy-50/30 px-4 py-8 text-center">
              <p className="font-medium text-navy-800">Connect Google Calendar</p>
              <p className="mt-2 text-sm text-navy-600 max-w-md mx-auto">
                Add <code className="rounded bg-navy-200 px-1.5 py-0.5 text-xs">NEXT_PUBLIC_GOOGLE_CALENDAR_ID</code> to your <code className="rounded bg-navy-200 px-1.5 py-0.5 text-xs">.env</code> with your calendar ID (Google Calendar → Settings → your calendar → Integrate calendar → Calendar ID) to show events here.
              </p>
            </div>
          )}
        </section>

        {/* Upcoming events / fallback text */}
        <section className="mt-10" aria-label="Questions">
          <p className="text-navy-800 leading-relaxed">
            Have questions about an event?{" "}
            <Link href="/contact" className="font-semibold text-navy-600 underline hover:text-navy-700 focus:outline-none focus:ring-2 focus:ring-navy-600 focus:ring-offset-2 rounded">
              Contact us
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
