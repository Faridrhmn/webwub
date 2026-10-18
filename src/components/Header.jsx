import React from 'react';
import { Menu, Sun, Moon } from 'lucide-react';

export default function Header({ onToggleSidebar, theme, onToggleTheme }) {
  return (
    <header className="top-header">
      <div className="header-left">
        <button 
          className="mobile-toggle-btn" 
          onClick={onToggleSidebar}
          aria-label="Buka Menu Navigasi"
        >
          <Menu size={20} />
        </button>
        <div>
          <h1 className="page-title">Executive Decision Playbook</h1>
          <p className="page-subtitle">Kompas Keputusan Bisnis Jasa Web Solution — Modal Rp1–3 Juta</p>
        </div>
      </div>

      <div className="header-right">
        {/* Notion-style Theme Switcher */}
        <button
          className="theme-toggle-btn"
          onClick={onToggleTheme}
          aria-label="Ganti Mode Gelap/Terang"
          title={`Ganti ke mode ${theme === 'dark' ? 'terang (Light)' : 'gelap (Dark)'}`}
        >
          {theme === 'dark' ? (
            <>
              <Sun size={14} />
              <span>Light Mode</span>
            </>
          ) : (
            <>
              <Moon size={14} />
              <span>Dark Mode</span>
            </>
          )}
        </button>

        <div className="stat-pill">
          <span className="stat-label">Modal</span>
          <span className="stat-val text-accent">Rp2.000.000</span>
        </div>
        <div className="stat-pill">
          <span className="stat-label">Hero</span>
          <span className="stat-val text-success">Business Tier</span>
        </div>
        <div className="stat-pill">
          <span className="stat-label">Syarat</span>
          <span className="stat-val text-warning">DP 50%</span>
        </div>
      </div>
    </header>
  );
}
