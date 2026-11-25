import { CAPABILITIES_LIST, type Lang } from '../data/portfolioContent';

interface CapabilitiesSectionProps {
  lang: Lang;
}

export function CapabilitiesSection({ lang }: CapabilitiesSectionProps) {
  return (
    <section
      className="w-full bg-surface-canvas text-on-surface px-gutter-mobile lg:px-gutter py-space-xl"
      id="capabilities"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        {/* Section Header */}
        <div className="flex flex-col gap-space-sm max-w-3xl">
          <span className="font-mono text-label-mono-sm text-outline uppercase tracking-wider font-semibold">
            {lang === 'id' ? 'PENGALAMAN DALAM PRAKTIK' : 'EXPERIENCE IN PRACTICE'}
          </span>

          <h2 className="font-display font-bold text-headline-lg-mobile lg:text-headline-lg text-on-surface tracking-tight text-balance">
            {lang === 'id'
              ? 'Menjembatani Tata Kelola Layanan Primer, Pelayanan Lapangan & Perangkat Digital'
              : 'Bridging Primary Care Governance, Frontline Delivery & Digital Tooling'}
          </h2>

          <p className="font-body text-body-md text-on-surface-variant">
            {lang === 'id'
              ? 'Model kepemimpinan teruji yang ditempa melalui dua dekade pengabdian kedokteran komunitas, tata kelola klinis aparatur negara, dan akreditasi fasilitas.'
              : 'Proven leadership models refined through two decades of hands-on community medicine, civil service clinical stewardship, and institutional accreditation.'}
          </p>
        </div>

        {/* Open Editorial Cards (2x2 Matrix) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
          {CAPABILITIES_LIST.map((item) => (
            <article
              key={item.code.en}
              className="p-6 sm:p-space-xl bg-surface-card rounded-xl shadow-md ring-1 ring-surface-border/60 flex flex-col gap-space-sm"
            >
              <div className="font-mono text-label-mono-md text-primary font-bold">
                {item.code[lang]}
              </div>

              <h3 className="font-display font-semibold text-headline-sm text-on-surface">
                {item.title[lang]}
              </h3>

              <p className="font-body text-body-md text-on-surface-variant">
                {item.body[lang]}
              </p>

              <div className="mt-auto pt-4 flex items-center gap-2 font-mono text-label-mono-sm text-primary">
                <span className="material-symbols-outlined text-[18px] shrink-0">
                  {item.icon}
                </span>
                <span>{item.badge[lang]}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
