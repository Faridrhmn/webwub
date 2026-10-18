import React, { useState } from 'react';
import { BUSINESS_DATA } from '../data/businessData';

export default function PricingTiersSection() {
  const [activeTab, setActiveTab] = useState('project');
  const { projectTiers, maintenanceTiers } = BUSINESS_DATA;

  return (
    <section id="pricing-tiers" className="content-section">
      <div className="section-heading">
        <span className="pill-tag">Katalog & Standar Penawaran</span>
        <h3>Arsitektur Harga & Tiering Layanan</h3>
        <p>Jadikan standar harga ini sebagai patokan saat membuat proposal penawaran kepada calon pelanggan.</p>
      </div>

      <div className="tier-tabs">
        <button
          className={`tier-tab-btn ${activeTab === 'project' ? 'active' : ''}`}
          onClick={() => setActiveTab('project')}
        >
          Paket Pembuatan Website (One-Time)
        </button>
        <button
          className={`tier-tab-btn ${activeTab === 'maintenance' ? 'active' : ''}`}
          onClick={() => setActiveTab('maintenance')}
        >
          Paket Pemeliharaan (Bulanan MRR)
        </button>
      </div>

      {activeTab === 'project' ? (
        <div className="tiers-grid">
          {projectTiers.map((tier) => (
            <div
              key={tier.id}
              className={`tier-card ${tier.isHero ? 'featured' : ''}`}
            >
              <div className={`tier-badge ${tier.isHero ? 'badge-hero' : ''}`}>
                {tier.badge}
              </div>
              <h4 className="tier-name">{tier.name}</h4>
              <div className="tier-price tabular-nums">{tier.price}</div>
              <p className="tier-target">{tier.target}</p>

              <div className="tier-features">
                <div className="feat-title">Cakupan Layanan:</div>
                <ul>
                  {tier.features.map((feat, idx) => (
                    <li key={idx}>{feat}</li>
                  ))}
                </ul>
                <div className="feat-limit">
                  <strong>Catatan:</strong> {tier.limitation}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="tiers-grid maintenance-grid">
          {maintenanceTiers.map((tier) => (
            <div
              key={tier.id}
              className={`tier-card ${tier.isHero ? 'featured' : ''}`}
            >
              <div className={`tier-badge ${tier.isHero ? 'badge-hero' : ''}`}>
                {tier.badge}
              </div>
              <h4 className="tier-name">{tier.name}</h4>
              <div className="tier-price tabular-nums">
                {tier.price} <span className="period">{tier.period}</span>
              </div>
              <p className="tier-target">{tier.target}</p>

              <div className="tier-features">
                <div className="feat-title">Fitur Pemeliharaan Rutin:</div>
                <ul>
                  {tier.features.map((feat, idx) => (
                    <li key={idx}>{feat}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
