"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
export default function PlaygroundPage() {
  const [method, setMethod] = useState("GET");
  const [endpoint, setEndpoint] = useState("/api/users");
  const router = useRouter()
  const response = {
    success: true,
    total: 2,
    data: [
      {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
      },
      {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
      },
    ],
  };

  const BASE_URL = "http://localhost:5000"

  const sendRequest = () => {
    window.open(`${BASE_URL}${endpoint}`, "_blank");
  };

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-12">
        <span className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
          Interactive Playground
        </span>

        <h1 className="mt-5 text-5xl font-bold text-white">
          API Playground
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
          Test Mockly endpoints directly from your browser.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950">
          <div className="border-b border-zinc-800 px-6 py-4">
            <h2 className="font-semibold text-white">
              Request
            </h2>
          </div>

          <div className="space-y-6 p-6">
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-400">
                HTTP Method
              </label>

              <select
                value={method}
                onChange={(e) => setMethod(e.target.value)}
                className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none transition focus:border-green-500"
              >
                <option value="GET">GET</option>
                <option value="POST">POST</option>
                <option value="PUT">PUT</option>
                <option value="PATCH">PATCH</option>
                <option value="DELETE">DELETE</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-400">
                Endpoint
              </label>

              <input
                type="text"
                value={endpoint}
                onChange={(e) => setEndpoint(e.target.value)}
                placeholder="/api/users"
                className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 font-mono text-white outline-none transition focus:border-green-500"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-400">
                Request Body
              </label>

              <textarea
                rows={8}
                placeholder={`{
  "name": "John Doe",
  "email": "john@example.com"
}`}
                className="w-full rounded-xl border border-zinc-700 bg-zinc-900 p-4 font-mono text-sm text-white outline-none transition focus:border-green-500"
              />
            </div>
            <button
              onClick={sendRequest}
              className="w-full rounded-xl bg-green-500 py-3 font-semibold text-black transition hover:bg-green-400"
            >
              Send Request
            </button>
          </div>
        </div>
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950">
          <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-4">
            <h2 className="font-semibold text-white">
              Response
            </h2>

            <span className="rounded-lg bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
              200 OK
            </span>
          </div>

          <pre className="overflow-auto p-6 text-sm leading-7 text-zinc-300">
            {JSON.stringify(response, null, 2)}
          </pre>
        </div>
      </div>
      <section className="mt-16">
        <h2 className="mb-6 text-2xl font-bold text-white">
          Popular Endpoints
        </h2>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {[
            "/api/users",
            "/api/products",
            "/api/posts",
            "/api/comments",
            "/api/companies",
            "/api/categories",
          ].map((item) => (
            <button
              key={item}
              onClick={() => setEndpoint(item)}
              className="rounded-xl border border-zinc-800 bg-zinc-950 p-5 text-left transition hover:border-green-500 hover:bg-zinc-900"
            >
              <span className="rounded bg-green-500/10 px-2 py-1 text-xs font-semibold text-green-400">
                GET
              </span>

              <p className="mt-4 font-mono text-white">
                {item}
              </p>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}