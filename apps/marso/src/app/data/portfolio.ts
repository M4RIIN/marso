const MEDIA_BASE_URL = 'https://m4riin.github.io/marso_media/';

export type AspectRatio = '9:16' | '16:9';

export interface PortfolioProject {
  slug: string;
  title: string;
  client: string;
  role: string;
  year: string;
  location: string;
  type: string;
  aspectRatio: AspectRatio;
  videoUrl: string;
  tags: string[];
  accent: string;
  summary: string;
  context: string;
  contributions: string[];
}

export interface PortfolioSection {
  title: string;
  description: string;
  projects: PortfolioProject[];
}

export const PORTFOLIO_SECTIONS: PortfolioSection[] = [
  {
    title: 'Formats verticaux social',
    description:
      'Formats Reels / TikTok pilotés de bout en bout : direction artistique, tournage agile, montage nerveux et workflow sous 72h.',
    projects: [
      {
        slug: 'capsule-club',
        title: 'Capsule Club',
        client: 'PLK',
        role: 'Direction montage & textures analogiques',
        year: '2024',
        location: 'Paris',
        type: 'Reel social',
        aspectRatio: '9:16',
        videoUrl: MEDIA_BASE_URL + 'tinyvid_optimized_4_capsule-club-plk-reel.mp4',
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
        slug: 'pulse-campus',
        title: 'Pulse Campus',
        client: 'ISTEF',
        role: 'Création contenu social & montage rapide',
        year: '2022',
        location: 'Toulouse',
        type: 'Social ads vertical',
        aspectRatio: '9:16',
        videoUrl: MEDIA_BASE_URL + 'tinyvid_optimized_2_pulse-campus-istef-campus.mp4',
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
        type: 'Reel interview',
        aspectRatio: '9:16',
        videoUrl: MEDIA_BASE_URL + 'tinyvid_optimized_3_international-sante-campagne-social.mp4',
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
    ],
  },
  {
    title: 'Films signature 16:9',
    description:
      'Documentaires de marque et films premium destinés au web, à YouTube et aux devices grand écran.',
    projects: [
      {
        slug: 'ston-festival',
        title: 'STON Festival',
        client: 'OFS Studio',
        role: 'Réalisateur & monteur documentaire',
        year: '2023',
        location: 'Marseille',
        type: 'Documentaire 16:9',
        aspectRatio: '16:9',
        videoUrl: `${MEDIA_BASE_URL}tinyvid_optimized_2_BRS_V3.mp4`,
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
        type: 'Film parfum',
        aspectRatio: '16:9',
        videoUrl: `${MEDIA_BASE_URL}tinyvid_optimized_7_Respire_V3.mp4`,
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
    ],
  },
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = PORTFOLIO_SECTIONS.flatMap(
  (section) => section.projects,
);

export const getPortfolioProjectBySlug = (slug: string): PortfolioProject | undefined =>
  PORTFOLIO_PROJECTS.find((project) => project.slug === slug);
