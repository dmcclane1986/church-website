import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 text-center sm:py-24">
        <h1 className="font-heading text-6xl font-bold text-navy-900 sm:text-7xl">
          404
        </h1>
        <p className="mt-4 text-xl text-navy-800">
          This page could not be found.
        </p>
        <p className="mt-2 text-navy-600">
          The link may be broken or the page may have been moved.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="rounded-full bg-navy-600 px-5 py-2 font-semibold text-white hover:bg-navy-700 focus:outline-none focus:ring-2 focus:ring-navy-600 focus:ring-offset-2"
          >
            Go home
          </Link>
          <Link
            href="/contact"
            className="rounded-full border-2 border-navy-600 px-5 py-2 font-semibold text-navy-800 hover:bg-navy-50 focus:outline-none focus:ring-2 focus:ring-navy-600 focus:ring-offset-2"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}
