'use client'

// =========================================================
// <ContactForm> – formulář pro nezávaznou schůzku (stránka Kontakt)
//
// Co dělá:
// 1. Uživatel vyplní údaje a klikne na témata (tlačítka se dají zapnout/vypnout).
// 2. Po odeslání se data pošlou na /api/poptavka (soubor app/api/poptavka/route.ts),
//    který z nich udělá e-mail a pošle ho přes službu Resend.
// 3. Podle odpovědi se ukáže poděkování, nebo chybová hláška.
//
// `initialTopic` = téma předvybrané z odkazu, např. /kontakt?tema=investice
// Skryté pole "web" je past na roboty (člověk ho nevidí a nevyplní).
// =========================================================

import { useState, type FormEvent } from 'react'
import { site, telefonMezinarodni, telefonOdkaz } from '@/data/site'
import { temataFormulare } from '@/data/sluzby'
import { Icon } from './Icons'

type Stav = 'ceka' | 'odesilam' | 'odeslano' | 'chyba'

const inputClass =
  'w-full rounded-md border border-linka bg-white px-4 py-3 text-base text-inkoust outline-none transition placeholder:text-[#7d8a83] focus:border-les focus:ring-2 focus:ring-jantar/50'

export function ContactForm({ initialTopic }: { initialTopic?: string }) {
  const [temata, setTemata] = useState<string[]>(initialTopic ? [initialTopic] : [])
  const [stav, setStav] = useState<Stav>('ceka')

  // Zapne / vypne jedno téma
  const prepniTema = (id: string) =>
    setTemata((aktualni) => (aktualni.includes(id) ? aktualni.filter((t) => t !== id) : [...aktualni, id]))

  async function odeslat(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStav('odesilam')

    const form = new FormData(e.currentTarget)
    const data = {
      jmeno: form.get('jmeno'),
      email: form.get('email'),
      telefon: form.get('telefon'),
      forma: form.get('forma'),
      zprava: form.get('zprava'),
      souhlas: form.get('souhlas') === 'on',
      web: form.get('web'), // past na roboty
      temata: temata.map((id) => temataFormulare.find((t) => t.id === id)?.label ?? id),
    }

    try {
      const res = await fetch('/api/poptavka', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      setStav(res.ok ? 'odeslano' : 'chyba')
    } catch {
      setStav('chyba')
    }
  }

  // ---- Poděkování po odeslání ----
  if (stav === 'odeslano') {
    return (
      <div role="status" className="objev flex min-h-[460px] flex-col items-start justify-center gap-4">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-jantar text-les">
          <Icon name="check" className="h-7 w-7" strokeWidth={2.4} />
        </span>
        <h3 className="display text-[44px] text-les">Zpráva odeslána</h3>
        <p className="max-w-[40ch] text-lg leading-relaxed text-kamen">Ozvu se vám co nejdříve a domluvíme se na termínu.</p>
        <button
          type="button"
          onClick={() => {
            setStav('ceka')
            setTemata([])
          }}
          className="mt-2 min-h-11 rounded-full border-2 border-les px-5 text-[15px] font-semibold text-les hover:bg-les hover:text-krida"
        >
          Napsat další zprávu
        </button>
      </div>
    )
  }

  // ---- Samotný formulář ----
  return (
    <form onSubmit={odeslat} className="flex flex-col gap-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="f-jmeno" label="Jméno a příjmení *">
          <input id="f-jmeno" name="jmeno" type="text" required autoComplete="name" placeholder="Petra Nováková" className={inputClass} />
        </Field>
        <Field id="f-email" label="E-mail *">
          <input id="f-email" name="email" type="email" required autoComplete="email" placeholder="petra@email.cz" className={inputClass} />
        </Field>
        <Field id="f-telefon" label="Telefon">
          <input id="f-telefon" name="telefon" type="tel" autoComplete="tel" placeholder="777 123 456" className={inputClass} />
        </Field>
        <Field id="f-forma" label="Jak se chcete potkat?">
          <select id="f-forma" name="forma" className={inputClass}>
            <option>Osobně</option>
            <option>Telefonicky</option>
            <option>Online</option>
          </select>
        </Field>
      </div>

      <fieldset>
        <legend className="mb-3 text-[15px] font-semibold text-les">Co chcete řešit?</legend>
        <div className="flex flex-wrap gap-2">
          {temataFormulare.map((t) => {
            const zapnuto = temata.includes(t.id)
            return (
              <button
                key={t.id}
                type="button"
                aria-pressed={zapnuto}
                onClick={() => prepniTema(t.id)}
                className={`inline-flex min-h-10 items-center gap-2 rounded-full border px-4 text-[15px] transition-colors ${
                  zapnuto ? 'border-les bg-les text-krida' : 'border-linka bg-white text-inkoust hover:border-les'
                }`}
              >
                {zapnuto && <Icon name="check" className="h-4 w-4 text-jantar" strokeWidth={2.6} />}
                {t.label}
              </button>
            )
          })}
        </div>
      </fieldset>

      <Field id="f-zprava" label="Vaše zpráva">
        <textarea id="f-zprava" name="zprava" rows={4} placeholder="Stručně popište, co řešíte…" className={`${inputClass} resize-y`} />
      </Field>

      {/* Past na roboty – skrytá pro lidi */}
      <input type="text" name="web" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <label className="flex cursor-pointer items-start gap-3 text-[14px] leading-normal text-kamen">
        <input type="checkbox" name="souhlas" required className="mt-0.5 h-[18px] w-[18px] shrink-0 accent-les" />
        <span>Souhlasím se zpracováním osobních údajů za účelem odpovědi na můj dotaz. *</span>
      </label>

      {stav === 'chyba' && (
        <p role="alert" className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-[15px] text-red-900">
          Zprávu se nepodařilo odeslat. Zkuste to znovu, nebo zavolejte na{' '}
          <a href={telefonOdkaz} className="font-semibold underline">
            {telefonMezinarodni}
          </a>{' '}
          či napište na{' '}
          <a href={`mailto:${site.email}`} className="font-semibold underline">
            {site.email}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={stav === 'odesilam'}
        className="inline-flex min-h-13 items-center justify-center self-start rounded-full bg-les px-8 text-base font-semibold text-krida transition-colors hover:bg-les-svetly disabled:cursor-wait disabled:opacity-70"
      >
        {stav === 'odesilam' ? 'Odesílám…' : 'Odeslat zprávu'}
      </button>
    </form>
  )
}

// Popisek + pole pod sebou
function Field({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-[15px] font-semibold text-les">
        {label}
      </label>
      {children}
    </div>
  )
}
