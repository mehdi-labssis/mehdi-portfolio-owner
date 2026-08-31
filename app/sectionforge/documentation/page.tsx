export default function SectionForgeDocumentation() {
  const sections = [
    {
      title: "Getting Started",
      items: [
        "Theme installation",
        "Theme editor basics",
        "Navigation setup",
        "Store configuration",
      ],
    },
    {
      title: "Header & Navigation",
      items: [
        "Logo and branding",
        "Desktop navigation",
        "Mobile menu",
        "Search",
        "Cart drawer",
      ],
    },
    {
      title: "Homepage Sections",
      items: [
        "Hero banner",
        "Featured collection",
        "Collection cards",
        "Image with text",
        "Marquee",
        "Testimonials",
        "Newsletter",
        "Trust bar",
      ],
    },
    {
      title: "Products",
      items: [
        "Product page",
        "Product gallery",
        "Variants",
        "Quantity selector",
        "Size guide",
        "Quick add",
        "Quick view",
        "Pickup availability",
        "Product recommendations",
        "Complementary products",
      ],
    },
    {
      title: "Collections",
      items: [
        "Collection page",
        "Product grid",
        "Filtering",
        "Sorting",
        "Pagination",
      ],
    },
    {
      title: "Cart & Checkout",
      items: [
        "Cart drawer",
        "Cart page",
        "Quantity updates",
        "Free shipping progress",
        "Checkout button",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HEADER */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7">
          <a
            href="/sectionforge"
            className="text-xl font-bold tracking-tight"
          >
            SECTIONFORGE
          </a>

          <nav className="flex gap-8 text-sm text-gray-400">
            <a
              href="/sectionforge"
              className="transition hover:text-white"
            >
              Overview
            </a>

            <a
              href="/sectionforge/support"
              className="transition hover:text-white"
            >
              Support
            </a>

            <a
              href="/"
              className="transition hover:text-white"
            >
              Portfolio
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="border-b border-white/10 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-blue-500">
            SectionForge 1.0
          </p>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
            Theme Documentation
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-400">
            Everything you need to install, configure and customize
            SectionForge for your Shopify store.
          </p>
        </div>
      </section>

      {/* DOCUMENTATION */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sections.map((section) => (
              <div
                key={section.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-8"
              >
                <h2 className="mb-6 text-xl font-semibold">
                  {section.title}
                </h2>

                <ul className="space-y-4">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="border-b border-white/5 pb-4 text-gray-400 last:border-0 last:pb-0"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTALLATION */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
            Installation
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Install SectionForge
          </h2>

          <div className="mt-10 max-w-3xl space-y-6 text-lg leading-8 text-gray-400">
            <p>
              1. Download the SectionForge theme ZIP file.
            </p>

            <p>
              2. Open your Shopify Admin and go to Online Store →
              Themes.
            </p>

            <p>
              3. Select Add theme → Upload zip file.
            </p>

            <p>
              4. Upload the SectionForge ZIP package.
            </p>

            <p>
              5. Preview the theme before publishing it to your store.
            </p>

            <p>
              6. Open the theme editor and customize the sections,
              colors, content and navigation for your brand.
            </p>
          </div>
        </div>
      </section>

      {/* SUPPORT */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-white/[0.03] p-10 md:p-14">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
            Need Help?
          </p>

          <h2 className="text-3xl font-bold md:text-5xl">
            SectionForge Support
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Need help installing or configuring SectionForge?
            Visit the support page for assistance.
          </p>

          <a
            href="/sectionforge/support"
            className="mt-8 inline-block rounded-xl bg-white px-7 py-4 font-semibold text-black transition hover:scale-105"
          >
            Get Support
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-gray-500">
        © 2026 SectionForge. All rights reserved.
      </footer>
    </main>
  );
}