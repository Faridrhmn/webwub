import React from 'react';
import { 
  Compass, 
  Home, 
  HelpCircle, 
  Layers, 
  Calculator, 
  Wallet, 
  Users, 
  Rocket, 
  ShieldAlert 
} from 'lucide-react';

export default function Sidebar({ isOpen, onClose, activeSection, onNavigate }) {
  const navItems = [
    { id: 'overview', label: 'Ringkasan & Core Rules', icon: Home },
    { id: 'decision-engine', label: 'Mesin Pengambil Keputusan', icon: HelpCircle },
    { id: 'pricing-tiers', label: 'Katalog Tiering & Harga', icon: Layers },
    { id: 'calc-anti-rugi', label: 'Kalkulator Profit Anti-Rugi', icon: Calculator },
    { id: 'capital-financial', label: 'Alokasi Modal & MRR', icon: Wallet },
    { id: 'partner-raci', label: 'Peran Duo Partner & SOP', icon: Users },
    { id: 'gtm-playbook', label: 'GTM 3 Klien & Roadmap', icon: Rocket },
    { id: 'risk-guardrails', label: 'Radar Risiko & Red Flags', icon: ShieldAlert },
  ];

  const handleNavClick = (id) => {
    onNavigate(id);
    if (window.innerWidth <= 768) {
      onClose();
    }
  };

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`} id="sidebar">
      <div className="sidebar-brand">
        <div className="brand-icon">
          <Compass size={22} />
        </div>
        <div className="brand-text">
          <h2>WebWub<span>Compass</span></h2>
          <span className="badge-stage">Agency Blueprint v1.0</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              className={`nav-item ${isActive ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <div className="partner-status-card">
          <div className="status-indicator online"></div>
          <div>
            <p className="status-title">Duo Team Mode</p>
            <p className="status-sub">Tech Lead + Commercial Lead</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
