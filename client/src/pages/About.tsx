// Zurc — institucional: conteúdo de posicionamento, sem prova social inventada.
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

const principles = [
  ["01", "Clareza antes da velocidade", "Entender o problema é parte da entrega, não uma etapa burocrática."],
  ["02", "Tecnologia com contexto", "Escolhemos ferramentas pela utilidade que criam, não pelo barulho que fazem."],
  ["03", "Precisão que permanece", "Construímos bases que podem ser compreendidas, mantidas e ampliadas."],
];

export default function About() { return <div className="inner-page"><section className="page-hero"><div className="container"><div className="eyebrow"><i /> 03 / SOBRE A ZURC</div><h1>Pensar melhor.<br /><em>Construir certo.</em></h1><p>A Zurc é uma agência digital em fase inicial, criada para transformar problemas reais em soluções digitais claras.</p></div></section><section className="about-manifesto"><div className="container manifesto-grid"><div className="manifesto-number">Z/01</div><div><p className="manifesto-lead">Design, desenvolvimento, automação e IA não são serviços isolados. São ferramentas para dar forma ao que precisa avançar.</p><p>Trabalhamos com negócios que valorizam clareza, parceria e uma relação mais honesta com a tecnologia. Sem promessas infladas. Sem camada desnecessária entre problema e solução.</p></div></div></section><section className="principles"><div className="container"><div className="eyebrow"><i /> PRINCÍPIOS</div><div className="principles-list">{principles.map(([number, title, text]) => <article key={number}><span>{number}</span><div><h2>{title}</h2><p>{text}</p></div></article>)}</div></div></section><section className="work-mode"><div className="container work-grid"><div><div className="eyebrow"><i /> COMO TRABALHAMOS</div><h2>Menos ruído.<br /><em>Mais direção.</em></h2></div><div><p>Começamos pela conversa, passamos pela estrutura e só então escolhemos a ferramenta. A cada etapa, você sabe o que está sendo decidido e por quê.</p><Link className="text-link" href="/contato">Iniciar uma conversa <ArrowUpRight size={16} /></Link></div></div></section></div>; }
