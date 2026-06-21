import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { FAQ } from './components/FAQ';
import { Downloads } from './components/Downloads';
import { Ticker } from './components/Ticker';
import { TreeShowcase } from './components/TreeShowcase';
import { Disclaimer } from './components/Disclaimer';
import { Footer } from './components/Footer';
import { FormatsList } from './components/FormatsList';
import { Changelogs } from './components/Changelogs';
import { Announcements } from './components/Announcements';

function HomePage() {
  return (
    <>
      <Hero />
      <Ticker />
      <TreeShowcase />
      <Features />
      <FAQ />
      <Downloads />
      <Disclaimer />
    </>
  );
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <div className="min-h-screen bg-shonen-dark text-white font-sans selection:bg-shonen-red selection:text-black font-smoothing-antialiased flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1 pt-24 md:pt-28">
        <Announcements />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/formats" element={<FormatsList />} />
          <Route path="/changelogs" element={<Changelogs />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
