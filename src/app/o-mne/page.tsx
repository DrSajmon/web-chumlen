// =========================================================
// STRÁNKA O MNĚ ( /o-mne )
//   1. Zelená hlavička s fotkou
//   2. Medailonek – Z hřiště do financí
//   3. Na čem si zakládám – 3 principy (pole `principy`)
//   4. Citát
//   5. Kontakt
// =========================================================

import type { Metadata } from 'next'
import Image from 'next/image'
import { ButtonLink } from '@/components/Button'
import { KontaktPruh } from '@/components/KontaktPruh'
import { celeJmeno, site } from '@/data/site'

export const metadata: Metadata = {
  title: 'O mně',
  description: `${celeJmeno} – ${site.podtitul.toLowerCase()} v ${site.firma}. Bývalý fotbalista, který staví na disciplíně, vytrvalosti a týmovosti.`,
}

const principy = [
  {
    nazev: 'Férové jednání',
    text: 'Doporučuji jen řešení, která dávají smysl pro vás. U každého vysvětlím, co stojí, co přináší a jaká má rizika.',
  },
  {
    nazev: 'Vzájemná důvěra',
    text: 'Důvěra se nedá koupit, musí se vybudovat. Proto mluvím otevřeně a držím se toho, na čem se domluvíme.',
  },
  {
    nazev: 'Dlouhodobé vztahy',
    text: 'Každého klienta vnímám jako partnera, ne jako obchodní případ. Spolupráce podpisem smlouvy nekončí, ale začíná.',
  },
]

export default function OMnePage() {
  return (
    <>
      {/* ---------- 1. HLAVIČKA S FOTKOU ---------- */}
      <section className="bg-les px-5 text-krida">
        <div className="mx-auto grid max-w-6xl gap-x-12 pt-[clamp(40px,6vw,72px)] md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
          <div className="flex flex-col gap-6 pb-[clamp(40px,6vw,80px)] md:self-center">
            <h1 className="display text-[clamp(52px,8vw,112px)]">{celeJmeno}</h1>
            <p className="max-w-[52ch] text-[clamp(17px,1.6vw,20px)] leading-relaxed text-mech">
              {site.podtitul} v {site.firma}. Pomáhám klientům budovat majetek a zakládám si především na
              férovém jednání, vzájemné důvěře a dlouhodobých vztazích.
            </p>
            <ButtonLink href="/kontakt#formular" variant="jantar" className="self-start">
              Domluvit schůzku
            </ButtonLink>
          </div>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[440px] self-end overflow-hidden rounded-t-md md:max-w-none">
            <Image
              src="/jan-sako.jpg"
              alt={celeJmeno}
              fill
              sizes="(max-width: 768px) 440px, 460px"
              loading="eager"
              fetchPriority="high"
              className="object-cover object-[center_15%]"
            />
          </div>
        </div>
      </section>

      {/* ---------- 2. MEDAILONEK ---------- */}
      <section className="px-5 py-[clamp(64px,9vw,104px)]">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] md:gap-16">
          <div className="flex flex-col gap-5">
            <h2 className="display text-[clamp(40px,5.4vw,68px)] text-les">Z hřiště do financí</h2>
            <p className="max-w-[62ch] text-lg leading-relaxed">
              Celý život mě provázel fotbal, který mě naučil disciplíně, vytrvalosti a především týmovosti. Vždy jsem
              věděl, že individuální úspěch má největší hodnotu tehdy, když přispívá k úspěchu celého týmu.
            </p>
            <p className="max-w-[62ch] text-lg leading-relaxed">
              Stejné hodnoty dnes uplatňuji i ve své profesní práci v {site.firma}. Pomáhám klientům budovat majetek
              prostřednictvím financí a realit a zakládám si především na férovém jednání, vzájemné důvěře a
              dlouhodobých vztazích.
            </p>
            <p className="max-w-[62ch] text-lg leading-relaxed">
              Každého klienta vnímám jako partnera, ne jako obchodní případ. Důležitý je pro mě nejenom výsledek, ale
              i způsob, jakým ho společně dosáhneme.
            </p>
          </div>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-md bg-salvej md:mt-4">
            <Image src="/jan-kosile.jpg" alt={`${celeJmeno} v bílé košili`} fill sizes="420px" className="object-cover object-[center_12%]" />
          </div>
        </div>
      </section>

      {/* ---------- 3. NA ČEM SI ZAKLÁDÁM ---------- */}
      <section className="border-t border-linka px-5 py-[clamp(64px,9vw,104px)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-12">
          <h2 className="display text-[clamp(40px,5.4vw,68px)] text-les">Na čem si zakládám</h2>
          <div className="grid gap-10 sm:grid-cols-3 sm:gap-8">
            {principy.map((p) => (
              <div key={p.nazev} className="flex flex-col gap-3 border-t-2 border-les pt-5">
                <h3 className="display text-[36px] text-les">{p.nazev}</h3>
                <p className="max-w-[36ch] text-base leading-relaxed text-kamen">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 4. CITÁT ---------- */}
      <figure className="bg-les px-5 py-[clamp(64px,9vw,112px)] text-krida">
        <div className="mx-auto flex max-w-6xl flex-col gap-6">
          <span aria-hidden="true" className="block h-1 w-16 rounded-full bg-jantar" />
          <blockquote className="display max-w-5xl text-[clamp(36px,5vw,64px)]">„{site.citat}“</blockquote>
          <figcaption className="text-[17px] text-mech">{celeJmeno}</figcaption>
        </div>
      </figure>

      {/* ---------- 5. KONTAKT ---------- */}
      <div className="pt-[clamp(64px,9vw,104px)]">
        <KontaktPruh />
      </div>
    </>
  )
}
