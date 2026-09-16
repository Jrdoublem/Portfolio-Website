import { ArrowUpRight, GraduationCap, Code2, Radio } from 'lucide-react';
import { Reveal, SectionHeading } from './Shared';

export default function About() {
  return <section id="about" className="section-shell section"><Reveal><SectionHeading number="01" label="A LITTLE ABOUT ME" title={<>Curious mind.<br/>Practical approach.</>} />
    <div className="about-grid"><div className="about-copy"><p>I’m a fourth-year Computer Engineering student at Sripatum University, bringing together <em>frontend development</em>, <em>IoT systems</em>, and a hands-on approach to problem solving.</p><p>From an industry-partnered energy audit system to award-winning engineering research, I enjoy turning what I learn into practical projects—with a team, a purpose, and room to improve.</p><a className="text-link" href="#education">More about my education <ArrowUpRight size={16}/></a></div>
    <div className="about-facts"><div><GraduationCap/><span>SRIPATUM UNIVERSITY<strong>Computer Engineering</strong></span></div><div><span className="gpa">3.94<small>/ 4.00</small></span><span className="fact-note">Cumulative GPA</span></div><div className="about-focus"><span><Code2 size={17}/> Frontend</span><span><Radio size={17}/> IoT systems</span></div></div></div>
  </Reveal></section>;
}
