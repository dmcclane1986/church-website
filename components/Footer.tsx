import Link from "next/link";
import { ServiceTimes } from "./ServiceTimes";
import { Mail, Facebook, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-navy-200 bg-navy-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceTimes />

          <div>
            <h3 className="font-heading text-lg font-bold">Contact</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="mailto:pastorlibertypb@gmail.com"
                  className="inline-flex items-center gap-2 text-navy-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-navy-900 rounded"
                >
                  <Mail className="h-4 w-4 shrink-0" aria-hidden />
                  pastorlibertypb@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/libertyofpinebluff/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 text-navy-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-navy-900 rounded"
                >
                  <Facebook className="h-4 w-4 shrink-0" aria-hidden />
                  Facebook
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-navy-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-navy-900 rounded"
                >
                  <MapPin className="h-4 w-4 shrink-0" aria-hidden />
                  Contact & directions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-navy-700 pt-6 text-center text-sm text-navy-300">
          <p>© {new Date().getFullYear()} Liberty Baptist Church, Pine Bluff, AR.</p>
        </div>
      </div>
    </footer>
  );
}
