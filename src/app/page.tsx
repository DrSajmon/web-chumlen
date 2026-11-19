// =========================================================
// ÚVODNÍ STRÁNKA ( / )
//   1. Úvod s fotkou, čarami hřiště a citátem → tlačítka na Kontakt a Služby
//   2. Služby – přepínač (components/SluzbyPrepinac.tsx)
//   3. Z hřiště do financí – krátký medailonek + 3 hodnoty → /o-mne
//   4. Kalkulačka (components/Calculator.tsx)
//   5. Jak spolupráce probíhá (components/Postup.tsx)
//   6. Reference – jen když nějaké jsou (data/reference.ts)
//   7. Kontakt – velký telefon a e-mail (components/KontaktPruh.tsx)
// =========================================================

import Image from 'next/image'
import Link from 'next/link'
import { ButtonLink } from '@/components/Button'
import { Calculator } from '@/components/Calculator'
import { HristeCary } from '@/components/HristeCary'
import { Icon } from '@/components/Icons'
import { KontaktPruh } from '@/components/KontaktPruh'
import { Postup } from '@/components/Postup'
import { ReferenceCard } from '@/components/ReferenceList'
import { SluzbyPrepinac } from '@/components/SluzbyPrepinac'
import { reference } from '@/data/reference'
import { celeJmeno, site } from '@/data/site'

// Tři hodnoty z fotbalu, které platí i v práci – text upravíte tady
const hodnoty = [
  { nazev: 'Disciplína', text: 'Plán se dodržuje i ve chvílích, kdy se nedaří. Výkyv trhu není důvod měnit směr.' },
  { nazev: 'Vytrvalost', text: 'Výsledky přicházejí s časem. Stavím na pravidelnosti a trpělivosti, ne na rychlých tazích.' },
  { nazev: 'Týmovost', text: 'Vy a já jsme jeden tým. Rozhodujeme společně a každý krok vám vysvětlím.' },
]

export default function HomePage() {
  return (
    <>
      {/* ---------- 1. ÚVOD ---------- */}
      <section className="bg-les text-krida">
        <div className="px-5">
          <div className="mx-auto grid max-w-6xl gap-x-10 pt-[clamp(40px,6vw,80px)] md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
            <div className="flex flex-col gap-7 pb-[clamp(40px,6vw,88px)] md:self-center">
              <h1 className="display text-[clamp(56px,8.6vw,120px)]">Majetek se nebuduje za jeden zápas.</h1>
              <p className="max-w-[54ch] text-[clamp(17px,1.6vw,20px)] leading-relaxed text-mech">
                Pomáhám lidem budovat a zhodnocovat jejich majetek prostřednictvím financí a realit. Základem mé práce je
                dlouhodobý vztah, důvěra a férové jednání. Nehledám krátkodobá řešení, ale cesty, které dávají smysl
                i v dlouhodobém horizontu.
              </p>
              <div className="flex flex-wrap gap-3">
                <ButtonLink href="/kontakt#formular" variant="jantar">
                  Domluvit schůzku
                </ButtonLink>
                <ButtonLink href="/sluzby" variant="obrysSvetle">
                  Prohlédnout služby
                </ButtonLink>
              </div>
              <p className="flex items-center gap-2.5 text-[15px] text-mech">
                <Icon name="shield" className="h-5 w-5 shrink-0 text-jantar" strokeWidth={1.8} />
                {site.registrace}
              </p>
            </div>

            {/* Fotka stojí na středu hřiště: za ní středový kruh, pod ní půlicí čára */}
            <div className="relative mx-auto mt-6 w-[78%] max-w-[340px] self-end md:mt-0 md:w-full md:max-w-none">
              <HristeCary />
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-md">
                <Image
                  src="/jan-chumlen.jpg"
                  alt={celeJmeno}
                  fill
                  sizes="(max-width: 768px) 440px, 460px"
                  loading="eager"
                  fetchPriority="high"
                  className="object-cover object-[center_18%]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Citát – horní linka je zároveň půlicí čára hřiště */}
        <figure className="border-t border-les-cara px-5 py-8">
          <div className="mx-auto flex max-w-6xl flex-wrap items-baseline justify-between gap-x-10 gap-y-3">
            <blockquote className="max-w-[48ch] text-[clamp(20px,2.2vw,26px)] leading-snug">„{site.citat}“</blockquote>
            <figcaption className="text-[15px] text-mech">{celeJmeno}</figcaption>
          </div>
        </figure>
      </section>

      {/* ---------- 2. SLUŽBY ---------- */}
      <section className="px-5 py-[clamp(64px,9vw,104px)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-10">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <h2 className="display max-w-3xl text-[clamp(40px,5.4vw,68px)] text-les">Finance a reality pod jednou střechou</h2>
            <Link href="/sluzby" className="pb-2 font-semibold text-les underline decoration-jantar decoration-2 underline-offset-4 hover:decoration-les">
              Všechny služby
            </Link>
          </div>
          <SluzbyPrepinac />
        </div>
      </section>

      {/* ---------- 3. Z HŘIŠTĚ DO FINANCÍ ---------- */}
      <section className="border-t border-linka px-5 py-[clamp(64px,9vw,104px)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-14">
          <div className="grid gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:items-center md:gap-16">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-md bg-salvej">
              <Image src="/jan-profil.jpg" alt={`${celeJmeno} z profilu`} fill sizes="420px" className="object-cover object-[center_20%]" />
            </div>
            <div className="flex flex-col gap-5">
              <h2 className="display text-[clamp(40px,5.4vw,68px)] text-les">Fotbal mě naučil, že vyhrává tým</h2>
              <p className="max-w-[60ch] text-lg leading-relaxed">
                Celý život mě provázel fotbal, který mě naučil disciplíně, vytrvalosti a především týmovosti. Vždy jsem
                věděl, že individuální úspěch má největší hodnotu tehdy, když přispívá k úspěchu celého týmu.
              </p>
              <p className="max-w-[60ch] text-lg leading-relaxed text-kamen">
                Stejné hodnoty dnes uplatňuji v {site.firma}. Každého klienta vnímám jako partnera, ne jako obchodní případ.
              </p>
              <ButtonLink href="/o-mne" variant="obrys" className="mt-2 self-start">
                Více o mně
              </ButtonLink>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 sm:gap-8">
            {hodnoty.map((h) => (
              <div key={h.nazev} className="flex flex-col gap-3 border-t-2 border-les pt-5">
                <h3 className="display text-[36px] text-les">{h.nazev}</h3>
                <p className="max-w-[36ch] text-base leading-relaxed text-kamen">{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 4. KALKULAČKA ---------- */}
      <Calculator />

      {/* ---------- 5. POSTUP ---------- */}
      <Postup />

      {/* ---------- 6. REFERENCE – jen když nějaké jsou ---------- */}
      {reference.length > 0 && (
        <section className="px-5 pb-[clamp(64px,9vw,104px)]">
          <div className="mx-auto flex max-w-6xl flex-col gap-10">
            <div className="flex flex-wrap items-end justify-between gap-5">
              <h2 className="display text-[clamp(40px,5.4vw,68px)] text-les">Co říkají klienti</h2>
              <Link href="/reference" className="pb-2 font-semibold text-les underline decoration-jantar decoration-2 underline-offset-4">
                Všechny reference
              </Link>
            </div>
            <div className="grid gap-10 md:grid-cols-2">
              {reference.slice(0, 2).map((r, i) => (
                <ReferenceCard key={i} item={r} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---------- 7. KONTAKT ---------- */}
      <KontaktPruh />
    </>
  )
}
