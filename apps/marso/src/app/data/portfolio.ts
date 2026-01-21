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
    title: 'Motion design',
    description:
      'Identités animées, habillages de marques et assets modulables pour donner une signature claire à vos films.',
    projects: [
      {
        slug: 'motion-brs',
        title: 'BRS Identité Film',
        client: 'OFC STON',
        role: 'Direction motion & montage',
        year: '2025',
        location: 'Toulouse',
        type: 'Motion design 16:9',
        aspectRatio: '16:9',
        videoUrl: `${MEDIA_BASE_URL}tinyvid_optimized_2_BRS_V3.mp4`,
        tags: ['Motion design', 'Textures analogiques', 'Identité'],
        accent: '#f7c740',
        summary: 'Film explicatif d\'1 minute 30 afin d\'expliquer le dispositif BRS ( Bail Réel Solidaire)',
        context:
          "Dans le cadre d\'un nouveau dispositif immobilier national l\'entreprise OFS STON souhaitait expliquer de façon simple cette opportunité. C\'est un contenu à destination de Youtube et Instagram.",
        contributions: [
          'Storyboard et création des séquences animées',
          'Montage calé à la bande-son avec variations dynamiques',
          'Voix-Off, écriture, montage, dessins',
        ],
      },
      {
        slug: 'seminaire-upgrader',
        title: 'Séminaire Upgrader',
        client: 'TotalEnergies',
        role: 'Habillage motion & montage',
        year: '2024',
        location: 'Paris & Pau',
        type: 'Film événementiel',
        aspectRatio: '16:9',
        videoUrl: `${MEDIA_BASE_URL}tinyvid_optimized_4_Séminaire Upgraders.mp4`,
        tags: ['Event', 'Habillage motion', 'Typographies'],
        accent: '#8ecdd4',
        summary:
          'Il s\'agit d\'un teaser afin d\'annoncer un séminaire en duplex à Paris et Pau, afin de célébrer la communauté des UPGRADERs une communauté d\'entraide sur les outils Microsoft 365.',
        context:
          'Mission demandée dans le cadre de mon rôle de vidéaste pour TotalEnergies.',
        contributions: [
          'Montage des captations avec un ton punchy et moderne',
          'Exports optimisés pour diffusion mur LED et replay interne',
        ],
      },
      {
        slug: 'spot-publicinex-rodez',
        title: 'Spot Publicinex Rodez',
        client: 'Eclisse Promotion',
        role: 'Habillage motion & montage',
        year: '2026',
        location: 'Toulouse',
        type: 'Film publicitaire',
        aspectRatio: '16:9',
        videoUrl: `${MEDIA_BASE_URL}tinyvid_optimized_3_PUB V1.mp4`,
        tags: ['Event', 'Habillage motion', 'Typographies'],
        accent: '#8ecdd4',
        summary:
          'Promotion de nouveaux logements à Rodez, en partenariat avec Publicinex. Affichage en cinéma et MégaCGR',
        context:
          'Renouvellement de spot publicitaire pour un nouveau logement, qui invite les particuliers à se renseigner à l\'achat.',
        contributions: [
          'Ecriture, storyboard, motion design et montage, étalonnage',
          'Adaptation au format cinéma',
          'Utilisation d\'outils IA pour animer les perspectives',
        ],
      },
    ],
  },
  {
    title: 'Interviews professionnels',
    description:
      'Filmés sur vos sites ou en studio, ces entretiens donnent la parole aux dirigeants, experts et collaborateurs.',
    projects: [
      {
        slug: 'video-l-mattei',
        title: 'Vidéo L Mattei',
        client: 'ENEDIS',
        role: 'Montage interview & habillage',
        year: '2022',
        location: 'Albi',
        type: 'Interview corporate',
        aspectRatio: '16:9',
        videoUrl: `${MEDIA_BASE_URL}tinyvid_optimized_5_VIDEO_L MATTEI V3.mp4`,
        tags: ['Corporate', 'Interview', 'Habillage'],
        accent: '#f4c6a6',
        summary: 'Vidéo réalisée dans le cadre de la promotion d\'un dispotif d\'immersion inter-métier afin de découvrir les différents métiers d\'ENEDIS.',
        context:
          "Vidéo réalisée dans le cadre de ma mission de vidéaste chez ENEDIS.",
        contributions: [
          'Montage narratif avec alternance face-cam / B-roll',
          'Intégration de sous-titres et chapitrage animé',
          'Livraison des exports master + version LinkedIn',
        ],
      },
      {
        slug: 'fresque-climat',
        title: 'Fresque du Climat',
        client: 'Procivis SMCTP',
        role: 'Montage documentaire court',
        year: '2025',
        location: 'Rodez & Toulouse',
        type: 'Interview sensibilisation',
        aspectRatio: '16:9',
        videoUrl: `${MEDIA_BASE_URL}tinyvid_optimized_4_fresque_V6.mp4`,
        tags: ['Culture', 'Documentaire', 'Sensibilisation', 'Ecologie'],
        accent: '#c1ff72',
        summary: 'Mini-docu avec les parties prenantes engagées au sein de Procivis SMCTP.',
        context:
          'Vidéo réalisée pour promouvoir la fresque du climat auprès des collaborateurs de Procivis SMCTP à Toulouse et à Rodez.',
        contributions: [
          'Structuration du déroulé pédagogique',
          'Captation d\'image',
          'Interviews',
          'Montage',
          'Sous-titrage, étalonnage'
        ],
      },
      {
        slug: 'telepilotage',
        title: 'Télépilotage',
        client: 'AeroLab',
        role: 'Montage interview expert',
        year: '2024',
        location: 'Bordeaux',
        type: 'Interview pédagogique',
        aspectRatio: '16:9',
        videoUrl: `${MEDIA_BASE_URL}tinyvid_optimized_6_TélépilotageV3.mp4`,
        tags: ['Tech', 'Expert', 'Studio'],
        accent: '#8ecdd4',
        summary:
          'Vidéo pédagogique autour des protocoles de télépilotage dédiés aux industriels et services publics.',
        context:
          'Il fallait vulgariser un sujet complexe. J’ai mixé interview face-cam, schémas animés et extraits de vol captés en salle.',
        contributions: [
          'Montage multi-cam synchronisé',
          'Création de visuels motion simples pour les protocoles',
          'Version courte pour teaser l’épisode sur les réseaux',
        ],
      },
    ],
  },
  {
    title: 'Formats verticaux',
    description:
      'Reels, Shorts et TikTok pensés pour capter l’attention, optimisés pour les timelines mobiles.',
    projects: [
      {
        slug: 'vertical-respire',
        title: 'Respire',
        client: 'Respire',
        role: 'Montage vertical & sound design',
        year: '2023',
        location: 'Paris',
        type: 'Reel storytelling',
        aspectRatio: '9:16',
        videoUrl: `${MEDIA_BASE_URL}tinyvid_optimized_7_Respire_V3.mp4`,
        tags: ['Beauté', 'Slow motion', 'Vertical'],
        accent: '#f7c740',
        summary: 'Reel sensoriel pour dévoiler une capsule Respire en version verticale.',
        context:
          'Objectif : retranscrire les sensations en 30 secondes. J’ai alterné macros, typographies fines et un mix audio texturé.',
        contributions: [
          'Montage orienté rétention avec pattern interrupts',
          'Habillage typographique inspiré des packagings',
          'Exports en 9:16, 4:5 et 1:1',
        ],
      },
      {
        slug: 'vertical-ofs',
        title: 'OFS — Domaine Saint Germain',
        client: 'OFS Studio',
        role: 'Montage vertical & captions',
        year: '2022',
        location: 'Marseille',
        type: 'Capsule verticale',
        aspectRatio: '9:16',
        videoUrl: `${MEDIA_BASE_URL}tinyvid_optimized_1_ston-festival-ofs-studio.mp4`,
        tags: ['Culture', 'Vertical', 'Lifestyle'],
        accent: '#c1ff72',
        summary:
          'Capsule social présentant le domaine Saint Germain et le partenariat OFS autour de la création.',
        context:
          "Nous avons tourné en DV + iPhone pour garder un look brut. Le montage alterne séquences en marche et micro-interviews.",
        contributions: [
          'Montage vertical très cut avec effets VHS',
          'Sous-titres dynamiques adaptés aux stories',
          'Déclinaisons prêtes pour Ads Manager',
        ],
      },
      {
        slug: 'vertical-montbrun',
        title: 'Montbrun',
        client: 'Montbrun',
        role: 'Montage vertical & color grading',
        year: '2024',
        location: 'Occitanie',
        type: 'Social media',
        aspectRatio: '9:16',
        videoUrl: `${MEDIA_BASE_URL}tinyvid_optimized_2_Montbrun.mp4`,
        tags: ['Territoire', 'Couleurs chaudes', 'Stories'],
        accent: '#ff72aa',
        summary: 'Stories verticales pour mettre en avant la destination Montbrun.',
        context:
          'Le brief : décliner un moodboard plein air en vidéo. J’ai mixé captations drone, portrait et typographies manuscrites.',
        contributions: [
          'Montage rythmé sur la bande-son locale',
          'Colorimétrie chaude pour rappeler la pierre',
          'Pack de 5 variations verticales',
        ],
      },
      {
        slug: 'vertical-international-sante',
        title: 'International Santé',
        client: 'International Santé',
        role: 'Création contenu social & montage rapide',
        year: '2022',
        location: 'Toulouse',
        type: 'Reel interview',
        aspectRatio: '9:16',
        videoUrl: `${MEDIA_BASE_URL}tinyvid_optimized_3_international-sante-campagne-social.mp4`,
        tags: ['Santé', 'Acquisition', 'Sous-titres'],
        accent: '#8ecdd4',
        summary: 'Campagne d’acquisition LinkedIn / Instagram visant les expatriés santé.',
        context:
          'Nous avons alterné face-cam rassurants et accroches textuelles fortes pour améliorer le taux de complétion.',
        contributions: [
          'Montage vertical optimisé 30 secondes',
          'Sous-titres adaptatifs',
          'Kit motion pour décliner facilement les prochaines prises de parole',
        ],
      },
    ],
  },
  {
    title: 'After movie',
    description: 'Captations événementielles et films récap pensés pour prolonger l’énergie du live.',
    projects: [
      {
        slug: 'forum-2021',
        title: 'Forum 2021',
        client: 'Forum Entreprendre',
        role: 'Montage after movie',
        year: '2021',
        location: 'Toulouse',
        type: 'After movie 16:9',
        aspectRatio: '16:9',
        videoUrl: `${MEDIA_BASE_URL}tinyvid_optimized_1_tinyvid_optimized_1_FILMFORUMSV2.mp4`,
        tags: ['Event', 'After movie', 'Live'],
        accent: '#f7c740',
        summary: 'After movie énergique du Forum Entreprendre édition 2021.',
        context:
          'Objectif : livrer 48h après la fin de l’événement. J’ai créé un montage nerveux mêlant keynotes, workshops et réactions participants.',
        contributions: [
          'Derush express et sélection musicale dynamique',
          'Montage multi-cam synchronisé',
          'Exports master + teaser 30s pour réseaux',
        ],
      },
    ],
  },
  {
    title: 'Lab - Créations personnelles',
    description:
      'J’explore régulièrement de nouveaux styles via des projets non commandés. Ces vidéos ne sont pas réalisées pour les marques citées, mais s’inspirent de leurs univers visuels et narratifs.',
    projects: [
      {
        slug: 'lab-plk',
        title: 'PLK',
        client: 'Lab personnel',
        role: 'Montage expérimental',
        year: '2024',
        location: 'Paris',
        type: 'Reel expérimental',
        aspectRatio: '9:16',
        videoUrl: `${MEDIA_BASE_URL}tinyvid_optimized_4_capsule-club-plk-reel.mp4`,
        tags: ['Musique', 'Analog', 'Lab'],
        accent: '#ff72aa',
        summary: 'Exploration typographique inspirée des codes visuels de PLK.',
        context:
          'Exercice personnel pour tester des mélanges DV / textures scannées et glitch organique avant un brief client.',
        contributions: [
          'Montage vertical nerveux',
          'Création de textures 16mm scannées',
          'Sound design hybride',
        ],
      },
      {
        slug: 'lab-louis-vuitton',
        title: 'Louis Vuitton',
        client: 'Lab personnel',
        role: 'Film d’inspiration',
        year: '2023',
        location: 'Paris',
        type: 'Film luxe - format Instagram',
        aspectRatio: '9:16',
        videoUrl: `${MEDIA_BASE_URL}tinyvid_optimized_atelier-des-maitres-louis-vuitton.mp4`,
        tags: ['Luxe', 'Motion', 'Lab'],
        accent: '#f4c6a6',
        summary: 'Recherches d’habillage pour imaginer une campagne parfum Louis Vuitton.',
        context:
          'Permet d’expérimenter des transitions liquides, typographies serif et des palettes lumineuses.',
        contributions: [
          'Montage slow et respirations poétiques',
          'Développement de presets de colorimétrie',
          'Animation de titrages inspirés des flacons',
        ],
      },
      {
        slug: 'lab-istef',
        title: 'ISTEF',
        client: 'Lab personnel',
        role: 'Format social test',
        year: '2022',
        location: 'Toulouse',
        type: 'Capsule verticale',
        aspectRatio: '9:16',
        videoUrl: `${MEDIA_BASE_URL}tinyvid_optimized_2_pulse-campus-istef-campus.mp4`,
        tags: ['Education', 'Social', 'Prototype'],
        accent: '#c1ff72',
        summary:
          'Prototype de narration verticale pour attirer les étudiants sur les JPO ISTEF.',
        context: 'Test créatif mêlant hook typographique, transitions glitch et packshots campus.',
        contributions: [
          'Montage vertical modulable',
          'Création de templates réutilisables',
          'Livraison Figma + vidéo pour validation',
        ],
      },
      {
        slug: 'lab-effluve-nocturne',
        title: 'Episode 3 — Effluve nocturne',
        client: 'Lab personnel',
        role: 'Recherche narrative',
        year: '2023',
        location: 'Toulouse',
        type: 'Court expérimental',
        aspectRatio: '16:9',
        videoUrl: `${MEDIA_BASE_URL}tinyvid_optimized_2_BRS_V3.mp4`,
        tags: ['Expérimental', 'Narration', 'Textures'],
        accent: '#8ecdd4',
        summary: 'Exploration nocturne inspirée de films sensoriels et de la street photography.',
        context:
          'Objectif : tester de nouvelles manières de raconter sans voix off, uniquement via le rythme et le sound design.',
        contributions: [
          'Montage basé sur une structure musicale',
          'Mixage audio immersif',
          'Look colorimétrique glacial',
        ],
      },
      {
        slug: 'lab-making-off',
        title: 'Making off',
        client: 'Lab personnel',
        role: 'Montage making-of',
        year: '2021',
        location: 'Toulouse',
        type: 'Behind the scenes',
        aspectRatio: '16:9',
        videoUrl: `${MEDIA_BASE_URL}tinyvid_optimized_3_international-sante-campagne-social.mp4`,
        tags: ['BTS', 'Lab', 'Process'],
        accent: '#f7c740',
        summary: 'Making-of fictif pour documenter un tournage mode imaginé.',
        context:
          'Serve de sandbox pour tester titres manuscrits, split-screens et animations de rushs photo.',
        contributions: [
          'Montage alternant photos/vidéos',
          'Création de titres manuscrits animés',
          'Exports calibrés pour YouTube et IGTV',
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
