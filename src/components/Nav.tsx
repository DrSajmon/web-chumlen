'use client'

// =========================================================
// <Nav> – horní menu (je v layout.tsx, takže se zobrazí na všech stránkách)
//
// - Položky menu se berou z data/site.ts (pole `menu`).
// - Aktivní stránka má pod sebou jantarovou čáru (podle aktuální adresy).
// - Pod 900 px šířky se odkazy schovají a ukáže se tlačítko ☰,
//   které rozbalí mobilní menu (stav `open`).
// =========================================================

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { menu, site } from '@/data/site'
import { Icon } from './Icons'

export function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // Je odkaz aktivní? Úvod jen přesně na "/", ostatní i pro podstránky.
  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href))

  return (
    <nav aria-label="Hlavní navigace" className="sticky top-0 z-30 border-b border-les-cara bg-les/95 px-5 text-krida backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 py-3">
        {/* Logo: iniciály ve středovém kruhu hřiště */}
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="display flex h-11 w-11 items-center justify-center rounded-full border-2 border-jantar text-[19px] leading-none">
            JC
          </span>
          <span className="flex flex-col">
            <span className="display text-[22px] leading-none">{site.jmeno}</span>
            <span className="pt-1 text-[13px] text-mech">{site.podtitul}</span>
          </span>
        </Link>

        {/* Odkazy – jen na širších obrazovkách */}
        <div className="hidden items-center gap-7 text-[15px] min-[900px]:flex">
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={`border-b-2 py-1 transition-colors ${
                isActive(item.href) ? 'border-jantar text-white' : 'border-transparent text-mech hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/kontakt#formular"
          className="hidden rounded-full bg-jantar px-5 py-2.5 text-[15px] font-semibold text-les transition-colors hover:bg-[#ebb955] min-[900px]:inline-block"
        >
          Domluvit schůzku
        </Link>

        {/* Tlačítko ☰ – jen na mobilu */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobilni-menu"
          aria-label={open ? 'Zavřít menu' : 'Otevřít menu'}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-les-cara text-krida min-[900px]:hidden"
        >
          <Icon name={open ? 'close' : 'menu'} className="h-5 w-5" strokeWidth={2} />
        </button>
      </div>

      {/* Rozbalené mobilní menu */}
      {open && (
        <div id="mobilni-menu" className="objev -mx-5 flex flex-col border-t border-les-cara px-5 pb-7 pt-3 min-[900px]:hidden" style={{ animationDuration: '0.25s' }}>
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={`display border-b border-les-cara py-3 text-[32px] ${isActive(item.href) ? 'text-jantar' : 'text-krida'}`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/kontakt#formular"
            onClick={() => setOpen(false)}
            className="mt-5 rounded-full bg-jantar p-4 text-center text-base font-semibold text-les"
          >
            Domluvit schůzku
          </Link>
        </div>
      )}
    </nav>
  )
}
