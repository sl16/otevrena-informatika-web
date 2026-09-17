---
marp: true
theme: oi
paginate: true
id: uvod-do-umele-inteligence
title: "Úvod do umělé inteligence"
description: "Představení AI a jazykových modelů, základy bezpečného používání a ověřování informací" 
---

<!-- _class: title -->

# Umělá inteligence

## Pomocník, ne věštec

🧑‍🏫 Autor: Mgr. Vojtěch Bartoš  
©️ Licence: CC BY-NC-SA

---

# 🎯 Cíle lekce

- vysvětlíte rozdíl mezi AI, daty a modelem
- poznáte, co umí a neumí jazykový model
- naučíte se tvořit lepší prompty
- ověříte odpověď AI ve spolehlivých zdrojích
- seznámíte se s různými nástroji využívajícími AI

---

# ℹ️ Co je to ta umělá inteligence?

- technologie, která hledá vzorce v datech
- podle nich vytváří odhad, doporučení nebo obsah
- dobře řeší vymezený úkol, ne „všechno jako člověk“ (zatím)
- výsledek závisí na datech, zadání a kontrole člověka

---

# ℹ️ Kde se s AI setkáme?

- chatovací asistenti a generování obsahu
- doporučení videí a hudby
- navigace a odhad dopravy
- rozpoznání spamu nebo obličeje
- překlad, diktování a titulky

---

# ℹ️ Jak rozlišíme skutečnou AI?

- **autonomie**: AI dokáže jednat samostatně, nejen podle přesně daného scénáře
- **adaptace**: učí se z dat nebo zkušeností, dokáže zlepšovat výkon
- **generalizace**: zvládne situace, které neviděla přesně v tréninku

---

# ℹ️ Automatizace × AI

| Automatizace | AI |
|---|---|
| Postup podle pevných pravidel | Hledá vzorce v datech |
| „Když A, udělej B“ | Odhaduje vhodný výsledek |
| Např. časovač světla | Např. filtr spamu |


---

# ℹ️ Data nejsou neutrální

- data určují, co se model může naučit
- chybná nebo neúplná data vedou k chybným výstupům
- data mohou nést stereotypy a předsudky

---

<!-- _class: task -->

# 💼 Úkol: Modely a morální volby

🎯 **Cíl:** pochopit problematiku a moralitu vstupních dat modelů

📋 **Zadání:**

