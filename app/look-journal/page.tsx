import { ArrowLeft, ArrowRight, ArrowUpRight, Check, KeyRound } from "lucide-react";

const checkoutUrl = "https://mehdi-labs-store.lemonsqueezy.com";
const demoUrl = "https://sectionforge-upsell-dev.myshopify.com/";

const features = [
  ["Editorial storytelling", "Campaign-led layouts, considered typography and flexible visual sections for fashion brands with a clear point of view."],
  ["Mobile-first shopping", "Responsive navigation, product discovery and shopping interactions designed to remain clear and polished on every screen."],
  ["Shopify OS 2.0", "Modular Liquid sections and merchant-friendly controls make the storefront easy to shape from the Shopify theme editor."],
  ["Commerce essentials", "Collection merchandising, predictive search, product presentation and cart interactions are built into the experience."],
];

export default function LookJournalPage() {
  return <main className="velmora-page look-journal-sales-page">
    <section className="velmora-hero">
      <div className="velmora-hero-top"><a href="/projects"><ArrowLeft size={16}/> All projects</a><span>Editorial Shopify theme · v1.0.0</span></div>
      <div className="velmora-hero-copy">
        <p>For fashion brands that lead with story.</p><h1>LOOK JOURNAL</h1>
        <div><p>A refined editorial Shopify theme for fashion labels, boutiques and modern lifestyle stores.</p><strong>$39 <small>USD · one-time payment</small></strong></div>
      </div>
      <div className="velmora-actions"><a className="velmora-buy" href={checkoutUrl} target="_blank" rel="noreferrer">Purchase Look Journal <ArrowUpRight size={18}/></a><a className="velmora-demo" href={demoUrl} target="_blank" rel="noreferrer">View live demo <ArrowRight size={18}/></a></div>
      <p className="look-demo-password"><KeyRound size={15}/> Demo password: <strong>afrewy</strong></p>
      <img className="velmora-hero-image" src="/images/look-journal/home.png" alt="Look Journal editorial Shopify theme homepage" />
    </section>
    <section className="velmora-intro"><p className="eyebrow">Commerce meets editorial direction</p><h2>Quiet in expression.<br/><em>Strong in structure.</em></h2><p>Look Journal gives product-led brands the space to tell a visual story while preserving the clarity, speed and familiar shopping patterns customers expect.</p></section>
    <section className="velmora-gallery">
      <figure><img src="/images/look-journal/hero-detail.png" alt="Look Journal editorial campaign hero"/><figcaption>Immersive campaign storytelling</figcaption></figure>
      <figure><img src="/images/look-journal/collection.png" alt="Look Journal fashion product collection"/><figcaption>Clear fashion merchandising</figcaption></figure>
      <figure className="wide"><img src="/images/look-journal/home.png" alt="Look Journal responsive Shopify storefront"/><figcaption>A complete editorial storefront</figcaption></figure>
    </section>
    <section className="velmora-features"><div><p className="eyebrow">What is included</p><h2>A flexible foundation for a distinctive fashion store.</h2></div><div className="velmora-feature-list">{features.map(([title,copy], index) => <article key={title}><span>0{index+1}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></section>
    <section className="velmora-package"><div><p className="eyebrow">Your purchase</p><h2>Everything required to get started.</h2></div><ul><li><Check size={18}/> Installable Shopify theme ZIP</li><li><Check size={18}/> Setup and customization documentation</li><li><Check size={18}/> Dedicated support page</li><li><Check size={18}/> Use on one Shopify store</li></ul><p className="velmora-note">Demo imagery and store products are shown for presentation and are not included in the download.</p></section>
    <section className="velmora-cta"><p>Look Journal 1.0.0 · Immediate digital delivery</p><h2>Turn your catalog<br/><em>into a journal.</em></h2><div><a href={checkoutUrl} target="_blank" rel="noreferrer">Buy now for $39 <ArrowUpRight size={20}/></a><a href="/look-journal/docs">Read documentation</a><a href="/look-journal/support">Contact support</a></div></section>
  </main>;
}
