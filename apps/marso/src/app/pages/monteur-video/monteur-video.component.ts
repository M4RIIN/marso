import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PortfolioProject, getPortfolioProjectBySlug } from '../../data/portfolio';
import { SeoService } from '../../services/seo.service';

const SITE_URL = 'https://marsolliervideo.fr';
const MONTEUR_URL = `${SITE_URL}/monteur-video`;
const OG_IMAGE = `${SITE_URL}/assets/alexandre_marsollier_monteur_video.png`;
const FEATURED_PROJECT_SLUGS = [
  'motion-brs',
  'seminaire-upgrader',
  'fresque-climat',
  'vertical-international-sante',
] as const;

interface MethodStep {
  title: string;
  detail: string;
}

interface Faq {
  question: string;
  answer: string;
}

interface TextCard {
  title: string;
  detail: string;
}

interface OfferCard extends TextCard {
  items: string[];
}

interface ProofPoint {
  value: string;
  label: string;
}

@Component({
  selector: 'app-monteur-video',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './monteur-video.component.html',
})
export class MonteurVideoComponent implements OnInit, OnDestroy {
  protected readonly heroParagraphs = [
    "Je suis Alexandre Marsollier, monteur vidéo freelance et motion designer. J'accompagne les entreprises, indépendants et associations qui veulent transformer leurs rushs en vidéos claires, rythmées et prêtes à diffuser.",
    "Basé à Toulouse, je travaille aussi à distance partout en France : brief, dérushage, montage, habillage, sous-titrage, corrections et exports adaptés à YouTube, LinkedIn, Instagram, TikTok ou à vos événements.",
  ];

  protected readonly proofPoints: ProofPoint[] = [
    {
      value: '16:9 · 9:16 · 1:1',
      label: 'Exports web, réseaux sociaux, écrans événementiels et campagnes payantes',
    },
    {
      value: 'Premiere Pro · After Effects · Resolve',
      label: 'Montage vidéo, motion design, mixage, étalonnage et habillage',
    },
    {
      value: 'Toulouse + remote',
      label: 'Missions locales en Occitanie et collaboration à distance en France',
    },
  ];

  protected readonly prestations = [
    'Montage vidéo corporate et film de marque',
    'Interviews, témoignages clients et micro-trottoirs',
    'Vidéos événementielles, aftermovies et récap live',
    'Capsules social media : Reels, Shorts, TikTok, LinkedIn',
    'Sous-titres, habillage motion et déclinaisons multi-format',
    'Nettoyage audio, colorimétrie et exports prêts à publier',
  ];

  protected readonly serviceUseCases: TextCard[] = [
    {
      title: 'Monteur vidéo pour entreprise',
      detail:
        "Structuration d'un message clair pour vos films corporate, vidéos RH, contenus internes, présentations produit ou campagnes de marque.",
    },
    {
      title: 'Montage social media',
      detail:
        "Formats courts pensés pour la rétention : accroche rapide, rythme serré, sous-titres lisibles, versions verticales et déclinaisons par plateforme.",
    },
    {
      title: 'Post-production complète',
      detail:
        "Dérushage, narration, habillage graphique, mixage, étalonnage, corrections client et livraison organisée dans un dossier propre.",
    },
  ];

  protected readonly deliverables = [
    'Master 4K ou Full HD selon les rushs disponibles',
    'Versions 16:9, 9:16, 4:5 ou 1:1 pour YouTube, LinkedIn, Instagram, TikTok et Meta Ads',
    'Sous-titres incrustés ou fichier SRT séparé',
    'Miniatures, titrages animés et éléments motion simples',
    'Exports compressés pour validation et fichiers finaux prêts à diffuser',
  ];

