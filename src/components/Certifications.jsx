import { ShieldCheck, BadgeCheck } from 'lucide-react';
import { certifications } from '../data/portfolio';
import { Reveal, SectionHeading } from './Shared';

export default function Certifications() {
  return <section id="certificates" className="section-shell section"><Reveal><SectionHeading number="08" label="CONTINUOUS LEARNING" title="Credentials & certifications."/><div className="certificates-grid">{certifications.map(cert => {const Icon=cert.icon==='shield'?ShieldCheck:BadgeCheck;return <article className="certificate-card" key={cert.title}><Icon size={28}/><div><h3>{cert.title}</h3><p>{cert.issuer}</p></div><span>{cert.year}</span></article>;})}</div></Reveal></section>;
}
