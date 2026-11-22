---
marp: true
theme: oi
paginate: true
title: "Kybernetická první pomoc"
description: "První pomoc při napadení účtu, vyzrazení údajů, podvodné platbě nebo nákaze malwarem."
id: kyberneticka-prvni-pomoc
category: Kyberbezpečnost
date: 2026-11-22
transition: cover
---

<!-- _class: title -->

# Kybernetická první pomoc
## aneb Co dělat, když mi hacknuli účet

🧑‍🏫 Autor: Mgr. Vojtěch Bartoš  
Licence: CC BY-NC-SA

<!--
Lekce navazuje na hesla a phishing, ale lze ji použít i samostatně. Zaměřte se na reakci na incident a omezení škod, nikoli na obviňování obětí. Při diskusi nevyžadujte skutečná hesla ani citlivé údaje.
-->

---

# 🎯 Cíle lekce

- rozlišíte napadený účet, vyzrazené údaje a nákazu zařízení
- zvolíte první kroky podle toho, co se stalo
- popíšete, jak obnovit přístup a omezit škody
- vysvětlíte, kdy požádat o pomoc a jak incidentu předcházet

<!--
Zdůrazněte, že neexistuje jeden univerzální postup. Jiné kroky potřebuje člověk po zadání hesla na falešném webu a jiné při podezření na malware nebo odcizení peněz.
-->

---

# ℹ️ „Byl jsem hacknut“: co se vlastně stalo?

- někdo získal přístup k **účtu**
- zadali jste **heslo nebo ověřovací kód** na falešném webu
- poslali jste **peníze či údaje karty** podvodníkovi
- zařízení napadl **malware** nebo jej někdo ovládá na dálku

> Jedna událost může způsobit více problémů současně.

<!--
Samotné otevření odkazu ještě nemusí znamenat napadení účtu nebo nákazu. Zjistěte, zda člověk něco zadal, stáhl, spustil, zaplatil nebo schválil. Také únik údajů ze služby může nastat bez chyby jejího uživatele.
-->

---

# ℹ️ Jak poznat, že je něco špatně?

- upozornění na neznámé přihlášení nebo změnu hesla
- zprávy či příspěvky, které jste nevytvořili
- neznámé platby nebo změněné kontaktní údaje
- zašifrované soubory či neznámý program pro vzdálený přístup

<!--
Jednotlivý příznak není důkaz: například pomalý počítač může mít jinou příčinu. Upozornění na přihlášení může být samo phishing; ověřujte je přímo v oficiální aplikaci nebo na známé adrese služby.
-->

---

# ℹ️ První pomoc: zastavte další škody

1. **zpomalte**: neplaťte a nesdělujte další údaje ani kódy
2. použijte důvěryhodné zařízení a oficiální kontakty
3. řešte nejnaléhavější problém: peníze, účet nebo zařízení
4. poznamenejte si, co se stalo, a požádejte o pomoc

<!--
Při ohrožení peněz kontaktujte ihned banku; při podezření na malware odpojte zařízení od sítě. U školního či pracovního účtu a zařízení informujte správce. Nezletilí mohou požádat o pomoc rodiče nebo učitele. Zapisování průběhu nesmí zdržet kroky k omezení škod.
-->

---

# ℹ️ Zadal jsem heslo na falešném webu

- z důvěryhodného zařízení otevřete skutečnou službu
- **ihned změňte heslo** a ukončete ostatní přihlášení
- změňte stejné heslo i u dalších účtů
- zkontrolujte obnovovací údaje a nastavení 2FA

<!--
Nečekejte na potvrzení, že se útočník přihlásil. Pokud jste zadali i ověřovací kód nebo schválili přihlášení, mohl již získat přístup. Změna hesla nemusí ukončit existující relace, proto použijte také odhlášení ostatních zařízení, pokud je služba nabízí. Podezřelé zařízení nepoužívejte k obnově účtu.
-->

---

# ℹ️ Někdo ovládá můj účet

- pokud se přihlásíte, změňte heslo a odhlaste ostatní zařízení
- pokud ne, použijte **oficiální obnovu napadeného účtu**
- prověřte připojené aplikace, obnovovací kontakty a 2FA
- upozorněte kontakty na podvodné zprávy z vašeho účtu

<!--
Obnovu hledejte přímo v nápovědě dané služby, nikoli přes kontakt z podezřelé zprávy. Zrušte neznámé přístupy aplikací a obnovte záložní kódy, pokud mohly uniknout. Za „vrácení účtu“ neplaťte neznámým lidem: může jít o další podvod.
-->

---

# ℹ️ E-mail je klíč k dalším účtům

- e-mail často umožňuje **obnovit hesla** u jiných služeb
- pokud je napadený, zabezpečte jej co nejdříve
- zkontrolujte přeposílání, pravidla a obnovovací údaje
- následně prověřte důležité účty propojené s touto adresou

