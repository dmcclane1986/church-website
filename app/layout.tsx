import type { Metadata } from "next";
import { Lora, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.libertybaptistpb.net";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Liberty Baptist Church | Independent Baptist Church Pine Bluff, AR",
    template: "%s | Liberty Baptist Church Pine Bluff",
  },
  description:
    "Reaching Pine Bluff with the gospel. KJV Bible, Independent Baptist church in Pine Bluff, Arkansas. Sunday worship 10am & 11am, Wednesday 7pm. 8454 US-79.",
  keywords: [
    "Independent Baptist church Pine Bluff AR",
    "KJV Bible church Arkansas",
    "Liberty Baptist Church Pine Bluff",
    "Baptist church Pine Bluff",
    "Bible preaching Pine Bluff",
    "old time religion",
  ],
  openGraph: {
    locale: "en_US",
    type: "website",
    siteName: "Liberty Baptist Church",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: "index, follow",
  icons: {
    icon: "/assets/church-logo.jpg",
  },
};

const churchSchema = {
  "@context": "https://schema.org",
  "@type": "Church",
  "@id": "https://www.libertybaptistpb.net/#church",
  name: "Liberty Baptist Church",
  url: "https://www.libertybaptistpb.net",
  description: "Reaching Pine Bluff with the gospel. Independent Baptist church in Pine Bluff, Arkansas.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "8454 US-79",
    addressLocality: "Pine Bluff",
    addressRegion: "AR",
    postalCode: "71603",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.2087,
    longitude: -92.0032,
  },
  image: "https://www.libertybaptistpb.net/assets/church-logo.jpg",
  sameAs: ["https://www.facebook.com/libertyofpinebluff/"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "12:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Wednesday",
      opens: "19:00",
      closes: "20:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${sourceSans.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(churchSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
