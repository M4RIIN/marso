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
        client: 'BRS',
        role: 'Direction motion & montage',
        year: '2024',
        location: 'Toulouse',
        type: 'Motion design 16:9',
        aspectRatio: '16:9',
        videoUrl: `${MEDIA_BASE_URL}tinyvid_optimized_2_BRS_V3.mp4`,
        tags: ['Motion design', 'Textures analogiques', 'Identité'],
        accent: '#f7c740',
        summary: 'Film motion pour révéler la matière et les motifs signature de la marque BRS.',
        context:
          "BRS souhaitait un pré-roll immersif à projeter en ouverture de séminaire. J'ai mêlé textures scannées, typographie cinétique et découpes rythmiques.",
        contributions: [
          'Storyboard et création des séquences animées',
          'Montage calé à la bande-son avec variations dynamiques',
          'Livraison des déclinaisons 16:9 et 4:5 prêtes à diffuser',
        ],
      },
      {
        slug: 'seminaire-upgrader',
        title: 'Séminaire Upgrader',
        client: 'Upgrader',
        role: 'Habillage motion & montage',
        year: '2023',
        location: 'Paris',
        type: 'Film événementiel',
        aspectRatio: '16:9',
        videoUrl: `${MEDIA_BASE_URL}tinyvid_optimized_4_Séminaire Upgraders.mp4`,
        tags: ['Event', 'Habillage motion', 'Typographies'],
        accent: '#8ecdd4',
        summary:
          'Habillage vidéo pour un séminaire interne avec inserts typographiques et transitions inspirées de l’identité digitale.',
        context:
          'L’équipe communication Upgrader voulait rythmer ses sessions plénières. J’ai proposé un montage hybride mêlant captations et modules motion pour introduire chaque intervenant.',
        contributions: [
          'Création des bumpers et lower-thirds animés',
          'Montage des captations avec un ton punchy et moderne',
          'Exports optimisés pour diffusion mur LED et replay interne',
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
        client: 'L. Mattei',
        role: 'Montage interview & habillage',
        year: '2024',
        location: 'Toulouse',
        type: 'Interview corporate',
        aspectRatio: '16:9',
        videoUrl: `${MEDIA_BASE_URL}tinyvid_optimized_5_VIDEO_L MATTEI V3.mp4`,
        tags: ['Corporate', 'Interview', 'Habillage'],
        accent: '#f4c6a6',
        summary: 'Portrait vidéo pour valoriser l’expertise et le parcours de L. Mattei.',
        context:
          "J'ai accompagné la direction communication pour structurer un récit clair : captation, micro-trottoir interne et motion graphique pour les chiffres clés.",
        contributions: [
          'Montage narratif avec alternance face-cam / B-roll',
          'Intégration de sous-titres et chapitrage animé',
          'Livraison des exports master + version LinkedIn',
        ],
      },
      {
        slug: 'fresque-v6',
        title: 'Fresque V6',
        client: 'Fresque V6',
        role: 'Montage documentaire court',
        year: '2023',
        location: 'Lyon',
        type: 'Interview sensible',
        aspectRatio: '16:9',
        videoUrl: `${MEDIA_BASE_URL}tinyvid_optimized_4_fresque_V6.mp4`,
        tags: ['Culture', 'Documentaire', 'Slow motion'],
        accent: '#c1ff72',
        summary: 'Mini-docu aux côtés des artistes qui façonnent la fresque V6.',
        context:
          'Le collectif voulait témoigner des étapes de création auprès de mécènes. Nous avons alterné interviews et capsules motion retraçant les intentions.',
        contributions: [
          'Structuration du déroulé pédagogique',
          'Montage avec effets split-screen pour rythmer les témoignages',
          'Sound design discret pour soutenir la narration',
        ],
      },
      {
        slug: 'interview-ecologie',
        title: 'Interview Écologie',
        client: 'Initiative Climat',
        role: 'Montage & sous-titres multilingues',
        year: '2022',
        location: 'Montpellier',
        type: 'Interview double cadre',
        aspectRatio: '9:16',
        videoUrl: `${MEDIA_BASE_URL}tinyvid_optimized_3_international-sante-campagne-social.mp4`,
        tags: ['Écologie', 'Interviews', 'Sous-titres'],
        accent: '#ff72aa',
        summary: 'Conversation croisée entre experts climat et industriels.',
        context:
          "La mission : rendre accessible un échange dense. J'ai favorisé une structure en chapitres avec des intertitres animés et des incrustations data.",
        contributions: [
          'Montage bidirectionnel avec coupe dans l’axe',
          'Sous-titres FR/EN synchronisés',
          'Livraison d’un kit réseaux sociaux pour extraire des clips',
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
        videoUrl: `${MEDIA_BASE_URL}tinyvid_optimized_4_capsule-club-plk-reel.mp4`,
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
      {
        slug: 'forum-producteur-occitanie',
        title: 'Forum grand producteur Occitanie',
        client: 'Occitanie Prod',
        role: 'Montage & habillage',
        year: '2022',
        location: 'Montpellier',
        type: 'After movie 9:16',
        aspectRatio: '9:16',
        videoUrl: `${MEDIA_BASE_URL}tinyvid_optimized_7_Respire_V3.mp4`,
        tags: ['Territoire', 'After movie', 'Networking'],
        accent: '#c1ff72',
        summary:
          'Film récap valorisant les rencontres entre producteurs, institutionnels et talents créatifs.',
        context:
          'Nous avons mis l’accent sur les moments off et les interviews courtes pour donner envie de rejoindre la prochaine édition.',
        contributions: [
          'Montage 16:9 + déclinaison vertical stories',
          'Habillage graphique inspiré de l’affiche officielle',
          'Gestion des exports pour diffusion écran géant',
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
        type: 'Film luxe 16:9',
        aspectRatio: '16:9',
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
