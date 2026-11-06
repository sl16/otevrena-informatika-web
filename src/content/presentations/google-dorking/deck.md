---
marp: true
theme: oi
paginate: true
title: "Google dorking (aneb Umíte opravdu googlovat?)"
description: "Vyhledávače i v době AI mohou být užitečné. Obzvlášť, když se umíte správně dotazovat."
id: google-dorking
category: Internet
date: 2026-11-06
transition: cover
---

<!-- _class: title -->

# Google dorking
## (aneb Umíte opravdu googlovat?)

🧑‍🏫 Autor: Mgr. Vojtěch Bartoš  
Licence: CC BY-NC-SA

---

# 🎯 Cíle lekce

- zjistíte, že Google zpracovat více než jednoduché dotazy
- sestavíte dotaz s **vyhledávacími operátory**
- najdete konkrétní web, formát i přesnou frázi

---

# ℹ️ Co je Google dorking?

- dorking = přesnější hledání pomocí speciálních pokynů v dotazu.
- **operátor** říká vyhledávači, jak výsledky omezit
- přidáte ho ke slovům, která popisují vaše téma
- příklad: `site:chmi.cz sucho` hledá na webu ČHMÚ

[Nápověda Googlu: upřesnění vyhledávání](https://support.google.com/websearch/answer/2466433?hl=cs)

---

# ℹ️ Uvozovky drží slova pohromadě

- `digitální stopa` — hledáte téma
- `"digitální stopa"` — hledáte **přesnou frázi**
- `"umělá inteligence" škola` — fráze plus další slovo
- hodí se pro názvy, citace a ustálená spojení

> Kdy by přesná fráze mohla hledání zbytečně omezit?

---

# ℹ️ Minus odstraní nežádoucí význam

- `jaguár -auto -automobil` 
	— potlačíte automobilové výsledky
- `python -had`
	— zaměříte se na programovací jazyk, ne zvíře
- `"digitální stopa" -site:pinterest.com`
	— vynecháte web
- pište **bez mezery**: `-auto`, nikoli `- auto`

> Minus může vyřadit i užitečnou stránku. Používejte ho cíleně.

---

# ℹ️ site: vybere konkrétní web

- **doména** je název webu, například `chmi.cz`
- `site:chmi.cz sucho`
	— informace z webu ČHMÚ
- `site:cuni.cz "digitální stopa"`
	— stránky v doméně Karlovy Univerzity
- `site:gov.cz vzdělávání`
	— výsledky z domény `gov.cz`

> Správně: `site:muni.cz` · Chybně: `site: muni.cz` (mezera navíc)

---

# ℹ️ filetype: vybere formát souboru

- `site:muni.cz filetype:pdf kyberbezpečnost`
  — PDF související s kyberbezpečností na webu MU
- `site:czso.cz filetype:xlsx obyvatelstvo`
  — tabulky k tématu obyvatelstva z webu ČSÚ
- `filetype:pdf "fotosyntéza"`
  — PDF s přesnou frází bez omezení webu

---

# ℹ️ Konkrétní slovo v titulku, nebo v textu?

| Operátor | Co omezuje | Příklad |
|---|---|---|
| `intitle:` | Slovo v titulku stránky | `intitle:tiktok site:novinky.cz` |
| `intext:` | Slovo v textu stránky | `intext:fotosyntéza site:muni.cz` |

- `intitle:"umělá inteligence"` hledá frázi v titulku
- titulek výsledku a viditelný nadpis se mohou lišit
- výsledek vždy **otevřete a ověřte**

---

# ℹ️ Dotaz skládejte od obecného ke konkrétnímu

1. **téma:** `umělá inteligence`
2. **fráze:** `"umělá inteligence"`
3. **web:** `site:msmt.gov.cz "umělá inteligence"`
4. **formát:** `site:msmt.gov.cz filetype:pdf "umělá inteligence"`

> Téma → zdroj → formát → kontrola obsahu.

---

<!-- _class: task -->

# 💼 Úkol: Opravte pokažený dotaz

🎯 **Cíl:** najdete chyby a sestavíte použitelný dotaz

📋 **Zadání:** ve dvojici

- hledáte PDF o kyberbezpečnosti na webu MU
- opravte: `site: muni.cz filetype: pdf kyberbzpečnost`
- spusťte opravený dotaz a otevřete vhodný výsledek
- vysvětlete partnerovi, co jste změnili a proč

✅ **Výstup:** diskuze

---

# ℹ️ Když hledání nefunguje

- při malém počtu výsledků **odeberte jedno omezení** nebo zkuste synonymum
- při velkém počtu výsledků přidejte konkrétní téma, web či formát
- otevřete zdroj: zkontrolujte autora, datum a hledanou pasáž
- záznam ve vyhledávači nemusí odpovídat dnešní podobě stránky

---

<!-- _class: task -->

# 💼 Úkol: Tři zdroje

🎯 **Cíl:** najděte zdroje, které splní konkrétní podmínky

📋 **Zadání:** samostatná práce

- vyhledejte následující:
1. **úřední dokument:** veřejné PDF z webu státní instituce;
2. **akademický dokument:** výukový materiál české univerzity;
3. **knedlíkové překvapení:** článek se slovem „knedlík“ v titulku;
- u všech odkazů nezapomeňte nasdílet i vyhledávací výrazy, které jste použili


✅ **Výstup:** odkazy a vyhledávací výrazy nahrajte do dokumentu v Google Classroom

<!--
Záložní veřejné nálezy při potížích s hledáním:
1) https://msmt.gov.cz/file/61025_1_1/download/ — PDF o AI na MU.
2) https://security.muni.cz/kurzy/kyber-minimum/zokb — veřejná textová opora školení.
3) https://www.ptejteseknihovny.cz/dotazy/knedlik — text knihovny o původu slova s titulkem „knedlík“, bez receptu.
Pokud se některá stránka změní, zvolte jiný veřejný materiál splňující stejnou misi.
-->

---

# 🧠 Souhrn lekce

- `"uvozovky"` drží slova spolu, `-minus` vylučuje
- `site:` omezuje web, `filetype:` formát
- `intitle:` a `intext:` zpřesňují místo výskytu slova
- když dotaz selže, **měňte jedno omezení po druhém**
- výsledek otevřete a ověřte

---

<!-- _class: closing -->

# Děkuji za pozornost!

🧑‍🏫 Autor: Mgr. Vojtěch Bartoš  
© Licence: CC BY-NC-SA  
www.otevrenainformatika.cz
