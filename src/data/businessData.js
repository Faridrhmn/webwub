export const BUSINESS_DATA = {
  pillars: [
    {
      id: 'pilar-1',
      title: 'Lini 1: Jasa Pembuatan Website',
      type: 'One-Time Project Fee',
      priceRange: 'Rp1,2 – 4 Juta per proyek',
      desc: 'Pembuatan landing page, company profile UMKM, katalog produk, dan website layanan.',
      role: 'Pondasi utama kas di awal bisnis untuk memvalidasi pasar dan membangun portofolio.'
    },
    {
      id: 'pilar-2',
      title: 'Lini 2: Pengelolaan Domain & Hosting',
      type: 'Setup & Management Fee',
      priceRange: 'Biaya server ditagihkan ke klien + Jasa setup',
      desc: 'Membantu pembelian domain, konfigurasi DNS, instalasi SSL HTTPS, email bisnis, dan deployment.',
      role: 'Bebankan biaya server langsung ke klien agar kas modal Rp1–3 juta tidak terbebani biaya menganggur.'
    },
    {
      id: 'pilar-3',
      title: 'Lini 3: Retainer Maintenance Berkala',
      type: 'Monthly Recurring Revenue (MRR)',
      priceRange: 'Rp150k – 500k per klien / bulan',
      desc: 'Pengecekan rutin status website, backup berkala, pembaruan keamanan, dan perbaikan minor.',
      role: 'Menjamin arus kas bulanan yang stabil tanpa harus terus-menerus mencari proyek baru.'
    }
  ],

  goldenRules: [
    {
      num: 1,
      color: 'blue',
      title: 'Jangan Menjual ke "Semua Orang"',
      desc: 'Fokuskan 3 klien pertama hanya pada UMKM lokal & usaha jasa yang butuh website company profile sederhana. Tolak dulu aplikasi operasional kompleks atau sistem ERP rumit.'
    },
    {
      num: 2,
      color: 'green',
      title: 'Zero Idle Server Infrastructure',
      desc: 'Jangan pernah menyewa VPS bulanan atau menjadi reseller hosting sebelum memiliki pelanggan. Beli shared hosting per proyek atas nama klien demi melindungi kas modal awal.'
    },
    {
      num: 3,
      color: 'purple',
      title: 'Kunci DP 50% Sebelum Mulai Koding',
      desc: 'Jangan mulai pengerjaan tanpa uang muka minimal 50%. Jangan pernah mengunggah website ke domain utama milik klien sebelum sisa 50% lunas diterima di rekening usaha.'
    },
    {
      num: 4,
      color: 'amber',
      title: 'Wajib Tawarkan Retainer Maintenance',
      desc: 'Setiap proyek selesai, langsung tawarkan paket perawatan bulanan (Rp150k–300k/bln). Keuntungan sejati bisnis web agency berada pada pendapatan berulang (*recurring cashflow*).'
    }
  ],

  projectTiers: [
    {
      id: 'starter',
      name: 'Tier 1 — Starter',
      badge: 'Entry Level',
      isHero: false,
      price: 'Rp1,2 – 1,8 Juta',
      target: 'Usaha baru buka / UMKM hemat budget',
      features: [
        '1 Halaman Landing Page responsif (Mobile First)',
        'Profil usaha, daftar produk/layanan, galeri & kontak',
        'Tombol Call-to-Action WhatsApp terintegrasi',
        'Integrasi Google Maps & Sertifikat SSL HTTPS',
        'Maksimal 2x revisi minor'
      ],
      limitation: 'Tidak termasuk domain & hosting. Tidak ada CMS dinamis atau backend custom.'
    },
    {
      id: 'business',
      name: 'Tier 2 — Business',
      badge: 'Hero Product (Paling Direkomendasikan)',
      isHero: true,
      price: 'Rp2,5 – 4,0 Juta',
      target: 'UMKM berjalan, vendor B2B, kontraktor, & toko fisik',
      features: [
        'Maksimal 3–5 Halaman utama (Home, About, Services, Gallery, Contact)',
        'Desain visual premium sesuai identitas brand klien',
        'Tombol WhatsApp + Formulir leads email',
        'Dasar SEO teknis (Meta tags, Sitemap, Index Google)',
        'Maksimal 3x revisi minor + panduan pemakaian singkat'
      ],
      limitation: 'Paket penawaran utama dengan rasio waktu kerja dan margin profit paling ideal.'
    },
    {
      id: 'business-plus',
      name: 'Tier 3 — Business Plus',
      badge: 'Usaha Berkembang',
      isHero: false,
      price: 'Rp4,0 – 7,0 Juta',
      target: 'Bisnis dengan puluhan produk/jasa & perlu pembaruan konten mandiri',
      features: [
        'Hingga 8–10 Halaman lengkap',
        'Katalog produk atau layanan dinamis terstruktur',
        'Panel Admin (CMS sederhana) untuk ganti konten sendiri',
        'Fitur pencarian internal & filter kategori',
        'Optimasi kecepatan performa halaman dasar'
      ],
      limitation: 'Wajib ada Scope of Work (SOW) tertulis mengenai batas jumlah item data yang diinputkan.'
    },
    {
      id: 'custom-app',
      name: 'Tier 4 — Custom App',
      badge: 'Berdasarkan Scope',
      isHero: false,
      price: 'Mulai Rp6 Juta+',
      target: 'Sistem operasional internal, dashboard, & integrasi API',
      features: [
        'Autentikasi login multi-role / hak akses admin',
        'Operasi database CRUD & reporting data',
        'Integrasi API pihak ketiga (payment gateway/resi pengiriman)',
        'Deployment server Cloud VPS khusus & backup otomatis'
      ],
      limitation: 'Hanya ambil jika spesifikasi teknis dan biaya disepakati jelas dalam kontrak formal.'
    }
  ],

  maintenanceTiers: [
    {
      id: 'basic-care',
      name: 'Basic Care',
      badge: 'Paling Terjangkau',
      isHero: false,
      price: 'Rp150.000',
      period: '/bulan',
      target: 'Klien yang ingin website selalu aman dan terpantau tanpa pusing teknis.',
      features: [
        'Pemeriksaan status website berkala (uptime check)',
        'Pencadangan data & database bulanan (monthly backup)',
        'Pembaruan versi minor platform & patch keamanan',
        'Respons bantuan teknis dalam 24-48 jam kerja'
      ]
    },
    {
      id: 'standard-care',
      name: 'Standard Care',
      badge: 'Paling Diminati (Best Value)',
      isHero: true,
      price: 'Rp300.000',
      period: '/bulan',
      target: 'Klien UMKM aktif yang rutin ganti promo atau update konten teks/foto.',
      features: [
        'Semua fitur dalam paket Basic Care',
        'Kuota perbaikan minor & update konten (maks 2 jam/bulan)',
        'Pencadangan dua mingguan (bi-weekly backup)',
        'Pemeriksaan kecepatan halaman & broken link',
        'Prioritas respons bantuan dalam 12-24 jam'
      ]
    },
    {
      id: 'managed-care',
      name: 'Managed Care',
      badge: 'Prioritas Penuh',
      isHero: false,
      price: 'Rp500.000',
      period: '/bulan',
      target: 'Bisnis yang mengandalkan website untuk perolehan calon pelanggan harian.',
      features: [
        'Semua fitur dalam paket Standard Care',
        'Pencadangan mingguan rutin (weekly backup)',
        'Monitoring uptime intensif & optimasi performa berkala',
        'Laporan performa traffic bulanan ringkas',
        'Respons darurat prioritas utama (urgent support response)'
      ]
    }
  ],

  capitalAllocation: [
    { name: '1. Domain Brand Agensi Resmi (.id / .com)', amount: 200000, percent: 10, color: '#38BDF8' },
    { name: '2. Shared Hosting Website Sendiri & Demo', amount: 200000, percent: 10, color: '#A855F7' },
    { name: '3. Promosi, Cetak Proposal, & Direct Outreach', amount: 400000, percent: 20, color: '#10B981' },
    { name: '4. Software / Tools Pendukung', amount: 200000, percent: 10, color: '#F59E0B' },
    { name: '5. Cadangan Dana Kas Likuid Darurat', amount: 1000000, percent: 50, color: '#10B981', isEmergency: true }
  ],

  partnerRaci: {
    partnerA: {
      title: 'Partner A — Technical Lead',
      subtitle: 'Delivery, Arsitektur Web & Infrastruktur Server',
      color: '#0284C7',
      tasks: [
        { label: 'Coding & Desain UI', desc: 'Mengembangkan tampilan responsif dan alur antarmuka website.' },
        { label: 'Infrastruktur Server', desc: 'Konfigurasi domain, DNS, sertifikat SSL, dan deployment hosting.' },
        { label: 'Quality & Security', desc: 'Pengujian lintas perangkat (HP & Laptop) dan implementasi backup.' },
        { label: 'Estimasi Jam Kerja', desc: 'Memberi kepastian estimasi waktu pengerjaan proyek kepada Partner B.' },
        { label: 'Dokumentasi Singkat', desc: 'Menyiapkan panduan singkat penggunaan website untuk diserahterimakan.' }
      ]
    },
    partnerB: {
      title: 'Partner B — Commercial Lead',
      subtitle: 'Marketing, Penjualan & Client Relationship',
      color: '#059669',
      tasks: [
        { label: 'Pencarian Prospek', desc: 'Memetakan 30 UMKM lokal di Google Maps dan media sosial sekitar.' },
        { label: 'Pitching & Edukasi', desc: 'Melakukan direct outreach secara personal dan memperlihatkan demo website.' },
        { label: 'Proposal & Penagihan', desc: 'Menyusun dokumen penawaran harga dan memastikan DP 50% masuk.' },
        { label: 'Manajemen Ekspektasi', desc: 'Menjaga batasan permintaan klien agar tidak melenceng dari SOW.' },
        { label: 'Closing & Retainer', desc: 'Mengumpulkan ulasan positif klien dan menawarkan paket pemeliharaan berkala.' }
      ]
    }
  },

  partnershipClauses: [
    { num: 1, title: 'Kepemilikan Aset Agensi', desc: 'Domain brand, source code template, dan akun resmi dimiliki bersama atas nama entitas agensi, bukan akun pribadi.' },
    { num: 2, title: 'Sistem Bagi Hasil Proyek', desc: 'Pisahkan antara "upah pengerjaan proyek" (berdasarkan jam kerja teknis/sales) dan "laba dividen bersih" di kas cadangan.' },
    { num: 3, title: 'Otoritas Pengeluaran Dana', desc: 'Pengeluaran kas di atas Rp200.000 wajib disetujui bersama secara tertulis melalui pesan chat kedua partner.' },
    { num: 4, title: 'Tanggung Jawab Keterlambatan', desc: 'Jika terjadi keterlambatan karena salah satu partner lalai, disepakati kompensasi jam pengganti tanpa saling menyalahkan.' },
    { num: 5, title: 'Klausul Exit Partner', desc: 'Jika salah satu partner berhenti, klien lama tetap di bawah agensi dan terdapat mekanisme transisi serah terima yang damai.' }
  ],

  roadmapWeeks: [
    {
      week: 'Minggu 1',
      title: 'Fondasi & Legalitas',
      tasks: [
        { id: 'w1-1', label: 'Tentukan nama agensi & periksa ketersediaan domain' },
        { id: 'w1-2', label: 'Beli domain brand resmi (.id atau .com)' },
        { id: 'w1-3', label: 'Tandatangani surat kesepakatan tertulis kedua partner' },
        { id: 'w1-4', label: 'Sepakati paket harga final & aturan wajib DP 50%' }
      ]
    },
    {
      week: 'Minggu 2',
      title: 'Aset Etalase (Demo)',
      tasks: [
        { id: 'w2-1', label: 'Bangun website portofolio resmi agensi sendiri' },
        { id: 'w2-2', label: 'Buat Demo 1: Landing Page Jasa Laundry / Bengkel di HP' },
        { id: 'w2-3', label: 'Buat Demo 2: Company Profile Kontraktor / Toko Lokal' },
        { id: 'w2-4', label: 'Siapkan template draf proposal, invoice DP, dan kuitansi' }
      ]
    },
    {
      week: 'Minggu 3',
      title: 'Prospeksi & Outreach',
      tasks: [
        { id: 'w3-1', label: 'Kumpulkan daftar 30 UMKM lokal via Google Maps & Instagram' },
        { id: 'w3-2', label: 'Kirim pesan personal ke 10 kontak tertarget setiap 2 hari' },
        { id: 'w3-3', label: 'Lakukan 3–5 sesi konsultasi singkat / chat dengan pemilik usaha' },
        { id: 'w3-4', label: 'Kirim 2 proposal paket Business ke calon klien yang berminat' }
      ]
    },
    {
      week: 'Minggu 4',
      title: 'Closing & Delivery',
      tasks: [
        { id: 'w4-1', label: 'Dapatkan Klien #1 (DP 50% cair di rekening usaha)' },
        { id: 'w4-2', label: 'Selesaikan pengerjaan tepat waktu sesuai Scope of Work' },
        { id: 'w4-3', label: 'Terima pelunasan 50% sebelum serah terima website live' },
        { id: 'w4-4', label: 'Minta ulasan Google positif & tawarkan paket maintenance bulanan' }
      ]
    }
  ],

  redFlags: [
    {
      id: 1,
      type: 'danger',
      title: 'Scope Creep (Revisi Tanpa Batas)',
      scenario: 'Klien meminta revisi terus-menerus, menambah halaman, atau minta fitur baru di luar kesepakatan awal tanpa bayaran tambahan.',
      solution: 'Buat lembar ruang lingkup (Scope of Work / SOW) tertulis. Nyatakan tegas: "Maksimal 2-3x revisi minor. Permintaan halaman atau fitur tambahan dikenakan biaya Rp150.000–300.000/fitur."'
    },
    {
      id: 2,
      type: 'danger',
      title: 'Klien Menunda Pelunasan Sisa 50%',
      scenario: 'Website sudah dipasang di domain utama klien, lalu klien sulit dihubungi atau menunda pembayaran sisa pelunasan 50%.',
      solution: 'Selama masa peninjauan, tampilkan website hanya di sub-domain staging milik agensi Anda. Jangan pindahkan ke domain utama atau berikan akses cPanel sebelum pembayaran 100% lunas.'
    },
    {
      id: 3,
      type: 'warning',
      title: 'Proyek Mandek Karena Klien Lambat Kirim Konten',
      scenario: 'Klien tidak kunjung mengirim foto produk, teks tentang kami, atau logo sehingga proyek tertahan berbulan-bulan.',
      solution: 'Siapkan draf teks standar (starter copy). Masukkan klausul: Jika klien tidak mengirimkan materi dalam 7 hari kerja, agensi berhak mengisi materi standar dan proyek dianggap selesai diserahterimakan.'
    },
    {
      id: 4,
      type: 'warning',
      title: 'Menjanjikan Uptime / Keamanan Mutlak',
      scenario: 'Server penyedia hosting pihak ketiga mengalami down atau serangan, lalu klien menuntut ganti rugi bisnis kepada agensi Anda.',
      solution: 'Cantumkan dalam kontrak: "Infrastruktur server disediakan oleh provider pihak ketiga berlisensi. Tanggung jawab agensi adalah konfigurasi teknis, pemantauan berkala, dan pemulihan backup data."'
    }
  ],

  whatsappTemplate: `Halo Kak [Nama Pemilik Usaha], salam kenal! Saya dari [Nama Agensi Anda].

Saya perhatikan usaha Kakak di [Nama Usaha] sangat menarik dan punya ulasan pelanggan yang bagus di Google Maps.

Saat ini banyak calon pelanggan mencari info layanan lengkap dan menu harga via Google sebelum berkunjung. Kami sempat membuatkan contoh konsep website sederhana khusus usaha seperti milik Kakak agar pelanggan bisa langsung klik hubungi via WhatsApp:

👉 [Tautan Demo Website Anda]

Jika Kakak berkenan, kami siap bantu buatkan website resmi untuk [Nama Usaha] dengan paket ramah UMKM yang praktis dan terima beres. Tidak harus langsung ambil keputusan kok, Kak. Boleh kami kirimkan info singkatnya?

Terima kasih banyak, Kak 🙏`
};
