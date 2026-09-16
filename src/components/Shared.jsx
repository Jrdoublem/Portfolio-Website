import { motion, useReducedMotion } from 'framer-motion';
import { usePreferences } from '../i18n';

export function Reveal({ children, className = '', delay = 0 }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: 0.5, delay }}>{children}</motion.div>;
}
export function SectionHeading({ number, label, title, text }) {
  return <div className="section-heading"><div><p className="eyebrow"><span>{number} /</span> {label}</p><h2>{title}</h2></div>{text && <p className="section-intro">{text}</p>}</div>;
}
export function Tags({ items }) { const { tr } = usePreferences(); return <div className="tags">{items.map(item => <span key={item}>{tr(item)}</span>)}</div>; }
