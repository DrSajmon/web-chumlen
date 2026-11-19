// =========================================================
// <KontaktPruh> – závěrečná výzva s velkým telefonem a e-mailem
// (konec většiny stránek). Kontakty se berou z data/site.ts.
//
// Použití:
//   <KontaktPruh />
//   <KontaktPruh title="Nevíte, kde začít?" text="…" />
// =========================================================

import { site, telefonOdkaz } from '@/data/site'
import { ButtonLink } from './Button'

type KontaktPruhProps = {
  title?: string
  text?: string
}

export function KontaktPruh({
  title = 'Pojďme se potkat',
  text = 'První schůzka je nezávazná. Probereme, co řešíte, a zjistíme, jestli si sedneme.',
}: KontaktPruhProps) {
  return (
    <section className="px-5 pb-[clamp(64px,9vw,104px)]">
      <div className="mx-auto grid max-w-6xl gap-10 rounded-md bg-salvej p-[clamp(28px,5vw,64px)] md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:items-end">
        <div className="flex flex-col gap-4">
          <h2 className="display text-[clamp(40px,5.4vw,68px)] text-les">{title}</h2>
          <p className="max-w-[40ch] text-lg leading-relaxed text-kamen">{text}</p>
          <ButtonLink href="/kontakt#formular" className="mt-2 self-start">
            Napsat zprávu
          </ButtonLink>
        </div>
        <div className="flex min-w-0 flex-col gap-2 md:items-end md:text-right">
          {site.telefon && (
            <a href={telefonOdkaz} className="display break-words text-[clamp(48px,7.4vw,104px)] text-les hover:text-jantar-tmavy">
              {site.telefon}
            </a>
          )}
          <a
            href={`mailto:${site.email}`}
            className="break-all text-[clamp(18px,2vw,24px)] font-semibold text-les underline decoration-jantar decoration-2 underline-offset-4 hover:decoration-les"
          >
            {site.email}
          </a>
        </div>
      </div>
    </section>
  )
}
