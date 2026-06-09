import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { BackgroundBlobs } from './components/BackgroundBlobs';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Stats } from './sections/Stats';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { TerminalWidget } from './components/TerminalWidget';

function PortfolioAppContent() {
  const [terminalOpen, setTerminalOpen] = useState(false);

  const toggleTerminal = () => {
    setTerminalOpen((prev) => !prev);
  };

  return (
    <div className="relative min-h-screen text-slate-800 dark:text-slate-200 transition-colors duration-500 bg-[#f8fafc] dark:bg-[#030712]">
      {/* Interactive visual canvas effects */}
      <BackgroundBlobs />

      {/* Navigation Header */}
      <Navbar onTerminalToggle={toggleTerminal} />

      {/* Main Sections */}
      <main className="relative z-10 max-w-7xl mx-auto">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Stats />
        <Contact />
      </main>

      {/* Footer copyright and navigation */}
      <Footer />

      {/* Collapsible Easter Egg CLI Terminal console */}
      <TerminalWidget isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <PortfolioAppContent />
    </ThemeProvider>
  );
}

export default App;
