---
name: add-vyplnovka
description: "Use when the user invokes this skill or asks to add a Výplňovka from a website, app, game, or video link. Research the linked page, write a short Czech description, fetch a screenshot or video thumbnail, and add a filterable card to the Výplňovky page."
argument-hint: "URL aktivity nebo videa"
user-invocable: true
---

# Přidání výplňovky

Po zadání odkazu přidej novou kartu na web Otevřené informatiky. Nežádej uživatele o název ani popis, pokud je lze spolehlivě zjistit z cílové stránky nebo metadat videa.

## Postup

1. Zkontroluj, že už stejný odkaz na stránce není. Porovnávej normalizované URL; u videí YouTube porovnávej ID videa, i když se liší časový parametr nebo jiná část URL. Pokud už aktivita existuje, nic neduplikuj a sděl uživateli, kde ji našel.
2. Ověř obsah odkazu pouze pro čtení. Použij dostupný browser nebo načti veřejná metadata stránky. U YouTube zjisti název a kanál z metadat/oEmbed. Nevymýšlej si obsah, který se nepodařilo ověřit. Nezadávej údaje do formulářů, nepřihlašuj se, nic nestahuj ani nespouštěj kromě samotného náhledu obrázku.
3. Vytvoř stručný český název a jednu krátkou českou větu popisu. Popis má konkrétně říct, co aktivita nabízí; vycházej jen z ověřeného obsahu.
4. Vyber právě jednu existující kategorii:
   - `Interaktivní aplikace` — webové aplikace a interaktivní nástroje.
   - `Hry a kvízy` — hry, únikovky, hádanky a kvízy.
   - `Videa` — YouTube a jiná videa včetně pořadů.
5. Vytvoř unikátní `id` jako krátký kebab-case slug z názvu. Před přidáním zkontroluj, že `id` ještě není použitý.
6. Ulož náhled do `public/images/vyplnovky/`:
   - YouTube: použij thumbnail `https://i.ytimg.com/vi/<ID-videa>/hqdefault.jpg`. Z URL vytěž ID z `watch?v=`, `youtu.be/` nebo `/shorts/`.
   - Ostatní veřejné stránky: pořiď screenshot úvodní stránky, ideálně přes dostupný browser a ulož ho jako PNG. Pokud browser neumí snímek uložit do projektu, lze použít screenshot endpoint:
     `https://image.thum.io/get/width/1200/crop/675/wait/5/<URL-stránky>`
     Stáhni výsledek do `public/images/vyplnovky/<id>.png`. Je-li stránka za přihlášením, vyžaduje heslo nebo screenshot skončí na chybě, nic neobcházej; vysvětli překážku a požádej o veřejný odkaz nebo screenshot.
   - Screenshot endpointu předávej jen veřejnou URL bez přihlašovacích údajů, tokenů a citlivých parametrů. Tracking parametry můžeš pro screenshot vynechat, pokud nemění obsah stránky; URL karty ale zachovej podle uživatelova odkazu.
   - Obrázek stáhni přímo do projektu pomocí `curl`, například:

     ```sh
     curl -fLsS --max-time 30 'https://i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg' -o 'public/images/vyplnovky/unikatni-slug.jpg'
     curl -fLsS --max-time 90 'https://image.thum.io/get/width/1200/crop/675/wait/5/https://example.cz/' -o 'public/images/vyplnovky/unikatni-slug.png'
     ```

     URL a výstupní cestu vždy předej jako samostatné správně uvozené argumenty; nevkládej URL do shellového příkazu bez uvozovek.
   - Po stažení ověř, že soubor existuje, není prázdný ani načítací placeholder a jeho skutečný formát odpovídá příponě (`file <soubor>`). Když náhled nefunguje, zkus delší čekání nebo jiný podporovaný náhled. Nevytvářej kartu s nefunkčním obrázkem.
7. Přidej záznam na konec pole `vyplnovky` v `src/lib/vyplnovky.ts`. Zachovej stávající formát a pořadí vlastností:

   ```ts
   {
     id: 'unikatni-slug',
     title: 'Název aktivity',
     description: 'Jedna stručná věta v češtině.',
     category: 'Hry a kvízy',
     url: 'https://...',
     image: '/images/vyplnovky/unikatni-slug.png',
   },
   ```

   U YouTube thumbnailů použij příponu `.jpg`. Záznam musí mít právě jednu z kategorií definovaných v `activityCategories`. Kartu ani detailní podstránku nevytvářej — stránka se sestavuje z tohoto pole.
8. Spusť `npm run build`. Ověř, že build projde bez chyb a že se obrázek zkopíroval do `dist/images/vyplnovky/`. Při chybě ji oprav; pokud je blokující (například nedostupný odkaz), nahlas ji a nepředstírej dokončení.
9. Stručně uživateli potvrď název, kategorii, vytvořený popis a cestu k náhledu. Upozorni na případná omezení zdrojového webu.

## Pravidla

- Neupravuj ani nepřepisuj existující karty.
- Zachovej původní cílovou URL; stránka sama otevírá odkazy v novém panelu.
- Zachovej licenci a původ náhledu. Nepřidávej cizí screenshot jako vlastní tvorbu.
- Pokud nelze spolehlivě určit, co odkaz obsahuje, nebo vhodnou kategorii, zastav se a zeptej se místo odhadování.
