import React, { useState } from 'react';

export default function AntiRugiCalculator() {
  const [price, setPrice] = useState(3000000);
  const [hours, setHours] = useState(36);
  const [targetHourly, setTargetHourly] = useState(50000);
  const [infraCost, setInfraCost] = useState(350000);
  const [overheadCost, setOverheadCost] = useState(150000);

  const formatIDR = (val) => Math.round(val).toLocaleString('id-ID');

  const safeHours = Math.max(1, hours);
  const totalCosts = infraCost + overheadCost;
  const grossProfit = price - totalCosts;
  const grossMargin = price > 0 ? (grossProfit / price) * 100 : 0;
  const realHourly = grossProfit / safeHours;

  const laborTargetCost = safeHours * targetHourly;
  const recommendedMin = Math.round(((totalCosts + laborTargetCost) * 1.2) / 10000) * 10000;

  const diffPercent = targetHourly > 0 ? ((realHourly - targetHourly) / targetHourly) * 100 : 0;

  let verdictClass = 'healthy';
  let verdictTitle = 'Status: Penawaran Sangat Sehat (Untung Layak)';
  let verdictDesc = 'Harga penawaran ini sudah aman, proporsional, dan menghargai waktu kerja tim Anda dengan wajar.';

  if (grossProfit <= 0 || realHourly < targetHourly * 0.5) {
    verdictClass = 'loss';
    verdictTitle = 'Status: Potensi Rugi Tenaga / Tekor';
    verdictDesc = `Nilai upah jam nyata (Rp${formatIDR(realHourly)}/jam) jauh di bawah standar layak Anda. Naikkan harga minimal ke Rp${formatIDR(recommendedMin)} atau kurangi jam kerja dengan template siap pakai.`;
  } else if (realHourly < targetHourly) {
    verdictClass = 'tight';
    verdictTitle = 'Status: Margin Pas-pasan (Cukup Ketat)';
    verdictDesc = 'Proyek ini memberi sedikit keuntungan, tetapi ruang toleransi revisi sangat tipis. Batasi revisi maksimal 2x minor.';
  }

  return (
    <section id="calc-anti-rugi" className="content-section">
      <div className="section-heading">
        <span className="pill-tag">Alat Keuangan</span>
        <h3>Kalkulator Harga & Profit Margin Anti-Rugi</h3>
        <p>Masukkan estimasi proyek Anda untuk mengetahui apakah harga yang Anda tawarkan memberikan margin yang sehat atau justru rugi tenaga.</p>
      </div>

      <div className="calc-container">
        <div className="calc-inputs-col">
          <h4>Parameter Biaya Proyek</h4>

          <div className="form-group">
            <label htmlFor="calc-price">Harga Penawaran ke Klien (Rp):</label>
            <input
              type="number"
              id="calc-price"
              value={price}
              step="100000"
              className="input-field tabular-nums"
              onChange={(e) => setPrice(parseFloat(e.target.value) || 0)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="calc-hours">Estimasi Total Jam Kerja Gabungan (Jam):</label>
            <input
              type="number"
              id="calc-hours"
              value={hours}
              min="1"
              max="300"
              className="input-field tabular-nums"
              onChange={(e) => setHours(parseFloat(e.target.value) || 1)}
            />
            <span className="form-hint">Misal: 2 orang bekerja masing-masing 18 jam = 36 jam</span>
          </div>

          <div className="form-group">
            <label htmlFor="calc-target-hourly">Target Nilai Waktu Kerja per Jam (Rp):</label>
            <input
              type="number"
              id="calc-target-hourly"
              value={targetHourly}
              step="5000"
              className="input-field tabular-nums"
              onChange={(e) => setTargetHourly(parseFloat(e.target.value) || 0)}
            />
            <span className="form-hint">Standar wajar pemula di Indonesia: Rp40.000 – Rp75.000/jam</span>
          </div>

          <div className="form-group">
            <label htmlFor="calc-infra">Biaya Langsung (Domain + Hosting 1 Thn):</label>
            <input
              type="number"
              id="calc-infra"
              value={infraCost}
              step="25000"
              className="input-field tabular-nums"
              onChange={(e) => setInfraCost(parseFloat(e.target.value) || 0)}
            />
            <span className="form-hint">Beli domain (~Rp150k) + Shared hosting (~Rp200k)</span>
          </div>

          <div className="form-group">
            <label htmlFor="calc-overhead">Alokasi Biaya Operasional / Tools per Proyek (Rp):</label>
            <input
              type="number"
              id="calc-overhead"
              value={overheadCost}
              step="10000"
              className="input-field tabular-nums"
              onChange={(e) => setOverheadCost(parseFloat(e.target.value) || 0)}
            />
            <span className="form-hint">Listrik, kuota internet, lisensi mockup / plugin</span>
          </div>
        </div>

        <div className="calc-results-col">
          <h4>Analisis Kelayakan Finansial</h4>

          <div className="metric-card-group">
            <div className="calc-metric-card">
              <span className="metric-label">Total Beban Langsung</span>
              <span className="metric-value tabular-nums">Rp{formatIDR(totalCosts)}</span>
            </div>

            <div className="calc-metric-card">
              <span className="metric-label">Laba Kotor Sebelum Tenaga</span>
              <span className="metric-value text-accent tabular-nums">Rp{formatIDR(grossProfit)}</span>
              <span className="metric-sub tabular-nums">Margin: {grossMargin.toFixed(1)}%</span>
            </div>

            <div className="calc-metric-card">
              <span className="metric-label">Upah Jam Nyata Yang Didapat</span>
              <span className="metric-value tabular-nums">Rp{formatIDR(realHourly)} / jam</span>
              <span
                className="metric-sub tabular-nums"
                style={{ color: diffPercent >= 0 ? '#10B981' : '#F43F5E' }}
              >
                {diffPercent >= 0
                  ? `Di atas target Rp${formatIDR(targetHourly)}/jam (+${diffPercent.toFixed(1)}%)`
                  : `Di bawah target Rp${formatIDR(targetHourly)}/jam (${diffPercent.toFixed(1)}%)`}
              </span>
            </div>

            <div className="calc-metric-card highlight">
              <span className="metric-label">Harga Rekomendasi Minimal</span>
              <span className="metric-value text-success tabular-nums">Rp{formatIDR(recommendedMin)}</span>
              <span className="metric-sub">Sudah mencakup beban modal, upah jam target, & margin cadangan 20%</span>
            </div>
          </div>

          <div className={`verdict-box ${verdictClass}`}>
            <h5>{verdictTitle}</h5>
            <p>{verdictDesc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
