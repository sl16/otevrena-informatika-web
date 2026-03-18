export interface PhishingOption {
  id: string;
  label: string;
  isCorrect: boolean;
  feedback: string;
}

export interface PhishingLink {
  label: string;
  href: string;
}

export interface PhishingCase {
  id: string;
  isPhishing: boolean;
  from: string;
  subject: string;
  preview: string;
  body: string;
  bodyAfterLink?: string;
  link?: PhishingLink;
  options: PhishingOption[];
  learningPoint: string;
}

export const phishingCases: PhishingCase[] = [
  {
    id: 'case-1',
    isPhishing: true,
    from: 'noreply@bakalari-prihlaska.cz',
    subject: 'Bakalari: Vas ucet bude do 2 hodin zablokovan',
    preview: 'Okamzite overte heslo pres odkaz v tomto e-mailu.',
    body: 'Dobry den, system Bakalari zaznamenal podezrelou aktivitu. Pokud behem 2 hodin neoverite ucet, dojde k jeho smazani. Prihlaste se zde:',
    link: {
      label: 'Overit ucet Bakalari',
      href: 'http://bakalari-overeni-login.cz',
    },
    options: [
      {
        id: 'a',
        label: 'Kliknu na odkaz a rychle se přihlásím, ať účet nezmizí.',
        isCorrect: false,
        feedback: 'Tohle je rizikové. Doména není oficiální školní adresa a tlak na čas je typický znak phishingu.',
      },
      {
        id: 'b',
        label: 'Nechám e-mail být a ověřím situaci přímo u školy nebo v oficiální aplikaci Bakaláři.',
        isCorrect: true,
        feedback: 'Správně. Ověření přes oficiální kanál je nejbezpečnější postup.',
      },
      {
        id: 'c',
        label: 'Přepošlu e-mail kamarádům, ať se taky rychle přihlásí.',
        isCorrect: false,
        feedback: 'Tím byste mohli podvod dál šířit. Nejdřív je potřeba zprávu ověřit.',
      },
    ],
    learningPoint: 'Všímej si domény, časového nátlaku a výhrůžek. To jsou časté znaky phishingu.',
  },
  {
    id: 'case-2',
    isPhishing: false,
    from: 'noreply@bakalari.cz',
    subject: 'Bakaláři: Aktualizace rozvrhu na zítra',
    preview: 'Změnu najdete po přihlášení v oficiální aplikaci.',
    body: 'Dobrý den, v systému Bakaláři byla zveřejněna aktualizace rozvrhu. Pro zobrazení použijte své běžné přihlášení v oficiální aplikaci nebo na známém školním portálu. Tento e-mail neobsahuje žádný odkaz ani žádost o heslo.',
    options: [
      {
        id: 'a',
        label: 'Otevřu přílohu, je to přece od studijního oddělení.',
        isCorrect: false,
        feedback: 'Koncovka .pdf.exe je podezřelá. Jde o spustitelný soubor, ne běžné PDF.',
      },
      {
        id: 'b',
        label: 'Ověřím si změnu rozvrhu přes oficiální web školy a přílohu neotevírám.',
        isCorrect: true,
        feedback: 'Správně. Podezřelá příloha může obsahovat malware.',
      },
      {
        id: 'c',
        label: 'Smažu jen přílohu a na e-mail odpovím heslem, ať to rychle vyřídí.',
        isCorrect: false,
        feedback: 'Heslo se e-mailem neposílá. Odpověď s citlivými údaji by byla chyba.',
      },
    ],
    learningPoint: 'Legitimní zpráva netlačí na rychlou akci, nechce heslo a vede vás na standardní přihlašovací cestu, kterou už běžně používáte.',
  },
  {
    id: 'case-3',
    isPhishing: true,
    from: 'support@instagram-security-team.com',
    subject: 'Porušení pravidel: tvůj účet bude odstraněn',
    preview: 'Potvrď identitu do 30 minut.',
    body: 'Zaznamenali jsme porušení pravidel. Pokud nepotvrdíš účet do 30 minut, profil bude trvale smazán. Ověření proveď zde:',
    link: {
      label: 'Centrum pomoci Instagramu',
      href: 'https://ig-help-center-verify.net/login',
    },
    options: [
      {
        id: 'a',
        label: 'Přihlásím se přes odkaz, nechci o účet přijít.',
        isCorrect: false,
        feedback: 'Falešná doména a silný psychologický tlak jsou varovné signály.',
      },
      {
        id: 'b',
        label: 'Přihlásím se pouze přes oficiální aplikaci Instagram a zkontroluji upozornění tam.',
        isCorrect: true,
        feedback: 'Správně. Bezpečné je jít přes oficiální aplikaci, ne přes odkaz z e-mailu.',
      },
      {
        id: 'c',
        label: 'Pošlu jim kód z SMS, aby viděli, že účet je můj.',
        isCorrect: false,
        feedback: 'Kód z SMS je určený jen tobě. Jeho předání může vést k převzetí účtu.',
      },
    ],
    learningPoint: 'Nikdy nesdílej ověřovací kódy. Slouží jako druhý faktor ochrany účtu.',
  },
  {
    id: 'case-4',
    isPhishing: true,
    from: 'it-helpdesk@skola.cz',
    subject: 'Plánovaná odstávka školy - potvrzení loginu',
    preview: 'Dotazník IT oddělení pro studenty.',
    body: 'Dobrý den, kvůli migraci serveru potřebujeme ověřit přihlášení všech studentů. Vyplň formulář na adrese:',
    link: {
      label: 'Interní formulář školy',
      href: 'https://forms.gle/xxxyyyzzz',
    },
    bodyAfterLink:
      'Do formuláře zadej školní e-mail i heslo.',
    options: [
      {
        id: 'a',
        label: 'Vyplním formulář včetně hesla, psalo to IT oddělení.',
        isCorrect: false,
        feedback: 'Heslo se nikdy nezadává do náhodných formulářů. IT oddělení heslo nevyžaduje.',
      },
      {
        id: 'b',
        label: 'Kontaktuji IT oddělení oficiální cestou a formulář ignoruji.',
        isCorrect: true,
        feedback: 'Správně. Oprávněnost podobných požadavků je nutné ověřit.',
      },
      {
        id: 'c',
        label: 'Vyplním formulář, ale heslo nahradím starším heslem.',
        isCorrect: false,
        feedback: 'I staré heslo je citlivý údaj. Vyplňovat tento formulář je nebezpečné.',
      },
    ],
    learningPoint: 'Školní IT nikdy nechce hesla od studentů ve formulářích.',
  },
  {
    id: 'case-5',
    isPhishing: true,
    from: 'dopravni-podnik@pokuta-ids.cz',
    subject: 'Neuhrazená pokuta za jízdu na černo',
    preview: 'Poslední možnost úhrady před exekucí.',
    body: 'Evidujeme u vás neuhrazenou pokutu 1 850 Kč. Uhraďte ihned kartou zde:',
    link: {
      label: 'Zaplatit pokutu online',
      href: 'http://dopravni-pokuta-pay.cz',
    },
    bodyAfterLink:
      'Jinak předáme pohledávku exekutorovi.',
    options: [
      {
        id: 'a',
        label: 'Zaplatím to hned kartou, ať nemám problém.',
        isCorrect: false,
        feedback: 'Podvodníci zneužívají strach. Platbu ověřuj jen na oficiálních webech dopravce.',
      },
      {
        id: 'b',
        label: 'Najdu oficiální kontakt dopravce a ověřím, zda nějaká pokuta existuje.',
        isCorrect: true,
        feedback: 'Správně. Ověření mimo podezřelou zprávu je správná obrana.',
      },
      {
        id: 'c',
        label: 'Odepíšu číselné údaje karty e-mailem, ať je to rychlejší.',
        isCorrect: false,
        feedback: 'Údaje z karty se e-mailem neposílají. To by vedlo ke zneužití.',
      },
    ],
    learningPoint: 'Finanční výhrůžky a naléhání na okamžitou platbu jsou typické social engineering triky.',
  },
  {
    id: 'case-6',
    isPhishing: true,
    from: 'maturita-cermat@edu-info.cz',
    subject: 'Předběžné výsledky maturity - tajné přístupy',
    preview: 'Pouze pro studenty SŠ, nepřenášej dál.',
    body: 'Máš možnost vidět výsledky maturity dříve. Přihlas se školním e-mailem a heslem na:',
    link: {
      label: 'Portál předběžných výsledků',
      href: 'https://cermat-results-now.cz',
    },
    bodyAfterLink:
      'Nabídka platí jen dnes.',
    options: [
      {
        id: 'a',
        label: 'Přihlásím se, aspoň budu vědět výsledky dřív.',
        isCorrect: false,
        feedback: 'To je phishing. Neoficiální doména a slib exkluzivního přístupu jsou podezřelé.',
      },
      {
        id: 'b',
        label: 'Počkám na oficiální oznámení školy nebo CERMATu.',
        isCorrect: true,
        feedback: 'Správně. Citlivé informace ověřuj jen z oficiálních zdrojů.',
      },
      {
        id: 'c',
        label: 'Pošlu odkaz třídnímu učiteli, ať to ověří za mě z mého účtu.',
        isCorrect: false,
        feedback: 'Sdílení přihlašovacích údajů není bezpečné ani s učitelem.',
      },
    ],
    learningPoint: 'Exkluzivní nabídky a omezený čas jsou často návnada pro krádež přihlašovacích údajů.',
  },
  {
    id: 'case-7',
    isPhishing: false,
    from: 'drive-shares-noreply@google.com',
    subject: 'Google Disk: Byl vám nasdílen dokument „Maturitni_otazky_2026.pdf“',
    preview: 'Sdílení od učitele je dostupné v aplikaci Disk.',
    body: 'Třídní učitel vám nasdílel studijní materiál. Dokument otevřete přímo v oficiální aplikaci Google Disk, kde vidíte i jméno sdílející osoby a historii sdílení. Zpráva nepožaduje zadání hesla ani ověřovacích kódů.',
    options: [
      {
        id: 'a',
        label: 'Přihlásím se, potřebuju ten dokument do školy.',
        isCorrect: false,
        feedback: 'Nejde o oficiální Google doménu. Odkaz může sloužit ke krádeži hesla.',
      },
      {
        id: 'b',
        label: 'Otevřu Google Drive přímo a zkontroluji sdílené soubory tam.',
        isCorrect: true,
        feedback: 'Správně. Přihlašování vždy prováděj jen na oficiálním webu nebo v aplikaci.',
      },
      {
        id: 'c',
        label: 'Stáhnu soubor bez přihlášení z odkazu a pak ho pošlu třídě.',
        isCorrect: false,
        feedback: 'Kliknutí na podezřelý odkaz je riziko samo o sobě.',
      },
    ],
    learningPoint: 'I legitimní zprávu je dobré ověřit přes aplikaci, kterou už používáte. Důležitý je kontext: známý odesílatel, žádný nátlak a žádné citlivé údaje.',
  },
  {
    id: 'case-8',
    isPhishing: true,
    from: 'sprava-uctu@microsoft-cz-support.com',
    subject: 'Microsoft 365: vypršela licence studenta',
    preview: 'Obnov licenci zdarma do 15 minut.',
    body: 'Tvůj školní účet Microsoft 365 je pozastaven. Přihlas se a ověř studentský status:',
    link: {
      label: 'Obnovit studentskou licenci',
      href: 'https://office365-student-renewal.cz/login',
    },
    options: [
      {
        id: 'a',
        label: 'Rychle se přihlásím, bez Office se neobejdu.',
        isCorrect: false,
        feedback: 'Phishing často cílí na služby, které denně používáš. Doména je neoficiální.',
      },
      {
        id: 'b',
        label: 'Ověřím stav licence přes školní IT nebo oficiální portál Microsoftu.',
        isCorrect: true,
        feedback: 'Správně. Ověřuj informace na oficiálních stránkách, ne v odkazu z e-mailu.',
      },
      {
        id: 'c',
        label: 'Přepošlu e-mail rodičům, ať to za mě vyřídí.',
        isCorrect: false,
        feedback: 'Přeposlání bez ověření šíří podvod dál.',
      },
    ],
    learningPoint: 'U populárních služeb je phishing velmi častý, proto je ověření zdroje klíčové.',
  },
  {
    id: 'case-9',
    isPhishing: true,
    from: '+420 777 999 111',
    subject: 'SMS: Balíkovna',
    preview: 'Nedoručený balík, doplaťte 29 Kč.',
    body: 'Váš balík nelze doručit bez doplatku 29 Kč. Zaplaťte zde:',
    link: {
      label: 'Doplatek doručení 29 Kč',
      href: 'https://balikovna-pay-cz.net',
    },
    bodyAfterLink:
      'Pokud nezaplatíte do 1 hodiny, zásilka bude vrácena.',
    options: [
      {
        id: 'a',
        label: 'Zaplatím 29 Kč, je to malá částka.',
        isCorrect: false,
        feedback: 'Malé částky podvodníci používají často, aby oběť nepozastavila podezření.',
      },
      {
        id: 'b',
        label: 'Zkontroluji sledování zásilky v oficiální aplikaci dopravce.',
        isCorrect: true,
        feedback: 'Správně. Neotvírej platební odkaz ze SMS bez ověření.',
      },
      {
        id: 'c',
        label: 'Odpovím na SMS číslem karty a CVC kódem.',
        isCorrect: false,
        feedback: 'Údaje karty do SMS nikdy neposílej.',
      },
    ],
    learningPoint: 'Smishing (SMS phishing) často zneužívá doručování balíků a malé poplatky.',
  },
  {
    id: 'case-10',
    isPhishing: false,
    from: 'studijni@msmt.cz',
    subject: 'Informace k programu stipendijní podpory studentů',
    preview: 'Přehled podmínek a termínů na oficiálním webu MŠMT.',
    body: 'Dobrý den, zveřejnili jsme nové podmínky stipendijní podpory. Přehled je dostupný na oficiálním webu MŠMT:',
    link: {
      label: 'MŠMT - stipendijní podpora studentů',
      href: 'https://www.msmt.cz',
    },
    bodyAfterLink:
      'Registrace probíhá přes standardní školní administrativu, nikoli odesláním hesla nebo platebních údajů e-mailem.',
    options: [
      {
        id: 'a',
        label: 'Vyplním vše, stipendium nechci propást.',
        isCorrect: false,
        feedback: 'Žádost o citlivé údaje přes neoficiální odkaz je vysoce podezřelá.',
      },
      {
        id: 'b',
        label: 'Ověřím informaci přímo u třídního učitele nebo na oficiálním webu školy.',
        isCorrect: true,
        feedback: 'Správně. Citlivé osobní údaje nikdy neposílej bez ověření legitimity.',
      },
      {
        id: 'c',
        label: 'Pošlu jen část údajů, aby to nebylo úplně rizikové.',
        isCorrect: false,
        feedback: 'I část údajů lze zneužít. Bez ověření nic neposílej.',
      },
    ],
    learningPoint: 'Důvěryhodná zpráva má jasný účel, nevytváří paniku a nežádá citlivé údaje. Vždy pomůže ověření přes nezávislý oficiální kanál.',
  },
];