  protected readonly packageOffers: OfferCard[] = [
    {
      title: 'Montage express social media',
      detail:
        "Pour transformer des rushs courts en capsules verticales ou carrées publiables rapidement.",
      items: ['Dérushage', 'Montage rythmé', 'Sous-titres', 'Export 9:16 et 1:1'],
    },
    {
      title: 'Film entreprise ou interview',
      detail:
        "Pour construire une vidéo professionnelle autour d'un message, d'un expert, d'un événement ou d'une offre.",
      items: ['Structure narrative', 'Habillage', 'Mixage audio', 'Corrections client'],
    },
    {
      title: 'Post-production complète',
      detail:
        "Pour les projets qui demandent un accompagnement plus cadré, du brief aux livrables finaux multi-formats.",
      items: ['Plan de montage', 'Motion design', 'Étalonnage', 'Pack de déclinaisons'],
    },
  ];

  protected readonly methodSteps: MethodStep[] = [
    {
      title: '1 - Kick-off & intention',
      detail:
        'Brief, objectifs, références visuelles et plan d’action (rendez-vous à Toulouse ou en visio).',
    },
    {
      title: '2 - Assemblage & rythme',
      detail:
        'Pré-montage narratif, choix du ton, première version commentée pour valider le storytelling.',
    },
    {
      title: '3 - Habillage & corrections',
      detail:
        'Titres animés, mixage audio, colorimétrie et ajustements supervisés jusqu’à validation.',
    },
    {
      title: '4 - Livraison & optimisation',
      detail:
        'Exports master + déclinaisons réseaux (16:9 / 9:16 / 1:1) et fichiers prêts à diffuser.',
    },
  ];

  protected readonly skills = [
    'Montage et mixage : Adobe Premiere Pro',
    'Animation & habillage : After Effects',
    'Étalonnage : DaVinci Resolve',
  ];

  protected readonly skillsSummary =
    'Je prends en charge l’ensemble de la post-production : structure, rythme, animation, son et exports calibrés selon vos plateformes.';

  protected readonly faqs: Faq[] = [
    {
      question: 'Pourquoi choisir un monteur vidéo freelance plutôt qu’une agence ?',
      answer:
        "Un monteur vidéo freelance permet souvent un échange plus direct, des délais plus souples et un suivi précis du montage. Vous gardez un interlocuteur unique pour le brief, les retours et les exports.",
    },
    {
      question: 'Quel budget prévoir pour un montage vidéo freelance ?',
      answer:
        "Le tarif dépend de la durée des rushs, du niveau d'habillage, du nombre de versions et des délais. Je chiffre chaque mission après avoir vu les objectifs, les formats attendus et le volume de corrections.",
    },
    {
      question: 'Êtes-vous disponible en présentiel ?',
      answer:
        'Oui. Basé à Toulouse, je peux rejoindre votre salle de montage ou organiser une session supervisée. Les missions hybrides sont possibles en Occitanie et je travaille aussi à distance partout en France.',
    },
    {
      question: 'Quels logiciels utilisez-vous pour le montage vidéo ?',
      answer:
        'Premiere Pro pour le montage, After Effects pour les animations, DaVinci Resolve pour l’étalonnage. Les projets sont livrés avec timelines propres, exports calibrés et dossier organisé.',
    },
    {
      question: 'Pouvez-vous monter des vidéos pour YouTube, LinkedIn, Instagram ou TikTok ?',
      answer:
        "Oui. Je prépare les formats horizontaux, verticaux et carrés avec sous-titres, accroches visuelles, rythme adapté et exports optimisés pour chaque plateforme.",
    },
    {
      question: 'Comment se passe une mission via Malt ?',
      answer:
        'Mon profil Malt est vérifié, ce qui garantit contrat, paiement et assurance. Nous pouvons démarrer en 48h avec acompte et planification claire.',
    },
  ];

