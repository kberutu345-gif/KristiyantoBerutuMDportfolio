import { useState } from 'react';
import { ASSETS, HERO_METRICS, type Lang, type SectionId } from '../data/portfolioContent';

interface HeroSectionProps {
  lang: Lang;
  onLanguageChange: (lang: Lang) => void;
  onNavigate: (id: SectionId) => void;
}

export function HeroSection({
  lang,
  onLanguageChange,
  onNavigate,
}: HeroSectionProps) {
  const [portraitFailed, setPortraitFailed] = useState(false);

  return (
    <section
      className="w-full bg-surface-dark text-on-secondary px-gutter-mobile lg:px-gutter py-space-xl"
      id="overview"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        {/* Live Status Bar & Language Switch */}
        <div className="flex flex-wrap items-center justify-between gap-space-sm">
          <div className="flex flex-wrap items-center gap-space-sm">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-dark-elevated text-primary-fixed font-mono text-label-mono-sm shadow-sm">
              <span
                className="w-2 h-2 rounded-full bg-primary-fixed animate-pulse shrink-0"
                aria-hidden="true"
              />
              <span>
                {lang === 'id'
                  ? 'KOLABORASI PENINGKATAN MUTU LAYANAN PRIMER • KESEHATAN IBU & ANAK • KONSULTASI JARAK JAUH (UTC+7)'
                  : 'PRIMARY CARE QI COLLABORATIVE • MATERNAL & CHILD HEALTH • REMOTE ADVISORY (UTC+7)'}
              </span>
            </div>

            <div
              className="inline-flex items-center p-1 rounded-full bg-surface-dark-elevated shadow-sm font-mono text-label-mono-sm gap-1 border border-surface-dark"
              role="group"
              aria-label="Hero language switcher"
            >
              <span className="text-secondary-fixed-dim px-2 flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">translate</span>
                <span className="hidden sm:inline">
                  {lang === 'id' ? 'Bahasa:' : 'Language:'}
                </span>
              </span>
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                aria-pressed={lang === 'en'}
                className={`px-2.5 py-0.5 rounded-full font-medium transition-colors cursor-pointer ${
                  lang === 'en'
                    ? 'bg-primary text-on-primary shadow-sm'
                    : 'text-secondary-fixed-dim hover:text-on-secondary'
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('id')}
                aria-pressed={lang === 'id'}
                className={`px-2.5 py-0.5 rounded-full font-medium transition-colors cursor-pointer ${
                  lang === 'id'
                    ? 'bg-primary text-on-primary shadow-sm'
                    : 'text-secondary-fixed-dim hover:text-on-secondary'
                }`}
              >
                Bahasa Indonesia
              </button>
            </div>
          </div>

          <div className="font-mono text-label-mono-sm text-secondary-fixed-dim">
            {lang === 'id'
              ? 'Nomor Rujukan Monograf: KB-2026-CLIN-GOV'
              : 'Ref. Monograph ID: KB-2026-CLIN-GOV'}
          </div>
        </div>

        {/* Main Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-stretch">
          {/* Left Bento: The Clinical Thesis & Comparison (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-space-xl bg-surface-dark-elevated rounded-xl shadow-md">
            <div className="flex flex-col gap-space-md">
              <span className="font-mono text-label-mono-md text-primary-fixed uppercase tracking-wider">
                {lang === 'id'
                  ? 'ARSITEKTUR TATA KELOLA KLINIS & SISTEM KESEHATAN'
                  : 'Clinical Governance & Health Systems Architecture'}
              </span>

              <h1 className="font-display font-extrabold text-display-hero-mobile lg:text-display-hero text-on-secondary tracking-tight text-balance">
                {lang === 'id'
                  ? 'Hasil Lab Tercatat Tidak Menyelamatkan Bayi. Sistem Closed-Loop yang Menyelamatkan.'
                  : "A Recorded Lab Result Doesn't Save a Baby. A Closed Loop Does."}
              </h1>

              <p className="font-display text-headline-sm text-secondary-fixed-dim font-medium">
                {lang === 'id'
                  ? 'dr. Kristiyanto Berutu, M.M. — Dokter Garis Depan (PJ Klaster 2) & Direktur Klinik Terakreditasi Paripurna'
                  : 'Kristiyanto Berutu, MD, MM — Frontline Physician (Cluster 2 Lead) & Paripurna-Accredited Clinic Director'}
              </p>

              <p className="font-body text-body-md text-secondary-fixed-dim max-w-2xl">
                {lang === 'id'
                  ? 'Menjembatani 20+ tahun layanan primer garis depan dengan alur kerja digital praktis bebas-halusinasi yang menutup kesenjangan keselamatan pasien pada layanan kesehatan ibu dan anak di negara berkembang.'
                  : 'Bridging 20+ years of frontline primary care governance with practical, zero-hallucination digital workflows that close patient-safety gaps across low- and middle-income country maternal-infant health tracks.'}
              </p>
            </div>

            {/* Frontline Gap vs Closed-Loop Comparison Panel */}
            <div className="mt-space-lg p-space-md rounded-lg bg-surface-dark text-on-secondary flex flex-col gap-space-sm shadow-sm">
              <div className="flex items-start gap-space-sm text-tertiary-fixed">
                <span className="material-symbols-outlined text-[20px] shrink-0 text-tertiary-fixed-dim mt-0.5">
                  report_problem
                </span>
                <div className="font-body text-body-sm">
                  <span className="font-mono text-label-mono-sm text-tertiary-fixed-dim uppercase tracking-wider block">
                    {lang === 'id' ? 'KESENJANGAN GARIS DEPAN' : 'THE FRONTLINE GAP'}
                  </span>
                  <span>
                    {lang === 'id'
                      ? 'Kasus G6PD simulasi Cianjur baru sampai ke keluarga pada Hari ke-108 (tanpa penanggung jawab definitif, tanpa tenggat waktu verifikasi penutupan).'
                      : 'Simulated Cianjur G6PD field case reached family on Day 108 (no owner, no deadline, missing closure verification).'}
                  </span>
                </div>
              </div>

              <div className="w-full h-px bg-surface-dark-elevated my-1" />

              <div className="flex items-start gap-space-sm text-primary-fixed">
                <span className="material-symbols-outlined text-[20px] shrink-0 text-primary-fixed-dim mt-0.5">
                  verified_user
                </span>
                <div className="font-body text-body-sm">
                  <span className="font-mono text-label-mono-sm text-primary-fixed-dim uppercase tracking-wider block">
                    {lang === 'id' ? 'SISTEM CLOSED-LOOP' : 'THE CLOSED-LOOP SYSTEM'}
                  </span>
                  <span>
                    {lang === 'id'
                      ? 'Ditetapkan berdasarkan peran nakes, berbatas waktu dengan eskalasi otomatis, terbukti tertutup tuntas (141 uji logika otomatis, 0 pelanggaran).'
                      : 'Owned by assigned role, timed with automated escalation, proof-closed (141 automated logic checks, 0 violations).'}
                  </span>
                </div>
              </div>
            </div>

            {/* Hero Action Buttons */}
            <div className="mt-space-xl flex flex-wrap items-center gap-space-md">
              <a
                href="#hack2skill"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('hack2skill');
                }}
                className="inline-flex items-center justify-center gap-space-xs px-space-lg h-12 rounded-full bg-primary-container text-on-primary hover:bg-brand-primary-hover font-display font-semibold text-label-mono-md transition-colors shadow-sm whitespace-nowrap focus-visible:outline-2 focus-visible:outline-primary-fixed"
              >
                {lang === 'id'
                  ? 'Jelajahi Sistem Unggulan →'
                  : 'Explore Flagship QI Systems →'}
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('contact');
                }}
                className="inline-flex items-center justify-center px-space-lg h-12 rounded-full bg-surface-dark text-secondary-fixed-dim hover:text-on-secondary hover:bg-surface-dark/60 ring-1 ring-white/10 font-display font-semibold text-label-mono-md transition-colors shadow-sm whitespace-nowrap focus-visible:outline-2 focus-visible:outline-primary-fixed"
              >
                {lang === 'id' ? 'Undang untuk Konsultasi' : 'Connect for Advisory'}
              </a>
            </div>
          </div>

          {/* Right Bento: Clinical Portrait & Verification (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-space-md">
            <div className="relative w-full rounded-xl overflow-hidden bg-surface-dark-elevated shadow-md group h-full min-h-[420px] flex flex-col justify-end">
              {portraitFailed ? (
                <div className="absolute inset-0 bg-gradient-to-br from-primary-container/40 via-surface-dark-elevated to-surface-dark flex flex-col items-center justify-center gap-3 p-6 text-center">
                  <span className="material-symbols-outlined text-[48px] text-primary-fixed/70">
                    clinical_notes
                  </span>
                  <span className="font-mono text-label-mono-sm text-secondary-fixed-dim">
                    Kristiyanto Berutu, MD, MM
                  </span>
                </div>
              ) : (
                <img
                  alt="Kristiyanto Berutu, MD, MM in white clinical coat"
                  className="absolute inset-0 w-full h-full object-cover object-top opacity-95 group-hover:scale-[1.02] transition-transform duration-500"
                  src={ASSETS.clinicalCoatPortrait}
                  referrerPolicy="no-referrer"
                  onError={() => setPortraitFailed(true)}
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/45 to-transparent" />

              {/* Monograph Overlay Card */}
              <div className="relative p-space-lg flex flex-col gap-space-xs z-10">
                <div className="inline-flex items-center gap-2 w-fit px-2.5 py-1 rounded bg-surface-dark/85 backdrop-blur-md text-primary-fixed font-mono text-label-mono-sm shadow-sm">
                  <span className="material-symbols-outlined text-[14px] shrink-0">
                    shield
                  </span>
                  <span>
                    {lang === 'id'
                      ? 'Nol halusinasi AI saat runtime • Status prototipe simulasi, jujur & transparan'
                      : 'Zero AI hallucinations at runtime • Simulated prototype, honest status'}
                  </span>
                </div>

                <div className="font-display text-headline-sm text-on-secondary font-semibold mt-1">
                  {lang === 'id'
                    ? 'dr. Kristiyanto Berutu, M.M.'
                    : 'Kristiyanto Berutu, MD, MM'}
                </div>

                <div className="font-body text-body-sm text-secondary-fixed-dim">
                  {lang === 'id'
                    ? 'Dokter Garis Depan & Penanggung Jawab Klaster 2 KIA • Dinas Kesehatan Kab. Cianjur'
                    : 'Frontline Physician & Maternal-Child Health Cluster 2 Lead • Dinas Kesehatan Kab. Cianjur'}
                </div>

                <div className="mt-2 flex items-center justify-between gap-2 font-mono text-label-mono-sm text-secondary-fixed-dim bg-surface-dark-elevated/90 px-3 py-2 rounded tabular-nums">
                  <span>
                    {lang === 'id' ? '141 Uji Logika Otomatis' : '141 Engine Unit Tests'}
                  </span>
                  <span className="text-primary-fixed">
                    {lang === 'id' ? '0 Pelanggaran Protokol' : '0 Protocol Violations'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Proof Metrics Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pt-space-xs">
          {HERO_METRICS.map((metric) => (
            <div
              key={metric.kicker.en}
              className="p-space-lg bg-surface-dark-elevated rounded-xl shadow-sm flex flex-col gap-space-xs"
            >
              <span className="font-mono text-label-mono-sm text-primary-fixed tracking-wider uppercase">
                {metric.kicker[lang]}
              </span>
              <div className="font-display text-headline-lg text-on-secondary font-bold tabular-nums">
                {metric.value[lang]}
              </div>
              <p className="font-body text-body-sm text-secondary-fixed-dim">
                {metric.description[lang]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
