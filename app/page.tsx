
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import dynamic from 'next/dynamic';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';

const Certifications = dynamic(() => import('./components/Certifications'), {
  loading: () => (
    <section id="certifications" className="fade-in" suppressHydrationWarning>
      <div className="certifications-grid" style={{ minHeight: '300px' }}>
        {[1, 2, 3].map(i => (
          <article key={i} className="certification-card" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '12px' }}>
            <div style={{ height: '180px', background: 'rgba(88,166,255,0.1)', borderRadius: '8px 8px 0 0' }} />
            <div style={{ padding: '20px' }}>
              <div style={{ height: '20px', width: '60%', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', marginBottom: '12px' }} />
              <div style={{ height: '16px', width: '80%', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }} />
            </div>
          </article>
        ))}
      </div>
    </section>
  ),
});

const Projects = dynamic(() => import('./components/Projects'), {
  loading: () => (
    <section id="projects" className="fade-in" suppressHydrationWarning>
      <div className="spotlight-grid" style={{ minHeight: '400px' }}>
        {[1, 2].map(i => (
          <article key={i} className="spotlight-card" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '12px', minHeight: '400px' }}>
            <div style={{ height: '200px', background: 'rgba(88,166,255,0.1)', borderRadius: '8px 8px 0 0' }} />
            <div style={{ padding: '24px' }}>
              <div style={{ height: '24px', width: '70%', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', marginBottom: '12px' }} />
              <div style={{ height: '16px', width: '90%', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', marginBottom: '8px' }} />
              <div style={{ height: '16px', width: '85%', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }} />
            </div>
          </article>
        ))}
      </div>
    </section>
  ),
});

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
