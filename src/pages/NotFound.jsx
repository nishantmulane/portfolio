import { Link } from "react-router-dom";
export default function NotFound() { return <section className="not-found page-wrap"><p className="eyebrow">404 · Page not found</p><h1 className="page-title">This page<br/><em>isn’t here.</em></h1><Link className="button button-primary" to="/">Back to home</Link></section>; }
