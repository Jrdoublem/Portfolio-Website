import { experience } from '../data/portfolio';
import { Reveal, SectionHeading, Tags } from './Shared';

export default function Experience() {
  return <section id="experience" className="section-shell section"><Reveal><SectionHeading number="04" label="THE JOURNEY SO FAR" title="Learning by doing."/></Reveal><div className="timeline">{experience.map(item => <Reveal key={item.title}><article className="timeline-item"><div className="timeline-year">{item.year}<span className="timeline-dot"/></div><div className="timeline-content"><p className="timeline-date">{item.date}</p><h3>{item.title}</h3><p className="timeline-org">{item.organization}</p><p className="timeline-description">{item.description}</p><Tags items={item.tags}/></div></article></Reveal>)}</div></section>;
}
