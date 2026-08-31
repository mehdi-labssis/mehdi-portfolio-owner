import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return <article className={`project-card project-${project.color}`}>
    <a href={`/projects/${project.slug}`} className="project-visual" aria-label={`View ${project.title} case study`}>
      {project.image ? <img src={project.image} alt={`${project.title} project preview`} /> : <div className="project-monogram" aria-hidden="true">{project.title.slice(0,2).toUpperCase()}</div>}
      <span className="project-number">{project.number}</span><span className="project-type">{project.type}</span>
    </a>
    <div className="project-copy"><h3>{project.title}</h3><p>{project.intro}</p><a href={`/projects/${project.slug}`}>View case study <ArrowUpRight size={17} /></a></div>
  </article>;
}
