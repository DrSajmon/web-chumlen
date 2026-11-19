'use client'

// =========================================================
// <SluzbyPrepinac> – služby na úvodní stránce
// Vlevo seznam služeb, vpravo detail té vybrané. Přepíná se kliknutím
// nebo šipkami na klávesnici (jako záložky). Texty jsou v data/sluzby.ts.
// =========================================================

import Link from 'next/link'
import { useRef, useState, type KeyboardEvent } from 'react'
import { sluzby } from '@/data/sluzby'
import { ButtonLink } from './Button'
import { Icon } from './Icons'

export function SluzbyPrepinac() {
  const [aktivni, setAktivni] = useState(0)
  const tlacitka = useRef<(HTMLButtonElement | null)[]>([])
  const s = sluzby[aktivni]

  // Šipky nahoru/dolů (i doleva/doprava) přepínají služby
  function klavesa(e: KeyboardEvent<HTMLDivElement>) {
    const smer = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key]
    if (!smer) return
    e.preventDefault()
    const dalsi = (aktivni + smer + sluzby.length) % sluzby.length
    setAktivni(dalsi)
    tlacitka.current[dalsi]?.focus()
  }

  return (
    <div className="grid gap-8 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-12">
      <div role="tablist" aria-label="Služby" aria-orientation="vertical" onKeyDown={klavesa} className="flex flex-col">
        {sluzby.map((item, i) => {
          const vybrano = i === aktivni
          return (
            <button
              key={item.id}
              ref={(el) => {
                tlacitka.current[i] = el
              }}
              type="button"
              role="tab"
              id={`tab-${item.id}`}
              aria-selected={vybrano}
              aria-controls="sluzba-detail"
              tabIndex={vybrano ? 0 : -1}
              onClick={() => setAktivni(i)}
              className={`group flex items-center justify-between gap-4 border-b border-linka py-4 text-left transition-colors first:border-t ${
                vybrano ? 'text-les' : 'text-kamen hover:text-les'
              }`}
            >
              <span className="display text-[clamp(28px,3.4vw,40px)]">{item.nazev}</span>
              <span
                aria-hidden="true"
                className={`h-3 w-3 shrink-0 rounded-full transition-colors ${vybrano ? 'bg-jantar' : 'bg-transparent group-hover:bg-linka'}`}
              />
            </button>
          )
        })}
      </div>

      <div
        id="sluzba-detail"
        role="tabpanel"
        aria-labelledby={`tab-${s.id}`}
        key={s.id}
        className="objev flex flex-col gap-5 rounded-md bg-salvej p-[clamp(24px,4vw,44px)]"
        style={{ animationDuration: '0.4s' }}
      >
        <Icon name={s.ikona} className="h-11 w-11 text-les" strokeWidth={1.4} />
        <p className="max-w-[56ch] text-[clamp(17px,1.6vw,19px)] leading-relaxed">{s.popis}</p>
        <ul className="flex flex-col gap-2.5">
          {s.body.map((bod) => (
            <li key={bod} className="flex gap-3 text-base leading-normal">
              <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-jantar-tmavy" strokeWidth={2.2} />
              {bod}
            </li>
          ))}
        </ul>
        <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-3">
          <ButtonLink href={`/kontakt?tema=${s.id}#formular`}>{s.tlacitko}</ButtonLink>
          <Link href={`/sluzby#${s.id}`} className="font-semibold text-les underline decoration-jantar decoration-2 underline-offset-4 hover:decoration-les">
            Podrobnosti o službě
          </Link>
        </div>
      </div>
    </div>
  )
}
