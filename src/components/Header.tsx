import { useState } from 'react';
import { ASSETS, LINKS, NAV_ITEMS, type Lang, type SectionId } from '../data/portfolioContent';

interface HeaderProps {
  lang: Lang;
  activeSection: SectionId;
  onLanguageChange: (lang: Lang) => void;
  onNavigate: (id: SectionId) => void;
}

export function Header({
  lang,
  activeSection,
  onLanguageChange,
  onNavigate,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [avatarFailed, setAvatarFailed] = useState(false);

  const handleNavClick = (id: SectionId) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 pointer-events-none">
      <div className="h-20 max-w-7xl mx-auto px-gutter-mobile lg:px-gutter flex items-center justify-between gap-2">
        {/* Left Identity Pill */}
        <a
          href="#overview"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('overview');
          }}
          className="pointer-events-auto flex items-center gap-2 bg-surface-card/90 backdrop-blur-xl py-1.5 px-3 rounded-full shadow-[0_4px_20px_rgba(18,21,24,0.04)] ring-1 ring-surface-border hover:ring-primary/30 transition-all focus-visible:outline-2 focus-visible:outline-primary shrink-0"
        >
          {avatarFailed ? (
            <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-display font-bold text-xs shrink-0">
              KB
            </div>
          ) : (
            <img
              alt="Kristiyanto Berutu, MD, MM"
              className="w-8 h-8 rounded-full object-cover object-top shrink-0"
              src={ASSETS.suitPortrait}
              referrerPolicy="no-referrer"
              onError={() => setAvatarFailed(true)}
            />
          )}
          <div className="flex flex-col pr-1">
            <span className="font-display font-semibold text-label-mono-md text-on-surface tracking-tight leading-none whitespace-nowrap">
              {lang === 'id' ? 'dr. Kristiyanto Berutu, M.M.' : 'Kristiyanto Berutu'}
            </span>
            <span className="font-mono text-label-mono-sm text-outline leading-none mt-0.5 whitespace-nowrap">
              {lang === 'id'
                ? 'MD, MM • Tata Kelola Klinis'
                : 'MD, MM • Clinical Governance'}
            </span>
          </div>
        </a>

        {/* Center Desktop Navigation Pill */}
        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex pointer-events-auto items-center p-1.5 bg-surface-card/90 backdrop-blur-xl rounded-full shadow-[0_4px_20px_rgba(18,21,24,0.04)] ring-1 ring-surface-border"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? 'page' : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className={`px-4 py-1.5 text-body-sm whitespace-nowrap shrink-0 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-primary ${
                  isActive
                    ? 'bg-primary text-on-primary font-medium'
                    : 'text-on-surface-variant hover:text-on-surface font-normal'
                }`}
              >
                {item.label[lang]}
              </a>
            );
          })}
        </nav>

        {/* Right Utility Pill */}
        <div className="pointer-events-auto flex items-center gap-1 bg-surface-card/90 backdrop-blur-xl p-1.5 rounded-full shadow-[0_4px_20px_rgba(18,21,24,0.04)] ring-1 ring-surface-border shrink-0">
          <div
            className="flex items-center p-0.5 bg-surface-container rounded-full font-mono text-label-mono-sm mr-0.5"
            role="group"
            aria-label="Language switcher"
          >
            <button
              type="button"
              onClick={() => onLanguageChange('en')}
              aria-pressed={lang === 'en'}
              className={`px-2.5 py-1 rounded-full font-medium transition-colors cursor-pointer ${
                lang === 'en'
                  ? 'bg-primary text-on-primary shadow-sm'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => onLanguageChange('id')}
              aria-pressed={lang === 'id'}
              className={`px-2.5 py-1 rounded-full font-medium transition-colors cursor-pointer ${
                lang === 'id'
                  ? 'bg-primary text-on-primary shadow-sm'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              ID
            </button>
          </div>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('contact');
            }}
            className="hidden sm:flex items-center justify-center px-5 h-9 rounded-full bg-primary-container text-on-primary hover:bg-brand-primary-hover font-display font-semibold text-label-mono-md whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-primary"
          >
            {lang === 'id' ? 'Kolaborasi' : 'Collaborate'}
          </a>

          <a
            aria-label="LinkedIn Clinical Registry"
            className="flex items-center justify-center w-9 h-9 rounded-full text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors focus-visible:outline-2 focus-visible:outline-primary"
            href={LINKS.linkedin}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-[20px]">share</span>
          </a>

          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden flex items-center justify-center w-9 h-9 rounded-full text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden pointer-events-auto max-w-7xl mx-auto px-gutter-mobile pb-3">
          <nav
            aria-label="Mobile navigation"
            className="bg-surface-card/95 backdrop-blur-xl rounded-2xl p-2 shadow-lg ring-1 ring-surface-border flex flex-col gap-1"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className={`px-4 py-2.5 rounded-xl text-body-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-primary text-on-primary'
                      : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
                  }`}
                >
                  {item.label[lang]}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }}
              className="mt-1 px-4 py-2.5 rounded-xl bg-primary-container text-on-primary text-center font-display font-semibold text-body-sm"
            >
              {lang === 'id' ? 'Kolaborasi' : 'Collaborate'}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
