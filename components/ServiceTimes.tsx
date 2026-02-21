import Link from "next/link";
import { Clock, MapPin } from "lucide-react";

export function ServiceTimes() {
  return (
    <section aria-label="Service times" className="space-y-3">
      <h3 className="font-heading text-lg font-bold text-white">
        Join us for worship
      </h3>
      <ul className="space-y-1.5 text-navy-200">
        <li className="flex items-center gap-2">
          <Clock className="h-4 w-4 shrink-0" aria-hidden />
          Sunday 10:00 AM — Bible Study
        </li>
        <li className="flex items-center gap-2">
          <Clock className="h-4 w-4 shrink-0" aria-hidden />
          Sunday 11:00 AM — Worship
        </li>
        <li className="flex items-center gap-2">
          <Clock className="h-4 w-4 shrink-0" aria-hidden />
          Wednesday 7:00 PM
        </li>
      </ul>
      <Link
        href="/contact#map"
        className="flex items-center gap-2 pt-1 text-navy-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-navy-900 rounded"
      >
        <MapPin className="h-4 w-4 shrink-0" aria-hidden />
        8454 US-79, Pine Bluff, AR 71603
      </Link>
    </section>
  );
}
