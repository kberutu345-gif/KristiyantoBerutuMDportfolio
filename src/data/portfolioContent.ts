export type Lang = 'en' | 'id';

export type SectionId =
  | 'overview'
  | 'hack2skill'
  | 'qit-kia'
  | 'capabilities'
  | 'credentials'
  | 'contact';

export const ASSETS = {
  suitPortrait:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBtdAh7pEHmyYjkcba4B5yTXenxUd9A0udzQ9DfPswMHCApN9GjmXFHUormS50XiHSn3njkAWBUueAO7HmavEQSn-qB6ccPmcsHXLcEVbPTRnNFW_2y97DoJXoOMZStCE0LHgBVoOjB03QLDk_5M1yM_Gc0zAnKhNQb2SoivV7_mjS9nXgk7qwc88Sn8VRt5zbAjz4rAqwRT4fBMJUkZYORdWVb44R3yXRY7x9X8AnAdIxg9gVcDDs',
  clinicalCoatPortrait:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB5wt_QtoTKpy6gqLdvG3W2oadMGG0X3wRGQ8zV7LBUIlyBAt1FrocgDHAS0NP3u5LZ364Y6FspnaFTLstnUc7wfAZnk8x1T_OyHu-4fgRVnNkYOGL2cE0N3QM6pLVFkWBX0ce9CcIIVCHibatSxKpiiSwrQ6XpYeYYs0iEBgcMKfI9I_oVQ8xDYnv-8a3Yw5LK6KHTSfjXGp6uRoFS4Kn3N017XFzUDJwgQQXc1ltWzlL2ZYnIKDs',
  demoVideoThumbnail:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCsIU49CSjnWpvU_33jl7J1KhXEjpAp3NDISKrJDuTqmxnZvt8Xk3Pik-LmlpeWbhUaFvM-Mj178lI5vLqiMAD2UE-SeoQtEkCs1FvVhWRrIwKpGYKaZgc-YRw1Keox-zwfnV4vIShLiHts65wJ9YtriIMWzmoSFeH2ATZF5HCohoKq2WDP7TVXZFQeoaAuSWkK785nK62N92FhNyQXzf1onb6zx2zrO-KseqnoBA',
} as const;

export const LINKS = {
  linkedin: 'https://www.linkedin.com/in/kristiyanto-berutu-md/',
  whatsapp: 'https://wa.me/6281364116115',
  email: 'kberutu345@gmail.com',
  youtubeUrl: 'https://youtu.be/ejm3rMdjuno',
  youtubeEmbedUrl: 'https://www.youtube.com/embed/ejm3rMdjuno?autoplay=1&rel=0',
  guestPrototype:
    'https://script.google.com/macros/s/AKfycbwc7e6eDVrpUImKC4-5jpy8Q2yZscYIkEYIPRlDIOabGMILo9jG1qwY52T7gATv7LLycQ/exec',
  pitchDeck:
    'https://storage.googleapis.com/vision-hack2skill-production/innovator/USER01502569/1795188640299-H2SDeckNewbornScreeningCaseEngine6.pdf',
  technicalDocs:
    'https://drive.google.com/file/d/1DMfVbklvQy-wRvoNwKFQhvJmormpl9aJ/view?usp=sharing',
  ruleEngineScript:
    'https://script.google.com/macros/s/AKfycbw9MHOECXVs37UB54pjY7xfTPSndYQByRcWCr15aqgU_vUPiu10jbxyowzNKw9GIhn5uw/exec',
} as const;

export interface BilingualText {
  en: string;
  id: string;
}

export const NAV_ITEMS: { id: SectionId; label: BilingualText }[] = [
  { id: 'overview', label: { en: 'Overview', id: 'Ikhtisar' } },
  {
    id: 'hack2skill',
    label: { en: 'Hack2skill Project', id: 'Proyek Skrining Bayi' },
  },
  { id: 'qit-kia', label: { en: 'QIT KIA', id: 'QIT KIA' } },
  {
    id: 'capabilities',
    label: { en: 'QI & Coaching', id: 'Peningkatan Mutu & Pelatihan' },
  },
  { id: 'credentials', label: { en: 'Credentials', id: 'Kredensial' } },
];

