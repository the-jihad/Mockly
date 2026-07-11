import Link from "next/link";

const links = [
  { name: "APIs", href: "/apis" },
  { name: "Playground", href: "/playground" },
  { name: "Documentation", href: "/docs" },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()}{" "}
          <span className="font-medium text-zinc-300">Mockly</span>. Built by{" "}
          <span className="text-zinc-100">Jihad Ahmed </span>.
        </p>
        <nav className="flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-zinc-500 transition-colors hover:text-zinc-100"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}