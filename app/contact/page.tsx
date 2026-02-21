import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Liberty Baptist Church, Pine Bluff AR. Visit us at 8454 US-79. Pastor: pastorlibertypb@gmail.com, 870.879.5415.",
};

const MAP_EMBED_URL =
  "https://www.google.com/maps?q=8454+US-79,Pine+Bluff,AR&output=embed";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
        <h1 className="font-heading text-3xl font-bold text-navy-900 sm:text-4xl">
          Contact
        </h1>
        <p className="mt-2 text-navy-800">
          Get in touch or come visit. We&apos;d love to hear from you.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          {/* Contact form */}
          <section aria-label="Send a message" className="lg:pr-6">
            <h2 className="font-heading text-xl font-bold text-navy-900">
              Send a message
            </h2>
            <div className="mt-4">
              <ContactForm />
            </div>
          </section>

          {/* Contact info + map */}
          <div className="space-y-8">
            <section aria-label="Contact information">
              <h2 className="font-heading text-xl font-bold text-navy-900">
                Contact information
              </h2>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href="mailto:pastorlibertypb@gmail.com"
                    className="inline-flex items-center gap-2 text-navy-800 hover:text-navy-600 focus:outline-none focus:ring-2 focus:ring-navy-600 focus:ring-offset-2 rounded"
                  >
                    <Mail className="h-5 w-5 shrink-0" aria-hidden />
                    pastorlibertypb@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:8708795415"
                    className="inline-flex items-center gap-2 text-navy-800 hover:text-navy-600 focus:outline-none focus:ring-2 focus:ring-navy-600 focus:ring-offset-2 rounded"
                  >
                    <Phone className="h-5 w-5 shrink-0" aria-hidden />
                    870.879.5415
                  </a>
                </li>
                <li className="flex items-start gap-2 text-navy-800">
                  <MapPin className="h-5 w-5 shrink-0 mt-0.5" aria-hidden />
                  <span>
                    8454 US-79
                    <br />
                    Pine Bluff, AR 71603
                  </span>
                </li>
              </ul>
            </section>

            {/* Google Maps embed */}
            <section id="map" aria-label="Map">
              <h2 className="font-heading text-xl font-bold text-navy-900">
                Find us
              </h2>
              <div className="mt-4 overflow-hidden rounded-xl border border-navy-200 bg-navy-50/30">
                <iframe
                  title="Liberty Baptist Church - 8454 US-79, Pine Bluff, AR"
                  src={MAP_EMBED_URL}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block min-h-[280px] w-full"
                />
              </div>
              <p className="mt-2 text-sm text-navy-600">
                8454 US-79, Pine Bluff, AR 71603
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
