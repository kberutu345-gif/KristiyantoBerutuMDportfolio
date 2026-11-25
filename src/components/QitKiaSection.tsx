import { QIT_KIA_MODULES, type Lang } from '../data/portfolioContent';

interface QitKiaSectionProps {
  lang: Lang;
}

export function QitKiaSection({ lang }: QitKiaSectionProps) {
  return (
    <section
      className="w-full bg-surface text-on-surface px-gutter-mobile lg:px-gutter py-space-xl"
      id="qit-kia"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        {/* Section Title */}
        <div className="flex flex-col gap-space-sm max-w-3xl">
          <div className="inline-flex items-center gap-2 text-primary font-mono text-label-mono-sm uppercase tracking-wider font-semibold">
            <span className="material-symbols-outlined text-[16px] shrink-0">
              local_hospital
            </span>
            <span>
              {lang === 'id'
                ? 'IMPLEMENTASI PENINGKATAN MUTU KLINIS AKTIF • KESELAMATAN PASIEN IBU & BAYI'
                : 'ACTIVE CLINICAL QI IMPLEMENTATION • MATERNAL & NEONATAL PATIENT SAFETY'}
            </span>
          </div>

          <h2 className="font-display font-bold text-headline-lg-mobile lg:text-headline-lg text-on-surface tracking-tight text-balance">
            {lang === 'id'
              ? 'QIT KIA — Kerangka Peningkatan Mutu Kamar Bersalin & Persalinan'
              : 'QIT KIA — Intrapartum & Delivery Room Quality Improvement Framework'}
          </h2>

          <p className="font-body text-body-lg text-on-surface-variant">
            {lang === 'id'
              ? 'Menerjemahkan dokumentasi rutin kamar bersalin menjadi umpan balik klinis aktif yang siap diaudit di seluruh bangsal layanan primer.'
              : 'Translating routine delivery room documentation into active, audit-ready clinical safety feedback loops across primary care labor wards.'}
          </p>
        </div>

        {/* 4 Clinical Safety Modules (2x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
          {QIT_KIA_MODULES.map((module) => {
            const isTertiary = module.accent === 'tertiary';
            return (
              <article
                key={module.code.en}
                className="p-6 sm:p-space-xl bg-surface-card rounded-xl shadow-md ring-1 ring-surface-border/60 flex flex-col gap-space-md"
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`font-mono text-label-mono-md font-bold ${
                      isTertiary ? 'text-tertiary' : 'text-primary'
                    }`}
                  >
                    {module.code[lang]}
                  </span>
                  <span
                    className={`material-symbols-outlined ${
                      isTertiary ? 'text-tertiary' : 'text-primary-container'
                    }`}
                  >
                    {module.icon}
                  </span>
                </div>

                <h3 className="font-display font-semibold text-headline-sm text-on-surface">
                  {module.title[lang]}
                </h3>

                <p className="font-body text-body-md text-on-surface-variant">
                  {module.body[lang]}
                </p>

                <div className="mt-auto pt-space-md flex flex-wrap gap-2 font-mono text-label-mono-sm text-on-surface-variant">
                  {module.tags.map((tag) => (
                    <span
                      key={tag.en}
                      className="px-2.5 py-1 rounded bg-surface-container"
                    >
                      {tag[lang]}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