export const HERO_METRICS: {
  kicker: BilingualText;
  value: BilingualText;
  description: BilingualText;
}[] = [
  {
    kicker: { en: 'Public Health Practice', id: 'Praktik Kesehatan Masyarakat' },
    value: { en: '20+ Years', id: '20+ Tahun' },
    description: {
      en: 'Frontline Maternal & Child Health Lead (Cluster 2) across rural Indonesian puskesmas networks.',
      id: 'Dokter Garis Depan & PJ Klaster 2 KIA di jejaring puskesmas pedesaan Indonesia.',
    },
  },
  {
    kicker: { en: 'Institutional Governance', id: 'Tata Kelola Institusi' },
    value: { en: 'Paripurna (2023)', id: 'Paripurna (2023)' },
    description: {
      en: 'Awarded highest-tier national primary care accreditation for Klinik Pratama Cagak as Director & Founder.',
      id: 'Penghargaan akreditasi fasilitas kesehatan primer tingkat nasional tertinggi sebagai Direktur & Pendiri Klinik Pratama Cagak.',
    },
  },
  {
    kicker: { en: 'Flagship Digital Architecture', id: 'Arsitektur Digital Unggulan' },
    value: { en: '2 Operational Systems', id: '2 Sistem Operasional' },
    description: {
      en: 'Follow-Up Case Engine v6.4b (Zero-AI Hallucination) & QIT KIA Intrapartum Safety Framework.',
      id: 'Engine Tindak Lanjut Kasus v6.4b (Bebas Halusinasi AI) & Kerangka Keselamatan Kamar Bersalin QIT KIA.',
    },
  },
];

