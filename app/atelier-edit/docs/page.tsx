import type { Metadata } from "next";
import Link from "next/link";
import styles from "../atelier-edit.module.css";

export const metadata: Metadata = {
  title: "Atelier Edit Documentation",
  description:
    "Installation, customization and troubleshooting guide for the Atelier Edit Shopify theme.",
};

const guides = [
  {
    id: "installation",
    title: "Install and preview",
    intro:
      "Prepare your theme in a draft before publishing it to your storefront.",
    steps: [
      "In Shopify admin, open Online Store > Themes.",
      "If you received a theme ZIP, use Import theme > Upload zip file. Select the theme ZIP and upload it.",
      "Open the theme editor for Atelier Edit and use Preview to review your changes.",
      "Add your own products, collections, menus and page content. Demo store content is managed separately from the theme.",
      "Check the homepage, collection, product and cart on desktop and mobile before publishing.",
    ],
  },
  {
    id: "homepage",
    title: "Build your homepage",
    intro:
      "Use the theme editor to arrange the sections that tell your store's story.",
    steps: [
      "Select Home page in the template selector.",
      "Open an existing section to edit its text, images, links and available options.",
      "Use Add section to add content, and drag sections to change their order.",
      "For product or collection sections, select the products or collections you want to display.",
      "Save, then check the storefront preview. Settings can vary between theme versions.",
    ],
  },
  {
    id: "navigation",
    title: "Header, footer and menus",
    intro:
      "Create your navigation in Shopify, then assign it in the theme editor.",
    steps: [
      "Create or edit your store menus in Shopify admin.",
      "Open the Header section and select the menu to display.",
      "Add your logo using the header settings, if you want to replace the store name.",
      "Open Footer to configure its available menus, text and links.",
      "Test navigation links and nested menus on desktop and mobile.",
    ],
  },
  {
    id: "products",
    title: "Products and variants",
    intro:
      "Product titles, descriptions, prices, options and inventory come from Shopify's product editor.",
    steps: [
      "Open Products in Shopify admin and select a product.",
      "Add a title, description, media, pricing and product options.",
      "Assign images to variants when you want the gallery to follow the selected variant.",
      "In the theme editor, select Products > Default product to arrange the product blocks.",
      "Preview available and sold-out variants, then test adding a product to the cart.",
    ],
  },
  {
    id: "media",
    title: "Images, video and 3D",
    intro:
      "Add product media to the product in Shopify admin, then check it in the storefront.",
    steps: [
      "Open the product's Media area to upload images, a supported video or a supported 3D model.",
      "Use the media URL option for supported external videos, such as YouTube.",
      "Reorder media in the product editor to choose the presentation order.",
      "Preview each media item and switch to another image while a video is playing to check playback behavior.",
      "If you use a Featured product section, select the product there and check its media separately.",
    ],
  },
  {
    id: "recommendations",
    title: "Complementary and related products",
    intro:
      "Manage product recommendations with Shopify Search & Discovery.",
    steps: [
      "Open Search & Discovery > Recommendations and select a product.",
      "Add complementary products that customers could purchase with that product, then save.",
      "In the theme editor, open the product template and add the Complementary products section.",
      "Place the section where you want it, configure its heading and product limit, then save.",
      "Manage related product recommendations separately for the More from the edit section. A section can remain hidden when Shopify returns no eligible products.",
    ],
  },
  {
    id: "search",
    title: "Search, filters and sorting",
    intro:
      "Search suggestions help customers find products as they type.",
    steps: [
      "Open storefront search and type a product name to check its suggestions.",
      "Use View all results to open the search results page.",
      "Configure storefront filters in Shopify Search & Discovery.",
      "On a collection or search results page, select the available filters and sorting option, then use Apply where shown.",
      "Use Clear filters to remove active filters. The filters available depend on your catalog and Shopify configuration.",
    ],
  },
  {
    id: "subscriptions",
    title: "Subscriptions and cart",
    intro:
      "Subscription plans are managed by a subscription app, such as Shopify Subscriptions.",
    steps: [
      "Create a subscription plan in your app and assign the relevant products or variants.",
      "Open the product template in the theme editor.",
      "Inside the Product section, add the app's subscription widget block and save.",
      "Preview an eligible product, select the subscription plan and add it to the cart.",
      "Check the selected plan and price in both the cart drawer and cart page. Also test a one-time purchase.",
    ],
  },
  {
    id: "pickup",
    title: "Store pickup",
    intro:
      "Pickup availability depends on your Shopify location, inventory and pickup settings.",
    steps: [
      "Configure pickup for the relevant location in Shopify admin.",
      "Check that the selected variant is stocked at that location.",
      "Verify the location address and the information customers will see.",
      "Preview an eligible product to check its pickup availability.",
      "Review the pickup option at checkout.",
    ],
  },
  {
    id: "gift-cards",
    title: "Gift cards",
    intro:
      "Gift card products can offer recipient details for customers who want to send a gift.",
    steps: [
      "Create a gift card product in Shopify admin and make it available to the online store.",
      "Preview the gift card product using its assigned product template.",
      "Enable the recipient option and enter the recipient details shown in the form.",
      "Add the gift card to the cart and verify the recipient information.",
      "Review your gift card notifications in Shopify before using the feature with customers.",
    ],
  },
  {
    id: "languages",
    title: "Languages and theme text",
    intro:
      "Storefront language is configured separately from the Shopify admin language.",
    steps: [
      "Manage and publish storefront languages in Shopify admin.",
      "Use Translate & Adapt or your translation workflow for product, collection and page content.",
      "Use Edit default theme content for text exposed by the theme's language files.",
      "Check the product page, search, cart and navigation in every published language.",
      "Contact support with the exact text and page URL if a label cannot be translated through the available controls.",
    ],
  },
  {
    id: "updates",
    title: "Updates and troubleshooting",
    intro:
      "Keep a copy of your current theme before installing an update or editing code.",
    steps: [
      "Duplicate your theme before making significant changes.",
      "Review the updated theme as a draft and check its settings, templates and app blocks.",
      "If a feature does not appear, confirm that the correct theme and template are being previewed.",
      "For product issues, check inventory, sales channel availability and the selected variant.",
      "If the issue persists, send support your theme version, store URL, affected page, reproduction steps and a screenshot when helpful.",
    ],
  },
];

