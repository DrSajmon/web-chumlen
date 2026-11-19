// =========================================================
// STRÁNKA KONTAKT ( /kontakt )
//   1. Zelená hlavička
//   2. Vlevo telefon, e-mail, IČO a co bude následovat; vpravo formulář (#formular)
//
// Odkaz /kontakt?tema=investice#formular otevře formulář
// s předvybraným tématem (používají ho tlačítka u služeb).
// =========================================================

import type { Metadata } from 'next'
import { ContactForm } from '@/components/ContactForm'
import { PageHeader } from '@/components/PageHeader'
import { celeJmeno, site, telefonMezinarodni, telefonOdkaz } from '@/data/site'
import { temataFormulare } from '@/data/sluzby'

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Zavolejte, napište, nebo vyplňte formulář a domluvíme si nezávaznou schůzku.',
}

const dalsiKroky = ['Ozvu se vám a domluvíme termín', 'Potkáme se osobně, po telefonu nebo online', 'Probereme vaši situaci, bez závazků']

export default async function KontaktPage({ searchParams }: { searchParams: Promise<{ tema?: string | string[] }> }) {
  // V Next.js 16 jsou parametry z adresy "Promise" – proto await
  const { tema } = await searchParams
  const predvybrane = typeof tema === 'string' && temataFormulare.some((t) => t.id === tema) ? tema : undefined

  return (
    <>
      <PageHeader title="Domluvme si schůzku" text="Zavolejte, napište, nebo vyplňte formulář. První schůzka je nezávazná." />

      <section className="px-5 py-[clamp(48px,7vw,88px)]">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          {/* Kontakty */}
          <div className="flex flex-col gap-10">
            <dl className="flex flex-col gap-6">
              {site.telefon && (
                <div className="flex flex-col gap-1">
                  <dt className="text-[15px] text-kamen">Telefon</dt>
                  <dd>
                    <a href={telefonOdkaz} className="display text-[clamp(44px,5vw,60px)] text-les hover:text-jantar-tmavy">
                      {telefonMezinarodni}
                    </a>
                  </dd>
                </div>
              )}
              <div className="flex flex-col gap-1">
                <dt className="text-[15px] text-kamen">E-mail</dt>
                <dd>
                  <a href={`mailto:${site.email}`} className="break-all text-[22px] font-semibold text-les underline decoration-jantar decoration-2 underline-offset-4 hover:decoration-les">
                    {site.email}
                  </a>
                </dd>
              </div>
              {site.adresa && (
                <div className="flex flex-col gap-1">
                  <dt className="text-[15px] text-kamen">Kancelář</dt>
                  <dd className="text-lg">{site.adresa}</dd>
                </div>
              )}
              {site.ico && (
                <div className="flex flex-col gap-1">
                  <dt className="text-[15px] text-kamen">IČO</dt>
                  <dd className="text-lg">
                    {site.ico} ({celeJmeno})
                  </dd>
                  <dd className="text-[15px] text-kamen">{site.registrace}</dd>
                </div>
              )}
            </dl>

            <div className="flex flex-col gap-4 border-t-2 border-les pt-6">
              <h2 className="text-xl font-semibold text-les">Co bude následovat</h2>
              <ol className="flex flex-col gap-4">
                {dalsiKroky.map((t, i) => (
                  <li key={t} className="flex items-baseline gap-4">
                    <span className="display w-6 shrink-0 text-[32px] text-jantar-tmavy">{i + 1}</span>
                    <span className="text-base leading-normal">{t}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Formulář */}
          <div id="formular" className="scroll-mt-24 rounded-md bg-white p-[clamp(24px,4vw,48px)] shadow-[0_1px_0_#cfd8cc,0_24px_48px_-32px_rgba(22,55,44,0.35)]">
            <h2 className="display mb-6 text-[clamp(36px,4vw,48px)] text-les">Napište mi</h2>
            <ContactForm initialTopic={predvybrane} />
          </div>
        </div>
      </section>
    </>
  )
}
