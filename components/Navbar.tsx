"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const GIVE_URL = "http://tithe.ly/give/?c=1595707";

const aboutChurchLinks = [
  { href: "/about-pastor", label: "About Pastor" },
  { href: "/statement-of-faith", label: "Statement of Faith" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/plan-your-visit", label: "Plan Your Visit" },
  { href: "/way-to-heaven", label: "Way to Heaven" },
  { href: "/media", label: "Media" },
  { href: "/calendar", label: "Calendar" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setAboutDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      role="banner"
      className="sticky top-0 z-50 w-full border-b border-navy-800/20 bg-white shadow-sm"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        {/* Logo / Home */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 rounded focus:outline-none focus:ring-2 focus:ring-navy-600 focus:ring-offset-2"
          aria-label="Liberty Baptist Church - Home"
        >
          <span className="relative flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded bg-navy-700 sm:h-32 sm:w-32">
            {!logoError ? (
              <Image
                src="/assets/church-logo.jpg"
                alt=""
                fill
                className="object-contain"
                sizes="128px"
                unoptimized
                onError={() => setLogoError(true)}
              />
            ) : (
              <span className="font-heading text-lg font-bold text-white">L</span>
            )}
          </span>
          <span className="font-heading text-lg font-bold text-navy-900 sm:text-xl">
            Liberty Baptist
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Main"
          className="hidden items-center gap-1 md:flex"
        >
          {navLinks.slice(0, 3).map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="rounded px-3 py-2 text-base font-medium text-navy-800 hover:bg-navy-100 hover:text-navy-900 focus:outline-none focus:ring-2 focus:ring-navy-600 focus:ring-offset-2"
            >
              {label}
            </Link>
          ))}
          {/* About Church dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setAboutDropdownOpen(true)}
            onMouseLeave={() => setAboutDropdownOpen(false)}
          >
            <button
              type="button"
              onClick={() => setAboutDropdownOpen((v) => !v)}
              className="flex items-center gap-0.5 rounded px-3 py-2 text-base font-medium text-navy-800 hover:bg-navy-100 hover:text-navy-900 focus:outline-none focus:ring-2 focus:ring-navy-600 focus:ring-offset-2"
              aria-expanded={aboutDropdownOpen}
              aria-haspopup="true"
              aria-controls="about-church-menu"
              id="about-church-button"
            >
              About Church
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${aboutDropdownOpen ? "rotate-180" : ""}`}
                aria-hidden
              />
            </button>
            <div
              id="about-church-menu"
              role="menu"
              aria-labelledby="about-church-button"
              className={`absolute left-0 top-full z-50 min-w-[180px] rounded-md border border-navy-200 bg-white py-1 shadow-lg ${aboutDropdownOpen ? "block" : "hidden"}`}
            >
              {aboutChurchLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  role="menuitem"
                  className="block px-4 py-2 text-base font-medium text-navy-800 hover:bg-navy-50 hover:text-navy-900 focus:bg-navy-50 focus:outline-none focus:ring-0"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
          {navLinks.slice(3).map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="rounded px-3 py-2 text-base font-medium text-navy-800 hover:bg-navy-100 hover:text-navy-900 focus:outline-none focus:ring-2 focus:ring-navy-600 focus:ring-offset-2"
            >
              {label}
            </Link>
          ))}
          <a
            href={GIVE_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="ml-2 rounded-full bg-navy-600 px-4 py-2 text-base font-semibold text-white hover:bg-navy-700 focus:outline-none focus:ring-2 focus:ring-navy-600 focus:ring-offset-2"
          >
            GIVE
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 w-10 items-center justify-center rounded text-navy-900 hover:bg-navy-100 focus:outline-none focus:ring-2 focus:ring-navy-600 focus:ring-offset-2 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-navy-800/10 bg-white md:hidden ${open ? "block" : "hidden"}`}
        aria-hidden={!open}
      >
        <nav
          aria-label="Main"
          className="flex flex-col px-4 py-3"
        >
          {navLinks.slice(0, 3).map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="rounded px-3 py-3 text-lg font-medium text-navy-800 hover:bg-navy-50"
            >
              {label}
            </Link>
          ))}
          <div>
            <button
              type="button"
              onClick={() => setAboutOpen((v) => !v)}
              className="flex w-full items-center justify-between rounded px-3 py-3 text-lg font-medium text-navy-800 hover:bg-navy-50"
              aria-expanded={aboutOpen}
            >
              About Church
              <ChevronDown
                className={`h-5 w-5 shrink-0 transition-transform duration-200 ${aboutOpen ? "rotate-180" : ""}`}
                aria-hidden
              />
            </button>
            {aboutOpen && (
              <div className="pl-4 pb-1">
                {aboutChurchLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className="block rounded px-3 py-2 text-lg font-medium text-navy-700 hover:bg-navy-50"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {navLinks.slice(3).map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="rounded px-3 py-3 text-lg font-medium text-navy-800 hover:bg-navy-50"
            >
              {label}
            </Link>
          ))}
          <a
            href={GIVE_URL}
            target="_blank"
            rel="noreferrer noopener"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-lg bg-navy-600 px-4 py-3 text-center text-lg font-semibold text-white hover:bg-navy-700"
          >
            GIVE
          </a>
        </nav>
      </div>
    </header>
  );
}