  protected readonly featuredProjects: PortfolioProject[] = FEATURED_PROJECT_SLUGS
    .map((slug) => getPortfolioProjectBySlug(slug))
    .filter((project): project is PortfolioProject => Boolean(project));

  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.updateTags({
      title: 'Monteur vidéo freelance | Montage vidéo professionnel - Alexandre Marsollier',
      description:
        'Monteur vidéo freelance basé à Toulouse : montage corporate, social media, interviews, motion design et exports multi-formats pour entreprises partout en France.',
      keywords: [
        'monteur vidéo',
        'monteur vidéo freelance',
        'monteur vidéo Toulouse',
        'freelance montage vidéo',
        'montage vidéo professionnel',
        'monteur vidéo entreprise',
        'post-production vidéo',
        'motion design',
        'motion designer',
      ],
      canonicalUrl: MONTEUR_URL,
      openGraph: {
        type: 'website',
        title: 'Monteur vidéo freelance - Alexandre Marsollier',
        description:
          'Montage vidéo professionnel, social media, interviews, film de marque et post-production complète à Toulouse ou à distance.',
        url: MONTEUR_URL,
        image: {
          url: OG_IMAGE,
          alt: 'Alexandre Marsollier, monteur vidéo freelance',
        },
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Monteur vidéo freelance - Alexandre Marsollier',
        description:
          'Montage vidéo professionnel, social media, interviews, film de marque et post-production complète à Toulouse ou à distance.',
        image: {
          url: OG_IMAGE,
          alt: 'Alexandre Marsollier, monteur vidéo freelance',
        },
      },
    });

    this.seo.setJsonLd('monteur-service', this.buildServiceStructuredData());
    this.seo.setJsonLd('monteur-faq', this.buildFaqStructuredData());
    this.seo.setJsonLd('monteur-breadcrumb', this.buildBreadcrumbStructuredData());
  }

  ngOnDestroy(): void {
    this.seo.setJsonLd('monteur-service', null);
    this.seo.setJsonLd('monteur-faq', null);
    this.seo.setJsonLd('monteur-breadcrumb', null);
  }

  private buildServiceStructuredData() {
    const serviceItems = [
      ...this.prestations,
      ...this.packageOffers.map((offer) => offer.title),
    ];

    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${MONTEUR_URL}#service`,
      name: 'Monteur vidéo freelance',
      alternateName: [
        'Freelance montage vidéo',
        'Montage vidéo professionnel',
        'Post-production vidéo freelance',
      ],
      description:
        'Service de montage vidéo freelance pour entreprises, indépendants et associations : montage corporate, social media, interviews, motion design, sous-titres, étalonnage et exports multi-formats.',
      serviceType: [
        'Montage vidéo',
        'Post-production vidéo',
        'Motion design',
        'Montage social media',
      ],
      provider: {
        '@type': 'Person',
        '@id': `${SITE_URL}/#alexandre-marsollier`,
        name: 'Alexandre Marsollier',
        jobTitle: 'Monteur vidéo freelance et motion designer',
        url: SITE_URL,
        sameAs: [
          'https://www.instagram.com/marsoalexx',
          'https://www.linkedin.com/in/alexandre-marsollier-a70393132',
          'https://www.malt.fr/profile/alexandremarsollier',
        ],
      },
      areaServed: [
        {
          '@type': 'City',
          name: 'Toulouse',
        },
        {
          '@type': 'AdministrativeArea',
          name: 'Occitanie',
        },
        {
          '@type': 'Country',
          name: 'France',
        },
      ],
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: MONTEUR_URL,
      },
      audience: {
        '@type': 'Audience',
        audienceType: 'Entreprises, associations, indépendants et créateurs de contenu',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Prestations de montage vidéo freelance',
        itemListElement: serviceItems.map((item) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: item,
          },
        })),
      },
    };
  }

  private buildFaqStructuredData() {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: this.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    };
  }

  private buildBreadcrumbStructuredData() {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Accueil',
          item: `${SITE_URL}/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Monteur vidéo freelance',
          item: MONTEUR_URL,
        },
      ],
    };
  }
}
