"use client";

import Link from "next/link";
import { useState } from "react";
import { TbArrowRight, TbCheck, TbCopy } from "react-icons/tb";

export default function QuickStartSection() {
  const code = `const response = await fetch("/api/users");
const users = await response.json();

console.log(users);`;

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      {/* Heading */}
      <div className="max-w-2xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
          Quick Start
        </p>

        <h2 className="text-4xl font-bold tracking-tight text-zinc-50">
          Start building in under a minute.
        </h2>

        <p className="mt-4 text-zinc-400">
          Choose an endpoint, send a request, and receive realistic JSON
          responses instantly.
        </p>
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_420px]">
        {/* Steps */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-sm font-semibold text-zinc-100">
                1
              </div>

              <div>
                <h3 className="text-lg font-semibold text-zinc-50">
                  Choose an API
                </h3>

                <p className="mt-2 text-sm leading-7 text-zinc-400">
                  Browse available endpoints like{" "}
                  <span className="font-mono text-zinc-200">
                    /api/users
                  </span>{" "}
                  or{" "}
                  <span className="font-mono text-zinc-200">
                    /api/products
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>

          <div className="ml-5 h-10 w-px bg-zinc-800" />

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-sm font-semibold text-zinc-100">
                2
              </div>

              <div>
                <h3 className="text-lg font-semibold text-zinc-50">
                  Send a Request
                </h3>

                <p className="mt-2 text-sm leading-7 text-zinc-400">
                  Use Fetch, Axios, cURL, or any HTTP client to request your
                  endpoint.
                </p>
              </div>
            </div>
          </div>

          <div className="ml-5 h-10 w-px bg-zinc-800" />

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-sm font-semibold text-zinc-100">
                3
              </div>

              <div>
                <h3 className="text-lg font-semibold text-zinc-50">
                  Get JSON Response
                </h3>

                <p className="mt-2 text-sm leading-7 text-zinc-400">
                  Receive production-like fake data immediately and start
                  building your application.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Code Block */}
        <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
          <div className="flex items-center justify-between border-b border-zinc-800 px-5 py-4">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500" />
              <span className="h-3 w-3 rounded-full bg-yellow-500" />
              <span className="h-3 w-3 rounded-full bg-green-500" />
            </div>

            <button
              onClick={handleCopy}
              className="flex items-center gap-2 rounded-lg border border-zinc-800 px-3 py-1.5 text-xs text-zinc-400 transition hover:border-zinc-700 hover:bg-zinc-900 hover:text-zinc-100"
            >
              {copied ? (
                <>
                  <TbCheck className="h-4 w-4 text-green-400" />
                  Copied!
                </>
              ) : (
                <>
                  <TbCopy className="h-4 w-4" />
                  Copy
                </>
              )}
            </button>
          </div>

          <pre className="overflow-x-auto p-6 text-sm leading-7 text-zinc-300">
            <code>{code}</code>
          </pre>

          <div className="border-t border-zinc-800 bg-zinc-900/50 px-6 py-4">
            <div className="flex items-center gap-2 text-sm text-green-400">
              <TbCheck className="h-5 w-5" />
              Request completed successfully (200 OK)
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14">
        <Link href="/docs" className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 px-6 py-3 text-sm font-medium text-zinc-200 transition hover:border-zinc-700 hover:bg-zinc-900">
          Explore Documentation
          <TbArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}