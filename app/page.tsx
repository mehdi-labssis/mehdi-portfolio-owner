import { ArrowUpRight, Code2, Layers3, ShoppingBag } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function Home() {
  return <><SiteHeader/><main>
    <section className="home-hero"><p className="hero-kicker">Morocco · Working worldwide</p><h1>I build digital<br/>experiences that<br/><em>feel alive.</em></h1><div className="hero-bottom"><p>Shopify developer and front-end builder creating distinctive commerce, brand and community products.</p><a className="round-link" href="/projects" aria-label="See projects"><ArrowUpRight/></a></div><div className="hero-index">PORTFOLIO / 2026</div></section>
    <section className="home-work"><div className="section-heading"><p>Selected work</p><h2>Recent projects</h2><a href="/projects">View all 06 <ArrowUpRight size={16}/></a></div><div className="home-projects">{projects.slice(0,3).map(project => <ProjectCard project={project} key={project.slug}/>)}</div></section>
    <section className="home-about"><div><p className="eyebrow">What I do</p><h2>Design sense.<br/>Technical focus.<br/><em>Business purpose.</em></h2></div><div className="service-stack"><article><Code2/><h3>Front-end</h3><p>Responsive interfaces built with modern JavaScript, React and Next.js.</p></article><article><ShoppingBag/><h3>Shopify</h3><p>Custom themes, Liquid systems and conversion-focused storefront journeys.</p></article><article><Layers3/><h3>Product design</h3><p>Clear digital identities, polished interaction and consistent experiences.</p></article><a href="/about">More about my approach <ArrowUpRight size={17}/></a></div></section>
    <section className="home-cta"><p>Have a project in mind?</p><h2>Let&apos;s make it <em>real.</em></h2><a href="/contact">Start a conversation <ArrowUpRight/></a></section>
  </main><SiteFooter/></>;
}
