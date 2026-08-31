"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [["/", "Home"], ["/projects", "Projects"], ["/about", "About"], ["/contact", "Contact"]];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  return <>
    <header className="site-header">
      <a className="wordmark" href="/" aria-label="Mehdi Labssis home">ML<span>.</span></a>
      <nav className="desktop-nav" aria-label="Main navigation">{links.map(([href,label]) => <a href={href} key={href}>{label}</a>)}</nav>
      <a className="availability" href="/contact"><span />Available for work</a>
      <button className="menu-button" onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open}><Menu /></button>
    </header>
    <div className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
      <div className="mobile-menu-top"><a className="wordmark" href="/">ML<span>.</span></a><button onClick={() => setOpen(false)} aria-label="Close menu"><X /></button></div>
      <nav>{links.map(([href,label], index) => <a href={href} key={href} onClick={() => setOpen(false)}><span>0{index+1}</span>{label}</a>)}</nav>
      <div className="mobile-menu-foot"><p>Shopify · Front-end · Product design</p><a href="mailto:mehdilabssis@gmail.com">mehdilabssis@gmail.com</a></div>
    </div>
  </>;
}
