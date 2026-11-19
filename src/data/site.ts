// =========================================================
// ZÁKLADNÍ ÚDAJE WEBU – vše na jednom místě
// Co změníte tady, změní se v menu, patičce i na stránkách.
// Prázdný text ('') = údaj se na webu vůbec nezobrazí.
// =========================================================

export const site = {
  jmeno: 'Jan Chumlen',
  titul: 'Ing.', // zobrazí se v patičce a na stránce Kontakt
  podtitul: 'Finanční a realitní specialista',
  firma: 'Broker Consulting',

  email: 'jan.chumlen@bcas.cz',
  telefon: '728 117 844',
  adresa: '', // TODO: doplnit adresu kanceláře, pokud ji chcete ukázat
  ico: '17210674',

  // Hlavní citát – úvod a stránka O mně
  citat: 'Věřím, že skutečný úspěch se neměří jen výsledkem, ale také cestou, jakou jsme k němu došli.',

  // Krátký údaj o registraci – úvod a stránka Kontakt
  registrace: 'Registrovaný zprostředkovatel s oprávněním ČNB',

  // Povinné informace o zprostředkovateli do patičky
  pravniInfo:
    'Ing. Jan Chumlen, IČO 17210674, je registrovaný u České národní banky a má oprávnění k výkonu činnosti zprostředkovatele. Spolupracuje se společností Broker Consulting, a.s., IČO 25221736, Jiráskovo nám. 2684/2, 326 00 Plzeň. Registraci lze ověřit v seznamu regulovaných subjektů na www.cnb.cz.',
}

// Položky hlavního menu (pořadí = pořadí v menu)
export const menu = [
  { href: '/', label: 'Úvod' },
  { href: '/sluzby', label: 'Služby' },
  { href: '/o-mne', label: 'O mně' },
  { href: '/reference', label: 'Reference' },
  { href: '/kontakt', label: 'Kontakt' },
]

// Celé jméno s titulem, např. "Ing. Jan Chumlen"
export const celeJmeno = [site.titul, site.jmeno].filter(Boolean).join(' ')

// Telefon ve tvaru pro odkaz tel: (bez mezer, s předvolbou)
export const telefonOdkaz = 'tel:+420' + site.telefon.replace(/\s/g, '')
export const telefonMezinarodni = '+420 ' + site.telefon
