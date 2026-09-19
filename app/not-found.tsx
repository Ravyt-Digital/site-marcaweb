import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "./components";

export const metadata: Metadata = { title: "Página não encontrada", alternates: { canonical: null } };

export default function NotFound() { return <><Header/><main id="conteudo" className="not-found-page"><p className="eyebrow">Erro 404</p><h1>Esta página não foi encontrada.</h1><p>O endereço pode ter mudado ou não existir. Você pode voltar ao início ou conhecer os projetos publicados.</p><div className="actions"><Link className="button primary" href="/">Voltar ao início</Link><Link className="button secondary" href="/#projetos">Ver projetos</Link></div></main><Footer/></>; }
