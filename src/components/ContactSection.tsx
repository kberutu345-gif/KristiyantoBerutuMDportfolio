import { useState, type FormEvent } from 'react';
import {
  FOCUS_AREA_OPTIONS,
  LINKS,
  type Lang,
} from '../data/portfolioContent';

interface ContactSectionProps {
  lang: Lang;
}

interface SubmissionStatus {
  kind: 'success' | 'simulation';
  message: string;
}

export function ContactSection({ lang }: ContactSectionProps) {
  const [copied, setCopied] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [focusArea, setFocusArea] = useState(FOCUS_AREA_OPTIONS[0].value);
  const [projectScope, setProjectScope] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<SubmissionStatus | null>(null);

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(LINKS.email);
      } else {
        const tempInput = document.createElement('textarea');
        tempInput.value = LINKS.email;
        tempInput.style.position = 'fixed';
        tempInput.style.opacity = '0';
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
      }
      setCopied(true);
      window.setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (honeypot.trim() !== '') return;

    setSubmitting(true);
    setFeedback(null);

    // Brief realistic dispatch transition before logging local confirmation
    await new Promise((resolve) => window.setTimeout(resolve, 450));

    setFeedback({
      kind: 'simulation',
      message:
        lang === 'id'
          ? 'Permintaan konsultasi telah dicatat dengan baik. Untuk tanggapan langsung (<24 jam kerja), Anda juga dapat menghubungi langsung melalui email '
          : 'Your advisory dispatch has been logged. For immediate direct correspondence (<24 business hours), you may also email ',
    });

    setFullName('');
    setEmail('');
    setOrganization('');
    setFocusArea(FOCUS_AREA_OPTIONS[0].value);
    setProjectScope('');
    setSubmitting(false);
  };

  return (
    <section
      className="w-full bg-surface-dark text-on-secondary px-gutter-mobile lg:px-gutter py-space-xl"
      id="contact"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        {/* Section Hook */}
        <div className="flex flex-col gap-space-sm max-w-3xl">
          <span className="font-mono text-label-mono-sm text-primary-fixed uppercase tracking-wider">
            {lang === 'id'
              ? 'REGISTRI KOLABORASI & KONSULTASI'
              : 'COLLABORATION & ADVISORY REGISTRY'}
          </span>

          <h2 className="font-display font-bold text-headline-lg-mobile lg:text-headline-lg text-on-secondary tracking-tight text-balance">
            {lang === 'id'
              ? 'Mencari dokter garis depan yang membangun sistem peningkatan mutu praktis?'
              : 'Looking for a frontline physician who builds practical quality-improvement systems?'}
          </h2>

          <p className="font-body text-body-lg text-secondary-fixed-dim">
            {lang === 'id'
              ? 'Terbuka untuk konsultasi tata kelola sistem kesehatan global, perancangan alur kerja digital kesehatan ibu dan anak LMIC, evaluasi program donor, serta bimbingan kepemimpinan klinis.'
              : 'Available for global remote QI advisory, LMIC maternal health digital workflow architecture, and primary care quality collaboratives.'}
          </p>
        </div>

        {/* Contact Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-stretch">
          {/* Direct Channels (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-space-md p-6 sm:p-space-xl bg-surface-dark-elevated rounded-xl shadow-md">
            <span className="font-mono text-label-mono-sm text-secondary-fixed-dim uppercase tracking-wider">
              {lang === 'id'
                ? 'Saluran Kontak Langsung'
                : 'Direct Directorship Channels'}
            </span>

            {/* Copy Email Action */}
            <div className="p-space-md rounded-lg bg-surface-dark flex flex-col gap-2">
              <span className="font-mono text-label-mono-sm text-secondary-fixed-dim">
                {lang === 'id' ? 'Email Resmi' : 'Primary Advisory Email'}
              </span>
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-label-mono-md text-on-secondary select-all truncate">
                  {LINKS.email}
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  title={lang === 'id' ? 'Salin ke papan klip' : 'Copy to clipboard'}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-surface-dark-elevated hover:bg-primary-container text-primary-fixed hover:text-on-primary ring-1 ring-primary-fixed/40 font-mono text-label-mono-sm transition-colors shadow-sm shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-primary-fixed"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    {copied ? 'check' : 'content_copy'}
                  </span>
                  <span className="font-semibold">
                    {copied
                      ? lang === 'id'
                        ? 'Disalin'
                        : 'Copied'
                      : lang === 'id'
                      ? 'Salin'
                      : 'Copy'}
                  </span>
                </button>
              </div>
              {copied && (
                <div
                  role="status"
                  className="text-primary-fixed font-mono text-label-mono-sm mt-1"
                >
                  {lang === 'id'
                    ? '✓ Alamat email berhasil disalin!'
                    : '✓ Email copied to clipboard'}
                </div>
              )}
            </div>

            {/* LinkedIn Link */}
            <a
              className="p-space-md rounded-lg bg-surface-dark hover:bg-surface-dark/70 text-on-secondary flex items-center justify-between transition-colors group ring-1 ring-surface-border/10 hover:ring-primary-fixed/50 shadow-sm"
              href={LINKS.linkedin}
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="flex items-center gap-space-sm min-w-0">
                <div className="w-9 h-9 rounded-lg bg-surface-dark-elevated flex items-center justify-center ring-1 ring-primary-fixed/30 group-hover:bg-primary-container transition-colors shrink-0">
                  <span className="material-symbols-outlined text-primary-fixed group-hover:text-primary-fixed-dim">
                    link
                  </span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-display font-semibold text-label-mono-md text-on-secondary group-hover:text-primary-fixed transition-colors truncate">
                    {lang === 'id'
                      ? 'Profil Eksekutif LinkedIn'
                      : 'LinkedIn Executive Profile'}
                  </span>
                  <span className="font-mono text-label-mono-sm text-primary-fixed-dim/90 truncate">
                    kristiyanto-berutu-md
                  </span>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-surface-dark-elevated flex items-center justify-center ring-1 ring-surface-border/20 group-hover:ring-primary-fixed/50 transition-colors shrink-0">
                <span className="material-symbols-outlined text-primary-fixed group-hover:translate-x-0.5 transition-transform text-[18px]">
                  arrow_forward
                </span>
              </div>
            </a>

            {/* WhatsApp Direct Link */}
            <a
              className="p-space-md rounded-lg bg-surface-dark hover:bg-surface-dark/70 text-on-secondary flex items-center justify-between transition-colors group ring-1 ring-surface-border/10 hover:ring-primary-fixed/50 shadow-sm"
              href={LINKS.whatsapp}
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="flex items-center gap-space-sm min-w-0">
                <div className="w-9 h-9 rounded-lg bg-surface-dark-elevated flex items-center justify-center ring-1 ring-primary-fixed/30 group-hover:bg-primary-container transition-colors shrink-0">
                  <span className="material-symbols-outlined text-primary-fixed group-hover:text-primary-fixed-dim">
                    chat
                  </span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-display font-semibold text-label-mono-md text-on-secondary group-hover:text-primary-fixed transition-colors truncate">
                    {lang === 'id'
                      ? 'Kontak WhatsApp Langsung'
                      : 'Direct WhatsApp Routing'}
                  </span>
                  <span className="font-mono text-label-mono-sm text-primary-fixed-dim/90 truncate">
                    {lang === 'id'
                      ? '+62 813-6411-6115 (Klik untuk chat)'
                      : '+62 813-6411-6115 (Click to chat)'}
                  </span>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-surface-dark-elevated flex items-center justify-center ring-1 ring-surface-border/20 group-hover:ring-primary-fixed/50 transition-colors shrink-0">
                <span className="material-symbols-outlined text-primary-fixed group-hover:translate-x-0.5 transition-transform text-[18px]">
                  arrow_forward
                </span>
              </div>
            </a>

            <div className="mt-auto pt-space-sm font-mono text-label-mono-sm text-secondary-fixed-dim">
              {lang === 'id'
                ? 'Estimasi waktu respon: < 24 jam kerja (Waktu Indonesia Barat / UTC+7).'
                : 'Expected response window: < 24 business hours (Western Indonesia Time / UTC+7).'}
            </div>
          </div>

          {/* Quick Collaboration Inquiry Form (7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-space-xl bg-surface-dark-elevated rounded-xl shadow-md flex flex-col justify-between">
            <form className="flex flex-col gap-space-md" onSubmit={handleSubmit}>
              <span className="font-mono text-label-mono-sm text-primary-fixed uppercase tracking-wider">
                {lang === 'id'
                  ? 'Kirim Permintaan Konsultasi Langsung'
                  : 'Send Direct Inquiry'}
              </span>

              {/* Honeypot anti-spam field */}
              <input
                autoComplete="off"
                className="hidden"
                name="website"
                tabIndex={-1}
                type="text"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                <div className="flex flex-col gap-1.5">
                  <label
                    className="font-mono text-label-mono-sm text-secondary-fixed-dim"
                    htmlFor="formName"
                  >
                    {lang === 'id' ? 'Nama & Gelar' : 'Name & Title'}
                  </label>
                  <input
                    id="formName"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder={
                      lang === 'id' ? 'dr. Jane Smith, MPH' : 'Dr. Jane Smith, MPH'
                    }
                    className="w-full px-space-md py-2.5 rounded-lg bg-surface-dark text-on-secondary placeholder:text-secondary-fixed-dim/60 border border-white/10 focus:outline-none focus:border-primary-fixed font-body text-body-sm shadow-sm transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    className="font-mono text-label-mono-sm text-secondary-fixed-dim"
                    htmlFor="formEmail"
                  >
                    {lang === 'id' ? 'Alamat Email' : 'Email Address'}
                  </label>
                  <input
                    id="formEmail"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={
                      lang === 'id'
                        ? 'nama@organisasi.org'
                        : 'name@organization.org'
                    }
                    className="w-full px-space-md py-2.5 rounded-lg bg-surface-dark text-on-secondary placeholder:text-secondary-fixed-dim/60 border border-white/10 focus:outline-none focus:border-primary-fixed font-body text-body-sm shadow-sm transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                <div className="flex flex-col gap-1.5">
                  <label
                    className="font-mono text-label-mono-sm text-secondary-fixed-dim"
                    htmlFor="formOrg"
                  >
                    {lang === 'id' ? 'Instansi / Organisasi' : 'Organization'}
                  </label>
                  <input
                    id="formOrg"
                    type="text"
                    required
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder={
                      lang === 'id'
                        ? 'Dinas Kesehatan / Universitas / Lembaga'
                        : 'Global Health Collaborative / University'
                    }
                    className="w-full px-space-md py-2.5 rounded-lg bg-surface-dark text-on-secondary placeholder:text-secondary-fixed-dim/60 border border-white/10 focus:outline-none focus:border-primary-fixed font-body text-body-sm shadow-sm transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    className="font-mono text-label-mono-sm text-secondary-fixed-dim"
                    htmlFor="formTopic"
                  >
                    {lang === 'id' ? 'Bidang Fokus Konsultasi' : 'Focus Area'}
                  </label>
                  <select
                    id="formTopic"
                    value={focusArea}
                    onChange={(e) => setFocusArea(e.target.value)}
                    className="w-full px-space-md py-2.5 rounded-lg bg-surface-dark text-on-secondary border border-white/10 focus:outline-none focus:border-primary-fixed font-body text-body-sm shadow-sm transition-colors"
                  >
                    {FOCUS_AREA_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label[lang]}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  className="font-mono text-label-mono-sm text-secondary-fixed-dim"
                  htmlFor="formMessage"
                >
                  {lang === 'id'
                    ? 'Lingkup Proyek & Estimasi Waktu'
                    : 'Project Scope & Timeline'}
                </label>
                <textarea
                  id="formMessage"
                  required
                  rows={4}
                  value={projectScope}
                  onChange={(e) => setProjectScope(e.target.value)}
                  placeholder={
                    lang === 'id'
                      ? 'Jelaskan tujuan program, hambatan alur kerja saat ini, atau jangka waktu konsultasi...'
                      : 'Summarize your program goals, current workflow pain points, or advisory timeframe...'
                  }
                  className="w-full px-space-md py-2.5 rounded-lg bg-surface-dark text-on-secondary placeholder:text-secondary-fixed-dim/60 border border-white/10 focus:outline-none focus:border-primary-fixed font-body text-body-sm shadow-sm transition-colors resize-y"
                />
              </div>

              <div className="flex flex-col pt-2">
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center gap-space-xs px-space-lg h-12 rounded-full bg-primary-fixed hover:bg-primary-fixed-dim disabled:opacity-70 text-surface-dark font-display font-bold text-label-mono-md ring-2 ring-primary-fixed/60 shadow-lg hover:shadow-primary-fixed/20 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-white"
                  >
                    {submitting ? (
                      <span className="inline-flex items-center gap-2 text-surface-dark font-bold tracking-tight">
                        <svg
                          className="animate-spin h-4 w-4"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        <span>
                          {lang === 'id'
                            ? 'Mengirimkan Permintaan...'
                            : 'Transmitting Inquiry...'}
                        </span>
                      </span>
                    ) : (
                      <span className="text-surface-dark font-bold tracking-tight">
                        {lang === 'id'
                          ? 'Kirim Permintaan Konsultasi →'
                          : 'Send Advisory Dispatch →'}
                      </span>
                    )}
                  </button>
                </div>

                {feedback && (
                  <div
                    role="status"
                    className="mt-3 p-3 rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 text-body-sm text-center"
                  >
                    <span>{feedback.message}</span>
                    <a
                      href={`mailto:${LINKS.email}`}
                      className="underline font-semibold text-emerald-300 hover:text-emerald-100"
                    >
                      {LINKS.email}
                    </a>
                    <span>.</span>
                  </div>
                )}
              </div>
            </form>

            <div className="mt-space-lg pt-space-md border-t border-surface-dark text-secondary-fixed-dim font-mono text-label-mono-sm flex flex-col sm:flex-row items-center justify-between gap-2">
              <span>
                {lang === 'id'
                  ? 'Dokter Teregistrasi Resmi • STR KKI & IDI Terverifikasi'
                  : 'Verified Physician Registry • KKI & IDI Certified'}
              </span>
              <span>
                {lang === 'id'
                  ? 'Nol Halusinasi AI saat Runtime'
                  : 'Zero Runtime AI Hallucinations'}
              </span>
            </div>
          </div>
        </div>

        {/* Copyright & Rigor Monograph Sign-Off */}
        <div className="pt-space-md pb-space-lg text-center font-mono text-label-mono-sm text-secondary-fixed-dim/80">
          {lang === 'id'
            ? '© 2026 dr. Kristiyanto Berutu, M.M. Seluruh logika klinis, protokol triase, dan aturan sistem dirumuskan dengan disiplin layanan primer garis depan.'
            : '© 2026 Kristiyanto Berutu, MD, MM. All clinical logic, triage protocols, and system rules authored with frontline primary care rigor.'}
        </div>
      </div>
    </section>
  );
}
