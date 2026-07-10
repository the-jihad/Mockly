import Link from "next/link";

export default function HeroSection() {
    return (
            <div className="mx-auto grid  max-w-7xl items-center gap-16 px-6 py-25 lg:grid-cols-2 ">
                {/* Left */}
                <div>
                    <span className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-sm text-zinc-400">
                        Mock API Platform
                    </span>

                    <h1 className="mt-6 text-xl font-bold leading-tight tracking-tight text-zinc-50 lg:text-4xl">
                        Mock Api For Developer
                    </h1>

                    <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
                        Build and test applications faster with realistic mock data, production-ready REST APIs, and interactive documentation.
                    </p>

                    <div className="mt-10 flex gap-4">
                        <Link
                            href="/docs"
                            className="rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:opacity-90"
                        >
                            Get Started
                        </Link>

                        <Link
                            href="/docs"
                            className="rounded-xl border border-zinc-800 px-6 py-3 font-medium text-zinc-300 transition hover:bg-zinc-900"
                        >
                            Documentation
                        </Link>
                    </div>
                </div>

                {/* Right */}
                <div className="rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-zinc-800 px-5 py-4">
                        <span className="font-mono text-sm text-zinc-300">
                            GET /api/users
                        </span>

                        <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                            200 OK
                        </span>
                    </div>

                    {/* JSON */}
                    <pre className="overflow-x-auto p-5 text-sm leading-7 text-zinc-300">
                        {`[
  {
    "id": 1,
    "name": "User One",
    "email": "userone@example.com",
    "company": "Acme Inc"
  },
  {
    "id": 2,
    "name": "User Two",
    "email": "usertwo@example.com",
    "company": "Nova Labs"
  }
]`}
                    </pre>
                </div>
            </div>
    );
}