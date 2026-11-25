/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback, useEffect, useRef, useState } from 'react';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { ContactSection } from './components/ContactSection';
import { CredentialsSection } from './components/CredentialsSection';
import { Footer } from './components/Footer';
import { Hack2SkillSection } from './components/Hack2SkillSection';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { QitKiaSection } from './components/QitKiaSection';
import { NAV_ITEMS, type Lang, type SectionId } from './data/portfolioContent';

export default function App() {
  const [lang, setLang] = useState<Lang>('en');
  const [isFading, setIsFading] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>('overview');
  const fadeTimerRef = useRef<number | null>(null);

  const handleLanguageChange = useCallback(
    (nextLang: Lang) => {
      if (nextLang === lang) return;

      const prefersReducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (prefersReducedMotion) {
        setLang(nextLang);
        document.documentElement.lang = nextLang;
        return;
      }

      if (fadeTimerRef.current !== null) {
        window.clearTimeout(fadeTimerRef.current);
      }

      setIsFading(true);
      fadeTimerRef.current = window.setTimeout(() => {
        setLang(nextLang);
        document.documentElement.lang = nextLang;
        setIsFading(false);
        fadeTimerRef.current = null;
      }, 95);
    },
    [lang]
  );

  useEffect(() => {
    return () => {
      if (fadeTimerRef.current !== null) {
        window.clearTimeout(fadeTimerRef.current);
      }
    };
  }, []);

  // Scroll-spy for active navigation pill highlighting
  useEffect(() => {
    const sectionIds: SectionId[] = NAV_ITEMS.map((item) => item.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top
          );

        if (visible.length > 0) {
          const topId = visible[0].target.id as SectionId;
          setActiveSection(topId);
        }
      },
      {
        rootMargin: '-22% 0px -60% 0px',
        threshold: 0.05,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleNavigate = useCallback((id: SectionId) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (id !== 'contact') {
      setActiveSection(id);
    }
  }, []);

  return (
    <div className="min-h-screen bg-surface-canvas text-on-surface flex flex-col">
      <Header
        lang={lang}
        activeSection={activeSection}
        onLanguageChange={handleLanguageChange}
        onNavigate={handleNavigate}
      />

      <main
        id="main-content"
        className={`w-full pt-20 bg-surface-canvas flex-1 lang-fade-transition ${
          isFading ? 'opacity-90' : 'opacity-100'
        }`}
      >
        <div className="flex flex-col w-full">
          <HeroSection
            lang={lang}
            onLanguageChange={handleLanguageChange}
            onNavigate={handleNavigate}
          />
          <Hack2SkillSection lang={lang} />
          <QitKiaSection lang={lang} />
          <CapabilitiesSection lang={lang} />
          <CredentialsSection lang={lang} />
          <ContactSection lang={lang} />
        </div>
      </main>

      <Footer lang={lang} onNavigate={handleNavigate} />
    </div>
  );
}
