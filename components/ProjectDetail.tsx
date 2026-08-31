import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

export default function ProjectDetail({ project }: { project: Project }) {
  return <main className={`detail-page detail-${project.color}`}>
    <section className="detail-hero"><a className="back-link" href="/projects"><ArrowLeft size={16}/> All projects</a><p>{project.number} / Selected work</p><h1>{project.title}</h1><div className="detail-lead"><span>{project.type}</span><p>{project.intro}</p></div></section>
    <section className="detail-visual">{project.image ? <img src={project.image} alt={`${project.title} project preview`} /> : <div>{project.title.slice(0,2).toUpperCase()}</div>}</section>
    <section className="detail-story"><div><p className="eyebrow">Overview</p><h2>{project.description}</h2></div><div className="story-grid"><article><span>01</span><h3>The challenge</h3><p>{project.challenge}</p></article><article><span>02</span><h3>The solution</h3><p>{project.solution}</p></article></div></section>
    <section className="detail-meta"><div><p className="eyebrow">Capabilities</p><div className="detail-tags">{project.stack.map(item => <span key={item}>{item}</span>)}</div></div>{project.live && <a className="primary-button" href={project.live} target={project.live.startsWith("http") ? "_blank" : undefined} rel={project.live.startsWith("http") ? "noreferrer" : undefined}>{project.liveLabel}<ArrowUpRight size={18}/></a>}</section>
    <section className="next-project"><p>Ready to build something focused?</p><a href="/contact">Start a conversation <ArrowUpRight /></a></section>
  </main>;
}
