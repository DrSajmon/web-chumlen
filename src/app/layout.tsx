// =========================================================
// LAYOUT – společný obal všech stránek
// Tady se nastavují: písmo, jazyk stránky, menu nahoře a patička dole.
// Obsah konkrétní stránky (page.tsx) se vloží místo {children}.
// =========================================================

import type { Metadata } from 'next'
import '@fontsource-variable/archivo/wdth.css' // písmo Archivo včetně zúžené šířky a české diakritiky
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import './globals.css'

// Titulek a popis pro Google a sdílení odkazu.
// "template" = podstránky mají titulek "Služby | Jan Chumlen" apod.
export const metadata: Metadata = {
  title: {
    default: 'Jan Chumlen | Finanční a realitní specialista, Broker Consulting',
    template: '%s | Jan Chumlen',
  },
  description:
    'Pomáhám lidem budovat a zhodnocovat majetek prostřednictvím financí a realit. Finanční plánování, pojištění, investice, reality a správa majetku.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs" className="antialiased">
      <body className="flex min-h-screen flex-col font-sans">
        <Nav />
        <main className="flex-1 overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