export default function AtelierEditDocsPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div>
            <p className={styles.kicker}>ATELIER EDIT</p>
            <h1 className={styles.heroTitle}>Theme documentation</h1>
            <p className={styles.heroText}>
              Set up your store, arrange your content and use the theme's
              shopping features.
            </p>
          </div>
          <div className={styles.heroActions}>
            <Link
              className={styles.secondaryButton}
              href="/atelier-edit/support"
            >
              Contact support
            </Link>
          </div>
        </div>
      </section>

      <div className={styles.docsShell}>
        <aside className={styles.sidebar}>
          <div className={styles.sidebarCard}>
            <p className={styles.sidebarLabel}>ON THIS PAGE</p>
            <nav aria-label="Documentation topics">
              {guides.map((guide) => (
                <a key={guide.id} href={`#${guide.id}`}>
                  {guide.title}
                </a>
              ))}
            </nav>
          </div>
          <div className={styles.sidebarNote}>
            <p>
              Need help with your setup? Include your theme version and the
              affected page when contacting support.
            </p>
            <Link href="/atelier-edit/support">Send a support request</Link>
          </div>
        </aside>

        <div className={styles.docsContent}>
          {guides.map((guide) => (
            <section
              className={styles.docSection}
              id={guide.id}
              key={guide.id}
            >
              <header className={styles.sectionHeader}>
                <h2>{guide.title}</h2>
              </header>
              <p>{guide.intro}</p>
              <ol className={styles.steps}>
                {guide.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}