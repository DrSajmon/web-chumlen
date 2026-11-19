'use client'

// =========================================================
// <Calculator> – kalkulačka pravidelného investování (úvodní stránka)
//
// Tři jezdce (měsíční vklad, počet let, roční výnos) jsou uložené ve stavu (useState).
// Výsledek je budoucí hodnota pravidelné měsíční investice:
//   hodnota = vklad × ((1 + r)^n − 1) / r
//   kde r = roční výnos / 12 (měsíční úrok) a n = počet měsíců
//
// Pruh pod výsledkem ukazuje, jaká část je vložená a jaká je výnos.
// Rozsahy jezdců změníte v atributech min / max / step u jednotlivých <Slider>.
// =========================================================

import { useState } from 'react'
import { ButtonLink } from './Button'

// 123456.7 → "123 457 Kč"
const kc = (n: number) => Math.round(n).toLocaleString('cs-CZ') + ' Kč'

export function Calculator() {
  const [mesicne, setMesicne] = useState(3000)
  const [roky, setRoky] = useState(20)
  const [vynos, setVynos] = useState(6)

  const r = vynos / 100 / 12
  const n = roky * 12
  const celkem = r > 0 ? (mesicne * (Math.pow(1 + r, n) - 1)) / r : mesicne * n
  const vlozeno = mesicne * n
  const podilVlozeno = Math.round((vlozeno / celkem) * 100)

  return (
    <section className="bg-les px-5 py-[clamp(64px,9vw,104px)] text-krida">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
        <div className="flex flex-col gap-5">
          <h2 className="display text-[clamp(40px,5.4vw,68px)]">Kolik vám může vydělat čas?</h2>
          <p className="max-w-[46ch] text-lg leading-relaxed text-mech">
            Pravidelné investování funguje jako dobrá sezóna: výsledek nedělá jeden zápas, ale vytrvalost. Posuňte jezdci
            a uvidíte, jak se částka v čase skládá.
          </p>
          <ButtonLink href="/kontakt?tema=investice#formular" variant="jantar" className="mt-2 self-start">
            Spočítat můj plán
          </ButtonLink>
        </div>

        <div className="flex flex-col gap-6 rounded-md bg-les-svetly p-[clamp(24px,4vw,40px)]">
          <Slider id="calc-m" label="Měsíční vklad" value={kc(mesicne)} min={500} max={30000} step={500} current={mesicne} onChange={setMesicne} />
          <Slider id="calc-y" label="Doba investování" value={`${roky} let`} min={1} max={40} step={1} current={roky} onChange={setRoky} />
          <Slider id="calc-r" label="Očekávaný roční výnos" value={`${String(vynos).replace('.', ',')} %`} min={1} max={10} step={0.5} current={vynos} onChange={setVynos} />

          <div className="flex flex-col gap-3 border-t border-les-cara pt-6">
            <span className="text-[15px] text-mech">Odhadovaná hodnota za {roky} let</span>
            <span className="display text-[clamp(44px,5vw,64px)] text-jantar" aria-live="polite">
              {kc(celkem)}
            </span>
            {/* Pruh: světlá část = vloženo, jantarová = výnos */}
            <div aria-hidden="true" className="flex h-2.5 overflow-hidden rounded-full bg-jantar">
              <span className="bg-krida transition-[width] duration-300" style={{ width: `${podilVlozeno}%` }} />
            </div>
            <div className="flex flex-wrap justify-between gap-4 text-[15px]">
              <span>
                <span className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-krida" />
                Vloženo <strong className="font-semibold">{kc(vlozeno)}</strong>
              </span>
              <span>
                <span className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-jantar" />
                Výnos <strong className="font-semibold">{kc(celkem - vlozeno)}</strong>
              </span>
            </div>
          </div>
          <p className="text-[13px] leading-normal text-mech">
            Modelový výpočet bez poplatků a daní. Nejde o příslib výnosu, hodnota investice může kolísat.
          </p>
        </div>
      </div>
    </section>
  )
}

// Jeden jezdec s popiskem a aktuální hodnotou
type SliderProps = {
  id: string
  label: string
  value: string
  min: number
  max: number
  step: number
  current: number
  onChange: (v: number) => void
}

function Slider({ id, label, value, min, max, step, current, onChange }: SliderProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="flex justify-between gap-3 text-[15px] text-mech">
        <span>{label}</span>
        <strong className="font-semibold text-krida">{value}</strong>
      </label>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={current}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-7 w-full cursor-pointer"
      />
    </div>
  )
}
