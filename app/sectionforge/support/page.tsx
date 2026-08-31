export default function SectionForgeSupport() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <nav className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
          <a
            href="/sectionforge"
            className="text-2xl font-bold tracking-tight"
          >
            SECTIONFORGE
          </a>

          <div className="flex gap-8 text-gray-400">
            <a
              href="/sectionforge"
              className="transition hover:text-white"
            >
              Overview
            </a>

            <a
              href="/sectionforge/documentation"
              className="transition hover:text-white"
            >
              Documentation
            </a>

            <a
              href="/"
              className="transition hover:text-white"
            >
              Portfolio
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="border-b border-white/10 px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <p className="mb-8 text-sm font-semibold uppercase tracking-[0.4em] text-blue-500">
            SECTIONFORGE 1.0
          </p>

          <h1 className="max-w-5xl text-6xl font-bold tracking-tight md:text-8xl">
            Theme Support
          </h1>

          <p className="mt-10 max-w-3xl text-xl leading-9 text-gray-400">
            Need help with SectionForge? Find documentation, troubleshooting
            guidance and support information for your Shopify theme.
          </p>
        </div>
      </section>

      {/* Support options */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 p-8">
            <p className="mb-5 text-sm uppercase tracking-[0.25em] text-blue-500">
              01
            </p>

            <h2 className="mb-4 text-2xl font-semibold">
              Documentation
            </h2>

            <p className="mb-8 leading-7 text-gray-400">
              Learn how to install, configure and customize SectionForge for
              your Shopify store.
            </p>

            <a
              href="/sectionforge/documentation"
              className="font-semibold transition hover:text-blue-500"
            >
              View Documentation →
            </a>
          </div>

          <div className="rounded-3xl border border-white/10 p-8">
            <p className="mb-5 text-sm uppercase tracking-[0.25em] text-blue-500">
              02
            </p>

            <h2 className="mb-4 text-2xl font-semibold">
              Troubleshooting
            </h2>

            <p className="leading-7 text-gray-400">
              Before contacting support, make sure you are using the latest
              version of SectionForge and review the documentation for common
              setup and customization questions.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 p-8">
            <p className="mb-5 text-sm uppercase tracking-[0.25em] text-blue-500">
              03
            </p>

            <h2 className="mb-4 text-2xl font-semibold">
              Contact Support
            </h2>

            <p className="mb-8 leading-7 text-gray-400">
              Still need help? Contact SectionForge support and include a clear
              description of the issue and the theme version you are using.
            </p>

            <a
              href="mailto:mehdilabssis@gmail.com?subject=SectionForge%20Theme%20Support"
              className="font-semibold transition hover:text-blue-500"
            >
              Contact Support →
            </a>
          </div>
        </div>
      </section>

      {/* Support scope */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="mb-5 text-sm uppercase tracking-[0.3em] text-blue-500">
                Support
              </p>

              <h2 className="text-4xl font-bold md:text-5xl">
                What support covers
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-8 text-gray-400">
              <p>• Theme installation and setup questions</p>
              <p>• SectionForge theme features and settings</p>
              <p>• Theme configuration guidance</p>
              <p>• Issues related to the original SectionForge theme code</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-gray-500 md:flex-row">
          <p>© 2026 SectionForge. All rights reserved.</p>

          <p>Shopify Theme · Version 1.0.0</p>
        </div>
      </footer>
    </main>
  );
}