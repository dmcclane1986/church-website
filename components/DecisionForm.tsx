"use client";

import { useState } from "react";

export function DecisionForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const res = await fetch("/api/decision", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone") || undefined,
          message: data.get("message") || undefined,
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
      <p className="mt-6 rounded-lg bg-green-100 p-4 text-green-800">
        Thank you! We&apos;ll be in touch soon. You can also call us at 870.879.5415.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <div>
        <label htmlFor="decision-name" className="block text-sm font-medium text-navy-900">
          Name <span className="text-red-600">*</span>
        </label>
        <input
          id="decision-name"
          name="name"
          type="text"
          required
          className="mt-1 w-full rounded border border-navy-300 px-3 py-2 text-navy-900 focus:border-navy-600 focus:outline-none focus:ring-1 focus:ring-navy-600"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="decision-email" className="block text-sm font-medium text-navy-900">
          Email <span className="text-red-600">*</span>
        </label>
        <input
          id="decision-email"
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded border border-navy-300 px-3 py-2 text-navy-900 focus:border-navy-600 focus:outline-none focus:ring-1 focus:ring-navy-600"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label htmlFor="decision-phone" className="block text-sm font-medium text-navy-900">
          Phone
        </label>
        <input
          id="decision-phone"
          name="phone"
          type="tel"
          className="mt-1 w-full rounded border border-navy-300 px-3 py-2 text-navy-900 focus:border-navy-600 focus:outline-none focus:ring-1 focus:ring-navy-600"
          placeholder="(870) 555-1234"
        />
      </div>
      <div>
        <label htmlFor="decision-message" className="block text-sm font-medium text-navy-900">
          Message (optional)
        </label>
        <textarea
          id="decision-message"
          name="message"
          rows={3}
          className="mt-1 w-full rounded border border-navy-300 px-3 py-2 text-navy-900 focus:border-navy-600 focus:outline-none focus:ring-1 focus:ring-navy-600"
          placeholder="Tell us about your decision or ask a question..."
        />
      </div>
      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again or call us at 870.879.5415.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-full bg-navy-600 px-6 py-2.5 font-semibold text-white hover:bg-navy-700 focus:outline-none focus:ring-2 focus:ring-navy-600 focus:ring-offset-2 disabled:opacity-70"
      >
        {status === "sending" ? "Sending…" : "Send"}
      </button>
    </form>
  );
}
