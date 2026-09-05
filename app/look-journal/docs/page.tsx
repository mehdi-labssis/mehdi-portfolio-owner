import Link from "next/link";
import styles from "../look-journal.module.css";

export const metadata = {
  title: "Look Journal Documentation",
  description:
    "Official documentation for installing, configuring, and using the Look Journal Shopify theme.",
};

const sections = [
  {
    id: "getting-started",
    eyebrow: "01",
    title: "Getting started",
    body: [
      "Look Journal is built for fashion, editorial and visual-first commerce. Start by uploading the theme to Shopify, then open the Theme Editor to connect your store content.",
      "Before customizing layouts, make sure your products, collections, navigation menus and store policies already exist in Shopify.",
    ],
    steps: [
      "In Shopify Admin, go to Online Store → Themes.",
      "Upload the Look Journal theme ZIP.",
      "Open Customize.",
      "Assign your main navigation menu in Header settings.",
      "Review the homepage, product and collection templates before publishing.",
    ],
  },
  {
    id: "header-navigation",
    eyebrow: "02",
    title: "Header & navigation",
    body: [
      "The header reads the menu selected in Shopify. Menu labels and links are controlled from Shopify Admin, so you can change navigation without editing code.",
    ],
    bullets: [
      "Add or rename links from Content → Menus.",
      "Nested links are supported for multi-level navigation.",
      "Upload a logo or use the store name as the brand mark.",
      "Search and cart remain icon-based to keep the header visually clean.",
      "Sticky header behavior can be enabled or disabled from the Theme Editor.",
    ],
  },
  {
    id: "homepage",
    eyebrow: "03",
    title: "Homepage",
    body: [
      "The homepage is designed as an editorial shopping flow. Build it from campaign-led sections, product edits, visual stories and shoppable looks.",
    ],
    bullets: [
      "Use the campaign hero for the main visual story.",
      "Connect product or collection references where supported.",
      "Keep section order intentional: campaign → edit → products → story → fit.",
      "Use image and video blocks selectively to protect performance.",
      "Check the mobile layout after every major content change.",
    ],
  },
  {
    id: "product-page",
    eyebrow: "04",
    title: "Product page",
    body: [
      "The product template combines product information with fit, story and cross-selling tools. Product data should come from Shopify products and metafields whenever possible.",
    ],
    bullets: [
      "Product media supports images and compatible rich media.",
      "Variant availability updates with the selected option.",
      "Size guide and fit information can be shown where configured.",
      "Complete the Look can connect complementary products.",
      "Add to Bag uses the cart drawer when enabled.",
    ],
  },
  {
    id: "collection-page",
    eyebrow: "05",
    title: "Collection page",
    body: [
      "Collections support standard merchandising controls alongside editorial content. Use them to mix product discovery with campaign storytelling.",
    ],
    bullets: [
      "Filters use Shopify's available storefront filters.",
      "Sorting follows Shopify collection sorting options.",
      "Editorial blocks can interrupt the grid with campaign imagery or stories.",
      "Product cards can expose quick purchase actions where appropriate.",
      "Always test collections with sold-out products, long titles and different image ratios.",
    ],
  },
  {
    id: "looks-campaigns",
    eyebrow: "06",
    title: "Looks & campaigns",
    body: [
      "Look Journal includes dedicated experiences for complete looks and campaign storytelling. These pages are intended to connect editorial content directly to products.",
    ],
    bullets: [
      "Use Look pages for styled outfits and grouped product discovery.",
      "Use Campaign pages for long-form visual stories with shoppable chapters.",
      "Keep each campaign focused on one collection or launch idea.",
      "Do not use false urgency, fake inventory messages or misleading countdowns.",
    ],
  },
  {
    id: "search-cart",
    eyebrow: "07",
    title: "Search & cart",
    body: [
      "Predictive search begins as the shopper types and can surface products, collections, pages and editorial content. The cart drawer keeps shoppers in context while editing their bag.",
    ],
    bullets: [
      "Search can be opened from the header icon.",
      "Predictive results begin from the first typed character.",
      "The cart drawer supports quantity updates and item removal.",
      "The full cart page remains available when a shopper chooses to view it.",
    ],
  },
  {
    id: "theme-editor",
    eyebrow: "08",
    title: "Theme Editor",
    body: [
      "Look Journal is intended to be configured from Shopify's Theme Editor without code. Use global theme settings for site-wide design decisions and section settings for local layout changes.",
    ],
    bullets: [
      "Set typography and shared visual choices globally.",
      "Use section settings for layout, spacing and content references.",
      "Avoid duplicating too many heavy sections on one page.",
      "Preview desktop and mobile before publishing changes.",
    ],
  },
  {
    id: "mobile-accessibility",
    eyebrow: "09",
    title: "Mobile & accessibility",
    body: [
      "Always review key templates on mobile after changing content. Navigation, search, product actions and cart behavior are designed to remain usable with keyboard and touch input.",
    ],
    bullets: [
      "Use meaningful image alt text.",
      "Keep button and text contrast readable.",
      "Avoid placing essential information only inside images.",
      "Test menus, drawers and forms with keyboard navigation.",
      "Keep product titles and descriptions concise where possible.",
    ],
  },
  {
    id: "troubleshooting",
    eyebrow: "10",
    title: "Troubleshooting",
    body: [
      "If something does not look correct, first confirm that the relevant Shopify resource is connected and that the section has the required content.",
    ],
    bullets: [
      "Menu missing: reselect the Main menu in Header settings.",
      "Product unavailable: check inventory and variant availability in Shopify Admin.",
      "Collection looks empty: confirm products are assigned and active.",
      "Search has no suggestions: confirm searchable products are active and available to the Online Store sales channel.",
      "Cart does not open: refresh the preview and confirm the latest theme version is installed.",
    ],
  },
];

