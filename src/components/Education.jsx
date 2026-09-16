import { GraduationCap, Award } from 'lucide-react';
import { Reveal, SectionHeading } from './Shared';

export default function Education() {
  return <section id="education" className="section-shell section"><Reveal><SectionHeading number="06" label="EDUCATION" title="Engineering my future."/><article className="education-card"><div className="education-main"><div className="education-icon"><GraduationCap size={30}/></div><div><p className="eyebrow">2023 – PRESENT</p><h3>Bachelor of Engineering</h3><p className="education-major">Computer Engineering</p><p>Sripatum University · Bangkok, Thailand</p><p className="graduation-date">Expected graduation: 2026</p></div></div><div className="education-gpa"><strong>3.94<span>/ 4.00</span></strong><p>CUMULATIVE GPA</p></div><div className="scholarship"><Award size={22}/><p><strong>100% tuition credit fee scholarship</strong><span>Four semesters · Selected as the faculty’s sole recipient</span></p></div></article></Reveal></section>;
}
