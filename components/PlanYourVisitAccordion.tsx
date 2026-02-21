"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export type AccordionItem = {
  question: string;
  content: React.ReactNode;
};

export function PlanYourVisitAccordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-0">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border-b border-navy-200 last:border-b-0"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full cursor-pointer list-none items-center justify-between gap-3 py-4 text-left font-heading text-lg font-bold text-navy-900 hover:text-navy-700 focus:outline-none focus:ring-2 focus:ring-navy-600 focus:ring-inset rounded"
              aria-expanded={isOpen}
              aria-controls={`accordion-panel-${index}`}
              id={`accordion-heading-${index}`}
            >
              <span className="pr-2">{item.question}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-navy-600 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                aria-hidden
              />
            </button>
            <div
              id={`accordion-panel-${index}`}
              role="region"
              aria-labelledby={`accordion-heading-${index}`}
              hidden={!isOpen}
              className="overflow-hidden text-navy-800 leading-relaxed"
            >
              <div className="pb-5 pl-0 [&>p+p]:mt-3">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
