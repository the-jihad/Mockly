import Link from "next/link";
import { TbArrowRight } from "react-icons/tb";

import { apis } from "@/data/apies";

type ApiSectionProps = {
  limit?: number;
  showViewAll?: boolean;
};
export default function ApiSection({
  limit,
  showViewAll = true,
}: ApiSectionProps) {
  const displayedApis = limit ? apis.slice(0, limit) : apis;

  return (
      <div className="mx-auto max-w-7xl px-6 py-20">

        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
            APIs
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-zinc-50">
            Explore APIs
          </h2>

          <p className="mt-4 text-zinc-400">
            Everything you need to build, prototype, and test
            applications with realistic mock data.
          </p>
        </div>


        {/* API Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {displayedApis.map((api) => {
            const Icon = api.icon;

            return (
              <Link
                key={api.title}
                href={`/apis/${api.title.toLowerCase()}`}
                className="
                group
                rounded-2xl
                border
                border-zinc-800
                bg-zinc-950
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-zinc-700
                hover:bg-zinc-900
                "
              >

                {/* Icon */}
                <div
                  className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-zinc-800
                  bg-zinc-900
                  "
                >
                  <Icon className="h-6 w-6 text-zinc-200" />
                </div>


                {/* Title */}
                <h3
                  className="
                  mt-6
                  text-xl
                  font-semibold
                  text-zinc-50
                  "
                >
                  {api.title}
                </h3>


                {/* Description */}
                <p
                  className="
                  mt-3
                  text-sm
                  leading-6
                  text-zinc-400
                  "
                >
                  {api.description}
                </p>


                {/* Endpoint */}
                <div
                  className="
                  mt-6
                  rounded-lg
                  border
                  border-zinc-800
                  bg-zinc-900
                  px-3
                  py-2
                  font-mono
                  text-sm
                  text-zinc-300
                  "
                >
                  GET {api.endpoint}
                </div>


                {/* Footer */}
                <div
                  className="
                  mt-6
                  flex
                  items-center
                  justify-between
                  "
                >

                  <span className="text-sm text-zinc-500">
                    {api.records}
                  </span>


                  <span
                    className="
                    flex
                    items-center
                    gap-2
                    text-sm
                    font-medium
                    text-zinc-100
                    "
                  >
                    View API

                    <TbArrowRight
                      className="
                      h-4
                      w-4
                      transition-transform
                      group-hover:translate-x-1
                      "
                    />

                  </span>

                </div>


              </Link>
            );
          })}

        </div>


        {/* View All Button */}
        {showViewAll && (
          <div className="mt-14 flex justify-center">

            <Link
              href="/apis"
              className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              border
              border-zinc-800
              px-6
              py-3
              text-sm
              font-medium
              text-zinc-200
              transition
              hover:bg-zinc-900
              "
            >

              View All APIs

              <TbArrowRight className="h-4 w-4" />

            </Link>

          </div>
        )}

      </div>
  );
}