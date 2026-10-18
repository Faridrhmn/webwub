import React, { useState } from 'react';
import { BUSINESS_DATA } from '../data/businessData';

export default function CapitalFinancialSection() {
  const { capitalAllocation } = BUSINESS_DATA;
  const [clients, setClients] = useState(5);
  const [planRate, setPlanRate] = useState(300000);

  const formatIDR = (val) => Math.round(val).toLocaleString('id-ID');

  const grossMRR = clients * planRate;
  const costsMRR = Math.min(grossMRR * 0.4, 150000 + clients * 50000);
  const netMRR = grossMRR - costsMRR;
  const annualARR = grossMRR * 12;

  return (
    <section id="capital-financial" className="content-section">
      <div className="section-heading">
        <span className="pill-tag">Struktur Modal & Arus Kas</span>
        <h3>Alokasi Modal Rp1–3 Juta & Simulasi Pendapatan Berulang</h3>
        <p>Bagaimana mengelola dana terbatas Anda agar tidak habis sebelum mendapatkan pelanggan pertama.</p>
      </div>

      <div className="financial-grid">
        {/* Modal Allocation Card */}
        <div className="fin-card">
          <h4>Simulasi Realistis Modal Awal: Rp2.000.000</h4>
          <p className="fin-desc">Jangan habiskan seluruh uang. Simpan minimal 50% sebagai cadangan kas aman.</p>

          <div className="capital-bars">
            {capitalAllocation.map((item, idx) => (
              <div key={idx} className={`cap-bar-item ${item.isEmergency ? 'highlight' : ''}`}>
                <div className="cap-info">
                  <span>{item.name}</span>
                  <strong className="tabular-nums">Rp{formatIDR(item.amount)} ({item.percent}%)</strong>
                </div>
                <div className="progress-track">
                  <div
                    className="progress-fill"
                    style={{
                      width: `${item.percent}%`,
                      backgroundColor: item.color,
                      boxShadow: item.isEmergency ? '0 0 10px rgba(16, 185, 129, 0.4)' : 'none',
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MRR Simulator Card */}
        <div className="fin-card">
          <h4>Simulasi Kekuatan Pendapatan Berulang (MRR)</h4>
          <p className="fin-desc">Lihat bagaimana paket maintenance menjamin kas bulanan tanpa harus jualan proyek baru setiap hari.</p>

          <div className="mrr-controls">
            <label htmlFor="mrr-slider">
              Jumlah Klien Maintenance Aktif: <strong className="text-accent tabular-nums">{clients} Klien</strong>
            </label>
            <input
              type="range"
              id="mrr-slider"
              min="1"
              max="25"
              value={clients}
              className="range-slider"
              onChange={(e) => setClients(parseInt(e.target.value, 10))}
            />

            <label htmlFor="mrr-plan-select" style={{ marginTop: '14px', display: 'block' }}>
              Rata-rata Paket Retainer:
            </label>
            <select
              id="mrr-plan-select"
              value={planRate}
              className="input-field"
              onChange={(e) => setPlanRate(parseInt(e.target.value, 10))}
            >
              <option value="150000">Basic Care (Rp150.000/bln)</option>
              <option value="300000">Standard Care (Rp300.000/bln)</option>
              <option value="500000">Managed Care (Rp500.000/bln)</option>
            </select>
          </div>

          <div className="mrr-breakdown-box">
            <div className="mrr-stat-line">
              <span>Gross MRR (Pendapatan Bulanan):</span>
              <strong className="text-success tabular-nums">Rp{formatIDR(grossMRR)} / bln</strong>
            </div>
            <div className="mrr-stat-line">
              <span>Estimasi Biaya Tools & Server:</span>
              <strong className="tabular-nums">Rp{formatIDR(costsMRR)} / bln</strong>
            </div>
            <div className="mrr-stat-line total">
              <span>Net Recurring Cashflow:</span>
              <strong className="text-accent tabular-nums">Rp{formatIDR(netMRR)} / bln</strong>
            </div>
            <div className="mrr-annual-val">
              <span>Potensi Pendapatan Tahunan (ARR):</span>
              <strong className="tabular-nums">Rp{formatIDR(annualARR)} / tahun</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
