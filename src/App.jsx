import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import OverviewSection from './components/OverviewSection';
import DecisionEngineSection from './components/DecisionEngineSection';
import PricingTiersSection from './components/PricingTiersSection';
import AntiRugiCalculator from './components/AntiRugiCalculator';
import CapitalFinancialSection from './components/CapitalFinancialSection';
import PartnerRaciSection from './components/PartnerRaciSection';
import GtmRoadmapSection from './components/GtmRoadmapSection';
import RiskRadarSection from './components/RiskRadarSection';
import Toast from './components/Toast';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const [toastMessage, setToastMessage] = useState('');
  const [isToastVisible, setIsToastVisible] = useState(false);

  // Theme state: Notion Light vs Notion Dark
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('webwub_theme_mode') || 'light';
    } catch (e) {
      return 'light';
    }
  });

  // Apply theme to html root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('webwub_theme_mode', theme);
    } catch (e) {}
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setIsToastVisible(true);
    setTimeout(() => {
      setIsToastVisible(false);
    }, 3000);
  };

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll spy to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'overview',
        'decision-engine',
        'pricing-tiers',
        'calc-anti-rugi',
        'capital-financial',
        'partner-raci',
        'gtm-playbook',
        'risk-guardrails',
      ];

      const scrollPos = window.scrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-layout">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      <main className="main-content">
        <Header 
          onToggleSidebar={() => setSidebarOpen((prev) => !prev)}
          theme={theme}
          onToggleTheme={toggleTheme}
        />

        <div className="content-container">
          <OverviewSection />
          <DecisionEngineSection />
          <PricingTiersSection />
          <AntiRugiCalculator />
          <CapitalFinancialSection />
          <PartnerRaciSection />
          <GtmRoadmapSection onShowToast={showToast} />
          <RiskRadarSection />
        </div>

        <Toast message={toastMessage} isVisible={isToastVisible} />
      </main>
    </div>
  );
}
