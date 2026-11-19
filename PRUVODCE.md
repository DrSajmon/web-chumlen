# Průvodce kódem webu Jan Chumlen

Tenhle soubor vysvětluje, co je kde a co to dělá, abyste mohl web upravovat sám
(nebo s Claude Code ve VS Code). Kostra je stejná jako u webu Hynka Nováka,
vzhled a texty jsou vlastní.

Web běží na **Next.js 16** (App Router) + **Tailwind CSS 4**, nasazení na **Vercel**.
Každý `git push` do větve `main` na GitHubu = nová verze na webu.

---

## 1. Kde co je

```
web-chumlen/
├─ PRUVODCE.md                 ← tento soubor
├─ public/                     ← fotky (stačí přepsat stejným názvem)
│  ├─ jan-chumlen.jpg          úvod (oblek, zahrada)
│  ├─ jan-profil.jpg           úvod, sekce „Fotbal mě naučil…“ (z profilu)
│  ├─ jan-sako.jpg             O mně – hlavička
│  └─ jan-kosile.jpg           O mně – „Z hřiště do financí“
└─ src/
   ├─ data/                    ← ★ TEXTY A ÚDAJE – tady upravujete nejčastěji
   │  ├─ site.ts               jméno, titul, telefon, e-mail, IČO, citát, menu, právní info
   │  ├─ sluzby.ts             všech 5 služeb (název, ikona, popis, odrážky, text tlačítka)
   │  └─ reference.ts          reference klientů (zatím prázdné)
   │
   ├─ app/                     ← STRÁNKY (každá složka = jedna adresa)
   │  ├─ layout.tsx            společný obal: písmo, menu nahoře, patička dole
   │  ├─ globals.css           barvy webu, styl nadpisů, animace čar hřiště
   │  ├─ icon.svg              ikonka v záložce prohlížeče (JC v kruhu)
   │  ├─ page.tsx              /            Úvod
   │  ├─ sluzby/page.tsx       /sluzby      Služby pod sebou
   │  ├─ o-mne/page.tsx        /o-mne       O mně (medailonek, principy, citát)
   │  ├─ reference/page.tsx    /reference   Reference s filtrem
   │  ├─ kontakt/page.tsx      /kontakt     Kontakty + formulář
   │  └─ api/poptavka/route.ts POST /api/poptavka – odešle formulář e-mailem
   │
   └─ components/              ← OPAKOVANĚ POUŽÍVANÉ KOUSKY
      ├─ Nav.tsx               horní menu + mobilní menu ☰
      ├─ Footer.tsx            patička (kontakty, IČO, právní info)
      ├─ PageHeader.tsx        zelená hlavička podstránek
      ├─ HristeCary.tsx        středový kruh hřiště za fotkou v úvodu
      ├─ SluzbyPrepinac.tsx    přepínač služeb na úvodu
      ├─ Calculator.tsx        kalkulačka pravidelného investování
      ├─ Postup.tsx            4 kroky spolupráce (úvod i Služby)
      ├─ KontaktPruh.tsx       závěrečná výzva s velkým telefonem
      ├─ Button.tsx            tlačítka (4 varianty)
      ├─ ContactForm.tsx       formulář
      ├─ ReferenceList.tsx     reference + filtr
      └─ Icons.tsx             všechny ikony (SVG)
```

**Pravidlo:** text měníte v `src/data/…`, vzhled v `src/app/…` a `src/components/…`.

---

## 2. Nejčastější úpravy

| Chci… | Kde |
|---|---|
| změnit telefon / e-mail / IČO | `src/data/site.ts` |
| doplnit adresu kanceláře | `src/data/site.ts` → `adresa` (prázdné = nezobrazí se) |
| doplnit právní postavení do patičky | `src/data/site.ts` → `pravniInfo` |
| změnit citát | `src/data/site.ts` → `citat` |
| přepsat text služby | `src/data/sluzby.ts` |
| přidat 6. službu | `src/data/sluzby.ts` → zkopírovat blok `{ … }`; objeví se na úvodu, na Službách i ve formuláři |
| přidat referenci | `src/data/reference.ts` → podle příkladu v komentáři |
| změnit hlavní nadpis úvodu | `src/app/page.tsx` → `<h1>` |
| změnit hodnoty Disciplína / Vytrvalost / Týmovost | `src/app/page.tsx` → pole `hodnoty` |
| změnit principy na O mně | `src/app/o-mne/page.tsx` → pole `principy` |
| změnit kroky spolupráce | `src/components/Postup.tsx` → pole `kroky` |
| změnit barvu | `src/app/globals.css` → blok `@theme` |
| změnit titulek pro Google | `metadata` nahoře v příslušném `page.tsx` (hlavní v `layout.tsx`) |

---

## 3. Jak fungují jednotlivé věci

