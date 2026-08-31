import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function ContactPage(){return <><SiteHeader/><main className="contact-page"><header><p>Contact / New projects</p><h1>Let&apos;s build<br/>something <em>real.</em></h1></header><section className="contact-grid"><div><p>Tell me about your idea, your business and what you want the website to achieve. I&apos;m open to Shopify, front-end and selected digital product opportunities.</p><div className="contact-detail"><MapPin/> Morocco · Available worldwide</div></div><div className="contact-links"><a href="mailto:mehdilabssis@gmail.com"><span><Mail/>Email</span><b>mehdilabssis@gmail.com</b><ArrowUpRight/></a><a href="https://www.linkedin.com/in/mehdi-labssis-4b695911b/" target="_blank" rel="noreferrer"><span>LinkedIn</span><b>Mehdi Labssis</b><ArrowUpRight/></a></div></section></main><SiteFooter/></>}
