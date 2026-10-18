import React from 'react';
import { BUSINESS_DATA } from '../data/businessData';

export default function RiskRadarSection() {
  const { redFlags } = BUSINESS_DATA;

  return (
    <section id="risk-guardrails" className="content-section">
      <div className="section-heading">
        <span className="pill-tag">Proteksi Bisnis</span>
        <h3>Radar Risiko & Jebakan Klasik yang Wajib Dihindari</h3>
        <p>Jadikan daftar ini sebagai pagar pembatas (*guardrails*) sebelum menandatangani kesepakatan apa pun.</p>
      </div>

      <div className="risks-grid">
        {redFlags.map((flag) => (
          <div key={flag.id} className={`risk-card ${flag.type}`}>
            <div className="risk-badge">Jebakan #{flag.id}</div>
            <h4>{flag.title}</h4>
            <p className="risk-scenario">{flag.scenario}</p>
            <div className="risk-solution">
              <strong>Solusi Mutlak:</strong> {flag.solution}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
