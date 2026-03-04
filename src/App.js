import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Certifications from './components/Certifications'; // Add this
import Experiences from './components/Experiences';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Experiences />
      <Projects />
      <Certifications />
      <TechStack />
      <About />
      <Contact />
    </div>
  );
}

export default App;