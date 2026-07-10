"use client";

import { useState } from "react";
import { apis } from "@/data/apies";
import { TbArrowRight } from "react-icons/tb";
import Link from "next/link";

export default function ApiDocs() {
  const [activeApi, setActiveApi] = useState(apis[0]);

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
        {/* Sidebar */}
        <aside className="sticky top-20 h-fit rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
          <p className="mb-5 text-xs font-medium uppercase tracking-wider text-zinc-500">
            API Categories
          </p>

          <div className="space-y-1">
            {apis.map((api) => (
              <button
                key={api.title}
                onClick={() => setActiveApi(api)}
                className={`
                  flex w-full items-center justify-between
                  rounded-lg px-3 py-2.5
                  text-left text-sm
                  transition
                  ${
                    activeApi.title === api.title
                      ? "bg-zinc-800 text-white"
                      : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200"
                  }
                `}
              >
                {api.title}
                <TbArrowRight className="h-4 w-4" />
              </button>
            ))}
          </div>
        </aside>

        {/* Content Area */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900">
              {(() => {
                const Icon = activeApi.icon;
                return <Icon className="h-6 w-6 text-zinc-100" />;
              })()}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-zinc-50">
                {activeApi.title}
              </h1>
              <p className="mt-1 text-sm text-zinc-500">{activeApi.records}</p>
            </div>
          </div>

          <p className="mt-8 max-w-2xl text-zinc-400">
            {activeApi.description}
          </p>

          <Link href={activeApi.endpoint} className="mt-10 block">
            <h2 className="mb-3 text-sm font-medium text-zinc-400">Endpoint</h2>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-4 font-mono text-sm text-green-400">
              GET {activeApi.endpoint}
            </div>
          </Link>

          <div className="mt-10">
            <h2 className="mb-3 text-sm font-medium text-zinc-400">Response</h2>
            <pre className="overflow-x-auto rounded-xl border border-zinc-800 bg-black p-5 text-sm leading-7 text-zinc-300">
              {`[
  {
    "id": id number,
    "name": "category Name",
    "email": "",
    "company": ""
    
  }
]`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}