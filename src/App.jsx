import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Awards from './components/Awards';
import Education from './components/Education';
import Activities from './components/Activities';
import Certifications from './components/Certifications';
import Contact, { Footer } from './components/Contact';

export default function App() {
  return <><a href="#main-content" className="skip-link">Skip to content</a><Navbar /><main id="main-content"><Hero /><About /><Projects /><Skills /><Experience /><Awards /><Education /><Activities /><Certifications /><Contact /></main><Footer /></>;
}