export default function LookJournalDocsPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div>
            <p className={styles.kicker}>LOOK JOURNAL</p>
            <h1 className={styles.heroTitle}>Theme documentation</h1>
            <p className={styles.heroText}>
              Setup, customization and merchant guidance for Look Journal.
            </p>
          </div>

          <div className={styles.heroActions}>
            <Link className={styles.primaryButton} href="/look-journal/support">
              Contact support
            </Link>
            <a className={styles.secondaryButton} href="#getting-started">
              Start setup
            </a>
          </div>
        </div>
      </section>

      <div className={styles.docsShell}>
        <aside className={styles.sidebar} aria-label="Documentation sections">
          <div className={styles.sidebarCard}>
            <p className={styles.sidebarLabel}>CONTENTS</p>
            <nav>
              {sections.map((section) => (
                <a key={section.id} href={`#${section.id}`}>
                  {section.title}
                </a>
              ))}
            </nav>
          </div>

          <div className={styles.sidebarNote}>
            <p className={styles.sidebarLabel}>SUPPORT</p>
            <p>
              Need help with a store-specific issue? Send a support request with
              your store URL and theme version.
            </p>
            <Link href="/look-journal/support">Open support form →</Link>
          </div>
        </aside>

        <article className={styles.docsContent}>
          <section className={styles.introCard}>
            <p className={styles.sectionEyebrow}>BEFORE YOU BEGIN</p>
            <h2>Prepare the store first</h2>
            <p>
              Look Journal uses Shopify products, collections, menus, inventory,
              policies and theme settings. Build those store resources first,
              then connect them inside the Theme Editor.
            </p>
          </section>

          {sections.map((section) => (
            <section
              className={styles.docSection}
              id={section.id}
              key={section.id}
            >
              <div className={styles.sectionHeader}>
                <span>{section.eyebrow}</span>
                <h2>{section.title}</h2>
              </div>

              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              {section.steps && (
                <ol className={styles.steps}>
                  {section.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              )}

              {section.bullets && (
                <ul className={styles.bullets}>
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section className={styles.ctaCard}>
            <div>
              <p className={styles.sectionEyebrow}>LOOK JOURNAL SUPPORT</p>
              <h2>Still need help?</h2>
              <p>
                Send the store URL, theme version and a clear description of the
                issue so the request can be reviewed efficiently.
              </p>
            </div>

            <Link className={styles.primaryButton} href="/look-journal/support">
              Submit a request
            </Link>
          </section>
        </article>
      </div>
    </main>
  );
}
