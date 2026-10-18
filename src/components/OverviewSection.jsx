import React from 'react';
import { BUSINESS_DATA } from '../data/businessData';

export default function OverviewSection() {
  const { pillars, goldenRules } = BUSINESS_DATA;

  return (
    <section id="overview" className="content-section">
      <div className="hero-banner">
        <div className="hero-text">
          <span className="pill-tag">Fondasi Strategis Bisnis</span>
          <h2>Panduan Utama Pemilik Bisnis dalam Mengambil Keputusan</h2>
          <p>
            Dashboard ini dirancang sebagai panduan praktis dan kompas navigasi harian bagi Anda dan rekan bisnis Anda. 
            Ketika ragu menentukan harga, memilih server, membagi peran tim, atau merespons permintaan calon klien, 
            jadikan parameter dan aturan di sini sebagai acuan eksekutif.
          </p>
        </div>

        <div className="hero-stats-grid">
          <div className="hero-stat-card">
            <span className="hero-num">3 Pilar</span>
            <span className="hero-desc">Layanan Sinergis: Proyek, Hosting, & Retainer Maintenance</span>
          </div>
          <div className="hero-stat-card">
            <span className="hero-num">0 Capex</span>
            <span className="hero-desc">Bebankan biaya server langsung ke klien; jangan sewa server menganggur</span>
          </div>
          <div className="hero-stat-card">
            <span className="hero-num">1-on-1</span>
            <span className="hero-desc">Pemisahan mutlak peran: 1 Orang Teknis & 1 Orang Marketing/Sales</span>
          </div>
        </div>
      </div>

      {/* 3 Pillars Overview */}
      <div className="section-heading" style={{ marginTop: '36px' }}>
        <span className="pill-tag">3 Lini Bisnis Terintegrasi</span>
        <h3>Struktur Pendapatan Agensi</h3>
        <p>Tiga pilar layanan yang saling menopang untuk menciptakan arus kas awal dan jangka panjang.</p>
      </div>

      <div className="pillars-grid">
        {pillars.map((pillar) => (
          <div key={pillar.id} className="pillar-card">
            <span className="pillar-badge">{pillar.type}</span>
            <h4>{pillar.title}</h4>
            <span className="pillar-price">{pillar.priceRange}</span>
            <p className="pillar-desc">{pillar.desc}</p>
            <div className="pillar-role">{pillar.role}</div>
          </div>
        ))}
      </div>

      {/* 4 Golden Rules */}
      <div className="section-heading" style={{ marginTop: '24px' }}>
        <span className="pill-tag">Aturan Pengambilan Keputusan</span>
        <h3>4 Aturan Emas Anti-Gagal untuk Pemula</h3>
        <p>Patuhi 4 prinsip ini dalam setiap keputusan operasional, penawaran harga, dan transaksi klien.</p>
      </div>

      <div className="rules-grid">
        {goldenRules.map((rule) => (
          <div key={rule.num} className="rule-card">
            <div className={`rule-icon icon-${rule.color}`}>{rule.num}</div>
            <h4>{rule.title}</h4>
            <p>{rule.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
