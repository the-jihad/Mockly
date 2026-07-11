"use client";
import { faqs } from "@/data/faqs";
import { useState } from "react";
import { TbChevronDown } from "react-icons/tb";


export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
          FAQ
        </p>

        <h2 className="text-4xl font-bold text-zinc-50">
          Frequently Asked Questions
        </h2>

        <p className="mt-4 text-zinc-400">
          Everything you need to know before using MCKAPI.
        </p>
      </div>
      <div className="mt-16 space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={faq.question}
            className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950"
          >
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? -1 : index)
              }
              className="flex w-full items-center justify-between px-6 py-5 text-left"
            >
              <span className="text-lg font-medium text-zinc-100">
                {faq.question}
              </span>

              <TbChevronDown
                className={`h-5 w-5 text-zinc-400 transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ${
                openIndex === index
                  ? "grid-rows-[1fr]"
                  : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="border-t border-zinc-800 px-6 py-5 leading-7 text-zinc-400">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}