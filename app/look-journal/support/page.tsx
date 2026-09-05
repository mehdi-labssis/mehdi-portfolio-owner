import Link from "next/link";
import SupportForm from "./SupportForm";
import styles from "../look-journal.module.css";

export const metadata = {
  title: "Look Journal Support",
  description:
    "Contact support for the Look Journal Shopify theme.",
};

export default function LookJournalSupportPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div>
            <p className={styles.kicker}>LOOK JOURNAL</p>
            <h1 className={styles.heroTitle}>Theme support</h1>
            <p className={styles.heroText}>
              Send a clear support request with your store details and theme
              version.
            </p>
          </div>

          <div className={styles.heroActions}>
            <Link className={styles.secondaryButton} href="/look-journal/docs">
              Read documentation
            </Link>
          </div>
        </div>
      </section>

      <div className={styles.supportShell}>
        <section className={styles.supportInfo}>
          <div>
            <p className={styles.sectionEyebrow}>BEFORE SUBMITTING</p>
            <h2>Include enough context</h2>
            <p>
              A precise description helps reproduce the issue faster. Include
              the affected page, the action you took and what happened instead.
            </p>
          </div>

          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <span>01</span>
              <h3>Store URL</h3>
              <p>Provide the Shopify storefront or admin-facing store URL.</p>
            </div>
            <div className={styles.infoCard}>
              <span>02</span>
              <h3>Theme version</h3>
              <p>Copy the version shown in Online Store → Themes.</p>
            </div>
            <div className={styles.infoCard}>
              <span>03</span>
              <h3>Reproduction steps</h3>
              <p>Explain where the issue happens and the steps that trigger it.</p>
            </div>
            <div className={styles.infoCard}>
              <span>04</span>
              <h3>Screenshot</h3>
              <p>Attach a screenshot when it makes the issue easier to identify.</p>
            </div>
          </div>

          <div className={styles.responseNote}>
            <strong>Response time</strong>
            <p>
              Support requests are reviewed within two business days. Complex
              issues can require additional investigation.
            </p>
          </div>
        </section>

        <section className={styles.formCard}>
          <div className={styles.formHeading}>
            <p className={styles.sectionEyebrow}>SUPPORT REQUEST</p>
            <h2>Tell us what happened</h2>
            <p>Fields marked with * are required.</p>
          </div>

          <SupportForm />
        </section>
      </div>
    </main>
  );
}
