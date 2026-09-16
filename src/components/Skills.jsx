import { Code2, PanelsTopLeft, Database, Cpu, Terminal, Users } from 'lucide-react';
import { skillGroups } from '../data/portfolio';
import { Reveal, SectionHeading, Tags } from './Shared';
import { usePreferences } from '../i18n';

const icons = { code: Code2, web: PanelsTopLeft, database: Database, cpu: Cpu, terminal: Terminal, people: Users };
export default function Skills() {
  const { tr } = usePreferences();
  return <section id="skills" className="section-shell section"><Reveal><SectionHeading number="03" label={tr('MY TOOLKIT')} title={tr('Built on a technical foundation.')} text={tr('From interfaces and databases to circuits and connected hardware.')}/></Reveal><div className="skills-grid">{skillGroups.map((group,i) => { const Icon=icons[group.icon]; return <Reveal delay={i%3*.06} key={group.title}><article className="skill-card"><Icon className="skill-icon" size={24}/><h3>{tr(group.title)}</h3><Tags items={group.items}/></article></Reveal>; })}</div></section>;
}
