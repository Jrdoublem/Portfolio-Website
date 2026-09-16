import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Award, X, Radio, FileText, Activity } from 'lucide-react';
import { projects } from '../data/portfolio';
import { Reveal, SectionHeading, Tags } from './Shared';
import { usePreferences } from '../i18n';

export function ProjectCard({ project, onOpen }) {
  const { tr } = usePreferences();
  return <article className={`project-card ${project.featured ? 'featured-project' : ''}`}>
    <div className="project-image"><img src={project.image} alt={tr(project.imageAlt)} loading="lazy" width="1200" height="750"/><span className="image-label">{project.featured ? tr('FEATURED PROJECT') : tr(project.category)}</span><span className="project-number">{project.number}</span></div>
    <div className="project-body"><div className="project-meta"><span>{tr(project.category)}</span><span>{project.year}</span></div><h3>{project.title}</h3>{project.subtitle && <p className="project-subtitle">{tr(project.subtitle)}</p>}<p className="project-description">{tr(project.description)}</p><Tags items={project.tags}/>
    {project.featured && <div className="project-impact"><span><Radio size={16}/> {tr('IoT system')}</span><span><Activity size={16}/> {tr('Real-time alerts')}</span><span><FileText size={16}/> {tr('Research')}</span></div>}
    {project.awards.length > 0 && <div className="project-award"><Award size={16}/><span>{project.featured ? tr('3 recognitions across innovation & research') : tr(project.awards[0])}</span></div>}
    <button className="project-details" onClick={() => onOpen(project)} aria-label={`${tr('View details')} ${project.title}`}>{tr('View details')} <ArrowUpRight size={18}/></button></div>
  </article>;
}

export function ProjectModal({ project, onClose }) {
  const { tr } = usePreferences();
  const dialog = useRef(null);
  useEffect(() => {
    const el = dialog.current;
    if (!project) return;
    const previousFocus = document.activeElement;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    el.showModal();
    return () => { el.close(); document.body.style.overflow = oldOverflow; previousFocus?.focus(); };
  }, [project]);
  return <dialog ref={dialog} className="project-modal" aria-labelledby="project-dialog-title" onCancel={onClose} onClick={e => { if (e.target === e.currentTarget) { const r = e.currentTarget.getBoundingClientRect(); if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) onClose(); } }}>
    {project && <><button autoFocus className="modal-close" aria-label={tr('Close project details')} onClick={onClose}><X size={22}/></button><img className="modal-image" src={project.image} alt={tr(project.imageAlt)}/><div className="modal-content"><p className="eyebrow">{tr(project.category)} / {project.year}</p><h2 id="project-dialog-title">{project.title}</h2><p>{tr(project.description)}</p><h3>{tr('My role')}</h3><p>{tr(project.role)}</p><h3>{tr('Key contribution')}</h3><p>{tr(project.contribution)}</p><h3>{tr('Project areas')}</h3><Tags items={project.tags}/>{project.awards.length > 0 && <><h3>{tr('Recognition')}</h3><ul className="modal-awards">{project.awards.map(award => <li key={award}><Award size={19}/>{tr(award)}</li>)}</ul></>}</div></>}
  </dialog>;
}

export default function Projects() {
  const { tr } = usePreferences();
  const [selected, setSelected] = useState(null);
  return <section id="projects" className="section-shell section"><Reveal><SectionHeading number="02" label={tr('SELECTED WORK')} title={<>{tr('Ideas, engineered')}<br/>{tr('into something real.')}</>} text={tr('A selection of industry collaborations, connected systems, and hands-on engineering.')}/></Reveal><div className="projects-grid">{projects.map((project, i) => <Reveal key={project.id} className={project.featured ? 'featured-wrap' : ''} delay={i % 2 * .08}><ProjectCard project={project} onOpen={setSelected}/></Reveal>)}</div><ProjectModal project={selected} onClose={() => setSelected(null)}/></section>;
}
