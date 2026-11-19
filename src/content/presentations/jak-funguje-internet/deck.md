---
marp: true
theme: oi
paginate: true
title: "Jak funguje internet"
description: "Co se děje po zadání webové adresy, jak spolu komunikují počítače a co skutečně znamená deep web."
id: jak-funguje-internet
category: Internet
date: 2026-11-19
transition: cover
---

<!-- _class: title -->

# Jak funguje internet
## (aneb Co se děje pod kapotou)

🧑‍🏫 Autor: Mgr. Vojtěch Bartoš  
Licence: CC BY-NC-SA

<!--
Představte téma: dnes budeme sledovat cestu od zadání adresy až po zobrazení webu. Zeptejte se žáků, kde podle nich internet fyzicky je. Lekce počítá s připojením k internetu a zařízeními pro samostatnou práci.
-->

---

# 🎯 Cíle lekce

- rozlišíte **internet** a **web**
- popíšete cestu požadavku mezi klientem a serverem
- vysvětlíte základní roli **IP adresy, DNS a HTTP**
- najdete IP adresu webu
- vysvětlíte, co je deep web

<!--
Seznamte žáky s cíli: nejprve prozkoumáme síť a její pravidla, pak si vyzkoušíme hledání IP adresy a vyjasníme si časté představy o deep webu.
-->

---

# ℹ️ Internet není totéž co web

- **internet** je celosvětová síť propojených sítí
- **web** je jedna ze služeb, které internet využívají
- webové stránky otevíráme pomocí prohlížeče
- internet využívá také e-mail, online hry nebo videohovory

> Mohli bychom používat internet, i kdyby web neexistoval?

<!--
Internet tvoří infrastruktura a pravidla pro komunikaci mezi sítěmi. Web je systém stránek a dalších zdrojů dostupných prostřednictvím webových protokolů; není synonymem internetu. K otázce: ano, například e-mail může fungovat i bez webu, přestože jej často čteme ve webovém rozhraní.
-->

---

# ℹ️ Kde je internet?

- zařízení propojují **Wi-Fi, mobilní sítě a kabely**
- sítě spojují směrovače, poskytovatelé a další infrastruktura
- data putují i optickými kabely pod oceány
- obsah a služby běží na počítačích zvaných **servery**

> „Cloud“ také běží na skutečných počítačích.

<!--
Na příkladu ukažte cestu od telefonu přes Wi-Fi router a poskytovatele až k serveru v datovém centru. Bezdrátové připojení je zpravidla jen část cesty; mezi kontinenty vedou také podmořské kabely. Cloud není jeden konkrétní počítač ani doslovný mrak, ale služby provozované na infrastruktuře poskytovatelů.
-->

---

# ℹ️ Klient a server

- **klient** žádá o službu, například prohlížeč o stránku
- **server** požadavek přijme a pošle odpověď
- odpovědí může být stránka, obrázek nebo chybová zpráva
- pro zobrazení webu může prohlížeč poslat více požadavků

**Prohlížeč → požadavek → server → odpověď → prohlížeč**

<!--
Klient a server jsou role při komunikaci, nikoli nutně zvláštní typy počítačů. Prohlížeč může po získání stránky požádat o další soubory, například obrázky a styly, a to i jiné servery. Požádejte žáky, aby určili klienta a server při otevření školního webu.
-->

---

# ℹ️ IP adresa: kam poslat data?

- **IP adresa** označuje síťové rozhraní v síti
- umožňuje směrovat data k cíli a zpět
- IPv4 vypadá například `192.0.2.1`
- IPv6 vypadá například `2001:db8::1`

<!--
Přirovnejte IP adresu k doručovací adrese, ale upozorněte, že jde o zjednodušení. Ukázkové adresy jsou vyhrazené pro dokumentaci, nejde o adresy konkrétního webu. Adresa nemusí jednoznačně určovat osobu ani jediný web; může se měnit nebo být sdílená. Web může mít více IPv4 či IPv6 adres.
-->

---

# ℹ️ DNS: od názvu k adrese

- lidé si lépe pamatují názvy, například `example.com`
- **DNS** pomáhá zjistit IP adresu spojenou s názvem
- záznam **A** obsahuje IPv4 adresu, **AAAA** IPv6 adresu
- odpovědí může být více adres nebo odkaz na jiný název

<!--
DNS přirovnejte k adresáři: podle doménového názvu pomáhá najít síťové údaje. Ve skutečnosti jde o distribuovaný systém a odpovědi se mohou po určitou dobu uchovávat v mezipaměti. Záznam CNAME může odkazovat na jiný název, který se následně přeloží na IP adresu. DNS není webový server a samo stránku neposílá.
-->

---

# ℹ️ Data cestují v paketech

- zprávy se přenášejí po menších částech: **paketech**
- **směrovače** je předávají směrem k cíli
- pakety mohou putovat různými cestami
- pravidla komunikace neboli **protokoly** zajišťují spolupráci

<!--
Přirovnejte pakety k očíslovaným částem zásilky. Podle cílové IP adresy směrovače rozhodují o dalším kroku. Když je potřeba spolehlivý a uspořádaný přenos, protokoly jako TCP pomáhají ztracené části znovu doručit a správně sestavit. Ne všechny přenosy však používají TCP.
-->

---

# ℹ️ HTTP a HTTPS

- **HTTP** určuje, jak klient žádá o webové zdroje a server odpovídá
- odpověď obsahuje například stránku nebo chybový stav
- **HTTPS** přidává šifrované spojení a ověření serveru
- HTTPS samo o sobě nezaručuje, že je obsah pravdivý nebo bezpečný

