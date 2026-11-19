// =========================================================
// <Footer> – patička (je v layout.tsx, takže je na všech stránkách)
// Kontakty, IČO a právní informace se berou z data/site.ts.
// =========================================================

import Link from 'next/link'
import { celeJmeno, menu, site, telefonMezinarodni, telefonOdkaz } from '@/data/site'

export function Footer() {
  const rok = new Date().getFullYear()

  return (
    <footer className="bg-les-tmavy px-5 pb-8 pt-16 text-mech">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <div className="flex flex-wrap justify-between gap-10">
          <div className="flex flex-[1_1_280px] flex-col gap-3">
            <span className="display text-[34px] text-krida">{celeJmeno}</span>
            <p className="max-w-xs text-[15px] leading-relaxed">
              {site.podtitul} v {site.firma}. {site.registrace}.
            </p>
          </div>

          <div className="flex flex-[0_1_160px] flex-col gap-2.5 text-[15px]">
            <span className="font-semibold text-krida">Stránky</span>
            {menu.slice(1).map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-[0_1_240px] flex-col gap-2.5 text-[15px]">
            <span className="font-semibold text-krida">Kontakt</span>
            {site.telefon && (
              <a href={telefonOdkaz} className="hover:text-white">
                {telefonMezinarodni}
              </a>
            )}
            <a href={`mailto:${site.email}`} className="hover:text-white">
              {site.email}
            </a>
            {site.adresa && <span>{site.adresa}</span>}
            {site.ico && <span>IČO {site.ico}</span>}
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-4 border-t border-les-cara pt-6 text-[13px] leading-relaxed text-[#93a89b]">
          <span className="max-w-3xl">{site.pravniInfo}</span>
          <span>
            © {rok} {celeJmeno}
          </span>
        </div>
      </div>
    </footer>
  )
}
