import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Github } from 'lucide-react';
import Home from './pages/Home';
import Generator from './pages/Generator';
import Demo from './pages/Demo';
import Wiki from './pages/Wiki';
import Imprint from './pages/Imprint';
import Privacy from './pages/Privacy';

import { useScrollToTop } from './hooks/useScrollToTop';

export default function App() {
  useScrollToTop();
  const [latestVersion, setLatestVersion] = useState('v4.1.0');

  // Fetch latest release from GitHub
  useEffect(() => {
    fetch('https://api.github.com/repos/shedowe19/ShieldPM/releases/latest')
      .then(res => res.json())
      .then(data => {
        if (data.tag_name) {
          setLatestVersion(data.tag_name);
        }
      })
      .catch(err => console.error('Failed to fetch latest version:', err));
  }, []);

  return (
    <>
      <div className="min-h-screen bg-background text-white">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-xl border-b border-white/5 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link to="/" className="flex items-center gap-2">
                <img src="/logo-no-text.svg" alt="ShieldPM" className="w-8 h-8" />
                <span className="text-xl font-bold">ShieldPM</span>
              </Link>
              <div className="hidden md:flex items-center gap-8">
                <Link to="/#features" className="text-slate-300 hover:text-white transition">Features</Link>
                <Link to="/generator" className="text-slate-300 hover:text-white transition">Generator</Link>
                <Link to="/#installation" className="text-slate-300 hover:text-white transition">Installation</Link>
                <Link to="/demo" className="text-slate-300 hover:text-white transition">Demo</Link>
                <Link to="/wiki" className="text-slate-300 hover:text-white transition">Wiki</Link>
                <a href="https://github.com/shedowe19/ShieldPM" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 px-4 py-2 rounded-lg transition">
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home latestVersion={latestVersion} />} />
          <Route path="/generator" element={<Generator />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/wiki" element={<Wiki />} />
          <Route path="/imprint" element={<Imprint />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-slate-950 py-12 px-4 border-t border-white/5 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-2">
                <img src="/logo-no-text.svg" alt="ShieldPM" className="w-6 h-6" loading="lazy" />
                <span className="font-bold">ShieldPM</span>
                <span className="text-slate-500 text-sm">{latestVersion}</span>
              </div>

              <div className="flex items-center gap-6 text-sm text-slate-400">
                <Link to="/imprint" className="hover:text-white transition">Imprint</Link>
                <Link to="/privacy" className="hover:text-white transition">Privacy</Link>
                <div className="w-px h-4 bg-white/10 hidden md:block"></div>
                <a href="https://github.com/shedowe19/ShieldPM" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub</a>
                <Link to="/wiki" className="hover:text-white transition">Documentation</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

