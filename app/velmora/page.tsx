import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";

const checkoutUrl = "https://mehdi-labs-store.lemonsqueezy.com/checkout/buy/52788199-ff00-4c3d-a843-ad715a0c8de4";
const demoUrl = "https://lunara-demo-bnocapgl.myshopify.com/?pb=0";

const features = [
  ["Editorial storefront", "A fashion-led visual system with strong typography, generous composition and premium product storytelling."],
  ["Mobile-first commerce", "Responsive navigation, product layouts and shopping interactions designed to feel natural on every screen."],
  ["Built for Shopify", "Online Store 2.0 sections, Liquid architecture and merchant-friendly controls inside the Shopify theme editor."],
  ["Conversion essentials", "Product discovery, collection merchandising, predictive search and cart interactions built into the experience."],
];

export default function VelmoraPage() {
  return <main className="velmora-page">
    <section className="velmora-hero">
      <div className="velmora-hero-top"><a href="/projects"><ArrowLeft size={16}/> All projects</a><span>Premium Shopify theme · v1.0.1</span></div>
      <div className="velmora-hero-copy">
        <p>Made for fashion with a point of view.</p><h1>VELMORA</h1>
        <div><p>An editorial Shopify theme for independent labels, fashion boutiques and modern lifestyle stores.</p><strong>$49 <small>USD · one-time payment</small></strong></div>
      </div>
      <div className="velmora-actions"><a className="velmora-buy" href={checkoutUrl} target="_blank" rel="noreferrer">Purchase Velmora <ArrowUpRight size={18}/></a><a className="velmora-demo" href={demoUrl} target="_blank" rel="noreferrer">View live demo <ArrowRight size={18}/></a></div>
      <img className="velmora-hero-image" src="/images/velmora/hero.png" alt="Velmora fashion Shopify theme homepage" />
    </section>
    <section className="velmora-intro"><p className="eyebrow">A considered commerce system</p><h2>Designed to look distinctive.<br/><em>Built to sell clearly.</em></h2><p>Velmora pairs a high-fashion editorial direction with the familiar shopping patterns customers expect. Merchants get a flexible foundation without sacrificing visual identity.</p></section>
    <section className="velmora-gallery">
      <figure><img src="/images/velmora/collection.png" alt="Velmora editorial collection section"/><figcaption>Curated collection storytelling</figcaption></figure>
      <figure><img src="/images/velmora/shop.png" alt="Velmora product collection grid"/><figcaption>Clear product discovery</figcaption></figure>
      <figure className="wide"><img src="/images/velmora/product.png" alt="Velmora Shopify product page"/><figcaption>Premium product presentation</figcaption></figure>
    </section>
    <section className="velmora-features"><div><p className="eyebrow">What is included</p><h2>A strong starting point for a serious fashion store.</h2></div><div className="velmora-feature-list">{features.map(([title,copy], index) => <article key={title}><span>0{index+1}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></section>
    <section className="velmora-package"><div><p className="eyebrow">Your purchase</p><h2>Everything you need to launch.</h2></div><ul><li><Check size={18}/> Installable Shopify theme ZIP</li><li><Check size={18}/> Setup and customization documentation</li><li><Check size={18}/> Changelog and license information</li><li><Check size={18}/> Use on one Shopify store</li></ul><p className="velmora-note">Demo imagery and store products are shown for presentation and are not included in the download.</p></section>
    <section className="velmora-cta"><p>Velmora 1.0.1 · Immediate digital delivery</p><h2>Give your store<br/><em>a point of view.</em></h2><div><a href={checkoutUrl} target="_blank" rel="noreferrer">Buy now for $49 <ArrowUpRight size={20}/></a><a href="mailto:mehdilabssis@gmail.com">Questions? Contact support</a></div></section>
  </main>;
}

