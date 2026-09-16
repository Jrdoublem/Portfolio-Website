import { activities } from '../data/portfolio';
import { Reveal, SectionHeading } from './Shared';
import { usePreferences } from '../i18n';

export default function Activities() {
  const { tr } = usePreferences();
  return <section id="activities" className="section-shell section"><Reveal><SectionHeading number="07" label={tr('BEYOND THE CODE')} title={tr('Better, together.')} text={tr('Sharing knowledge, bringing people together, and finding a voice beyond the workbench.')}/></Reveal><div className="activities-grid">{activities.map((activity,i) => <Reveal key={activity.title} delay={i*.07}><article className="activity-card"><div className="activity-image"><img src={activity.image} alt={tr(activity.alt)} loading="lazy" width="800" height="600"/><div className="activity-overlay"><h3>{tr(activity.title)}</h3></div></div><div className="activity-copy"><p className="activity-category">{tr(activity.category)}</p><p>{tr(activity.text)}</p></div></article></Reveal>)}</div></section>;
}
