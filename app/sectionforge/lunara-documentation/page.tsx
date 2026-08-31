export default function LunaraDocumentation() {
  const sections = [
    {
      title: "Getting Started",
      items: [
        "Theme installation",
        "Theme editor basics",
        "Navigation setup",
        "Store configuration",
        "Theme settings",
      ],
    },
    {
      title: "Header & Navigation",
      items: [
        "Logo and branding",
        "Desktop navigation",
        "Mobile menu",
        "Instant search",
        "Cart drawer",
      ],
    },
    {
      title: "Homepage",
      items: [
        "Hero section",
        "Featured products",
        "Shop by mood",
        "Shop the look",
        "Beauty routine",
        "Gift concierge",
      ],
    },
    {
      title: "Products",
      items: [
        "Product page",
        "Product gallery",
        "Image zoom",
        "Variants",
        "Color options",
        "Quantity selector",
        "Size guide",
        "Add to cart",
        "Related products",
      ],
    },
    {
      title: "Collections & Search",
      items: [
        "Collection page",
        "Product grid",
        "Filtering",
        "Sorting",
        "Pagination",
        "Search results",
        "Instant product suggestions",
      ],
    },
    {
      title: "Cart & Storefront",
      items: [
        "Cart drawer",
        "Cart page",
        "Quantity updates",
        "Responsive mobile layout",
        "Footer",
        "Accessibility basics",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7">
          <a href="/sectionforge" className="text-xl font-bold tracking-tight">
            SECTIONFORGE
          </a>

          <nav className="flex gap-8 text-sm text-gray-400">
            <a href="/sectionforge" className="transition hover:text-white">
              Overview
            </a>

            <a
              href="/sectionforge/documentation"
              className="transition hover:text-white"
            >
              SectionForge Docs
            </a>

            <a
              href="/sectionforge/support"
              className="transition hover:text-white"
            >
              Support
            </a>

            <a href="/" className="transition hover:text-white">
              Portfolio
            </a>
          </nav>
        </div>
      </header>

      <section className="border-b border-white/10 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-pink-400">
            Lunara · Version 2.0.3
          </p>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
            Lunara Theme Documentation
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-400">
            Everything you need to install, configure and customize Lunara
            for your Shopify storefront.
          </p>
        </div>
      </section>

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

      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-pink-400">
            Installation
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Install Lunara
          </h2>

          <div className="mt-10 max-w-3xl space-y-6 text-lg leading-8 text-gray-400">
            <p>1. Download the Lunara theme ZIP package.</p>

            <p>
              2. Open Shopify Admin and go to Online Store → Themes.
            </p>

            <p>
              3. Select Add theme → Upload zip file.
            </p>

            <p>
              4. Upload the Lunara ZIP package.
            </p>

            <p>
              5. Preview the theme before publishing it.
            </p>

            <p>
              6. Open the theme editor and customize colors, typography,
              navigation, homepage sections and product content.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-pink-400">
            Theme Settings
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Customize Lunara
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <h3 className="text-xl font-semibold">Typography</h3>

              <p className="mt-4 leading-7 text-gray-400">
                Choose body and heading fonts, adjust the body font size and
                control the global heading scale.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <h3 className="text-xl font-semibold">Colors</h3>

              <p className="mt-4 leading-7 text-gray-400">
                Customize background, text, accent, highlight, button and form
                colors from the Shopify theme editor.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <h3 className="text-xl font-semibold">Layout</h3>

              <p className="mt-4 leading-7 text-gray-400">
                Configure page width, margins, section spacing and product card
                corner radius.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <h3 className="text-xl font-semibold">Animations</h3>

              <p className="mt-4 leading-7 text-gray-400">
                Enable or disable reveal animations and choose the preferred
                animation style.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-white/[0.03] p-10 md:p-14">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-pink-400">
            Need Help?
          </p>

          <h2 className="text-3xl font-bold md:text-5xl">
            Lunara Support
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Need help installing or configuring Lunara? Visit the SectionForge
            support page for assistance.
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
        © 2026 SectionForge · Lunara Theme · Version 2.0.3
      </footer>
    </main>
  );
}