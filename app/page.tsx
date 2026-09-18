import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Building2, LayoutTemplate, RefreshCw, Target } from "lucide-react";
import { BrowserPreview, Footer, Header } from "./components";
import { concepts, projects, whatsapp } from "./data";

const projectImages:Record<string,string>={"ravyt-digital":"/project-ravyt.png","cerest-tiangua":"/project-cerest.png","capoeira-haute-savoie":"/project-capoeira.png"};

const services=[
  {icon:Building2,title:"Sites Institucionais",text:"Sites profissionais para apresentar empresa, serviços, diferenciais e canais de contato."},
  {icon:Target,title:"Landing Pages",text:"Páginas desenvolvidas para campanhas, serviços, produtos e geração de contatos."},
  {icon:LayoutTemplate,title:"Sites Comerciais",text:"Estruturas digitais pensadas para apresentar produtos, serviços e facilitar oportunidades comerciais."},
  {icon:RefreshCw,title:"Redesign de Sites",text:"Modernização de sites antigos, melhorando aparência, organização, responsividade e experiência."},
];
const steps=["Entendimento do negócio","Estrutura e conteúdo","Direção visual","Desenvolvimento","Revisão e publicação"];

export default function Home(){return <main><Header/>
  <section className="hero"><div className="hero-orbit" aria-hidden="true"><span>MW</span></div><p className="eyebrow">Web design independente · Tianguá, CE</p><h1>Sites profissionais para empresas que querem construir uma presença digital <em>à altura do seu negócio.</em></h1><div className="hero-foot"><p>Sites institucionais, landing pages e experiências digitais desenvolvidas para apresentar seu negócio com mais profissionalismo.</p><div className="actions"><a className="button primary" href={whatsapp} target="_blank" rel="noreferrer">Quero criar meu site <ArrowUpRight size={18}/></a><a className="button secondary" href="#projetos">Ver projetos <ArrowDownRight size={18}/></a></div></div></section>
  <section className="manifest" aria-label="Áreas de atuação"><span>Design</span><i>•</i><span>Estratégia</span><i>•</i><span>Presença digital</span></section>
  <section className="work" id="projetos"><div className="section-heading"><p className="eyebrow dark">01 — Projetos selecionados</p><h2>Trabalho real.<br/>Presença com propósito.</h2></div><div className="project-list">{projects.map((project,index)=><article className={`project project-${project.color}`} key={project.slug}><div className="project-copy"><p>{project.category}</p><h3>{project.title}</h3><p className="project-description">{project.short}</p><Link href={`/cases/${project.slug}`}>Ver case <ArrowUpRight size={18}/></Link></div><BrowserPreview url={project.url} title={project.title} image={projectImages[project.slug]}/><span className="project-number">0{index+1}</span></article>)}</div></section>
  <section className="concepts"><div className="section-heading light"><div><p className="eyebrow">02 — Explorações comerciais</p><h2>Projetos<br/>Conceituais</h2></div><p className="section-note">Conceitos e propostas comerciais desenvolvidos pela Marca WebSites. As empresas apresentadas nesta seção ainda não são clientes.</p></div><div className="concept-grid">{concepts.map(c=><article className={`concept concept-${c.tone}`} key={c.title}><div><span>Projeto conceitual desenvolvido pela Marca WebSites</span><h3>{c.title}</h3><p>{c.description}</p><a href={c.url} target="_blank" rel="noreferrer">Ver projeto <ArrowUpRight size={17}/></a></div><BrowserPreview url={c.url} title={c.title}/></article>)}</div></section>
  <section className="services" id="servicos"><div className="section-heading"><p className="eyebrow dark">03 — O que eu desenvolvo</p><h2>Serviços para transformar presença em percepção.</h2></div><div className="service-grid">{services.map((s,i)=><article key={s.title}><s.icon size={26}/><span>0{i+1}</span><h3>{s.title}</h3><p>{s.text}</p></article>)}</div></section>
  <section className="process"><div className="process-title"><p className="eyebrow">04 — Processo</p><h2>Como<br/>trabalho</h2><p>Um processo direto, colaborativo e organizado para transformar as necessidades do negócio em uma experiência digital clara.</p></div><ol>{steps.map((step,i)=><li key={step}><span>0{i+1}</span><strong>{step}</strong></li>)}</ol></section>
  <section className="about" id="sobre"><div className="portrait-placeholder"><span>MC</span><small>Espaço para foto profissional</small></div><div className="about-copy"><p className="eyebrow dark">05 — Sobre</p><h2>Marcio<br/>Cabral</h2><h3>Web Designer Freelancer e criador da Marca WebSites.</h3><p>Desenvolvo sites profissionais para empresas, instituições e prestadores de serviços. Meu trabalho envolve estruturação de conteúdo, direção visual, desenvolvimento responsivo, experiência do usuário e integração com canais de contato.</p><a href={whatsapp} target="_blank" rel="noreferrer">Conheça meu trabalho <ArrowUpRight size={18}/></a></div></section>
  <Footer/>
</main>}
