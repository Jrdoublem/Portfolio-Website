import { ArrowUpRight, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { profile } from '../data/portfolio';
import { Reveal } from './Shared';

export default function Contact() {
  return <section id="contact" className="section-shell contact-section"><Reveal><div className="contact-box"><p className="eyebrow">09 / LET’S CONNECT</p><h2>Let’s build something<br/><span>meaningful.</span></h2><p className="contact-intro">Looking for an engineering intern with curiosity,<br className="desktop-break"/> initiative, and a hands-on mindset? Let’s talk.</p><a href={`mailto:${profile.email}`} className="button primary">Send an email <ArrowUpRight size={18}/></a><div className="contact-details"><a href={`mailto:${profile.email}`}><Mail size={17}/>{profile.email}</a><a href={`tel:${profile.phoneHref}`}><Phone size={17}/>{profile.phone}</a><span><MapPin size={17}/>{profile.location}</span></div></div></Reveal></section>;
}
export function Footer() {
  return <footer className="section-shell footer"><a className="brand" href="#home" aria-label="Back to home">jo<span>.</span></a><div><p>Designed & Built by Jirasudanee</p><span>Computer Engineering Student · © {new Date().getFullYear()}</span></div><a href="#home" className="back-to-top" aria-label="Back to top"><ArrowUp size={19}/></a></footer>;
}
