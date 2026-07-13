"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { TbArrowRight } from "react-icons/tb";
import { apis } from "@/data/apies";

export default function ApiDocs() {
  const pathname = usePathname();

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
        {/* Sidebar */}
        <aside className="sticky top-20 h-fit rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
          <p className="mb-5 text-xs font-medium uppercase tracking-wider text-zinc-500">
            API Categories
          </p>

          <div className="space-y-1">
            {apis.map((api) => {
              const href = `/apis/${api.title.toLowerCase()}`;
              const active = pathname === href;

              return (
                <Link
                  key={api.title}
                  href={href}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition ${
                    active
                      ? "bg-zinc-800 text-white"
                      : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200"
                  }`}
                >
                  {api.title}
                  <TbArrowRight className="h-4 w-4" />
                </Link>
              );
            })}
          </div>
        </aside>

        {/* Right Side */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-zinc-50">
              Select an API
            </h1>

            <p className="mt-4 text-zinc-400">
              Choose an API from the left sidebar to view its documentation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}