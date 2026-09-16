import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { navigation } from '../data/portfolio';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 24);
      const sections = [...document.querySelectorAll('main section[id]')];
      const current = sections.filter(section => section.getBoundingClientRect().top <= 160).at(-1);
      if (current) setActive(current.id);
    };
    update(); window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  useEffect(() => {
    function close(e) { if (e.key === 'Escape') { setOpen(false); document.getElementById('menu-toggle')?.focus(); } }
    if (open) document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, [open]);
  return <header className={`navbar ${scrolled || open ? 'scrolled' : ''}`}><div className="nav-inner">
    <a className="brand" href="#home" aria-label="Jirasudanee home" onClick={() => setOpen(false)}>jo<span>.</span><span className="brand-slash"> / portfolio</span></a>
    <button id="menu-toggle" className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    <nav id="main-navigation" aria-label="Main navigation" className={open ? 'is-open' : ''}>{navigation.map(label => <a key={label} href={`#${label.toLowerCase()}`} aria-current={active === label.toLowerCase() ? 'location' : undefined} onClick={() => setOpen(false)}>{label}{label === 'Contact' && <ArrowUpRight size={14} />}</a>)}</nav>
  </div></header>;
}
