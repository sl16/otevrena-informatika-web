export const activityCategories = ['Interaktivní aplikace', 'Hry a kvízy', 'Videa'] as const;

export type ActivityCategory = (typeof activityCategories)[number];

interface Activity {
  id: string;
  title: string;
  description: string;
  category: ActivityCategory;
  url: string;
  image: string;
}

export const vyplnovky: Activity[] = [
  {
    id: 'digitalni-unikovka',
    title: 'Digitální únikovka',
    description: 'Online únikovka s úkoly a hádankami, které můžete luštit samostatně i společně.',
    category: 'Hry a kvízy',
    url: 'https://studium.kvalitne.cz/unikovka/?utm_id=97757_v0_s00_e0_tv2_a1demonvcsmbpp',
    image: '/images/vyplnovky/digitalni-unikovka.png',
  },
  {
    id: 'pekelno-os',
    title: 'PekelnOS',
    description: 'Prozkoumej školní digitální svět a pusť se do interaktivních misí.',
    category: 'Interaktivní aplikace',
    url: 'https://os.peklo-edu.cz/',
    image: '/images/vyplnovky/peklo-os.png',
  },
  {
    id: 'peklo-digi2',
    title: 'Peklo 2',
    description: 'Další digitální únikovka plná úkolů a výzev.',
    category: 'Hry a kvízy',
    url: 'https://digi2.peklo-edu.cz/',
    image: '/images/vyplnovky/peklo-digi2.png',
  },
  {
    id: 'skribbl',
    title: 'Skribbl.io',
    description: 'Kresli a hádej slova s ostatními hráči v rychlé online hře.',
    category: 'Hry a kvízy',
    url: 'https://skribbl.io/',
    image: '/images/vyplnovky/skribbl.png',
  },
  {
    id: 'ai-odpad',
    title: 'Jak AI odpad zaplavil internet a rozbil to, čemu věříme',
    description: 'Video kanálu Segment o AI obsahu a důvěře v to, co potkáváme online.',
    category: 'Videa',
    url: 'https://www.youtube.com/watch?v=nEmTbcdTfrM&t',
    image: '/images/vyplnovky/ai-odpad.jpg',
  },
  {
    id: 'ai-mozek',
    title: 'Co dělá umělá inteligence s naším mozkem?',
    description: 'Video kanálu Segment o vlivu umělé inteligence na naše myšlení.',
    category: 'Videa',
    url: 'https://www.youtube.com/watch?v=kOWVJWMwKDo',
    image: '/images/vyplnovky/ai-mozek.jpg',
  },
  {
    id: 'brainrot',
    title: 'Nechal jsem si změřit mozek na brainrotu',
    description: 'Jirka vysvětluje, co je brainrot, a nechává si změřit jeho vliv.',
    category: 'Videa',
    url: 'https://www.youtube.com/watch?v=l7_Od29LJWQ',
    image: '/images/vyplnovky/brainrot.jpg',
  },
  {
    id: 'podvod-penez',
    title: 'Nabídli mi peníze, ale ve skutečnosti mě chtěli okrást',
    description: 'Příběh o podvodné nabídce a o tom, jak rozpoznat pokus o okradení.',
    category: 'Videa',
    url: 'https://www.youtube.com/watch?v=auGnJQY7J-U',
    image: '/images/vyplnovky/podvod-penez.jpg',
  },
  {
    id: 'vydirani-fotky',
    title: 'Vydírání kvůli nahým fotkám',
    description: 'Video o online vydírání a rizicích sdílení intimních fotografií.',
    category: 'Videa',
    url: 'https://www.youtube.com/watch?v=lClAdoTMwA8',
    image: '/images/vyplnovky/vydirani-fotky.jpg',
  },
  {
    id: 'podvod-policie',
    title: 'Podvodníci, kteří se vydávají za Policii',
    description: 'Jak fungují podvodné telefonáty od falešných policistů a jak na ně reagovat.',
    category: 'Videa',
    url: 'https://www.youtube.com/watch?v=rB0x09uAyyE',
    image: '/images/vyplnovky/podvod-policie.jpg',
  },
  {
    id: 'vsechno-2024',
    title: 'Všechno, co se stalo v roce 2024',
    description: 'Přehled událostí roku 2024 v pořadu České televize.',
    category: 'Videa',
    url: 'https://www.ceskatelevize.cz/porady/16771478732-vsechno-co-se-stalo-v-roce-2024/',
    image: '/images/vyplnovky/vsechno-2024.png',
  },
  {
    id: 'vsechno-2025',
    title: 'Všechno, co se stalo v roce 2025',
    description: 'Přehled událostí roku 2025 v pořadu České televize.',
    category: 'Videa',
    url: 'https://www.ceskatelevize.cz/porady/17362514026-vsechno-co-se-stalo-v-roce-2025/',
    image: '/images/vyplnovky/vsechno-2025.png',
  },
];