<!--
Útočník si mohl nastavit přeposílání nebo pravidla skrývající bezpečnostní upozornění. Kromě hesla prověřte relace a připojené aplikace. Pokud hrozí finanční škoda, kontakt s bankou má přednost; zabezpečení e-mailu ale pomáhá zabránit dalšímu přebírání účtů.
-->

---

# ℹ️ Poslal jsem peníze nebo údaje karty

- **ihned kontaktujte banku** přes oficiální aplikaci či číslo
- požádejte o blokaci karty nebo přístupu podle situace
- u odeslané platby požádejte banku o možnosti jejího zastavení
- uchovejte komunikaci a oznamte podvod Policii ČR

<!--
Banku kontaktujte i po vyzrazení bankovního hesla nebo schválení cizího přihlášení. Neslibujte vrácení peněz: záleží na typu a stavu transakce. Neposílejte další platbu za údajné odblokování či vrácení peněz a nepřevádějte peníze na „bezpečný účet“ podle pokynů volajícího.
-->

---

# ℹ️ Malware: když je problém v zařízení

- **ransomware** může zašifrovat data a žádat výkupné
- **spyware či keylogger** může sledovat činnost a krást údaje
- zařízení v **botnetu** může útočník ovládat na dálku
- malware se může šířit i přes přílohy nebo neověřený software

<!--
Vysvětlete, že k nákaze může dojít různými cestami a samotné kliknutí nemusí vždy znamenat infekci. Zaplacení výkupného nezaručuje obnovení dat. Botnet může zneužít zařízení například k útokům na další služby.
-->

---

# ℹ️ Podezření na malware: co teď?

1. odpojte zařízení od sítě a nepoužívejte na něm hesla
2. informujte správce nebo jinou odpovědnou osobu
3. z čistého zařízení změňte hesla důležitých účtů
4. zařízení prověřte a obnovte podle pokynů odborníka

<!--
Odpojení může omezit další komunikaci a šíření, ale není zárukou zastavení každého útoku. U školního nebo pracovního zařízení postupujte podle správce; bez konzultace nemažte důkazy. Antivirová kontrola nemusí stačit, někdy je nutná čistá přeinstalace a obnova z prověřené zálohy.
-->

---

# ℹ️ Uchovejte důkazy a požádejte o pomoc

- uložte zprávy, adresy, časy událostí a údaje o platbách
- školní či pracovní incident oznamte **správci**
- podvod nahlaste službě; finanční škodu řešte také s bankou
- při podvodu, vydírání nebo krádeži kontaktujte Policii ČR

<!--
Důkazy ukládejte bezpečně, nezveřejňujte osobní údaje a podezřelé přílohy znovu neotvírejte. Při podezření na malware kvůli snímku obrazovky zařízení nepřipojujte zpět k síti. Nevymazávejte zařízení před domluvou se správcem nebo odborníkem. Pokud byly zneužity doklady či jiné osobní údaje, popište to při oznámení.
-->

---

# ℹ️ Jak snížit riziko příště?

- používejte jedinečná hesla, správce hesel a 2FA
- podezřelé zprávy ověřujte nezávislým kontaktem
- pravidelně aktualizujte systém a aplikace
- používejte ochranu zařízení a ověřené zdroje softwaru
- důležitá data **zálohujte** a obnovu záloh ověřujte

<!--
Windows obsahují Microsoft Defender; žádný antivirus ani oficiální obchod však nezaručuje úplnou bezpečnost. Vyhýbejte se neověřenému či upravenému softwaru. Zálohy držte také odděleně od běžně připojených zařízení a ověřujte jejich obnovitelnost. Záloha pomáhá obnovit data, ale nezabrání jejich odcizení. Po incidentu ověřte, že neznámé přístupy byly zrušeny, a sledujte další bezpečnostní upozornění a platby.
-->

---

<!-- _class: task -->

# 💼 Úkol: Odpalte hackera

🎯 **Cíl:** procvičte rozpoznávání internetových nástrah

📋 **Zadání:** samostatná práce

- otevřete hru [Odpal hackera](https://odpalhackera.cz/)
- projděte celou hru až do konce
- zamyslete se nad situacemi, které vás překvapily

✅ **Výstup:** společná diskuse

<!--
Nechte žáky shrnout, které nástrahy ve hře rozpoznali a jak by se zachovali. Pokud hra není dostupná, projděte společně modelové situace z lekce.
-->

---

# 🧠 Souhrn lekce

- napadený účet není totéž co zavirované zařízení
- první kroky vybíráme podle toho, co bylo ohroženo
- účty obnovujeme z důvěryhodného zařízení přes oficiální službu
- při ohrožení peněz kontaktujeme ihned banku
- uchováme důkazy a požádáme o pomoc

<!--
Nechte žáky popsat první kroky po zadání hesla na falešném webu, po podvodné platbě a při podezření na malware. Zdůrazněte, že včasné oznámení může omezit škody a že oběť nemusí situaci zvládnout sama.
-->

---

<!-- _class: closing -->

# Děkuji za pozornost!

🧑‍🏫 Autor: Mgr. Vojtěch Bartoš  
© Licence: CC BY-NC-SA  
www.otevrenainformatika.cz
