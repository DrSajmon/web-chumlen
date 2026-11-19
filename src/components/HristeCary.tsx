// =========================================================
// <HristeCary> – středový kruh fotbalového hřiště za fotkou v úvodu.
//
// Půlkruh „vyrůstá“ z půlicí čáry (spodní linka úvodu), takže Jan stojí
// přesně na středu hřiště; jantarová tečka je středový bod.
// Při načtení se kruh „nakreslí křídou“ (animace .cara v globals.css).
// Čistě ozdobné, čtečky ho přeskočí.
//
// Velikost kruhu = šířka SVG (w-[134%] = o třetinu širší než fotka).
// Síla čáry (strokeWidth) se škáluje s velikostí kruhu: 0.75 ≈ 2 px na počítači, 1 px na mobilu.
// =========================================================

export function HristeCary() {
  return (
    <>
      <svg
        aria-hidden="true"
        viewBox="0 0 200 100"
        className="pointer-events-none absolute bottom-0 left-1/2 w-[124%] -translate-x-1/2 overflow-visible md:w-[134%]"
      >
        <path
          d="M1 100 A99 99 0 0 1 199 100"
          pathLength={1}
          fill="none"
          stroke="rgba(242, 244, 239, 0.28)"
          strokeWidth={0.75}
          className="cara"
          style={{ '--delka': 1, '--zpozdeni': '200ms' } as React.CSSProperties}
        />
      </svg>
      {/* středový bod na půlicí čáře */}
      <span
        aria-hidden="true"
        className="objev absolute bottom-0 left-1/2 z-10 h-3.5 w-3.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-jantar"
        style={{ '--zpozdeni': '1500ms' } as React.CSSProperties}
      />
    </>
  )
}
