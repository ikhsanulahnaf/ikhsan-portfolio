import React from 'react';
import portfolioContent from './portfolioContent';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar logoName={portfolioContent.logoName} />
      
      <main>
        <Hero content={portfolioContent.hero} />
        <About content={portfolioContent.about} />
        <Skills content={portfolioContent.skills} />
        <Projects content={portfolioContent.projects} />
        <Contact content={portfolioContent.contact} />
      </main>

      <Footer content={portfolioContent.contact} logoName={portfolioContent.logoName} />
    </div>
  );
}

export default App;
