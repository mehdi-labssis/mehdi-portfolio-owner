import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function ProjectsPage(){return <><SiteHeader/><main className="listing-page"><header className="page-intro"><p>Selected work / 2026</p><h1>Projects with<br/><em>purpose.</em></h1><div><span>06 projects</span><p>Commerce, community and brand experiences designed and built from Morocco.</p></div></header><section className="project-grid">{projects.map(project=><ProjectCard project={project} key={project.slug}/>)}</section></main><SiteFooter/></>}