export const HACK2SKILL_PILLARS: {
  tag: BilingualText;
  icon: string;
  accent: 'tertiary' | 'primary';
  title: BilingualText;
  body: BilingualText;
  calloutLabel: BilingualText;
  calloutText: BilingualText;
}[] = [
  {
    tag: { en: 'Pillar 01', id: 'Pilar 01' },
    icon: 'alarm_off',
    accent: 'tertiary',
    title: { en: 'The Day-108 Frontline Gap', id: 'Kesenjangan Hari ke-108' },
    body: {
      en: 'In Indonesian primary care newborn screening for Congenital Hypothyroidism (SHK) and G6PD deficiency, positive or borderline lab results are safely stored in central databases yet often sit without an assigned health worker owner, concrete countdown deadline, or mandated notification audit.',
      id: 'Pada skrining bayi baru lahir (SHK / Hipotiroid Kongenital dan defisiensi G6PD) di layanan primer, hasil positif atau meragukan tersimpan aman di basis data pusat namun sering tertahan tanpa penanggung jawab tugas terpetakan, tenggat waktu konkret, maupun audit notifikasi wajib.',
    },
    calloutLabel: { en: 'Empirical Reality: ', id: 'Kenyataan Empiris: ' },
    calloutText: {
      en: 'A simulated G6PD field report in Cianjur demonstrated an infant was first contacted on Day 108 post-specimen collection—far beyond the critical therapeutic window.',
      id: 'Simulasi kasus lapangan G6PD di Cianjur memperlihatkan kontak keluarga baru terlaksana pada Hari ke-108 pasca-pengambilan sampel darah — jauh melampaui jendela terapi kritis.',
    },
  },
  {
    tag: { en: 'Pillar 02', id: 'Pilar 02' },
    icon: 'lock_person',
    accent: 'primary',
    title: {
      en: 'Thin Safety Layer Over National Systems',
      id: 'Lapisan Pelindung Tipis di Atas Sistem Nasional',
    },
    body: {
      en: 'Designed as a non-invasive procedural overlay running above national registries (ASIK & SIRENE). Operates entirely using anonymous generated case tokens with strict client-side PII rejection—immediately discarding names, national identity numbers (NIK), and phone numbers.',
      id: 'Dirancang sebagai alur kerja prosedural non-invasif yang beroperasi di atas registri nasional (ASIK & SIRENE). Beroperasi sepenuhnya dengan token kasus anonim dan penolakan otomatis data pribadi (langsung membuang nama pasien, NIK/identitas, dan nomor telepon seluler).',
    },
    calloutLabel: { en: 'Workflow Engine: ', id: 'Mesin Alur Kerja: ' },
    calloutText: {
      en: 'Orchestrates 8 distinct operational statuses across SHK and G6PD workflows with locked clinical roles and verification timestamps.',
      id: 'Mengatur 8 status operasional berbeda pada jalur SHK dan G6PD dengan verifikasi peran penanggung jawab dan stempel waktu konkret.',
    },
  },
  {
    tag: { en: 'Pillar 03', id: 'Pilar 03' },
    icon: 'psychology',
    accent: 'primary',
    title: {
      en: 'Deterministic Zero-Hallucination Guardrails',
      id: 'Guardrail Deterministik Bebas-Halusinasi',
    },
    body: {
      en: 'The engine rejects black-box neural networks at runtime. It runs a mathematically locked rule engine (Frozen Rule Engine v5) underlying the v6.4b interface. Flags trigger automatically at 75% elapsed SLA time, escalating in red to the supervisory medical officer when overdue.',
      id: 'Sistem menolak tegas penggunaan jaringan saraf AI (black-box) saat runtime. Berjalan menggunakan mesin logika deterministik terverifikasi (Frozen Rule Engine v5). Menyalakan flag peringatan kuning pada 75% batas SLA waktu, meningkat menjadi eskalasi red flag ke pejabat medis penanggung jawab saat melampaui batas waktu.',
    },
    calloutLabel: { en: 'Clinical Defense Line: ', id: 'Garis Pertahanan Klinis: ' },
    calloutText: {
      en: 'Abnormal clinical screening results can never be auto-dismissed without explicit cryptographic MD sign-off and Sundanese/Indonesian consent receipt.',
      id: 'Hasil skrining abnormal tidak dapat ditutup secara otomatis tanpa persetujuan bertanda tangan kriptografis dari dokter penanggung jawab dan lembar persetujuan (informed consent) berbahasa Sunda/Indonesia.',
    },
  },
  {
    tag: { en: 'Pillar 04', id: 'Pilar 04' },
    icon: 'checklist_rtl',
    accent: 'tertiary',
    title: {
      en: 'Verification & Radical Honesty',
      id: 'Verifikasi & Kejujuran Ilmiah Radikal',
    },
    body: {
      en: 'Unlike theoretical conceptual designs, this engine has cleared 141 rigorous unit-level logic tests and a 1,200-cycle randomized load test with zero structural violations. Grounded by operational input gathered from primary healthcare staff across 33 puskesmas in Cianjur regency.',
      id: 'Tidak seperti desain konsep teoritis lainnya, engine ini telah melampaui 141 pengujian logika berulang dan uji beban acak 1.200 siklus dengan 0 pelanggaran struktural. Divalidasi langsung berdasarkan data input operasional dari 33 puskesmas di Kabupaten Cianjur.',
    },
    calloutLabel: { en: 'Deployment Status: ', id: 'Status Implementasi: ' },
    calloutText: {
      en: 'Functional prototype operating on 30 synthetic longitudinal cases; 3-month field pilot queued pending formal district health office approval.',
      id: 'Prototipe fungsional aktif pada 30 kasus longitudinal simulasi; uji coba lapangan (pilot) 3 bulan menunggu persetujuan tertulis dinas kesehatan daerah.',
    },
  },
];

export const EVIDENCE_LINKS: {
  icon: string;
  accent: 'primary' | 'tertiary';
  label: BilingualText;
  href: string;
}[] = [
  {
    icon: 'open_in_new',
    accent: 'primary',
    label: {
      en: 'Launch Guest Prototype v6.4b',
      id: 'Luncurkan Prototipe Akses Tamu (v6.4b)',
    },
    href: LINKS.guestPrototype,
  },
  {
    icon: 'picture_as_pdf',
    accent: 'primary',
    label: {
      en: 'View Solution Pitch Deck (PDF)',
      id: 'Lihat Dokumen Paparan Solusi (PDF)',
    },
    href: LINKS.pitchDeck,
  },
  {
    icon: 'description',
    accent: 'primary',
    label: {
      en: 'Technical Documentation (EN PDF)',
      id: 'Dokumentasi Teknis Lengkap (PDF)',
    },
    href: LINKS.technicalDocs,
  },
  {
    icon: 'terminal',
    accent: 'tertiary',
    label: {
      en: 'Frozen Rule Engine v5 (Script Endpoint)',
      id: 'Referensi Skrip Rule Engine v5',
    },
    href: LINKS.ruleEngineScript,
  },
];

