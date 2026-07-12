"use client";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";


const navigation = [
  { name: "APIs", href: "/apis" },
  { name: "Playground", href: "/playground" },
  { name: "Documentation", href: "/docs" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-zinc-50 transition-colors hover:text-white"
        >
          Mockly
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-100"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* GitHub */}
        <Link
          href="https://github.com/the-jihad/Mockly"
          target="_blank"
          rel="noopener noreferrer"
        >
           <FaGithub className="text-3xl"/>
        </Link>
      </div>
    </header>
  );
}