// =========================================================
// <PageHeader> – zelená hlavička podstránek (Služby, O mně, Reference, Kontakt)
//
// Použití:
//   <PageHeader title="S čím vám pomohu" text="…" />
//   <PageHeader title="…">…cokoliv navíc pod textem…</PageHeader>
// =========================================================

import type { ReactNode } from 'react'

type PageHeaderProps = {
  title: string
  text?: string
  children?: ReactNode
}

export function PageHeader({ title, text, children }: PageHeaderProps) {
  return (
    <section className="bg-les px-5 pb-[clamp(48px,7vw,80px)] pt-[clamp(40px,6vw,72px)] text-krida">
      <div className="mx-auto flex max-w-6xl flex-col gap-5">
        <h1 className="display max-w-4xl text-[clamp(48px,7vw,88px)]">{title}</h1>
        {text && <p className="max-w-[60ch] text-[clamp(17px,1.6vw,20px)] leading-relaxed text-mech">{text}</p>}
        {children}
      </div>
    </section>
  )
}
