import React from 'react';
import { BUSINESS_DATA } from '../data/businessData';

export default function PartnerRaciSection() {
  const { partnerRaci, partnershipClauses } = BUSINESS_DATA;
  const { partnerA, partnerB } = partnerRaci;

  return (
    <section id="partner-raci" className="content-section">
      <div className="section-heading">
        <span className="pill-tag">Manajemen Kemitraan</span>
        <h3>Pembagian Tugas Duo Partner & SOP Operasional</h3>
        <p>Penyebab utama agensi pemula bubar adalah peran yang tumpang tindih. Tegaskan pembagian tanggung jawab sejak awal.</p>
      </div>

      <div className="raci-container">
        {/* Partner A */}
        <div className="partner-card tech-card">
          <div className="partner-header">
            <div className="avatar-badge tech">TECH</div>
            <div>
              <h4>{partnerA.title}</h4>
              <p className="role-title">{partnerA.subtitle}</p>
            </div>
          </div>
          <ul className="partner-tasks">
            {partnerA.tasks.map((task, idx) => (
              <li key={idx}>
                <strong>{task.label}:</strong> {task.desc}
              </li>
            ))}
          </ul>
        </div>

        {/* Partner B */}
        <div className="partner-card biz-card">
          <div className="partner-header">
            <div className="avatar-badge biz">BIZ</div>
            <div>
              <h4>{partnerB.title}</h4>
              <p className="role-title">{partnerB.subtitle}</p>
            </div>
          </div>
          <ul className="partner-tasks">
            {partnerB.tasks.map((task, idx) => (
              <li key={idx}>
                <strong>{task.label}:</strong> {task.desc}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 5 Clauses */}
      <div className="agreement-box">
        <h4>5 Klausul Tertulis Wajib Antara Kedua Partner</h4>
        <div className="clause-grid">
          {partnershipClauses.map((clause) => (
            <div key={clause.num} className="clause-item">
              <span className="clause-num">{clause.num}</span>
              <div>
                <strong>{clause.title}</strong>
                <p>{clause.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
