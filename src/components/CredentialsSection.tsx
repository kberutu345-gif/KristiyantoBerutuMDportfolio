import { useState } from 'react';
import { ASSETS, CERTIFICATIONS, LINKS, type Lang } from '../data/portfolioContent';

interface CredentialsSectionProps {
  lang: Lang;
}

export function CredentialsSection({ lang }: CredentialsSectionProps) {
  const [portraitFailed, setPortraitFailed] = useState(false);

  return (
    <section
      className="w-full bg-surface-container-low text-on-surface px-gutter-mobile lg:px-gutter py-space-xl"
      id="credentials"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        {/* Section Header */}
        <div className="flex flex-col gap-space-sm max-w-3xl">
          <span className="font-mono text-label-mono-sm text-outline uppercase tracking-wider font-semibold">
            {lang === 'id'
              ? 'REKAM JEJAK KEPEMIMPINAN GANDA'
              : 'DUAL-TRACK LEADERSHIP RECORD'}
          </span>

          <h2 className="font-display font-bold text-headline-lg-mobile lg:text-headline-lg text-on-surface tracking-tight text-balance">
            {lang === 'id'
              ? 'Kepemimpinan Eksekutif, Ketelitian Institusional & Latar Belakang Ilmiah'
              : 'Executive Leadership, Institutional Rigor & Scholarly Background'}
          </h2>

          <p className="font-body text-body-md text-on-surface-variant">
            {lang === 'id'
              ? 'Perpaduan langka senioritas aparatur sipil negara, kepemimpinan klinik mandiri, administrasi bisnis formal (M.M.), dan kesiapsiagaan medis emergensi.'
              : 'An uncommon synthesis of civil service seniority, private clinic entrepreneurship, formal business administration (MM), and emergency-certified medical practice.'}
          </p>
        </div>

        {/* Asymmetric Two-Column Ledger */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
          {/* Left Column: Portrait & Executive Download (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-space-md">
            <div className="p-space-lg bg-surface-card rounded-2xl shadow-md ring-1 ring-surface-border/60 flex flex-col gap-space-md">
              <div className="w-full aspect-[4/5] rounded-xl overflow-hidden bg-surface-container shadow-inner">
                {portraitFailed ? (
                  <div className="w-full h-full bg-gradient-to-br from-surface-container to-surface-container-high flex flex-col items-center justify-center gap-2 p-6 text-center">
                    <span className="material-symbols-outlined text-[48px] text-primary">
                      badge
                    </span>
                    <span className="font-display font-semibold text-body-sm text-on-surface">
                      Kristiyanto Berutu, MD, MM
                    </span>
                  </div>
                ) : (
                  <img
                    alt="Kristiyanto Berutu, MD, MM in formal navy business suit"
                    className="w-full h-full object-cover object-top"
                    src={ASSETS.suitPortrait}
                    referrerPolicy="no-referrer"
                    onError={() => setPortraitFailed(true)}
                  />
                )}
              </div>

              <div className="flex flex-col gap-space-xs">
                <div className="font-display font-semibold text-headline-sm text-on-surface">
                  {lang === 'id'
                    ? 'dr. Kristiyanto Berutu, M.M.'
                    : 'Kristiyanto Berutu, MD, MM'}
                </div>
                <div className="font-mono text-label-mono-sm text-primary font-medium">
                  PNS Dokter Ahli Madya (Pembina Tingkat I, IV/b)
                </div>
                <div className="font-body text-body-sm text-on-surface-variant">
                  {lang === 'id'
                    ? 'Direktur Medis & Penggagas Sistem Mutu'
                    : 'Master of Management (MM) in General Strategy & Clinic Director'}
                </div>
              </div>

              <div className="pt-space-sm">
                <a
                  className="w-full inline-flex items-center justify-center gap-space-xs px-space-md py-3 rounded-lg bg-primary-container text-on-primary hover:bg-brand-primary-hover font-display font-semibold text-label-mono-md transition-colors shadow-sm focus-visible:outline-2 focus-visible:outline-primary"
                  href={LINKS.technicalDocs}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    download
                  </span>
                  <span>
                    {lang === 'id'
                      ? 'Unduh CV Eksekutif 1 Halaman (PDF)'
                      : 'Download 1-Page Executive CV (PDF)'}
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Chronological Credential Ledger (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-space-lg">
            {/* Operational Appointments */}
            <div className="p-6 sm:p-space-xl bg-surface-card rounded-xl shadow-md ring-1 ring-surface-border/60 flex flex-col gap-space-md">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-surface-border/60">
                <h3 className="font-display font-semibold text-headline-sm text-on-surface">
                  {lang === 'id'
                    ? 'Riwayat Jabatan Operasional'
                    : 'Operational Appointments'}
                </h3>
                <span className="font-mono text-label-mono-sm text-primary font-bold tabular-nums">
                  {lang === 'id' ? '2006 — SEKARANG' : '2006 — PRESENT'}
                </span>
              </div>

              <div className="flex flex-col gap-space-md">
                <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-label-mono-sm text-outline tabular-nums">
                    <span>Dinas Kesehatan Kab. Cianjur</span>
                    <span>
                      {lang === 'id' ? '2006 — Sekarang' : '2006 — Present'}
                    </span>
                  </div>
                  <div className="font-display text-label-mono-md font-bold text-on-surface">
                    Dokter Ahli Madya / Pembina Tk. I (Gol. IV/b)
                  </div>
                  <div className="font-body text-body-sm text-on-surface-variant">
                    {lang === 'id'
                      ? 'Memimpin Klaster 2 (Kesehatan Ibu dan Anak) di UPTD Puskesmas Haurwangi sejak 2019. Mengawasi indikator mutu publik dan audit klinis lapangan.'
                      : 'Leading Cluster 2 (Maternal & Child Health) at Puskesmas Haurwangi since 2019. Overseeing public health performance indicators and field clinical audits.'}
                  </div>
                </div>

                <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-label-mono-sm text-outline tabular-nums">
                    <span>Klinik Pratama Cagak</span>
                    <span>
                      {lang === 'id' ? '2017 — Sekarang' : '2017 — Present'}
                    </span>
                  </div>
                  <div className="font-display text-label-mono-md font-bold text-on-surface">
                    {lang === 'id'
                      ? 'Pendiri & Direktur Medis'
                      : 'Founder & Medical Director'}
                  </div>
                  <div className="font-body text-body-sm text-on-surface-variant">
                    {lang === 'id'
                      ? 'Mengarahkan seluruh operasional klinik swasta, protokol keselamatan klinis, instalasi farmasi, dan standar kepesertaan BPJS Kesehatan. Membawa klinik meraih Akreditasi Paripurna (2023).'
                      : 'Directing private clinic operations, clinical safety protocols, pharmacy dispensation, and national BPJS service standards. Achieved Akreditasi Paripurna (2023).'}
                  </div>
                </div>
              </div>
            </div>

            {/* Academic Degrees */}
            <div className="p-6 sm:p-space-xl bg-surface-card rounded-xl shadow-md ring-1 ring-surface-border/60 flex flex-col gap-space-md">
              <h3 className="font-display font-semibold text-headline-sm text-on-surface">
                {lang === 'id' ? 'Pendidikan Formal' : 'Formal Education'}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-1">
                  <span className="font-mono text-label-mono-sm text-outline tabular-nums">
                    2023 — 2025
                  </span>
                  <span className="font-display text-label-mono-md font-bold text-on-surface">
                    {lang === 'id'
                      ? 'Magister Manajemen (M.M.)'
                      : 'Master of Management (MM)'}
                  </span>
                  <span className="font-body text-body-sm text-on-surface-variant">
                    Harapan Bangsa Business School (ITHB), Bandung
                  </span>
                  <span className="font-mono text-label-mono-sm text-primary mt-1">
                    {lang === 'id'
                      ? 'Fokus: Manajemen Umum & Operasional Klinis'
                      : 'Focus: General Management & Clinical Operations'}
                  </span>
                </div>

                <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-1">
                  <span className="font-mono text-label-mono-sm text-outline tabular-nums">
                    1995 — 2002
                  </span>
                  <span className="font-display text-label-mono-md font-bold text-on-surface">
                    {lang === 'id'
                      ? 'Dokter (dr. / Profesi Dokter)'
                      : 'Medical Doctor (MD / Profesi)'}
                  </span>
                  <span className="font-body text-body-sm text-on-surface-variant">
                    Universitas Padjadjaran (UNPAD), Bandung
                  </span>
                  <span className="font-mono text-label-mono-sm text-primary mt-1">
                    {lang === 'id'
                      ? 'Fakultas Kedokteran'
                      : 'Faculty of Medicine'}
                  </span>
                </div>
              </div>
            </div>

            {/* Clinical Certifications & Languages */}
            <div className="p-6 sm:p-space-xl bg-surface-card rounded-xl shadow-md ring-1 ring-surface-border/60 flex flex-col gap-space-md">
              <h3 className="font-display font-semibold text-headline-sm text-on-surface">
                {lang === 'id'
                  ? 'Sertifikasi Kompetensi Klinis & Kemampuan Bahasa'
                  : 'Certifications & Working Languages'}
              </h3>

              <div className="flex flex-col gap-space-sm">
                <div className="flex flex-wrap gap-2">
                  {CERTIFICATIONS.map((cert) => (
                    <span
                      key={cert.en}
                      className="px-3 py-1.5 rounded-full bg-surface-container font-mono text-label-mono-sm font-semibold text-on-surface"
                    >
                      {cert[lang]}
                    </span>
                  ))}
                </div>

                <div className="pt-space-sm flex flex-wrap items-center gap-x-space-lg gap-y-2 font-body text-body-sm text-on-surface-variant">
                  <div>
                    <strong className="text-on-surface">
                      {lang === 'id' ? 'Bahasa Indonesia: ' : 'Indonesian: '}
                    </strong>
                    <span>
                      {lang === 'id'
                        ? 'Kemahiran Tingkat Penutur Asli'
                        : 'Native Proficiency'}
                    </span>
                  </div>
                  <div>
                    <strong className="text-on-surface">
                      {lang === 'id' ? 'Bahasa Inggris: ' : 'English: '}
                    </strong>
                    <span>
                      {lang === 'id'
                        ? 'Kemahiran Tingkat Kerja Profesional'
                        : 'Professional Working Proficiency'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
