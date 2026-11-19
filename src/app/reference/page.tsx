// =========================================================
// STRÁNKA REFERENCE ( /reference )
// Reference se doplňují v data/reference.ts.
// Dokud tam žádné nejsou, ukáže se krátká zpráva místo referencí.
// =========================================================

import type { Metadata } from 'next'
import { ButtonLink } from '@/components/Button'
import { KontaktPruh } from '@/components/KontaktPruh'
import { PageHeader } from '@/components/PageHeader'
import { ReferenceList } from '@/components/ReferenceList'
import { reference } from '@/data/reference'

export const metadata: Metadata = {
  title: 'Reference',
  description: 'Zkušenosti klientů se spoluprací s Janem Chumlenem.',
}

export default function ReferencePage() {
  return (
    <>
      <PageHeader title="Reference" text="Zkušenosti klientů, se kterými spolupracuji." />

      <section className="px-5 py-[clamp(56px,8vw,96px)]">
        <div className="mx-auto max-w-6xl">
          {reference.length > 0 ? (
            <ReferenceList items={reference} />
          ) : (
            // Zobrazí se, dokud v data/reference.ts nejsou žádné reference
            <div className="flex max-w-2xl flex-col items-start gap-5 rounded-md bg-salvej p-[clamp(28px,4vw,48px)]">
              <p className="text-xl leading-relaxed text-les">
                Reference klientů tu brzy zveřejním. Na zkušenosti se mě klidně zeptejte přímo na schůzce.
              </p>
              <ButtonLink href="/kontakt#formular">Domluvit schůzku</ButtonLink>
            </div>
          )}
        </div>
      </section>

      {reference.length > 0 && <KontaktPruh title="Pojďme začít i u vás" />}
    </>
  )
}