export const QIT_KIA_MODULES: {
  code: BilingualText;
  icon: string;
  accent: 'primary' | 'tertiary';
  title: BilingualText;
  body: BilingualText;
  tags: BilingualText[];
}[] = [
  {
    code: { en: 'MODULE 01', id: 'MODUL 01' },
    icon: 'meeting_room',
    accent: 'primary',
    title: {
      en: 'Delivery Room Management & Admission Screening',
      id: 'Manajemen Kamar Bersalin & Skrining Admisi',
    },
    body: {
      en: 'Standardizes risk stratification from minute one of admission. Systematically identifies high-risk obstetric conditions at the primary triage boundary, guaranteeing that referral transfers are arranged before decompensation occurs.',
      id: 'Standarisasi penapisan risiko persalinan sejak menit pertama admisi. Memilah kondisi obstetri berisiko tinggi secara sistematis pada triase primer, menjamin rujukan telah dipersiapkan sebelum terjadi dekompensasi klinis.',
    },
    tags: [
      { en: 'Triage Stratification', id: 'Stratifikasi Triase' },
      { en: 'Bedside Check', id: 'Pemeriksaan Tepi Ranjang' },
      { en: 'Admission SLA', id: 'SLA Admisi' },
    ],
  },
  {
    code: { en: 'MODULE 02', id: 'MODUL 02' },
    icon: 'emergency',
    accent: 'tertiary',
    title: {
      en: 'Postpartum Hemorrhage (HPP) & Birth Asphyxia Preparedness',
      id: 'Kesiapsiagaan Perdarahan Pascapersalinan (HPP) & Asfiksia Neonatorum',
    },
    body: {
      en: 'Standardized readiness checklists and rapid escalation pathways for the two leading killers in primary obstetrics. Pre-positions uterotonics, balloon tamponade packs, neonatal resuscitation bags, and suction circuits in high-alert configurations.',
      id: 'Daftar tilik kesiapsiagaan terstandarisasi dan jalur eskalasi respons cepat untuk dua penyebab kematian utama pada persalinan primer. Penempatan awal uterotonika, balon tamponade, sungkup resusitasi neonatus, dan sirkuit suction siap pakai.',
    },
    tags: [
      { en: 'HPP Emergency Kit', id: 'Perangkat Darurat HPP' },
      { en: 'Bag-Valve-Mask Ready', id: 'Kesiapan Balon Sungkup' },
      { en: 'Golden Minute Audit', id: 'Audit Waktu Emas Menit Pertama' },
    ],
  },
  {
    code: { en: 'MODULE 03', id: 'MODUL 03' },
    icon: 'monitoring',
    accent: 'primary',
    title: {
      en: 'Intrapartum Monitoring & Early Warning (Partograph, VSS & PERT)',
      id: 'Pemantauan Persalinan & Peringatan Dini (Partograf, VSS & PERT)',
    },
    body: {
      en: 'Couples mandatory Partograph progress checkpoints with maternal Vital Sign Scoring (VSS) and Preeclampsia Early Recognition & Treatment (PERT) triggers, converting dead paper records into immediate clinical decisions.',
      id: 'Mengintegrasikan pencatatan kemajuan persalinan Partograf dengan Skor Tanda Vital Maternal (VSS) dan Deteksi & Penanganan Dini Preeklampsia (PERT), mengubah catatan rekam medis statis menjadi keputusan klinis intervensi aktif.',
    },
    tags: [
      { en: 'Action-Line Enforcement', id: 'Penegakan Jalur Tindakan' },
      { en: 'MgSO4 Protocol', id: 'Protokol MgSO4' },
      { en: 'VSS Vital Warning', id: 'Peringatan Dini VSS' },
    ],
  },
  {
    code: { en: 'MODULE 04', id: 'MODUL 04' },
    icon: 'groups',
    accent: 'primary',
    title: {
      en: 'Cluster 2 Audit & Team Feedback Loop',
      id: 'Audit Klaster 2 & Umpan Balik Tim',
    },
    body: {
      en: 'Synthesizes delivery room documentation into monthly peer-led audit cycles across the Puskesmas Cluster 2 jurisdiction. Village midwives and labor nurses evaluate missed clinical signs without fear of punitive measures.',
      id: 'Mengolah dokumentasi kamar bersalin menjadi siklus audit bulanan berbasis tim di seluruh Klaster 2 Puskesmas. Bidan desa dan perawat kamar bersalin mengevaluasi bersama tanda klinis yang terlewat tanpa pendekatan saling menyalahkan (non-punitive).',
    },
    tags: [
      { en: 'Monthly Case Review', id: 'Tinjauan Kasus Bulanan' },
      { en: 'Midwife Peer Coaching', id: 'Bimbingan Klinis Bidan' },
      { en: 'Non-Punitive QI', id: 'Peningkatan Mutu Non-Punitive' },
    ],
  },
];