### Barvy
V `globals.css` je blok `@theme`. Každá proměnná `--color-NAZEV` vytvoří třídy
`bg-NAZEV`, `text-NAZEV`, `border-NAZEV`. Příklad: `--color-les` → `bg-les`.

| Barva | Hodnota | Kde se používá |
|---|---|---|
| `les` | #16372c | menu, hlavičky, kalkulačka, tlačítka na světlém |
| `les-tmavy` | #0e2620 | patička |
| `krida` | #f2f4ef | pozadí stránky |
| `salvej` | #dfe6dc | šalvějové panely (detail služby, kontakt) |
| `jantar` | #e0a738 | hlavní tlačítka a detaily na zeleném (jako světla stadionu) |
| `jantar-tmavy` | #8b5e12 | jantarový text na světlém pozadí (čitelnější) |
| `kamen` | #4a5852 | vedlejší text na světlém |
| `mech` | #b9c8bf | vedlejší text na zeleném |

### Písmo
Jedna rodina **Archivo** (balíček `@fontsource-variable/archivo`, načítá se v `layout.tsx`,
soubory jsou přímo v projektu, nic se nestahuje z Googlu). Běžný text má normální šířku,
nadpisy třídu `display` (v `globals.css`), která písmo zúží a ztuční, jako čísla na dresu.

### Animace
Je jen jedna automatická: v úvodu se „křídou“ nakreslí středový kruh hřiště za fotkou
a na půlicí čáře se objeví jantarová tečka (`components/HristeCary.tsx`, třídy `.cara`
a `.objev` v `globals.css`). Kdo má v systému zapnuté „omezit pohyb“, uvidí kruh hned.

### Přepínač služeb na úvodu
`components/SluzbyPrepinac.tsx` si pamatuje vybranou službu (`useState`). Klik nebo šipky
na klávesnici přepnou detail vpravo. Odkaz „Podrobnosti o službě“ vede na `/sluzby#id`.

### Předvyplněné téma ve formuláři
Tlačítka u služeb vedou na `/kontakt?tema=investice#formular`. Stránka Kontakt
přečte `tema` z adresy a formulář má téma rovnou zapnuté.

### Kalkulačka
`components/Calculator.tsx`. Výsledek je budoucí hodnota pravidelné měsíční investice:
`vklad × ((1 + r)^n − 1) / r` (r = roční výnos / 12, n = počet měsíců).
Pruh pod výsledkem ukazuje poměr vloženo / výnos.

### Formulář → e-mail
1. `ContactForm.tsx` po odeslání pošle data na `/api/poptavka`.
2. `app/api/poptavka/route.ts` na serveru zkontroluje povinná pole, odfiltruje roboty
   (skryté pole `web`) a přes službu **Resend** pošle e-mail. „Odpovědět“ jde rovnou klientovi.
3. Formulář podle odpovědi ukáže poděkování, nebo chybu s telefonem a e-mailem.

**Dokud není nastavený Resend, formulář ukazuje chybu** (nic se neztratí potichu).

---

## 4. Zprovoznění odesílání e-mailů (jednou)

1. Na [resend.com](https://resend.com) vytvořte **API Key** (můžete použít stejný účet jako u Hynka).
2. Na Vercelu: Project → **Settings → Environment Variables**:
   - `RESEND_API_KEY` = klíč z Resendu
   - `CONTACT_EMAIL` = `jan.chumlen@bcas.cz`
3. Nový deploy (Vercel → Deployments → Redeploy, nebo jakýkoli push).

Bez ověřené domény posílá Resend z testovací adresy a doručí jen na adresu, se kterou
je účet registrovaný. Po koupi domény ji v Resendu ověřte (DNS záznamy) a na Vercelu
přidejte `CONTACT_FROM` = `Jan Chumlen <web@vase-domena.cz>`.

Pro testování u sebe vytvořte v kořeni projektu soubor `.env.local` se stejnými proměnnými
(na GitHub se nenahrává).

---

## 5. Práce na počítači

```bash
npm install        # jen poprvé nebo po změně balíčků
npm run dev        # web na http://localhost:3000, změny se ukazují hned
npm run build      # ověří, že se web dá sestavit (to samé dělá Vercel)
npm run lint       # kontrola kódu
```

---

## 6. Co ještě doplnit (TODO)

- [x] registrace u ČNB v patičce – `src/data/site.ts` → `pravniInfo`, `registrace`
- [ ] adresa kanceláře, pokud ji chcete ukázat – `src/data/site.ts`
- [ ] skutečné reference se souhlasem klientů – `src/data/reference.ts`
- [ ] koupit doménu, napojit na Vercel, nastavit Resend (kapitola 4)
- [ ] stránka „Ochrana osobních údajů“ (GDPR) – formulář sbírá osobní údaje