- běžte na [moralmachine.net](https://www.moralmachine.net/)
- nejdříve si projděte hrou sami
- poté projdeme hru společně

✅ **Výstup:** diskuze

---


# ℹ️ Od dat k odpovědi

- **data**: ukázky, ze kterých se hledají vzorce
- **trénink**: nastavování modelu podle dat
- **model**: naučený matematický nástroj
- **prompt**: vaše instrukce pro model
- **kontrola**: odpovědnost zůstává na člověku

---

<!-- _class: task -->

# 💼 Úkol: Trénování modelu

🎯 **Cíl:** vytrénovat primitivní model

📋 **Zadání:**

- běžte na [teachablemachine.withgoogle.com](https://teachablemachine.withgoogle.com)
- vyberte si jednu z možností trénování (obrázek, zvuk, póza)
- vytrénujte model a vyzkoušejte výsledek

✅ **Výstup:** diskuze

---

# ℹ️ AI podle rozsahu úkolu

- **úzká AI:** řeší konkrétní úlohu, například doporučení obsahu nebo rozpoznání řeči
- **obecná AI:** hypotetický systém se schopnostmi napříč úkoly na lidské úrovni
- **superinteligence:** spekulativní představa, nikoli současná technologie

> Většina nástrojů, které dnes používáme, patří k úzké AI.

---

# ℹ️ Co je LLM?

- **LLM** znamená velký jazykový model (*Large Language Model*)
- pracuje s textem a často i s obrázky, zvukem či soubory
- z kontextu navrhuje pravděpodobné pokračování
- umí vytvářet text, shrnutí, překlad, návrh i kód

> LLM není vyhledávač ani autorita. Je to generátor odpovědi podle vzorců.

---

# ℹ️ Proč LLM působí chytře?

- dovede napodobit různé styly a formáty
- drží se instrukce a kontextu konverzace
- spojuje známé jazykové vzorce novým způsobem
- dokáže vysvětlovat, ale také chybovat velmi přesvědčivě

---

# ℹ️ Co se může pokazit?

- **halucinace:** vymyšlený údaj, citace nebo odkaz
- **zkreslení:** přejímání nerovností z dat a kontextu
- **zastaralost:** informace nemusí být aktuální
- **nejasné zadání:** obecná otázka vede k obecné odpovědi

---

# ℹ️ Základy dobrého promptu

1. **role:** Určete, v jaké roli má AI vystupovat.
2. **úkol:** Co má vzniknout?
3. **kontext:** Pro koho a v jaké situaci?
4. **formát:** Tabulka, body, délka, jazyk?

---

# ℹ️ Prompt je rozhovor, ne kouzlo

- začněte jednoduchým návrhem
- doplňte chybějící kontext
- požádejte o jiný formát nebo úroveň vysvětlení
- porovnejte dvě varianty
- před použitím výsledek zkontrolujte

---

<!-- _class: task -->

# 💼 Úkol: Výměna rolí v promptu

🎯 **Cíl:** naučit se používat role a specifikovat tón výstupu

📋 **Zadání:**

- použijte AI chatbot (LLM) vaší volby
- zadajejte stejný úkol, ale postupně a s jiným kontextem, např:
	- „Vysvětli, jak funguje počítačová síť.“
	- „Chovej se jako naštvaný pirát a vysvětli, jak funguje počítačová síť.“
	- „Vysvětli, jak funguje síť, jako bys to vysvětloval pětiletému dítěti pomocí Lega.“

✅ **Výstup:** diskuze

---

# ℹ️ Sebevědomá odpověď ≠ pravda

- AI může napsat nesprávný údaj plynule a bez varování
- zdroj uvedený AI nemusí existovat nebo podporovat tvrzení
- důležité informace porovnávejte alespoň se dvěma zdroji
- u čísel, práva, zdraví a zpráv hledejte původní zdroj

---

# ℹ️ Autorské právo a férovost

- AI výstup může připomínat existující dílo
- kontrolujte licence obrázků, textů i zdrojových dat
- nepředávejte neupravený výstup AI jako vlastní práci

---

# ℹ️ Kdo odpovídá za výsledek?

- AI nenese odpovědnost za odevzdaný text ani rozhodnutí
- odpovědnost má člověk, který výstup použije
- důležitá rozhodnutí vyžadují lidskou kontrolu
- „AI to napsala“ není omluva

---

<!-- _class: task -->

# 💼 Úkol: Detektivové faktů

🎯 **Cíl:** ověříte jeden faktický výrok vytvořený AI.

📋 **Zadání:**

- Ve skupině zvolte jeden konkrétní výrok z odpovědi AI
- Najděte dva spolehlivé zdroje, z nichž jeden je primární nebo institucionální
- Rozhodněte: platí / neplatí / nelze ověřit

✅ **Výstup:** karta s tvrzením, odkazy na zdroje a vaším verdiktem

---

# ℹ️ AI jako tvůrčí spolupracovník

- nápady a varianty názvu
- osnova textu nebo prezentace
- jazyková úprava a vysvětlení
- návrh plakátu, ilustrace či rozhraní
- kontrolní otázky před odevzdáním

> AI pomáhá navrhovat. Vy vybíráte, upravujete a ručíte za výsledek.

---

# Postup, který funguje

1. Vymezte problém a publikum
2. Vytvořte návrh pomocí přesného promptu
3. Vyberte užitečné části a upravte je vlastními slovy
4. Ověřte fakta, licence a citlivá data
5. Doplňte, co jste se rozhodli nepoužít - a proč

---

# Nástroje vybírejte podle účelu

| Potřeba | Vhodná funkce |
|---|---|
| Nápady, vysvětlení, návrh textu | konverzační asistent |
| Hledání odpovědi se zdroji | vyhledávání s odkazy |
| Dotazy nad vlastními podklady | asistent nad dokumenty |
| Návrh vizuálu nebo prototypu | kreativní AI nástroj |

*Funkce, podmínky účtu a věkové limity se mohou měnit. Před použitím je ověřte.*

---

<!-- _class: task -->

# 💼 Závěrečný projekt: Pomoc pro školu

🎯 **Cíl:** vytvoříte a obhájíte návrh řešení s rozumně použitou AI.

📋 **Zadání:**

- Ve dvojici vyberte problém ze školy nebo okolí
- Navrhněte řešení, publikum a jeden konkrétní přínos
- S AI připravte návrh textu, vizuálu nebo jednoduchého prototypu
- Uveďte jeden ověřený fakt, použitý prompt a jednu vlastní úpravu

✅ **Výstup:** čtyři snímky nebo jeden plakát + krátká reflexe použití AI.

---

# Prezentace projektů

- **1 minuta:** problém a cílová skupina
- **1 minuta:** návrh řešení a ukázka
- **30 sekund:** co vytvořila AI a co jste upravili vy
- spolužáci dávají zpětnou vazbu: srozumitelnost, ověření, bezpečnost

---

# 🧠 Souhrn výukového bloku

- AI hledá vzorce - neznamená to, že rozumí světu jako člověk
- Dobré zadání obsahuje úkol, kontext, formát a kontrolu
- Přesvědčivá odpověď může být chybná
- Citlivá data do veřejných nástrojů nepatří
- **Vy rozhodujete, ověřujete a nesete odpovědnost.**

---

# Zdroje a ověřování

- Výchozí obsah: *03_umelaInteligence.pdf*, Podřipská škola
- [OpenAI: Data Controls FAQ](https://help.openai.com/en/articles/7730893-chatgpt-data-controls-faq) - kontrola práce s konverzacemi
- [Canva: Privacy](https://www.canva.com/trust/privacy/) - soukromí a vzdělávací účty
- [AI Act Service Desk: článek 4](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-4) - AI gramotnost
- [NotebookLM Help](https://support.google.com/notebooklm/answer/16246230?hl=en) - práce se zdroji

*Odkazy ověřeny 13. 9. 2026. Funkce nástrojů se mohou měnit.*

---

<!-- _class: closing -->

# Děkuji za pozornost!

## Co si ověříte před příštím použitím AI?

Zdrojová předloha: Podřipská škola  
Licence zdrojové předlohy: neuvedena
