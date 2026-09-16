import { experience } from '../data/portfolio';
import { Reveal, SectionHeading, Tags } from './Shared';
import { usePreferences } from '../i18n';

export default function Experience() {
  const { tr } = usePreferences();
  return <section id="experience" className="section-shell section"><Reveal><SectionHeading number="04" label={tr('THE JOURNEY SO FAR')} title={tr('Learning by doing.')}/></Reveal><div className="timeline">{experience.map(item => <Reveal key={item.title}><article className="timeline-item"><div className="timeline-year">{item.year}<span className="timeline-dot"/></div><div className="timeline-content"><p className="timeline-date">{tr(item.date)}</p><h3>{tr(item.title)}</h3><p className="timeline-org">{tr(item.organization)}</p><p className="timeline-description">{tr(item.description)}</p><Tags items={item.tags}/></div></article></Reveal>)}</div></section>;
}
