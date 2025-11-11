export interface ReelProject {
  slug: string;
  title: string;
  client: string;
  role: string;
  year: string;
  location: string;
  format: string;
  videoSrc: string;
  tags: string[];
  accent: string;
  summary: string;
  context: string;
  contributions: string[];
}

export const REEL_PROJECTS: ReelProject[] = [
  {
    slug: 'capsule-club',
    title: 'Capsule Club',
    client: 'PLK',
    role: 'Direction montage & textures analogiques',
    year: '2024',
    location: 'Paris',
    format: 'Reel 9:16',
    videoSrc: 'PLK.mp4',
    tags: ['Musique', 'Grain 16mm', 'Cut nerveux'],
    accent: '#f7c740',
    summary:
      'Reel Instagram pour PLK mélangeant images studio et textures analogiques afin de promouvoir la capsule merch.',
    context:
      "Le management de PLK cherchait un format social premium pour accompagner la sortie d'une capsule limitée. J'ai proposé un montage hybride mêlant tournage RED Komodo, scans Super 8 et typographies animées pour dynamiser la prise de parole.",
    contributions: [
      'Direction artistique motion et création des textures film 16mm scannées',
      'Montage nerveux pensé pour maximiser la rétention sur Reels et TikTok',
      'Colorimétrie chaude pour renforcer l’ADN street-luxe de la marque',
    ],
  },
  {
    slug: 'ston-festival',
    title: 'STON Festival',
    client: 'OFS Studio',
    role: 'Réalisateur & monteur documentaire',
    year: '2023',
    location: 'Marseille',
    format: 'Reel 9:16',
    videoSrc: 'REEL_OFS_ston.mp4',
    tags: ['Culture', 'Super 8', 'Color grading teal'],
    accent: '#8ecdd4',
    summary:
      'Journal visuel tourné au STON Festival avec un mix Super 8 et DV pour capturer l’énergie des crews graffiti.',
    context:
      "Le studio OFS souhaitait documenter la scène graffiti méditerranéenne sous un angle cinématographique. J'ai imaginé une narration sensorielle alternant interviews, captations live et textures analogiques pour un rendu immersif.",
    contributions: [
      'Ecriture de la narration et supervision du tournage multi-formats',
      'Montage documentaire court pensé pour Instagram / YouTube Shorts',
      'Sound design organique à partir de samples enregistrés sur site',
    ],
  },
  {
    slug: 'atelier-des-maitres',
    title: 'Atelier des Maîtres',
    client: 'Louis Vuitton',
    role: 'Montage narratif & motion typographique',
    year: '2023',
    location: 'Paris',
    format: 'Reel 9:16',
    videoSrc: 'Reel_Louis_Vuitton.mp4',
    tags: ['Luxe', 'Film parfum', 'Slow motion'],
    accent: '#f4c6a6',
    summary:
      'Film parfum intimiste pour Louis Vuitton mettant en avant les gestes des maîtres artisans et la matière.',
    context:
      'Le département parfum de Louis Vuitton souhaitait un contenu vertical pour présenter une édition limitée. Nous avons mis l’accent sur la sensualité des matières, des macros et un motion typographique élégant.',
    contributions: [
      'Montage narratif en slow motion avec transitions à base de textures liquides',
      'Création d’un système typographique animé inspiré des flacons historiques',
      'Supervision du grade final pour assurer la cohérence multi-supports',
    ],
  },
  {
    slug: 'pulse-campus',
    title: 'Pulse Campus',
    client: 'ISTEF',
    role: 'Création contenu social & montage rapide',
    year: '2022',
    location: 'Toulouse',
    format: 'Reel 9:16',
    videoSrc: 'Reel_istef.mp4',
    tags: ['Éducation', 'Social ads', 'Cadres dynamiques'],
    accent: '#c1ff72',
    summary:
      'Mini film de lancement pour le campus Pulse, destiné à attirer les nouvelles promos digitales.',
    context:
      "ISTEF avait besoin d'un format social ads agile pour présenter Pulse Campus auprès des lycéens. J'ai conçu un langage graphique pop, rythmé par des typographies cinétiques et un montage très cut.",
    contributions: [
      'Storyboard et tournage complémentaire pour enrichir les rushs existants',
      'Montage ultra-rapide synchronisé au beat pour TikTok/Instagram',
      'Packaging final avec sous-titres multilingues et exports prêts-paid',
    ],
  },
  {
    slug: 'international-sante',
    title: 'International Santé',
    client: 'International Santé',
    role: 'Création contenu social & montage rapide',
    year: '2022',
    location: 'Toulouse',
    format: 'Reel 9:16',
    videoSrc: 'REEL_vide_o_1.mp4',
    tags: ['Santé', 'Social ads', 'Promotion'],
    accent: '#ff72aa',
    summary:
      "Campagne d'acquisition pour une plateforme santé, pensée pour LinkedIn et Instagram avec un ton positif.",
    context:
      "International Santé devait rassurer sur son expérience d'accompagnement expatrié. Nous avons opté pour un montage témoignage entrecoupé de typographies cinétiques.",
    contributions: [
      'Pilotage du tournage interview + B-roll lifestyle',
      'Montage rapide avec alternance de formats sous-titrés / plein écran',
      'Création des gabarits motion afin de décliner la campagne sur plusieurs marchés',
    ],
  },
];

export const getReelBySlug = (slug: string): ReelProject | undefined =>
  REEL_PROJECTS.find((project) => project.slug === slug);
