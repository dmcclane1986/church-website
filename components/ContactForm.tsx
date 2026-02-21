"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          subject: data.get("subject"),
          message: data.get("message"),
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Failed to send");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="rounded-lg bg-green-100 p-4 text-green-800">
        Thank you! Your message has been sent. We&apos;ll get back to you soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-navy-900">
          Name <span className="text-red-600">*</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          className="mt-1 w-full rounded border border-navy-300 px-3 py-2 text-navy-900 focus:border-navy-600 focus:outline-none focus:ring-1 focus:ring-navy-600"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-navy-900">
          Email <span className="text-red-600">*</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded border border-navy-300 px-3 py-2 text-navy-900 focus:border-navy-600 focus:outline-none focus:ring-1 focus:ring-navy-600"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label htmlFor="contact-subject" className="block text-sm font-medium text-navy-900">
          Subject
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          className="mt-1 w-full rounded border border-navy-300 px-3 py-2 text-navy-900 focus:border-navy-600 focus:outline-none focus:ring-1 focus:ring-navy-600"
          placeholder="What is this regarding?"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-navy-900">
          Message <span className="text-red-600">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          required
          className="mt-1 w-full rounded border border-navy-300 px-3 py-2 text-navy-900 focus:border-navy-600 focus:outline-none focus:ring-1 focus:ring-navy-600"
          placeholder="Your message..."
        />
      </div>
      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again or email us at pastorlibertypb@gmail.com.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-full bg-navy-600 px-6 py-2.5 font-semibold text-white hover:bg-navy-700 focus:outline-none focus:ring-2 focus:ring-navy-600 focus:ring-offset-2 disabled:opacity-70"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
