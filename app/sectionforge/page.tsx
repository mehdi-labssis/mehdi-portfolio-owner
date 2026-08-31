export default function SectionForgePage() {
  const features = [
    "Online Store 2.0",
    "Responsive Design",
    "Product Quick View",
    "Predictive Search",
    "Cart Drawer",
    "Product Recommendations",
    "Localization Ready",
    "Accessibility Focused",
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* NAVIGATION */}
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="/sectionforge" className="text-xl font-bold tracking-tight">
            SECTIONFORGE
          </a>

          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a
              href="/sectionforge/documentation"
              className="transition hover:text-white"
            >
              Documentation
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
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="flex min-h-screen items-center px-6 pt-24">
        <div className="mx-auto w-full max-w-6xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
            Shopify Theme
          </p>

          <h1 className="max-w-5xl text-6xl font-bold leading-[0.95] md:text-8xl">
            Built for modern
            <br />
            commerce.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400 md:text-xl">
            SectionForge is a modern Shopify theme built for performance,
            flexibility and polished shopping experiences across desktop and
            mobile.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="/sectionforge/documentation"
              className="rounded-xl bg-white px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              Documentation
            </a>

            <a
              href="/sectionforge/support"
              className="rounded-xl border border-white/20 px-8 py-4 font-semibold transition hover:border-white hover:bg-white hover:text-black"
            >
              Get Support
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="border-t border-white/10 px-6 py-28">
        <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-500">
              SectionForge
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-5xl">
              A flexible foundation for ambitious stores.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-gray-400">
            <p>
              SectionForge is designed to give merchants the flexibility to
              create professional storefronts without sacrificing usability,
              performance or responsive design.
            </p>

            <p>
              The theme includes modern product experiences, collection tools,
              cart functionality, search, localization support and customizable
              sections designed for real-world Shopify stores.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-t border-white/10 px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-500">
            Features
          </p>

          <h2 className="mb-12 text-4xl font-bold md:text-5xl">
            Built for the complete shopping experience.
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-gray-300"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT */}
      <section className="border-t border-white/10 px-6 py-28">
        <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/5 p-8 md:p-14">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-500">
            Help & Resources
          </p>

          <h2 className="max-w-3xl text-4xl font-bold md:text-5xl">
            Everything you need to build with SectionForge.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Explore theme documentation for setup and customization, or contact
            support if you need help with your SectionForge theme.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/sectionforge/documentation"
              className="rounded-xl bg-white px-7 py-4 font-semibold text-black"
            >
              Read Documentation
            </a>

            <a
              href="/sectionforge/support"
              className="rounded-xl border border-white/20 px-7 py-4 font-semibold"
            >
              Contact Support
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-sm text-gray-500 sm:flex-row">
          <span>© 2026 SectionForge.</span>

          <a href="/" className="transition hover:text-white">
            Built by Mehdi Labssis
          </a>
        </div>
      </footer>
    </main>
  );
}