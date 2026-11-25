import { useEffect, useState } from 'react';
import {
  ASSETS,
  EVIDENCE_LINKS,
  HACK2SKILL_PILLARS,
  LINKS,
  type Lang,
} from '../data/portfolioContent';

interface Hack2SkillSectionProps {
  lang: Lang;
}

export function Hack2SkillSection({ lang }: Hack2SkillSectionProps) {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [thumbFailed, setThumbFailed] = useState(false);

  useEffect(() => {
    if (!videoModalOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setVideoModalOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [videoModalOpen]);

  return (
    <section
      className="w-full bg-surface-canvas text-on-surface px-gutter-mobile lg:px-gutter py-space-xl"
      id="hack2skill"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        {/* Section Header */}
        <div className="flex flex-col gap-space-sm max-w-3xl">
          <div className="inline-flex items-center gap-2 text-tertiary font-mono text-label-mono-sm uppercase tracking-wider font-semibold">
            <span className="material-symbols-outlined text-[16px] shrink-0">
              verified
            </span>
            <span>
              {lang === 'id'
                ? 'TANTANGAN INOVASI DIGITAL KESEHATAN MASA DEPAN (NOV 2026) • MENUTUP KESENJANGAN SKRINING HINGGA TATA LAKSANA'
                : 'FUTURE HEALTH DIGITAL INNOVATION CHALLENGE (NOV 2026) • CLOSING THE SCREENING-TO-CARE LOOP'}
            </span>
          </div>

          <h2 className="font-display font-bold text-headline-lg-mobile lg:text-headline-lg text-on-surface tracking-tight text-balance">
            Newborn Screening Follow-Up Case Engine (v6.4b)
          </h2>

          <p className="font-body text-body-lg text-on-surface-variant">
            {lang === 'id'
              ? 'Engine pelacakan teruji dan bebas halusinasi yang dirancang untuk mencegah keterlambatan panggilan tindak lanjut skrining bayi baru lahir tanpa mengubah registri primer nasional.'
              : 'An auditable, zero-hallucination tracking suite designed to eliminate delayed recall in national infant screening programs without altering primary diagnostic registries.'}
          </p>
        </div>

        {/* 4 Pillars 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
          {HACK2SKILL_PILLARS.map((pillar) => {
            const isTertiary = pillar.accent === 'tertiary';
            return (
              <article
                key={pillar.tag.en}
                className="p-6 sm:p-space-xl bg-surface-card rounded-xl shadow-md ring-1 ring-surface-border/60 flex flex-col justify-between gap-space-md"
              >
                <div className="flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-mono text-label-mono-sm px-2.5 py-1 rounded bg-surface-container font-semibold uppercase ${
                        isTertiary ? 'text-tertiary' : 'text-primary'
                      }`}
                    >
                      {pillar.tag[lang]}
                    </span>
                    <span
                      className={`material-symbols-outlined ${
                        isTertiary ? 'text-tertiary' : 'text-primary-container'
                      }`}
                    >
                      {pillar.icon}
                    </span>
                  </div>

                  <h3 className="font-display font-semibold text-headline-sm text-on-surface">
                    {pillar.title[lang]}
                  </h3>

                  <p className="font-body text-body-md text-on-surface-variant">
                    {pillar.body[lang]}
                  </p>
                </div>

                <div className="p-space-md rounded-lg bg-surface-container-low text-on-surface-variant font-body text-body-sm">
                  <span className="font-semibold text-on-surface">
                    {pillar.calloutLabel[lang]}
                  </span>
                  <span>{pillar.calloutText[lang]}</span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Video Demo Showcase & Verified Artefacts Deck */}
        <div className="p-6 sm:p-space-xl bg-surface-dark text-on-secondary rounded-xl shadow-lg flex flex-col lg:flex-row items-center gap-space-xl">
          {/* Video Preview Facade */}
          <div className="w-full lg:w-1/2 flex flex-col gap-space-sm">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-surface-dark-elevated shadow-md group">
              {thumbFailed ? (
                <div className="w-full h-full bg-gradient-to-br from-primary-container/50 via-surface-dark-elevated to-surface-dark flex flex-col items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-[40px] text-primary-fixed">
                    monitoring
                  </span>
                  <span className="font-mono text-label-mono-sm text-secondary-fixed-dim">
                    Case Engine v6.4b Technical Preview
                  </span>
                </div>
              ) : (
                <img
                  src={ASSETS.demoVideoThumbnail}
                  alt="High fidelity user interface of newborn screening clinical decision support system on a modern monitor with data graphs and patient safety status indicators"
                  className="w-full h-full object-cover object-center opacity-80 group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                  onError={() => setThumbFailed(true)}
                />
              )}

              <div className="absolute inset-0 bg-surface-dark/40 flex items-center justify-center">
                <button
                  type="button"
                  onClick={() => setVideoModalOpen(true)}
                  aria-label={
                    lang === 'id'
                      ? 'Putar video panduan arsitektur teknis 3 menit'
                      : 'Watch 3-minute project walkthrough video'
                  }
                  className="w-16 h-16 rounded-full bg-primary-container text-on-primary flex items-center justify-center hover:scale-110 hover:bg-brand-primary-hover transition-all shadow-lg cursor-pointer focus-visible:outline-2 focus-visible:outline-primary-fixed"
                >
                  <span className="material-symbols-outlined text-[32px]">
                    play_arrow
                  </span>
                </button>
              </div>

              <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-surface-dark/90 text-on-secondary font-mono text-label-mono-sm">
                {lang === 'id'
                  ? '3:00 Mnt Bedah Arsitektur Teknis'
                  : '3:00 Min Technical Walkthrough'}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 text-secondary-fixed-dim font-mono text-label-mono-sm px-1">
              <span>
                {lang === 'id'
                  ? 'Putar Video Demo: Panduan Arsitektur Teknis (YouTube)'
                  : 'Demo Video: Technical Architecture Walkthrough'}
              </span>
              <span>
                {lang === 'id'
                  ? 'Platform: Arsip Teknis YouTube'
                  : 'Platform: YouTube Technical Archive'}
              </span>
            </div>
          </div>

          {/* Verified Links & Resource Triggers */}
          <div className="w-full lg:w-1/2 flex flex-col gap-space-md">
            <div className="flex flex-col gap-space-xs">
              <span className="font-mono text-label-mono-sm text-primary-fixed uppercase tracking-wider">
                {lang === 'id'
                  ? 'TINJAUAN SEJAWAT KLINIS INDEPENDEN'
                  : 'Independent Clinical Peer Review'}
              </span>
              <h4 className="font-display font-bold text-headline-md text-on-secondary">
                {lang === 'id'
                  ? 'Periksa Bukti Teknis'
                  : 'Inspect The Technical Evidence'}
              </h4>
              <p className="font-body text-body-sm text-secondary-fixed-dim">
                {lang === 'id'
                  ? 'Seluruh pohon keputusan klinis, skrip mesin state, dan dokumen pemaparan terbuka untuk diaudit.'
                  : 'All clinical decision trees, state-machine scripts, and challenge pitch decks are open for technical audit.'}
              </p>
            </div>

            <div className="flex flex-col gap-2 mt-1">
              {EVIDENCE_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-space-md rounded-lg bg-surface-dark-elevated hover:bg-surface-dark-elevated/75 ring-1 ring-white/5 hover:ring-primary-fixed/30 text-on-secondary transition-colors group"
                >
                  <div className="flex items-center gap-space-sm">
                    <span
                      className={`material-symbols-outlined shrink-0 ${
                        link.accent === 'tertiary'
                          ? 'text-tertiary-fixed-dim'
                          : 'text-primary-fixed'
                      }`}
                    >
                      {link.icon}
                    </span>
                    <span className="font-display font-semibold text-label-mono-md">
                      {link.label[lang]}
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-secondary-fixed-dim group-hover:translate-x-1 transition-transform shrink-0">
                    arrow_forward
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Video Lightbox Modal */}
      {videoModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Newborn Screening Case Engine Technical Walkthrough"
          className="fixed inset-0 z-50 bg-surface-dark/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setVideoModalOpen(false)}
        >
          <div
            className="w-full max-w-4xl bg-surface-dark-elevated rounded-xl overflow-hidden ring-1 ring-white/15 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10">
              <div className="flex items-center gap-2 text-on-secondary">
                <span className="material-symbols-outlined text-primary-fixed text-[20px]">
                  smart_display
                </span>
                <span className="font-display font-semibold text-body-sm">
                  {lang === 'id'
                    ? 'Panduan Arsitektur Teknis — Newborn Screening Case Engine v6.4b'
                    : 'Technical Architecture Walkthrough — Newborn Screening Case Engine v6.4b'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={LINKS.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-full bg-surface-dark text-primary-fixed font-mono text-label-mono-sm hover:bg-primary-container hover:text-on-primary transition-colors"
                >
                  {lang === 'id' ? 'Buka di YouTube ↗' : 'Open YouTube ↗'}
                </a>
                <button
                  type="button"
                  onClick={() => setVideoModalOpen(false)}
                  aria-label="Close video modal"
                  className="w-9 h-9 rounded-full bg-surface-dark text-secondary-fixed-dim hover:text-on-secondary flex items-center justify-center transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              </div>
            </div>
            <div className="w-full aspect-video bg-black">
              <iframe
                src={LINKS.youtubeEmbedUrl}
                title="Newborn Screening Follow-Up Case Engine Walkthrough"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
