import { activities } from '../data/portfolio';
import { Reveal, SectionHeading } from './Shared';

export default function Activities() {
  return <section id="activities" className="section-shell section"><Reveal><SectionHeading number="07" label="BEYOND THE CODE" title="Better, together." text="Sharing knowledge, bringing people together, and finding a voice beyond the workbench."/></Reveal><div className="activities-grid">{activities.map((activity,i) => <Reveal key={activity.title} delay={i*.07}><article className="activity-card"><div className="activity-image"><img src={activity.image} alt={activity.alt} loading="lazy" width="800" height="600"/><div className="activity-overlay"><h3>{activity.title}</h3></div></div><div className="activity-copy"><p className="activity-category">{activity.category}</p><p>{activity.text}</p></div></article></Reveal>)}</div></section>;
}
