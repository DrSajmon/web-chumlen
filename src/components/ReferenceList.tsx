'use client'

// =========================================================
// <ReferenceList> – reference s filtrem podle oblasti (stránka Reference)
//
// Filtr (tlačítka nahoře) je uložený ve stavu `filtr`. Zobrazí se jen
// tlačítka pro oblasti, ke kterým existuje aspoň jedna reference.
// Data se berou z data/reference.ts, názvy oblastí z data/sluzby.ts.
// =========================================================

import { useState } from 'react'
import type { Reference } from '@/data/reference'
import { sluzby } from '@/data/sluzby'
import { QuoteMark } from './Icons'

export function ReferenceList({ items }: { items: Reference[] }) {
  const [filtr, setFiltr] = useState('vse')

  const nazevTematu = (id: string) => sluzby.find((s) => s.id === id)?.nazev ?? id
  const temata = [...new Set(items.map((r) => r.tema))]
  const filtry = [{ id: 'vse', label: 'Vše' }, ...temata.map((id) => ({ id, label: nazevTematu(id) }))]
  const zobrazene = filtr === 'vse' ? items : items.filter((r) => r.tema === filtr)

  return (
    <div className="flex flex-col gap-8">
      {temata.length > 1 && (
        <div role="group" aria-label="Filtrovat reference" className="flex flex-wrap gap-2">
          {filtry.map((f) => (
            <button
              key={f.id}
              type="button"
              aria-pressed={filtr === f.id}
              onClick={() => setFiltr(f.id)}
              className={`min-h-10 rounded-full border px-4 text-[15px] transition-colors ${
                filtr === f.id ? 'border-les bg-les text-krida' : 'border-linka bg-white text-inkoust hover:border-les'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      )}

      <div className="grid gap-x-10 gap-y-12 md:grid-cols-2">
        {zobrazene.map((r, i) => (
          <ReferenceCard key={`${filtr}-${i}`} item={r} label={nazevTematu(r.tema)} />
        ))}
      </div>
    </div>
  )
}

export function ReferenceCard({ item, label }: { item: Reference; label?: string }) {
  return (
    <figure className="flex flex-col gap-4 border-t-2 border-les pt-6">
      <QuoteMark className="h-6 w-7 text-jantar-tmavy" />
      <blockquote className="text-xl leading-relaxed text-les">{item.text}</blockquote>
      <figcaption className="text-[15px] text-kamen">
        {item.autor}
        {label && <span className="text-kamen">, {label.toLowerCase()}</span>}
      </figcaption>
    </figure>
  )
}
