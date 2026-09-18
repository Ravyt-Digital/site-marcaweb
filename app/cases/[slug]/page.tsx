import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BrowserPreview, Footer, Header } from "../../components";
import { projects } from "../../data";

const projectImages:Record<string,string>={"ravyt-digital":"/project-ravyt.png","cerest-tiangua":"/project-cerest.png","capoeira-haute-savoie":"/project-capoeira.png"};

export function generateStaticParams(){return projects.map(project=>({slug:project.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const project=projects.find(p=>p.slug===slug);return project?{title:`${project.title} — Case Marca WebSites`,description:project.description}:{}}

export default async function CasePage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const project=projects.find(p=>p.slug===slug);if(!project)notFound();return <main><Header/>
  <section className={`case-hero case-${project.color}`}><Link href="/#projetos" className="back-link"><ArrowLeft size={17}/> Voltar aos projetos</Link><p>{project.category}</p><h1>{project.title}</h1><div><p>{project.description}</p><a className="button case-button" href={project.url} target="_blank" rel="noreferrer">Visitar o site <ArrowUpRight size={18}/></a></div></section>
  <section className="case-overview"><p className="eyebrow dark">O projeto</p><div className="case-columns"><article><span>01</span><h2>Desafio</h2><p>{project.challenge}</p></article><article><span>02</span><h2>Solução</h2><p>{project.solution}</p></article></div></section>
  <section className="case-showcase"><div className="showcase-label"><p className="eyebrow">Experiência desktop</p><p>Uma estrutura ampla para apresentar conteúdo, serviços e caminhos de contato com clareza.</p></div><BrowserPreview url={project.url} title={project.title} image={projectImages[project.slug]}/></section>
  <section className="decisions"><div><p className="eyebrow dark">03 — Estrutura e design</p><h2>Decisões que orientaram o projeto.</h2></div><ol>{project.decisions.map((decision,index)=><li key={decision}><span>0{index+1}</span>{decision}</li>)}</ol></section>
  <section className="mobile-showcase"><div><p className="eyebrow">Experiência mobile</p><h2>Projetado para funcionar bem onde a maioria das visitas acontece.</h2><p>Leitura confortável, navegação simples e ações acessíveis em telas menores.</p></div><BrowserPreview url={project.url} title={`${project.title} no celular`} mobile/></section>
  <Footer/>
</main>}
