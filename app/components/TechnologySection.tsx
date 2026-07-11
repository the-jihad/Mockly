import {
  TbBrandNextjs,
  TbBrandTypescript,
  TbBrandNodejs,
  TbBrandReact,
  TbApi,
  TbDatabase,
  TbWorld,
} from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";

const technologies = [
  {
    title: "REST API",
    description: "Standard REST endpoints with JSON responses.",
    icon: TbApi,
  },
  {
    title: "JSON",
    description: "Clean and realistic mock data.",
    icon: TbDatabase,
  },
  {
    title: "TypeScript",
    description: "Fully typed API responses.",
    icon: TbBrandTypescript,
  },
  {
    title: "Tailwind CSS",
    description: "Rapidly build modern and responsive interfaces.",
    icon: SiTailwindcss,
  },
  {
    title: "Next.js",
    description: "Built with the App Router for maximum performance.",
    icon: TbBrandNextjs,
  },
  {
    title: "Express.js",
    description: "High-performance REST API backend.",
    icon: TbBrandNodejs,
  },
  {
    title: "Fetch API",
    description: "Works with the native browser Fetch API.",
    icon: TbWorld,
  },
  {
    title: "React",
    description: "Designed for modern React applications.",
    icon: TbBrandReact,
  },
];

export default function TechnologySection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="max-w-2xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
          Built With
        </p>

        <h2 className="text-4xl font-bold tracking-tight text-zinc-50">
          Modern development stack
        </h2>

        <p className="mt-4 text-zinc-400">
          MCKAPI is built using a modern technology stack to provide a fast,
          reliable, and developer-friendly experience.
        </p>
      </div>
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {technologies.map((tech) => {
          const Icon = tech.icon;

          return (
            <div
              key={tech.title}
              className="group rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:bg-zinc-900"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 transition group-hover:border-zinc-700">
                <Icon className="h-6 w-6 text-zinc-100" />
              </div>

              <h3 className="mt-6 text-lg font-semibold text-zinc-50">
                {tech.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {tech.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}