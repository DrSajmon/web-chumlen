// =========================================================
// SLUŽBY – texty pro úvodní stránku (přepínač služeb) i stránku Služby
// Pořadí v poli = pořadí na webu.
//
// id       – použije se v odkazu (/sluzby#investice) a ve formuláři
// ikona    – název ikony z components/Icons.tsx
// kratce   – jedna věta (úvodní stránka)
// popis    – odstavec (úvod i stránka Služby)
// body     – odrážky "s čím pomohu"
// tlacitko – text tlačítka, které vede na formulář s předvybraným tématem
// =========================================================

import type { IconName } from '@/components/Icons'

export type Sluzba = {
  id: string
  nazev: string
  ikona: IconName
  kratce: string
  popis: string
  body: string[]
  tlacitko: string
}

export const sluzby: Sluzba[] = [
  {
    id: 'plan',
    nazev: 'Finanční plánování',
    ikona: 'plan',
    kratce: 'Jasný plán, kam vaše peníze mají směřovat a proč.',
    popis:
      'Nejdřív si v klidu projdeme, kde jste dnes: příjmy, výdaje, rezervy i závazky. Pak společně nastavíme plán, který počítá s tím, co od života chcete za pět, deset i třicet let.',
    body: [
      'Přehled o příjmech, výdajích a rezervách',
      'Finanční cíle rozdělené do reálných kroků',
      'Příprava na rentu a finanční nezávislost',
      'Úprava plánu, když se změní život',
    ],
    tlacitko: 'Chci finanční plán',
  },
  {
    id: 'pojisteni',
    nazev: 'Pojištění',
    ikona: 'pojisteni',
    kratce: 'Ochrana příjmu, zdraví a majetku bez zbytečností.',
    popis:
      'Dobré pojištění chrání to, co byste sami nedokázali unést. Nastavím ho podle skutečných rizik vaší rodiny a projdu i smlouvy, které už máte.',
    body: [
      'Životní a úrazové pojištění pro výpadek příjmu',
      'Pojištění nemovitosti, domácnosti a odpovědnosti',
      'Pojištění auta a dalšího cenného majetku',
      'Kontrola a porovnání stávajících smluv',
    ],
    tlacitko: 'Chci zkontrolovat pojištění',
  },
  {
    id: 'investice',
    nazev: 'Investice',
    ikona: 'investice',
    kratce: 'Pravidelné a dlouhodobé zhodnocení s nízkými náklady.',
    popis:
      'Investice stavím na dlouhém horizontu, rozložení rizika a nízkých nákladech. Vysvětlím, do čeho investujete, abyste se nemuseli bát výkyvů trhu.',
    body: [
      'Pravidelné investování a ETF portfolia',
      'Kontrola poplatků ve stávajících investicích',
      'Dlouhodobý investiční produkt (DIP) a daňové výhody',
      'Investice pro děti a na důchod',
    ],
    tlacitko: 'Chci probrat investice',
  },
  {
    id: 'reality',
    nazev: 'Reality',
    ikona: 'reality',
    kratce: 'Prodej, koupě i pronájem propojený s financováním.',
    popis:
      'Pomohu s prodejem, koupí i pronájmem nemovitosti od odhadu ceny po předání klíčů. Protože se věnuji i financím, řešíme hypotéku a nemovitost najednou.',
    body: [
      'Odhad ceny a prodej nemovitosti',
      'Hledání a koupě vhodné nemovitosti',
      'Pronájem a výběr spolehlivého nájemníka',
      'Hypotéka a financování na jednom místě',
    ],
    tlacitko: 'Chci řešit nemovitost',
  },
  {
    id: 'sprava',
    nazev: 'Správa majetku',
    ikona: 'sprava',
    kratce: 'Dlouhodobá péče, aby majetek dál pracoval pro vás.',
    popis:
      'Majetek se nebuduje jednorázově. Pravidelně se potkáváme, kontrolujeme, jestli plán funguje, a upravujeme ho podle toho, jak se mění vaše situace i trhy.',
    body: [
      'Pravidelné schůzky a přehled o celém majetku',
      'Vyvažování investičního portfolia',
      'Nemovitosti jako součást majetku',
      'Jeden člověk, který zná celý váš příběh',
    ],
    tlacitko: 'Chci dlouhodobou péči',
  },
]

// Témata ve formuláři = všechny služby + "Něco jiného"
export const temataFormulare = [...sluzby.map((s) => ({ id: s.id, label: s.nazev })), { id: 'jine', label: 'Něco jiného' }]
