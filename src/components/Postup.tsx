// =========================================================
// <Postup> – jak spolupráce probíhá (4 kroky na časové ose)
// Je na úvodní stránce i na stránce Služby. Texty kroků upravíte v poli `kroky`.
// =========================================================

const kroky = [
  { nazev: 'Seznámení', text: 'Potkáme se osobně nebo online. Řeknete mi, co řešíte a kam se chcete dostat.' },
  { nazev: 'Rozbor', text: 'Projdu vaše smlouvy, investice, nemovitosti i rozpočet. Zjistíme, co funguje a co ne.' },
  { nazev: 'Herní plán', text: 'Navrhnu konkrétní řešení s čísly a vysvětlím každý krok. Rozhodnutí je vždy na vás.' },
  { nazev: 'Dlouhodobá spolupráce', text: 'Pravidelně se vídáme, hlídáme, jestli plán funguje, a upravujeme ho podle života.' },
]

export function Postup({ title = 'Jak spolu budeme postupovat' }: { title?: string }) {
  return (
    <section className="px-5 py-[clamp(64px,9vw,104px)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <h2 className="display max-w-3xl text-[clamp(40px,5.4vw,68px)] text-les">{title}</h2>
        <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {kroky.map((k, i) => (
            <li key={k.nazev} className="relative flex flex-col gap-3 border-t-2 border-les pt-6">
              {/* tečka na časové ose */}
              <span aria-hidden="true" className="absolute -top-[7px] left-0 h-3 w-3 rounded-full bg-jantar" />
              <span className="display text-[56px] text-jantar-tmavy">{i + 1}</span>
              <h3 className="text-xl font-semibold text-les">{k.nazev}</h3>
              <p className="max-w-[34ch] text-base leading-relaxed text-kamen">{k.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
