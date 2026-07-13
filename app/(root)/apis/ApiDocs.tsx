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
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition ${active
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
        {/* Right Side */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8">
          <h1 className="text-3xl font-bold text-zinc-50">
            Mockly API
          </h1>

          <p className="mt-4 max-w-2xl text-zinc-400">
            Mockly provides realistic REST APIs for developers to build,
            prototype, and test applications without creating a backend.
            Select an API category from the left sidebar to explore available
            endpoints.
          </p>

          {/* Base URL */}
          <div className="mt-10">
            <h2 className="mb-3 text-sm font-medium text-zinc-400">
              Base URL
            </h2>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-4 font-mono text-sm text-green-400">
              {`{API_BASE_URL}/api/v1`}
            </div>
          </div>

          {/* Example */}
          <div className="mt-8">
            <h2 className="mb-3 text-sm font-medium text-zinc-400">
              Example Request
            </h2>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-4 font-mono text-sm text-green-400">
              GET /users
            </div>
          </div>

          {/* Features */}
          <div className="mt-10">
            <h2 className="mb-4 text-sm font-medium text-zinc-400">
              Supported Query Parameters
            </h2>

            <div className="grid gap-4 md:grid-cols-2">

              <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
                <h3 className="font-mono text-green-400">search</h3>
                <p className="mt-2 text-sm text-zinc-500">
                  Search records using keywords.
                </p>
              </div>

              <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
                <h3 className="font-mono text-green-400">sort</h3>
                <p className="mt-2 text-sm text-zinc-500">
                  Sort by any supported field.
                </p>
              </div>

              <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
                <h3 className="font-mono text-green-400">order</h3>
                <p className="mt-2 text-sm text-zinc-500">
                  Sort order: asc or desc.
                </p>
              </div>

              <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
                <h3 className="font-mono text-green-400">limit</h3>
                <p className="mt-2 text-sm text-zinc-500">
                  Limit the number of returned records.
                </p>
              </div>

            </div>
          </div>

          {/* Sample URL */}
          <div className="mt-10">
            <h2 className="mb-3 text-sm font-medium text-zinc-400">
              Sample Request
            </h2>

            <pre className="overflow-x-auto rounded-xl border border-zinc-800 bg-black p-5 text-sm leading-7 text-zinc-300">
              {`GET /users?search=john&sort=id&order=desc&limit=10`}
            </pre>
          </div>

          {/* Response */}
          <div className="mt-10">
            <h2 className="mb-3 text-sm font-medium text-zinc-400">
              Sample Response
            </h2>

            <pre className="overflow-x-auto rounded-xl border border-zinc-800 bg-black p-5 text-sm leading-7 text-zinc-300">
              {`{
  "success": true,
  "statusCode": 200,
  "data": [
    {
      "id": 1,
      "name": "John Doe"
    }
  ]
}`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}