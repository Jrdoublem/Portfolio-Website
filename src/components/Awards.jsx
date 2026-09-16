import { Medal, Trophy, FileBadge } from 'lucide-react';
import { awards } from '../data/portfolio';
import { Reveal, SectionHeading } from './Shared';
import { usePreferences } from '../i18n';

const icons = { medal: Medal, trophy: Trophy, paper: FileBadge };
export default function Awards() {
  const { tr } = usePreferences();
  return <section id="awards" className="awards-section"><div className="section-shell section"><Reveal><SectionHeading number="05" label={tr('RECOGNITION')} title={tr('Hard work. Shared achievements.')} text={tr('Recognitions earned together through engineering, innovation, and research.')}/></Reveal><div className="awards-grid">{awards.map((award,i) => { const Icon=icons[award.icon]; return <Reveal key={award.title} delay={i*.05}><article className="award-card"><div className="award-top"><Icon size={28}/><span>{award.year}</span></div><h3>{tr(award.title)}</h3><p>{tr(award.event)}</p><div className="award-project">{tr(award.project)}</div></article></Reveal>; })}</div></div></section>;
}
