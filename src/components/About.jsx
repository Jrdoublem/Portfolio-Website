import { ArrowUpRight, GraduationCap, Code2, Radio } from 'lucide-react';
import { Reveal, SectionHeading } from './Shared';
import { usePreferences } from '../i18n';

export default function About() {
  const { tr } = usePreferences();
  return <section id="about" className="section-shell section"><Reveal><SectionHeading number="01" label={tr('A LITTLE ABOUT ME')} title={<>{tr('Curious mind.')}<br/>{tr('Practical approach.')}</>} />
    <div className="about-grid"><div className="about-copy"><p>{tr('I’m a fourth-year Computer Engineering student at Sripatum University, bringing together frontend development, IoT systems, and a hands-on approach to problem solving.')}</p><p>{tr('From an industry-partnered energy audit system to award-winning engineering research, I enjoy turning what I learn into practical projects—with a team, a purpose, and room to improve.')}</p><a className="text-link" href="#education">{tr('More about my education')} <ArrowUpRight size={16}/></a></div>
    <div className="about-facts"><div><GraduationCap/><span>{tr('SRIPATUM UNIVERSITY')}<strong>{tr('Computer Engineering')}</strong></span></div><div><span className="gpa">3.94<small>/ 4.00</small></span><span className="fact-note">{tr('Cumulative GPA')}</span></div><div className="about-focus"><span><Code2 size={17}/> {tr('Frontend')}</span><span><Radio size={17}/> {tr('IoT systems')}</span></div></div></div>
  </Reveal></section>;
}
