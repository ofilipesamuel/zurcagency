// Zurc — shell global: navegação e rotas são separadas das páginas para permitir crescimento.
import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { site } from "./data/site";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import ProjectCase from "./pages/ProjectCase";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function Header() {
  const [location, setLocation] = useLocation();
  const isHome = location === "/";
  const [open, setOpen] = React.useState(false);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  const navigate = (href: string) => { setOpen(false); setLocation(href); };
  return <header className="site-header"><div className="container nav-inner">
    <button className="brand" onClick={() => navigate("/")} aria-label="Ir para o início"><span className="brand-symbol" aria-hidden="true"><span /><span /><b /></span><span className="brand-wordmark">ZURC <span>AGENCY</span></span></button>
    <nav className="desktop-nav" aria-label="Navegação principal">{site.navigation.map((item) => <a key={item.href} href={item.href} onClick={(event) => { if (item.href.startsWith("/#") && isHome) return; event.preventDefault(); navigate(item.href); }}>{item.label}</a>)}</nav>
    <a className="button button-red nav-cta" href="/contato" onClick={(event) => { event.preventDefault(); navigate("/contato"); }}>Falar com a Zurc <ArrowUpRight size={15} /></a>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Fechar menu" : "Abrir menu"}><span /><span /></button>
  </div>{open && <nav id="mobile-nav" className="mobile-nav" aria-label="Navegação mobile">{site.navigation.map((item) => <a key={item.href} href={item.href} onClick={(event) => { event.preventDefault(); navigate(item.href); }}>{item.label}</a>)}<a className="button button-red" href="/contato" onClick={(event) => { event.preventDefault(); navigate("/contato"); }}>Falar com a Zurc <ArrowUpRight size={15} /></a></nav>}</header>;
}

function Footer() { return <footer className="site-footer"><div className="container footer-top"><div><div className="eyebrow"><i /> ZURC AGENCY</div><p>Design, tecnologia e clareza<br />para problemas reais.</p></div><div className="footer-links"><a href="/servicos">Serviços</a><a href="/projetos">Projetos</a><a href="/sobre">Sobre</a><a href="/contato">Contato</a><a href="mailto:contato@zurc.agency">Email</a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Zurc Agency</span><span>TECNOLOGIA SEM RUÍDO.</span></div></footer>; }

function App() { return <><Header /><main><Switch><Route path="/" component={Home} /><Route path="/servicos" component={Services} /><Route path="/projetos" component={Projects} /><Route path="/projetos/:slug" component={ProjectCase} /><Route path="/sobre" component={About} /><Route path="/contato" component={Contact} /><Route component={NotFound} /></Switch></main><Footer /></>; }

import React from "react";
export default App;
