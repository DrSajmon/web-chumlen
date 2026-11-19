// =========================================================
// REFERENCE KLIENTŮ
// Zveřejňujte jen skutečné reference se souhlasem klienta.
// Dokud je pole prázdné:
//   - na úvodní stránce se sekce Reference nezobrazí,
//   - stránka /reference ukáže krátkou zprávu a tlačítko na kontakt.
//
// tema = id služby z data/sluzby.ts (plan, pojisteni, investice, reality, sprava)
//        – podle něj funguje filtr na stránce Reference.
//
// Příklad jedné reference (zkopírujte, odkomentujte a přepište):
// {
//   text: 'Jan nám pomohl prodat byt a rovnou vyřešit hypotéku na nový…',
//   autor: 'Petra K., Kladno',
//   tema: 'reality',
// },
// =========================================================

export type Reference = {
  text: string
  autor: string
  tema: string
}

export const reference: Reference[] = [
  // sem doplňte reference
]
