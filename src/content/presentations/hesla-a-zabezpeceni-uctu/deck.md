---
marp: true
theme: oi
paginate: true
title: "Hesla a zabezpečení účtů"
description: "Bezpečná hesla a dvoufaktorové ověření."
id: hesla-a-zabezpeceni-uctu
category: Kyberbezpečnost
date: 2026-11-22
transition: cover
---

<!-- _class: title -->

# Hesla a zabezpečení účtů
## aneb Asi byste si měli změnit heslo

🧑‍🏫 Autor: Mgr. Vojtěch Bartoš  
Licence: CC BY-NC-SA

<!--
Představte téma lekce pro druhý ročník: bezpečná hesla. Lekce počítá s připojením k internetu a zařízeními pro samostatnou práci.
-->

---

# 🎯 Cíle lekce

- získáte přehled o nástráhách tvorby silného hesla
- navrhnete bezpečná a jedinečná hesla
- vysvětlíte dvoufaktorové ověření

<!--
Seznamte žáky s cíli a upozorněte, že při aktivitách nikdy nebudou zadávat ani sdílet svá skutečná hesla.
-->

---

# ℹ️ Proč řešit hesla?

- účty obsahují zprávy, fotografie nebo přístup k penězům
- cílem útoku může být i herní účet nebo digitální identita
- ukradený účet lze zneužít k podvodům na dalších lidech
- útočníci zkoušejí hesla automatizovaně

> Co by se stalo, kdyby někdo získal přístup k vašemu účtu?

<!--
Ptejte se na možné dopady, například ztrátu dat, vydávání se za majitele účtu nebo oslovení jeho kontaktů. Žáci nemají sdělovat svá hesla ani citlivé údaje.
-->

---

# ℹ️ Myslíte si, že máte bezpečné heslo?

