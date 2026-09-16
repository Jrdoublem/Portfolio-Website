import { Code2, PanelsTopLeft, Database, Cpu, Terminal, Users } from 'lucide-react';
import { skillGroups } from '../data/portfolio';
import { Reveal, SectionHeading, Tags } from './Shared';

const icons = { code: Code2, web: PanelsTopLeft, database: Database, cpu: Cpu, terminal: Terminal, people: Users };
export default function Skills() {
  return <section id="skills" className="section-shell section"><Reveal><SectionHeading number="03" label="MY TOOLKIT" title="Built on a technical foundation." text="From interfaces and databases to circuits and connected hardware."/></Reveal><div className="skills-grid">{skillGroups.map((group,i) => { const Icon=icons[group.icon]; return <Reveal delay={i%3*.06} key={group.title}><article className="skill-card"><Icon className="skill-icon" size={24}/><h3>{group.title}</h3><Tags items={group.items}/></article></Reveal>; })}</div></section>;
}
