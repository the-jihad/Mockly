import Link from "next/link";

const NAV_ITEMS = [
  "Introduction",
  "Getting Started",
  "Base URL",
  "Authentication",
  "Users",
  "Products",
  "Posts",
  "Comments",
  "Companies",
  "Categories",
  "Search",
  "Filtering",
  "Sorting",
  "Pagination",
  "Errors",
];

export default function DocsPage() {
  return (
    <main className="mx-auto flex max-w-7xl gap-12 px-6 py-16 text-zinc-300">

      {/* ================= Sidebar ================= */}

      <aside className="sticky top-20 hidden h-fit w-64 xl:block">

        <p className="mb-4 text-xs font-bold uppercase tracking-widest text-zinc-500">
          Documentation
        </p>

        <nav className="space-y-1">

          <Link
            href="/"
            className="mb-4 block rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 transition hover:bg-zinc-900 hover:text-white"
          >
            ← Home
          </Link>

          {NAV_ITEMS.map((item) => {
            const slug = item.toLowerCase().replaceAll(" ", "-");

            return (
              <Link
                key={item}
                href={`#${slug}`}
                className="block rounded-lg px-3 py-2 text-sm text-zinc-400 transition hover:bg-zinc-900 hover:text-white"
              >
                {item}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* ================= Content ================= */}

      <article className="max-w-4xl flex-1">

        {/* Header */}

        <header className="border-b border-zinc-800 pb-12">

          <span className="rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
            v1.0.0
          </span>

          <h1 className="mt-6 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-5xl font-bold text-transparent">
            Mockly Documentation
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            Mockly provides realistic fake REST APIs for frontend developers.
            Build, test and prototype applications without creating your own backend.
          </p>
        </header>

        {/* ================================================= */}

        {/* Introduction */}

        <section
          id="introduction"
          className="scroll-mt-24 border-b border-zinc-800 py-16"
        >
          <h2 className="text-3xl font-bold text-white">
            Introduction
          </h2>

          <p className="mt-5 leading-8 text-zinc-400">
            Mockly is a free REST API platform that provides realistic
            fake data including users, products, posts, comments,
            companies and categories.
          </p>

          <p className="mt-4 leading-8 text-zinc-400">
            Perfect for frontend development, testing APIs,
            learning fetch requests and building portfolios.
          </p>
        </section>

        {/* ================================================= */}

        {/* Getting Started */}

        <section
          id="getting-started"
          className="scroll-mt-24 border-b border-zinc-800 py-16"
        >
          <h2 className="text-3xl font-bold text-white">
            Getting Started
          </h2>

          <p className="mt-5 leading-8 text-zinc-400">
            No installation is required.
            Simply make HTTP requests to the API endpoints.
          </p>

          <div className="mt-8 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">

            <div className="border-b border-zinc-800 px-5 py-3 text-sm text-zinc-400">
              Example Request
            </div>

            <pre className="overflow-x-auto p-5 text-sm text-green-400">
{`fetch("https://api.mockly.dev/api/users")
  .then(res => res.json())
  .then(data => console.log(data));`}
            </pre>

          </div>
        </section>

        {/* ================================================= */}

        {/* Base URL */}

        <section
          id="base-url"
          className="scroll-mt-24 border-b border-zinc-800 py-16"
        >
          <h2 className="text-3xl font-bold text-white">
            Base URL
          </h2>

          <p className="mt-5 leading-8 text-zinc-400">
            Every API endpoint begins with the following base URL.
          </p>

          <div className="mt-8 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">

            <div className="border-b border-zinc-800 px-5 py-3 text-sm text-zinc-400">
              Base URL
            </div>

            <pre className="overflow-x-auto p-5 text-green-400">
{`https://api.mockly.dev`}
            </pre>

          </div>

        </section>

        {/* ================================================= */}

        {/* Authentication */}

        <section
          id="authentication"
          className="scroll-mt-24 border-b border-zinc-800 py-16"
        >
          <h2 className="text-3xl font-bold text-white">
            Authentication
          </h2>

          <p className="mt-5 leading-8 text-zinc-400">
            Currently, Mockly is public and does not require authentication.
            You can start making requests immediately.
          </p>

          <div className="mt-8 rounded-xl border border-green-500/20 bg-green-500/10 p-5">

            <p className="font-medium text-green-400">
              ✓ No API Key Required
            </p>

            <p className="mt-2 text-sm text-green-300">
              All endpoints are publicly accessible.
            </p>

          </div>

        </section>

        {/* ======================= PART 2 START HERE ======================= */}
        {/* ================================================= */}
        {/* Users */}

        <section
          id="users"
          className="scroll-mt-24 border-b border-zinc-800 py-16"
        >
          <span className="rounded bg-green-500/15 px-2 py-1 text-xs font-semibold text-green-400">
            GET
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white">
            Users
          </h2>

          <p className="mt-5 text-zinc-400 leading-8">
            Retrieve realistic user profiles including avatar, email,
            address, company and phone number.
          </p>

          {/* Endpoint */}

          <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-950 overflow-hidden">
            <div className="border-b border-zinc-800 px-5 py-3 text-sm text-zinc-400">
              Endpoint
            </div>

            <pre className="overflow-x-auto p-5 text-green-400">
{`GET /api/users`}
            </pre>
          </div>

          {/* Example */}

          <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-950 overflow-hidden">
            <div className="border-b border-zinc-800 px-5 py-3 text-sm text-zinc-400">
              Example Response
            </div>

            <pre className="overflow-x-auto p-5 text-sm text-zinc-300">
{`{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "gender": "male"
    }
  ]
}`}
            </pre>
          </div>
        </section>

        {/* ================================================= */}
        {/* Products */}

        <section
          id="products"
          className="scroll-mt-24 border-b border-zinc-800 py-16"
        >
          <span className="rounded bg-green-500/15 px-2 py-1 text-xs font-semibold text-green-400">
            GET
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white">
            Products
          </h2>

          <p className="mt-5 leading-8 text-zinc-400">
            Retrieve mock products with title, price, image,
            stock, rating and category.
          </p>

          <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-950 overflow-hidden">
            <div className="border-b border-zinc-800 px-5 py-3 text-sm text-zinc-400">
              Endpoint
            </div>

            <pre className="overflow-x-auto p-5 text-green-400">
{`GET /api/products`}
            </pre>
          </div>
        </section>

        {/* ================================================= */}
        {/* Posts */}

        <section
          id="posts"
          className="scroll-mt-24 border-b border-zinc-800 py-16"
        >
          <span className="rounded bg-green-500/15 px-2 py-1 text-xs font-semibold text-green-400">
            GET
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white">
            Posts
          </h2>

          <p className="mt-5 leading-8 text-zinc-400">
            Sample blog posts and social feed content
            for frontend applications.
          </p>

          <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-950 overflow-hidden">
            <div className="border-b border-zinc-800 px-5 py-3 text-sm text-zinc-400">
              Endpoint
            </div>

            <pre className="overflow-x-auto p-5 text-green-400">
{`GET /api/posts`}
            </pre>
          </div>
        </section>

        {/* ================================================= */}
        {/* Comments */}

        <section
          id="comments"
          className="scroll-mt-24 border-b border-zinc-800 py-16"
        >
          <span className="rounded bg-green-500/15 px-2 py-1 text-xs font-semibold text-green-400">
            GET
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white">
            Comments
          </h2>

          <p className="mt-5 leading-8 text-zinc-400">
            Fake comments with replies, usernames
            and timestamps.
          </p>

          <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-950 overflow-hidden">
            <div className="border-b border-zinc-800 px-5 py-3 text-sm text-zinc-400">
              Endpoint
            </div>

            <pre className="overflow-x-auto p-5 text-green-400">
{`GET /api/comments`}
            </pre>
          </div>
        </section>

        {/* ================================================= */}
        {/* Companies */}

        <section
          id="companies"
          className="scroll-mt-24 border-b border-zinc-800 py-16"
        >
          <span className="rounded bg-green-500/15 px-2 py-1 text-xs font-semibold text-green-400">
            GET
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white">
            Companies
          </h2>

          <p className="mt-5 leading-8 text-zinc-400">
            Retrieve fake companies with address,
            website, phone and business information.
          </p>

          <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-950 overflow-hidden">
            <div className="border-b border-zinc-800 px-5 py-3 text-sm text-zinc-400">
              Endpoint
            </div>

            <pre className="overflow-x-auto p-5 text-green-400">
{`GET /api/companies`}
            </pre>
          </div>
        </section>

        {/* ================================================= */}
        {/* Categories */}

        <section
          id="categories"
          className="scroll-mt-24 border-b border-zinc-800 py-16"
        >
          <span className="rounded bg-green-500/15 px-2 py-1 text-xs font-semibold text-green-400">
            GET
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white">
            Categories
          </h2>

          <p className="mt-5 leading-8 text-zinc-400">
            List all available categories for filtering
            products and content.
          </p>

          <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-950 overflow-hidden">
            <div className="border-b border-zinc-800 px-5 py-3 text-sm text-zinc-400">
              Endpoint
            </div>

            <pre className="overflow-x-auto p-5 text-green-400">
{`GET /api/categories`}
            </pre>
          </div>
        </section>

        {/* ======================= PART 3 START HERE ======================= */}
        {/* ================================================= */}
        {/* Search */}

        <section
          id="search"
          className="scroll-mt-24 border-b border-zinc-800 py-16"
        >
          <span className="rounded bg-green-500/15 px-2 py-1 text-xs font-semibold text-green-400">
            GET
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white">
            Search
          </h2>

          <p className="mt-5 leading-8 text-zinc-400">
            Search resources by passing the <code className="text-green-400">search</code> query parameter.
          </p>

          <div className="mt-8 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
            <div className="border-b border-zinc-800 px-5 py-3 text-sm text-zinc-400">
              Example Request
            </div>

            <pre className="overflow-x-auto p-5 text-green-400">
{`GET /api/users?search=john`}
            </pre>
          </div>

          <div className="mt-6 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
            <div className="border-b border-zinc-800 px-5 py-3 text-sm text-zinc-400">
              Example Response
            </div>

            <pre className="overflow-x-auto p-5 text-sm text-zinc-300">
{`{
  "success": true,
  "total": 1,
  "data": [
    {
      "id": 1,
      "name": "John Doe"
    }
  ]
}`}
            </pre>
          </div>
        </section>

        {/* ================================================= */}
        {/* Filtering */}

        <section
          id="filtering"
          className="scroll-mt-24 border-b border-zinc-800 py-16"
        >
          <span className="rounded bg-green-500/15 px-2 py-1 text-xs font-semibold text-green-400">
            GET
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white">
            Filtering
          </h2>

          <p className="mt-5 leading-8 text-zinc-400">
            Filter API results using one or more query parameters.
          </p>

          <div className="mt-8 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
            <div className="border-b border-zinc-800 px-5 py-3 text-sm text-zinc-400">
              Example
            </div>

            <pre className="overflow-x-auto p-5 text-green-400">
{`GET /api/products?category=laptop`}
            </pre>
          </div>

          <div className="mt-6 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
            <div className="border-b border-zinc-800 px-5 py-3 text-sm text-zinc-400">
              Multiple Filters
            </div>

            <pre className="overflow-x-auto p-5 text-green-400">
{`GET /api/products?category=laptop&brand=apple`}
            </pre>
          </div>
        </section>

        {/* ================================================= */}
        {/* Sorting */}

        <section
          id="sorting"
          className="scroll-mt-24 border-b border-zinc-800 py-16"
        >
          <span className="rounded bg-green-500/15 px-2 py-1 text-xs font-semibold text-green-400">
            GET
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white">
            Sorting
          </h2>

          <p className="mt-5 leading-8 text-zinc-400">
            Sort data in ascending or descending order.
          </p>

          <div className="mt-8 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
            <div className="border-b border-zinc-800 px-5 py-3 text-sm text-zinc-400">
              Ascending
            </div>

            <pre className="overflow-x-auto p-5 text-green-400">
{`GET /api/products?sort=price&order=asc`}
            </pre>
          </div>

          <div className="mt-6 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
            <div className="border-b border-zinc-800 px-5 py-3 text-sm text-zinc-400">
              Descending
            </div>

            <pre className="overflow-x-auto p-5 text-green-400">
{`GET /api/products?sort=price&order=desc`}
            </pre>
          </div>
        </section>

        {/* ================= PART 3B START ================= */}
        {/* ================================================= */}
        {/* Pagination */}

        <section
          id="pagination"
          className="scroll-mt-24 border-b border-zinc-800 py-16"
        >
          <span className="rounded bg-green-500/15 px-2 py-1 text-xs font-semibold text-green-400">
            GET
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white">
            Pagination
          </h2>

          <p className="mt-5 leading-8 text-zinc-400">
            Control how many records are returned by using
            <code className="mx-1 text-green-400">page</code> and
            <code className="mx-1 text-green-400">limit</code>.
          </p>

          <div className="mt-8 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
            <div className="border-b border-zinc-800 px-5 py-3 text-sm text-zinc-400">
              Example
            </div>

            <pre className="overflow-x-auto p-5 text-green-400">
{`GET /api/users?page=2&limit=10`}
            </pre>
          </div>

          <div className="mt-6 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
            <div className="border-b border-zinc-800 px-5 py-3 text-sm text-zinc-400">
              Response
            </div>

            <pre className="overflow-x-auto p-5 text-sm text-zinc-300">
{`{
  "page": 2,
  "limit": 10,
  "total": 100,
  "totalPages": 10,
  "data": [...]
}`}
            </pre>
          </div>
        </section>

        {/* ================================================= */}
        {/* Errors */}

        <section
          id="errors"
          className="scroll-mt-24 border-b border-zinc-800 py-16"
        >
          <h2 className="text-3xl font-bold text-white">
            Error Codes
          </h2>

          <p className="mt-5 leading-8 text-zinc-400">
            Mockly follows standard HTTP status codes.
          </p>

          <div className="mt-8 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
            <table className="w-full border-collapse">

              <thead className="bg-zinc-900">
                <tr>
                  <th className="border-b border-zinc-800 p-4 text-left text-white">
                    Code
                  </th>

                  <th className="border-b border-zinc-800 p-4 text-left text-white">
                    Meaning
                  </th>
                </tr>
              </thead>

              <tbody>

                <tr className="border-b border-zinc-800">
                  <td className="p-4 font-mono text-green-400">200</td>
                  <td className="p-4">Success</td>
                </tr>

                <tr className="border-b border-zinc-800">
                  <td className="p-4 font-mono text-yellow-400">400</td>
                  <td className="p-4">Bad Request</td>
                </tr>

                <tr className="border-b border-zinc-800">
                  <td className="p-4 font-mono text-orange-400">401</td>
                  <td className="p-4">Unauthorized</td>
                </tr>

                <tr className="border-b border-zinc-800">
                  <td className="p-4 font-mono text-red-400">404</td>
                  <td className="p-4">Resource Not Found</td>
                </tr>

                <tr>
                  <td className="p-4 font-mono text-red-500">500</td>
                  <td className="p-4">Internal Server Error</td>
                </tr>

              </tbody>

            </table>
          </div>
        </section>

        {/* ================================================= */}
        {/* Previous / Next */}

        <section className="py-16">
          <div className="grid gap-6 md:grid-cols-2">

            <Link
              href="#sorting"
              className="rounded-xl border border-zinc-800 bg-zinc-950 p-6 transition hover:border-zinc-700 hover:bg-zinc-900"
            >
              <p className="text-sm text-zinc-500">
                Previous
              </p>

              <h3 className="mt-2 text-lg font-semibold text-white">
                Sorting
              </h3>
            </Link>

            <Link
              href="#introduction"
              className="rounded-xl border border-zinc-800 bg-zinc-950 p-6 text-right transition hover:border-zinc-700 hover:bg-zinc-900"
            >
              <p className="text-sm text-zinc-500">
                Back To Top
              </p>

              <h3 className="mt-2 text-lg font-semibold text-white">
                Introduction
              </h3>
            </Link>

          </div>
        </section>

      </article>
    </main>
  );
}