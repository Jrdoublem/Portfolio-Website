import { ShieldCheck, BadgeCheck } from 'lucide-react';
import { certifications } from '../data/portfolio';
import { Reveal, SectionHeading } from './Shared';
import { usePreferences } from '../i18n';

export default function Certifications() {
  const { tr } = usePreferences();
  return <section id="certificates" className="section-shell section"><Reveal><SectionHeading number="08" label={tr('CONTINUOUS LEARNING')} title={tr('Credentials & certifications.')}/><div className="certificates-grid">{certifications.map(cert => {const Icon=cert.icon==='shield'?ShieldCheck:BadgeCheck;return <article className="certificate-card" key={cert.title}><Icon size={28}/><div><h3>{tr(cert.title)}</h3><p>{tr(cert.issuer)}</p></div><span>{cert.year}</span></article>;})}</div></Reveal></section>;
}