export const CAPABILITIES_LIST: {
  code: BilingualText;
  title: BilingualText;
  body: BilingualText;
  icon: string;
  badge: BilingualText;
}[] = [
  {
    code: { en: 'CAPABILITY 01', id: 'KEMAMPUAN 01' },
    title: {
      en: 'Primary Care QI Collaborative & Cluster 2 Leadership',
      id: 'Kolaborasi Peningkatan Mutu Layanan Primer & Kepemimpinan Klaster 2',
    },
    body: {
      en: 'Serving as Cluster 2 Lead at UPTD Puskesmas Haurwangi since 2019, orchestrating maternal, infant, and child public health operations. Overseeing rural village midwife networks (Bidan Desa), executing field compliance audits, and driving perinatal mortality reviews with regional health authorities.',
      id: 'Menjabat sebagai Penanggung Jawab Klaster 2 di UPTD Puskesmas Haurwangi sejak 2019, mengoordinasikan operasional kesehatan ibu dan anak. Membina jaringan bidan desa, melaksanakan audit kepatuhan lapangan, dan memimpin tinjauan audit perinatal bersama dinas kesehatan.',
    },
    icon: 'verified',
    badge: {
      en: 'UPTD Puskesmas Haurwangi (2019–Present)',
      id: 'UPTD Puskesmas Haurwangi (2019–Sekarang)',
    },
  },
  {
    code: { en: 'CAPABILITY 02', id: 'KEMAMPUAN 02' },
    title: {
      en: 'Clinic Ownership, Governance & Paripurna Accreditation',
      id: 'Kepemilikan Klinik, Tata Kelola & Akreditasi Paripurna',
    },
    body: {
      en: 'Founder & Medical Director of Klinik Pratama Cagak since 2017. Fully contracted under BPJS Kesehatan with an integrated pharmaceutical dispensary, handling an average of 20 daily primary patient encounters. Spearheaded the comprehensive operational overhaul that secured Akreditasi Paripurna (Highest National Clinic Accreditation) in 2023.',
      id: 'Pendiri & Direktur Medis Klinik Pratama Cagak sejak 2017. Bekerja sama penuh dengan BPJS Kesehatan dilengkapi instalasi farmasi mandiri, melayani rata-rata 20 kontak pasien primer per hari. Memimpin restrukturisasi operasional menyeluruh yang meraih Akreditasi Paripurna tingkat nasional pada 2023.',
    },
    icon: 'workspace_premium',
    badge: {
      en: 'Akreditasi Paripurna Verified (2023)',
      id: 'Terverifikasi Akreditasi Paripurna (2023)',
    },
  },
  {
    code: { en: 'CAPABILITY 03', id: 'KEMAMPUAN 03' },
    title: {
      en: 'Workforce Teaching, Simulation & Management Coaching',
      id: 'Pendidikan Tenaga Kesehatan, Simulasi & Pendampingan Manajemen',
    },
    body: {
      en: 'Directing community medical student rotations as an accredited primary care teaching facility for Universitas Padjadjaran Faculty of Medicine. Training mid-level practitioners, nurses, and clinic administrators in triage protocols, infection control, electronic health record workflows, and patient safety doctrine.',
      id: 'Membimbing rotasi kepaniteraan mahasiswa kedokteran komunitas sebagai wahana pendidikan primer Fakultas Kedokteran Universitas Padjadjaran. Melatih nakes, perawat, dan staf manajemen dalam triase, PPI, rekam medis elektronik, serta doktrin keselamatan pasien.',
    },
    icon: 'school',
    badge: {
      en: 'Clinical Faculty Partner (FK Unpad)',
      id: 'Mitra Pendidik Klinis (FK Unpad)',
    },
  },
  {
    code: { en: 'CAPABILITY 04', id: 'KEMAMPUAN 04' },
    title: {
      en: 'Ethical Health Communication & Digital Clinic Growth',
      id: 'Komunikasi Kesehatan Etis & Pertumbuhan Klinik Digital',
    },
    body: {
      en: 'Architecting patient-centered digital health communications that build genuine community literacy without commercial sensationalism. Leveraging data-informed preventive campaigns, maternal appointment adherence loops, and dignified access models tailored to peri-urban populations.',
      id: 'Merancang komunikasi kesehatan digital berpusat pada pasien yang membangun literasi komunitas tanpa sensasionalisme komersial. Memanfaatkan kampanye preventif berbasis data, kepatuhan janji temu ibu hamil, dan akses bermartabat bagi masyarakat peri-urban.',
    },
    icon: 'campaign',
    badge: {
      en: 'Evidence-Based Community Engagement',
      id: 'Pemberdayaan Komunitas Berbasis Bukti',
    },
  },
];

