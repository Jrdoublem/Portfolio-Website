import { Medal, Trophy, FileBadge } from 'lucide-react';
import { awards } from '../data/portfolio';
import { Reveal, SectionHeading } from './Shared';

const icons = { medal: Medal, trophy: Trophy, paper: FileBadge };
export default function Awards() {
  return <section id="awards" className="awards-section"><div className="section-shell section"><Reveal><SectionHeading number="05" label="RECOGNITION" title="Hard work. Shared achievements." text="Recognitions earned together through engineering, innovation, and research."/></Reveal><div className="awards-grid">{awards.map((award,i) => { const Icon=icons[award.icon]; return <Reveal key={award.title} delay={i*.05}><article className="award-card"><div className="award-top"><Icon size={28}/><span>{award.year}</span></div><h3>{award.title}</h3><p>{award.event}</p><div className="award-project">{award.project}</div></article></Reveal>; })}</div></div></section>;
}
