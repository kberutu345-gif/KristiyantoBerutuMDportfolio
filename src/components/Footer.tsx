import { useState } from 'react';
import { ASSETS, type Lang, type SectionId } from '../data/portfolioContent';

interface FooterProps {
  lang: Lang;
  onNavigate: (id: SectionId) => void;
}

export function Footer({ lang, onNavigate }: FooterProps) {
  const [avatarFailed, setAvatarFailed] = useState(false);

  return (
    <footer className="w-full bg-surface-dark text-on-secondary py-space-xl border-t border-surface-dark-elevated">
      <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg border-b border-surface-dark-elevated pb-space-lg mb-space-lg">
          <div className="flex items-center gap-space-sm">
            {avatarFailed ? (
              <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-display font-bold text-xs shrink-0">
                KB
              </div>
            ) : (
              <img
                alt="Kristiyanto Berutu, MD, MM"
                className="w-8 h-8 rounded-full object-cover object-top ring-1 ring-surface-border/20 shrink-0"
                src={ASSETS.suitPortrait}
                referrerPolicy="no-referrer"
                onError={() => setAvatarFailed(true)}
              />
            )}
            <div className="flex flex-col">
              <span className="font-display font-semibold text-headline-sm text-on-secondary">
                {lang === 'id'
                  ? 'dr. Kristiyanto Berutu, M.M.'
                  : 'Kristiyanto Berutu, MD, MM'}
              </span>
              <span className="font-mono text-label-mono-sm text-secondary-fixed-dim">
                {lang === 'id'
                  ? 'Direktur Medis • Rekayasa Sistem Kesehatan'
                  : 'Clinical Director • Health Systems Engineering'}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-space-md font-mono text-label-mono-sm text-secondary-fixed-dim">
            <span className="flex items-center gap-1.5">
              <span
                className="w-2 h-2 rounded-full bg-primary-fixed shrink-0"
                aria-hidden="true"
              />
              <span>
                {lang === 'id'
                  ? 'Registri Eksekutif Terverifikasi'
                  : 'Executive Registry Verified'}
              </span>
            </span>
            <span className="hidden sm:inline text-secondary-fixed-dim/40">•</span>
            <span className="hidden sm:inline">
              {lang === 'id'
                ? 'Monograf Tata Kelola Institusional'
                : 'Institutional Governance Monograph'}
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md font-body text-body-sm text-secondary-fixed-dim">
          <div>
            {lang === 'id'
              ? '© 2026 dr. Kristiyanto Berutu, M.M. Seluruh logika klinis, protokol triase, dan aturan sistem disusun dari rekam jejak dokter layanan primer garis depan.'
              : '© 2026 Kristiyanto Berutu. All scholarly and clinical rights reserved.'}
          </div>

          <div className="flex items-center gap-space-lg">
            <a
              href="#credentials"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('credentials');
              }}
              className="hover:text-on-secondary transition-colors whitespace-nowrap"
            >
              {lang === 'id' ? 'Sertifikasi Dewan Medis' : 'Board Certifications'}
            </a>
            <a
              href="#overview"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('overview');
              }}
              className="hover:text-on-secondary transition-colors whitespace-nowrap"
            >
              {lang === 'id'
                ? 'Portofolio Tata Kelola Klinis'
                : 'Governance Portfolio'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