export const CERTIFICATIONS: BilingualText[] = [
  {
    en: 'ATLS (Trauma Life Support)',
    id: 'ATLS (Bantuan Hidup Lanjut Trauma)',
  },
  {
    en: 'ACLS (Cardiac Life Support)',
    id: 'ACLS (Bantuan Hidup Jantung Lanjut)',
  },
  {
    en: 'GELS (General Emergency Life Support)',
    id: 'GELS (Layanan Gawat Darurat Umum)',
  },
  {
    en: 'MTBS / MTBM (Integrated Pediatric Management)',
    id: 'MTBS / MTBM (Manajemen Terpadu Balita Sakit/Muda)',
  },
  {
    en: 'Basic Obstetric & Gynecologic Ultrasound',
    id: 'USG Obstetri & Ginekologi Dasar',
  },
  {
    en: 'IVA Cervical Screening',
    id: 'Pemeriksaan IVA (Deteksi Kanker Leher Rahim)',
  },
];

export const FOCUS_AREA_OPTIONS: { value: string; label: BilingualText }[] = [
  {
    value: 'Sistem Skrining Bayi / Closed-Loop',
    label: {
      en: 'Remote QI Advisory (Maternal & Child Health)',
      id: 'Sistem Skrining Bayi / Closed-Loop',
    },
  },
  {
    value: 'Peningkatan Mutu KIA & Kamar Bersalin',
    label: {
      en: 'Clinical Workflow Architecture & Closed-Loop Design',
      id: 'Peningkatan Mutu KIA & Kamar Bersalin',
    },
  },
  {
    value: 'Arsitektur Alur Kerja HealthTech',
    label: {
      en: 'HealthTech Workflow & Clinical Governance Architecture',
      id: 'Arsitektur Alur Kerja HealthTech',
    },
  },
  {
    value: 'Pelatihan & Akreditasi Fasilitas Kesehatan',
    label: {
      en: 'Healthcare Quality Training & Accreditation Preparation',
      id: 'Pelatihan & Akreditasi Fasilitas Kesehatan',
    },
  },
  {
    value: 'Konsultasi Strategis / Lainnya',
    label: {
      en: 'Other Strategic Partnership',
      id: 'Konsultasi Strategis / Lainnya',
    },
  },
];
