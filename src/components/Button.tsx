// =========================================================
// <ButtonLink> – odkaz, který vypadá jako tlačítko
//
// Použití:
//   <ButtonLink href="/kontakt">Domluvit schůzku</ButtonLink>
//   <ButtonLink href="/sluzby" variant="obrys">Prohlédnout služby</ButtonLink>
//
// Varianty:
//   zelene      – tmavě zelené s bílým textem (na světlém pozadí)
//   jantar      – jantarové se zeleným textem (hlavní výzva, hlavně na zeleném)
//   obrys       – průhledné se zeleným rámečkem (na světlém)
//   obrysSvetle – průhledné se světlým rámečkem (na zeleném)
// =========================================================

import Link from 'next/link'
import type { ReactNode } from 'react'

const variants = {
  zelene: 'bg-les text-krida hover:bg-les-svetly',
  jantar: 'bg-jantar text-les hover:bg-[#ebb955]',
  obrys: 'border-2 border-les text-les hover:bg-les hover:text-krida',
  obrysSvetle: 'border-2 border-mech/60 text-krida hover:border-krida',
}

type ButtonLinkProps = {
  href: string
  children: ReactNode
  variant?: keyof typeof variants
  className?: string
}

export function ButtonLink({ href, children, variant = 'zelene', className = '' }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3 text-base font-semibold transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  )
}