<!--
Předveďte adresu začínající https://. HTTPS chrání přenášená data pomocí TLS a umožňuje ověřit, že klient komunikuje se serverem pro daný název; provozovatel podvodného webu si však také může pořídit certifikát. Zámek proto není zárukou důvěryhodnosti obsahu.
-->

---

# ℹ️ Co se stane po zadání adresy?

1. prohlížeč zjistí pomocí **DNS** IP adresu názvu
2. naváže spojení se serverem na nalezené adrese
3. přes **HTTPS** odešle požadavek na stránku
4. server odpoví a prohlížeč stránku zobrazí

<!--
Projděte cestu například na adrese https://example.com/. Je to zjednodušený model: odpověď DNS nebo některé soubory mohou být v mezipaměti, prohlížeč může použít již otevřené spojení a stránka může načítat další zdroje. U HTTPS probíhá ověření serveru a šifrovaná komunikace před výměnou HTTP požadavku a odpovědi.
-->

---

# ℹ️ Společná ukázka: IP adresa webu

1. otevřete bezplatný [DNS Checker](https://dnschecker.org/)
2. zadejte název `example.com` bez `https://` a bez cesty
3. vyberte typ záznamu **A** a spusťte **Search**
4. v odpovědích najděte některou IPv4 adresu

<!--
Sdílejte obrazovku a ukažte, že nástroj zjišťuje DNS odpovědi z různých míst. Zelená odpověď může obsahovat jednu nebo více IPv4 adres; postup se může při změně rozhraní služby lišit. Adresu neopisujte jako neměnnou pravdu: výsledek závisí na čase a dotazovaném serveru. Pokud služba neodpovídá, zkuste jiný veřejný název nebo se k ukázce vraťte později.
-->

---

# ℹ️ Co výsledek znamená?

- IP adresa patří k zadanému **názvu** v DNS odpovědi
- jeden název může mít více IP adres
- odpovědi se mohou lišit podle místa a času
- stejnou IP adresu může používat více webů

<!--
Výsledek nemusí být adresa jediného fyzického serveru, na kterém leží celý web: může označovat například infrastrukturu poskytovatele CDN či sdílený server. DNS Checker se ptá různých resolverů, které mohou mít různě staré odpovědi nebo dostat různé adresy. Porovnejte dvě odpovědi; obě mohou být správné.
-->

---

<!-- _class: task -->

# 💼 Úkol: Najděte IP adresu webu

🎯 **Cíl:** zjistěte IPv4 adresu webu podripskaskola.cz pomocí DNS

📋 **Zadání:** samostatná práce

- zadejte název webu do [DNS Checkeru](https://dnschecker.org/)
- zvolte záznam **A**, spusťte hledání a opište jednu IPv4 adresu
- pokud se adresa nezobrazí, zkuste jiný veřejný web

✅ **Výstup:** název webu a nalezenou IP adresu odevzdejte do Google Classroom

<!--
Žáci zadávají jen název hostitele, například example.com nebo www.example.com, nikoli celou adresu s cestou. Zkontrolujte, že odevzdali skutečně IPv4 adresu ze záznamu A, nikoli vlastní IP adresu či záznam AAAA. Ukažte, kam výsledek v Google Classroom vložit. Pokud nástroj nefunguje, úkol dokončete později; výsledky mohou být různé.
-->

---

# ℹ️ Deep web: není to hororový film

- vyhledávače indexují jen část webového obsahu
- **deep web** je obsah, který běžné vyhledávače neindexují
- patří sem například e-mailová schránka nebo školní účet
- neindexovaný obsah nemusí být tajný ani nezákonný

<!--
Index vyhledávače je jeho databáze nalezených stránek. Obsah za přihlášením, výsledky některých databází nebo stránky, které robot nenalezl či neindexoval, se v běžném vyhledávání nemusejí objevit. Nepřístupnost ve vyhledávači ale sama o sobě není zabezpečení. Neuvádějte nepodložené procento velikosti deep webu.
-->

---

# ℹ️ Deep web ≠ dark web

- **deep web**: obsah mimo index běžných vyhledávačů
- **dark web**: část webu dostupná přes speciální sítě či software
- na dark webu existuje legální i nelegální obsah
- ne každý neindexovaný obsah je součástí dark webu

> Školní účet po přihlášení není automaticky dark web.

<!--
Vyjasněte mystifikaci: deep web a dark web nejsou synonyma a deep web netvoří jen nelegální stránky. Dark web je zpravidla neindexovaný a vyžaduje zvláštní způsob přístupu. Upozorněte na rizika neznámých služeb, podvodů a škodlivého obsahu; pro tuto lekci není potřeba dark web navštěvovat.
-->

---

# 🧠 Souhrn lekce

- internet je síť sítí; web je jednou z jeho služeb
- DNS pomáhá najít IP adresu, HTTP přenáší požadavky a odpovědi
- data putují po fyzické infrastruktuře v paketech
- deep web není totéž co dark web ani nelegální obsah

<!--
Nechte žáky vlastními slovy popsat cestu požadavku od prohlížeče k serveru. Zeptejte se, jaký je rozdíl mezi DNS a HTTP a proč soukromá schránka patří mezi neindexovaný obsah. Připomeňte, že HTTPS neověřuje pravdivost obsahu.
-->

---

<!-- _class: closing -->

# Děkuji za pozornost!

🧑‍🏫 Autor: Mgr. Vojtěch Bartoš  
© Licence: CC BY-NC-SA  
www.otevrenainformatika.cz

<!--
Uzavřete lekci a připomeňte odevzdání názvu webu a nalezené IPv4 adresy do Google Classroom.
-->
