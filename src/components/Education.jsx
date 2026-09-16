import { GraduationCap, Award } from 'lucide-react';
import { Reveal, SectionHeading } from './Shared';
import { usePreferences } from '../i18n';

export default function Education() {
  const { tr } = usePreferences();
  return <section id="education" className="section-shell section"><Reveal><SectionHeading number="06" label={tr('EDUCATION')} title={tr('Engineering my future.')}/><article className="education-card"><div className="education-main"><div className="education-icon"><GraduationCap size={30}/></div><div><p className="eyebrow">{tr('2023 – PRESENT')}</p><h3>{tr('Bachelor of Engineering')}</h3><p className="education-major">{tr('Computer Engineering')}</p><p>{tr('Sripatum University')} · {tr('Bangkok, Thailand')}</p><p className="graduation-date">{tr('Expected graduation: 2026')}</p></div></div><div className="education-gpa"><strong>3.94<span>/ 4.00</span></strong><p>{tr('CUMULATIVE GPA')}</p></div><div className="scholarship"><Award size={22}/><p><strong>{tr('100% tuition credit fee scholarship')}</strong><span>{tr('Four semesters · Selected as the faculty’s sole recipient')}</span></p></div></article></Reveal></section>;
}
