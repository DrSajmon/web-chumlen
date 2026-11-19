// =========================================================
// STRÁNKA SLUŽBY ( /sluzby )
//   1. Zelená hlavička + rychlé odkazy na jednotlivé služby (#plan, #investice…)
//   2. Služby pod sebou: vlevo název, vpravo popis, odrážky a tlačítko
//      (texty se mění v data/sluzby.ts, tady jen vzhled)
//   3. Jak spolupráce probíhá (components/Postup.tsx)
//   4. Kontakt
// =========================================================

import type { Metadata } from 'next'
import Link from 'next/link'
import { ButtonLink } from '@/components/Button'
import { Icon } from '@/components/Icons'
import { KontaktPruh } from '@/components/KontaktPruh'
import { PageHeader } from '@/components/PageHeader'
import { Postup } from '@/components/Postup'
import { sluzby } from '@/data/sluzby'

export const metadata: Metadata = {
  title: 'Služby',
  description: 'Finanční plánování, pojištění, investice, reality a správa majetku na jednom místě.',
}

export default function SluzbyPage() {
  return (
    <>
      {/* ---------- 1. HLAVIČKA ---------- */}
      <PageHeader
        title="S čím vám pomohu"
        text="Finance a reality pod jednou střechou. Vyberte oblast, která vás zajímá, nebo přijďte s celou situací a projdeme ji společně."
      >
        <div className="flex flex-wrap gap-2.5 pt-3">
          {sluzby.map((s) => (
            <Link
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full border border-mech/50 px-4 py-2.5 text-[15px] text-krida transition-colors hover:border-jantar hover:bg-jantar hover:text-les"
            >
              {s.nazev}
            </Link>
          ))}
        </div>
      </PageHeader>

      {/* ---------- 2. SLUŽBY ---------- */}
      <div className="px-5 pt-[clamp(32px,5vw,56px)]">
        <div className="mx-auto max-w-6xl">
          {sluzby.map((s) => (
            <section
              key={s.id}
              id={s.id}
              aria-labelledby={`nadpis-${s.id}`}
              className="grid scroll-mt-24 gap-8 border-b border-linka py-[clamp(40px,6vw,72px)] last:border-b-0 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16"
            >
              <div className="flex flex-col gap-4">
                <Icon name={s.ikona} className="h-12 w-12 text-les" strokeWidth={1.3} />
                <h2 id={`nadpis-${s.id}`} className="display text-[clamp(40px,5vw,60px)] text-les">
                  {s.nazev}
                </h2>
                <p className="max-w-[34ch] text-lg leading-relaxed text-kamen">{s.kratce}</p>
              </div>
              <div className="flex flex-col gap-5">
                <p className="max-w-[60ch] text-lg leading-relaxed">{s.popis}</p>
                <ul className="flex flex-col gap-3">
                  {s.body.map((bod) => (
                    <li key={bod} className="flex gap-3 text-base leading-normal">
                      <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-jantar-tmavy" strokeWidth={2.2} />
                      {bod}
                    </li>
                  ))}
                </ul>
                <ButtonLink href={`/kontakt?tema=${s.id}#formular`} className="mt-2 self-start">
                  {s.tlacitko}
                </ButtonLink>
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* ---------- 3. POSTUP ---------- */}
      <div className="border-t border-linka">
        <Postup title="Od první schůzky k fungujícímu plánu" />
      </div>

      {/* ---------- 4. KONTAKT ---------- */}
      <KontaktPruh title="Nevíte, kde začít?" text="Na první schůzce společně zjistíme, co má pro vás největší smysl." />
    </>
  )
}
