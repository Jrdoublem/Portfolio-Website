import { ArrowDown, ArrowUpRight, Download, Mail, MapPin, Cpu, Github, Linkedin } from 'lucide-react';
import { profile } from '../data/portfolio';
import { Reveal } from './Shared';
import { usePreferences } from '../i18n';

export default function Hero() {
  const { tr } = usePreferences();
  return <section id="home" className="hero section-shell"><div className="hero-grid" aria-hidden="true" />
    <div className="hero-content"><Reveal><div className="availability"><span /> {tr('Open to internship opportunities')}</div>
      <p className="hero-hello">{tr('Hello, I’m')}</p>
      <h1><span>Jirasudanee</span><span className="surname">Oakkharasinthirawut<span className="name-dot">.</span></span></h1>
      <p className="hero-role">{tr('Computer Engineering Student')}</p>
      <p className="hero-description">{tr('Building practical solutions through software, IoT, and engineering.')}</p>
      <div className="hero-actions"><a href="#projects" className="button primary">{tr('Explore my projects')} <ArrowUpRight size={18} /></a><a href={profile.resume} download className="button secondary"><Download size={17} /> {tr('Download resume')}</a></div>
      <div className="hero-links"><span><MapPin size={15} /> {tr(profile.location)}</span><a href={`mailto:${profile.email}`} aria-label={tr('Email Jirasudanee')}><Mail size={18} /></a>{profile.github && <a href={profile.github} aria-label="GitHub"><Github size={18}/></a>}{profile.linkedin && <a href={profile.linkedin} aria-label="LinkedIn"><Linkedin size={18}/></a>}</div>
    </Reveal></div>
    <Reveal className="hero-visual" delay={0.12}><div className="portrait-frame"><div className="portrait-topline"><span>{tr('THE ENGINEER BEHIND THE CODE')}</span><span>01 — JO</span></div><div className="portrait-image"><img src={profile.portrait} alt={tr('Portrait of Jirasudanee Oakkharasinthirawut')} width="648" height="777" fetchPriority="high" /><div className="portrait-caption"><span>JIRASUDANEE O.</span><span>{tr('COMPUTER ENGINEERING')}</span></div></div><div className="portrait-bottom"><Cpu size={18}/><span>{tr('Software meets the physical world.')}</span></div></div><div className="terminal-card"><div className="terminal-title"><span><i/><i/><i/></span> engineer.config</div><p><span className="code-purple">const</span> engineer = {'{'}</p><p className="code-indent">focus: <span className="code-cyan">["Frontend", "IoT"]</span>,</p><p className="code-indent">mindset: <span className="code-cyan">"Build. Learn. Improve."</span></p><p>{'}'}<span className="cursor">▌</span></p></div></Reveal>
    <div className="hero-bottom"><a href="#projects"><ArrowDown size={15} /> {tr('SCROLL TO EXPLORE')}</a><span>FRONTEND <b>/</b> IoT SYSTEMS <b>/</b> ENGINEERING</span></div>
  </section>;
}