- sílu ovlivňuje délka a především **nepředvídatelnost**
- odhad si můžete vyzkoušet na [Password Meteru](https://passwordmeter.com/) nebo v [Bitwarden Password Strength Testu](https://bitwarden.com/password-strength/)
- zadávejte pouze **vymyšlená hesla**, která nikde nepoužíváte
- výsledek je orientační, nikoli záruka bezpečnosti

<!--
Skutečná hesla nezadávejte do online testů. Porovnejte jen fiktivní příklady a upozorněte, že různé nástroje používají odlišné modely.
-->

---

# ℹ️ Jak dlouho trvá prolomit heslo?

- záleží na způsobu útoku, výpočetní síle i ochraně služby
- krátké a běžné heslo může být uhodnuto velmi rychle
- delší, náhodně vytvořená hesla bývají odolnější
- odhady typu „minuty“ nebo „staletí“ nejsou předpověď

<!--
Původní příklady sahají od 1234 přes J1rk4 a v0jt!!k po delší fráze. Odhady v prezentaci byly od 0 sekund až po staletí, ale závisí na metodice. Rozlišujte online hádání s omezením pokusů a offline útok na uniklé hashe: rychlost zásadně ovlivňuje také způsob uložení hesel.
-->

---

# ℹ️ Někdy ani není hrubá síla potřeba

- útočník může zkusit seznamy **častých a uniklých hesel**
- může využít jméno, zájmy či jiné veřejné údaje
- běžné nahrazování písmen čísly nemusí pomoci
- stejné heslo použité u více služeb usnadní další útok

<!--
Ukažte například [seznam častých hesel](https://nordpass.com/most-common-passwords-list/). Vysvětlete slovníkový útok a zkoušení uniklých kombinací na jiných službách. Konkrétní hesla ze seznamu nepoužívejte.
-->

---

# ℹ️ Co dělá heslo silným?

- důležitá je **délka** a způsob vytvoření hesla
- náhodný výběr zvyšuje jeho nepředvídatelnost
- samotné přidání číslice či speciálního znaku nestačí
- bezpečné heslo musí být také použitelné a jedinečné

> Které heslo se vám bude lépe pamatovat: směs znaků, nebo fráze?

<!--
Vysvětlete entropii jako míru nepředvídatelnosti hesla. Složitě vypadající známé vzory mohou být snadno uhádnutelné. Délka sama nezachrání předvídatelnou frázi; porovnávané příklady proto nejsou návodem k použití.
-->

---

# ℹ️ Jaké heslo si tedy nastavit?

- použijte dlouhou **heslovou frázi** z náhodně vybraných slov
- vyhněte se osobním údajům a známým citátům
- pro každý účet vytvořte jiné heslo
- ukázkové fráze z prezentace nikdy nepoužívejte

<!--
Původní prezentace uvádí příklady jako modra-kocka-skace-pres-plot-2026 nebo západ-slunce-zrcadlo-orchidej-avalon. Veřejné příklady jsou již známé, a proto je nelze použít jako skutečné heslo. Náhodně vybraná slova bývají bezpečnější než předvídatelná věta nebo osobní informace.
-->

---

# ℹ️ Bezpečnost a zapamatovatelnost

- změť znaků může být obtížná k zapamatování
- fráze z náhodných slov se může pamatovat lépe
- ani dlouhé heslo není bezpečné, pokud je známé nebo použité jinde
- správce hesel pomůže s jedinečnými hesly pro jednotlivé účty

<!--
Původní obrázek porovnává zapamatovatelnost složitého hesla a fráze z náhodných slov. Pointou není doslova převzít známou frázi: heslo musí být vytvořeno nezávisle. Bezpečně uložená písemná záloha může být vhodná; lísteček u monitoru nikoli.
-->

---

# ℹ️ Prolomení hesla nemusí znamenat konec

- **dvoufaktorové ověření (2FA)** přidává další vrstvu ochrany
- něco, co **vím**: heslo nebo PIN
- něco, co **mám**: telefon nebo bezpečnostní klíč
- něco, co **jsem**: například otisk prstu

<!--
Dva faktory pocházejí z různých kategorií. Ověření aplikací nebo bezpečnostním klíčem zpravidla poskytuje lepší ochranu než SMS; dostupné možnosti se liší podle služby. Ani 2FA není neprůstřelné: útočník může vylákat kód nebo schválení přihlášení. Diskutujte, kde mají žáci 2FA zapnuté, bez sdílení údajů.
-->

---

# ℹ️ Co dělat, když mám více účtů?

- opakované heslo ohrožuje při úniku více účtů
- [Have I Been Pwned](https://haveibeenpwned.com/) umožňuje ověřit, zda se e-mail objevil ve známém úniku
- **správce hesel** ukládá a generuje jedinečná hesla
- chraňte jej silným hlavním heslem a pokud možno 2FA

<!--
Příklady správců: Bitwarden, Apple Passwords a Google Password Manager. Při ukázce nevyžadujte zadání osobní adresy před třídou ani zadávání skutečného hesla. Nepřítomnost adresy v databázi není důkaz, že k úniku nikdy nedošlo. Připomeňte bezpečné uložení obnovovacích údajů.
-->

---

<!-- _class: task -->

# 💼 Úkol: Na den kyberbezpečnostním expertem (1/2)

🎯 **Cíl:** analyzujte sílu poskytnutých hesel

📋 **Zadání:** jste auditoři firmy Děravý & Syn

- zkopírujte tabulku ze zadání v Google Classroom
- ohodnoťte každé heslo na škále **1–10**
- stručně vysvětlete, proč je slabé nebo silné

✅ **Výstup:** vyplněný první list tabulky

<!--
Použijte pouze fiktivní hesla z připravené tabulky, nikoli skutečná hesla žáků. Škála je orientační; sledujte délku, předvídatelnost, známé vzory a možnou souvislost s osobními údaji.
-->

---

<!-- _class: task -->

# 💼 Úkol: Na den kyberbezpečnostním expertem (2/2)

🎯 **Cíl:** navrhněte pravidla pro tvorbu hesel

📋 **Zadání:** ředitel firmy chce bezpečná a použitelná pravidla

- přejděte na druhý list tabulky
- navrhněte pravidla pro hesla zaměstnanců
- myslete na jedinečnost, délku i správce hesel

✅ **Výstup:** tabulku Google Sheets odevzdejte do Google Classroom

<!--
Diskutujte rovnováhu mezi bezpečností a použitelností. Pravidla mohou zahrnovat ověřování uniklých hesel, 2FA a bezpečnou obnovu přístupu. Ukažte, kam hotovou tabulku odevzdat.
-->

---

# 🧠 Souhrn lekce

- dlouhá, nepředvídatelná a jedinečná hesla chrání účty
- správce hesel a 2FA přidávají další vrstvy ochrany

<!--
Požádejte žáky, aby uvedli, proč není vhodné opakovat hesla.
-->

---

<!-- _class: closing -->

# Děkuji za pozornost!

🧑‍🏫 Autor: Mgr. Vojtěch Bartoš  
© Licence: CC BY-NC-SA  
www.otevrenainformatika.cz

<!--
Uzavřete lekci a připomeňte odevzdání tabulky s auditem hesel a navrženými pravidly do Google Classroom.
-->
