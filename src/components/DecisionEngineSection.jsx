import React, { useState } from 'react';

export default function DecisionEngineSection() {
  // Tool 1: Project Feasibility State
  const [budget, setBudget] = useState(2500000);
  const [scope, setScope] = useState('compro');
  const [content, setContent] = useState('ready');
  const [dp, setDp] = useState('dp50');
  const [assessmentResult, setAssessmentResult] = useState(null);

  // Tool 2: Infrastructure Advisor State
  const [infraClientType, setInfraClientType] = useState('umkm-profile');
  const [infraClientCount, setInfraClientCount] = useState('0-3');
  const [infraWhoPays, setInfraWhoPays] = useState('client-direct');
  const [infraResult, setInfraResult] = useState(null);

  const formatIDR = (val) => Math.round(val).toLocaleString('id-ID');

  // Handle Project Evaluation
  const handleAssessProject = () => {
    let score = 50;
    let actions = [];

    // Min healthy budgets
    const minBudgets = {
      landing: 1200000,
      compro: 2500000,
      catalog: 4000000,
      custom: 6000000,
    };

    const targetMin = minBudgets[scope] || 2000000;

    if (budget >= targetMin) {
      score += 25;
      actions.push(`✅ Budget Rp${formatIDR(budget)} sehat untuk cakupan tipe "${scope.toUpperCase()}".`);
    } else {
      score -= 25;
      actions.push(`⚠️ Budget Rp${formatIDR(budget)} di bawah batas aman sehat (Minimal ideal: Rp${formatIDR(targetMin)}).`);
    }

    if (dp === 'dp50') {
      score += 25;
      actions.push('✅ Klien bersedia DP 50% di awal. Arus kas operasional aman.');
    } else if (dp === 'dp20') {
      score -= 10;
      actions.push('⚠️ DP 10-20% terlalu rendah. Usahakan negosiasi minimal 35%–50% sebelum mulai bekerja.');
    } else {
      score -= 35;
      actions.push('🚨 BAHAYA: Jangan pernah bekerja tanpa DP! Tolak atau minta termin muka sebelum kode ditulis.');
    }

    if (content === 'ready') {
      score += 15;
      actions.push('✅ Materi konten sudah siap dari klien, risiko keterlambatan proyek rendah.');
    } else if (content === 'partial') {
      actions.push('ℹ️ Materi sebagian belum ada. Batasi waktu pengumpulan materi maksimal 7 hari kerja.');
    } else {
      score -= 15;
      actions.push('⚠️ Klien tidak punya konten sama sekali. Bebankan biaya copywriting tambahan atau siapkan draf starter.');
    }

    score = Math.max(10, Math.min(100, score));

    let status = 'approved';
    let statusText = 'AMBIL PROYEK (DIREKOMENDASIKAN)';
    let title = 'Keputusan: Sangat Layak Dikerjakan';
    let desc = 'Parameter proyek ini aman dari segi arus kas, beban ruang lingkup, dan komitmen klien.';

    if (score < 50) {
      status = 'rejected';
      statusText = 'TOLAK ATAU REVISI TOTAL';
      title = 'Keputusan: Risiko Tinggi Mengalami Kerugian';
      desc = 'Proyek ini terindikasi memiliki potensi scope creep berat, budget terlalu rendah, atau risiko pembayaran macet.';
    } else if (score < 75) {
      status = 'caution';
      statusText = 'AMBIL DENGAN SYARAT (NEGOSIASI ULANG)';
      title = 'Keputusan: Perlu Penyesuaian Ruang Lingkup / Harga';
      desc = 'Proyek berpotensi bagus, namun Anda harus menegosiasikan poin-poin di bawah ini agar tidak tekor.';
    }

    setAssessmentResult({
      status,
      statusText,
      score,
      title,
      desc,
      actions,
    });
  };

  // Handle Infrastructure Advisor
  const handleAssessInfra = () => {
    if (infraClientType === 'custom-app') {
      setInfraResult({
        status: 'caution',
        statusText: 'PILIHAN: CLOUD VPS LINUX',
        cost: 'Estimasi: Rp100.000–250.000/bln',
        title: 'Gunakan Cloud VPS (Bukan Shared Hosting)',
        desc: 'Karena aplikasi membutuhkan runtime khusus (Node.js/Python/Go) atau akses root, shared hosting biasa tidak akan cukup.',
        actions: [
          'Pilih provider terpercaya lokal: IDCloudHost Cloud VPS atau Rumahweb Cloud Server (RAM 2GB, 2 vCPU).',
          'Pastikan biaya bulanan VPS dibayar langsung oleh klien atau dimasukkan ke invoice langganan bulanan terpisah.',
          'Jangan gabungkan aplikasi kustom klien ini dengan website UMKM lain di satu server.',
        ],
      });
    } else if (infraClientCount === '10plus' && infraWhoPays === 'agency-bundle') {
      setInfraResult({
        status: 'approved',
        statusText: 'EVALUASI: RESELLER HOSTING / VPS MULTI-SITE',
        cost: 'Estimasi: Rp250.000–450.000/bln',
        title: 'Sudah Layak Mempertimbangkan Reseller Hosting',
        desc: 'Karena Anda sudah memiliki lebih dari 10 klien aktif yang membayar pemeliharaan tahunan, skala ekonomi reseller hosting mulai menguntungkan.',
        actions: [
          'Pilih paket Reseller cPanel/DirectAdmin yang memiliki fitur pemisahan akun per klien.',
          'Keuntungan margin hosting Anda akan meningkat karena biaya server per klien menjadi jauh lebih murah.',
        ],
      });
    } else {
      setInfraResult({
        status: 'approved',
        statusText: 'REKOMENDASI: SHARED HOSTING PER KLIEN',
        cost: 'Estimasi: Rp180.000–350.000/tahun',
        title: 'Beli Shared Hosting Biasa Atas Nama Klien',
        desc: 'Untuk tahap awal (0–5 klien), ini adalah langkah PALING AMAN dan hemat waktu. Anda tidak menanggung beban server menganggur (zero idle cost).',
        actions: [
          'Daftarkan domain (.com ~Rp150k / .id ~Rp200k) dan shared hosting dengan email resmi usaha klien.',
          'Biaya hosting ditagihkan 100% langsung di depan ke klien sebagai komponen biaya langsung proyek.',
          'Agensi Anda hanya mengambil jasa setup, instalasi SSL, dan deployment.',
        ],
      });
    }
  };

  return (
    <section id="decision-engine" className="content-section">
      <div className="section-heading">
        <span className="pill-tag">Smart Decision Engine</span>
        <h3>Mesin Pengambil Keputusan Cepat</h3>
        <p>Gunakan simulator interaktif ini saat Anda dihadapkan pada negosiasi proyek atau keputusan operasional.</p>
      </div>

      <div className="decision-engines-grid">
        {/* Tool 1: Project Feasibility */}
        <div className="tool-card">
          <div className="tool-header">
            <div className="tool-title-wrap">
              <span className="tool-badge">Evaluasi Calon Proyek</span>
              <h4>Apakah Saya Harus Mengambil Proyek Ini?</h4>
            </div>
          </div>
          <p className="tool-desc">Cek kelayakan tawaran calon klien agar terhindar dari *scope creep* dan proyek rugi tenaga.</p>

          <div className="interactive-form">
            <div className="form-group">
              <label htmlFor="eval-budget">Estimasi Budget Klien (Rp):</label>
              <input
                type="number"
                id="eval-budget"
                value={budget}
                step="100000"
                className="input-field tabular-nums"
                onChange={(e) => setBudget(parseFloat(e.target.value) || 0)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="eval-scope">Jenis Kebutuhan Website:</label>
              <select
                id="eval-scope"
                value={scope}
                className="input-field"
                onChange={(e) => setScope(e.target.value)}
              >
                <option value="landing">1 Halaman Landing Page UMKM (Simple)</option>
                <option value="compro">Company Profile 3-5 Halaman</option>
                <option value="catalog">Katalog Produk / Portofolio Lengkap</option>
                <option value="custom">Sistem Aplikasi Kustom / CRUD / Login User</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="eval-content">Kesiapan Konten (Foto, Teks, Logo):</label>
              <select
                id="eval-content"
                value={content}
                className="input-field"
                onChange={(e) => setContent(e.target.value)}
              >
                <option value="ready">Sudah Siap Lengkap dari Klien</option>
                <option value="partial">Sebagian Ada, Sebagian Perlu Dibuatkan</option>
                <option value="none">Kosong Sama Sekali, Minta Dibuatkan Semua</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="eval-dp">Kesediaan Pembayaran:</label>
              <select
                id="eval-dp"
                value={dp}
                className="input-field"
                onChange={(e) => setDp(e.target.value)}
              >
                <option value="dp50">Klien Mau Bayar DP 50% di Awal</option>
                <option value="dp20">Klien Hanya Mau DP 10-20%</option>
                <option value="nodp">Klien Ingin Bayar Setelah Selesai Penuh</option>
              </select>
            </div>

            <button className="btn btn-primary btn-block" onClick={handleAssessProject}>
              Analisis Kelayakan Proyek
            </button>
          </div>

          <div className={`assessment-result ${assessmentResult ? assessmentResult.status : 'neutral'}`}>
            <div className="result-header">
              <span className="status-badge">
                {assessmentResult ? assessmentResult.statusText : 'Menunggu Input'}
              </span>
              <span className="score-badge tabular-nums">
                {assessmentResult ? `Skor: ${assessmentResult.score}/100` : 'Skor: -/100'}
              </span>
            </div>
            <h5>{assessmentResult ? assessmentResult.title : 'Hasil Keputusan Evaluasi'}</h5>
            <p>{assessmentResult ? assessmentResult.desc : 'Isi form di atas dan klik tombol untuk mendapatkan rekomendasi keputusan profesional.'}</p>
            {assessmentResult && (
              <ul className="result-action-list">
                {assessmentResult.actions.map((act, i) => (
                  <li key={i}>{act}</li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Tool 2: Infrastructure Advisor */}
        <div className="tool-card">
          <div className="tool-header">
            <div className="tool-title-wrap">
              <span className="tool-badge">Infrastruktur</span>
              <h4>Keputusan Server: Shared Hosting atau VPS?</h4>
            </div>
          </div>
          <p className="tool-desc">Menentukan jenis infrastruktur yang tepat agar tidak boros biaya dan minim kerumitan teknis.</p>

          <div className="interactive-form">
            <div className="form-group">
              <label htmlFor="infra-client-type">Kategori Klien & Trafik:</label>
              <select
                id="infra-client-type"
                value={infraClientType}
                className="input-field"
                onChange={(e) => setInfraClientType(e.target.value)}
              >
                <option value="umkm-profile">Company Profile / Landing Page UMKM (Trafik normal)</option>
                <option value="high-traffic">Toko Online / Trafik Tinggi & Berita</option>
                <option value="custom-app">Aplikasi Khusus (Node.js/Python/Go, DB kompleks)</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="infra-client-count">Jumlah Klien Aktif Saat Ini:</label>
              <select
                id="infra-client-count"
                value={infraClientCount}
                className="input-field"
                onChange={(e) => setInfraClientCount(e.target.value)}
              >
                <option value="0-3">0 – 3 Klien (Fase Awal Rintis)</option>
                <option value="4-10">4 – 10 Klien (Mulai Bertumbuh)</option>
                <option value="10plus">&gt; 10 Klien (Fase Skala Agensi)</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="infra-who-pays">Mekanisme Pembayaran Hosting:</label>
              <select
                id="infra-who-pays"
                value={infraWhoPays}
                className="input-field"
                onChange={(e) => setInfraWhoPays(e.target.value)}
              >
                <option value="client-direct">Klien Membayar Langsung ke Provider / Ditagihkan 100%</option>
                <option value="agency-bundle">Masuk Paket Bundling Tahunan Agensi</option>
              </select>
            </div>

            <button className="btn btn-secondary btn-block" onClick={handleAssessInfra}>
              Cek Keputusan Infrastruktur
            </button>
          </div>

          <div className={`assessment-result ${infraResult ? infraResult.status : 'neutral'}`}>
            <div className="result-header">
              <span className="status-badge">
                {infraResult ? infraResult.statusText : 'Pilihan Ideal'}
              </span>
              <span className="score-badge tabular-nums">
                {infraResult ? infraResult.cost : 'Estimasi: Rp -'}
              </span>
            </div>
            <h5>{infraResult ? infraResult.title : 'Rekomendasi Server & Provider'}</h5>
            <p>{infraResult ? infraResult.desc : 'Tekan tombol di atas untuk menentukan apakah klien membutuhkan Shared Hosting atau VPS.'}</p>
            {infraResult && (
              <ul className="result-action-list">
                {infraResult.actions.map((act, i) => (
                  <li key={i}>{act}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
