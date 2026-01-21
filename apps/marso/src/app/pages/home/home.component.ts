import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AutoplayOnVisibleDirective } from '../../directives/autoplay-on-visible.directive';
import {
  PORTFOLIO_PROJECTS,
  PORTFOLIO_SECTIONS,
  PortfolioProject,
  PortfolioSection,
} from '../../data/portfolio';
import { SeoService } from '../../services/seo.service';

const SITE_URL = 'https://marsolliervideo.fr';
const OG_IMAGE = `${SITE_URL}/assets/alexandre_marsollier_monteur_video.png`;
const HOME_FAQ = [
  {
    question: 'Quel délai prévoir avec Alexandre Marsollier pour un montage vidéo freelance ?',
    answer:
      'Entre 4 et 8 semaines selon la complexité (pré-production, tournage, post-production et livraison multi-formats).',
  },
  {
    question: 'Intervenez-vous avec des équipes basées à Toulouse ou à distance ?',
    answer:
      "Oui, je m'entoure de chefs opérateurs, compositeurs, sound designers et animateurs toulousains pour garantir un rendu cohérent, et je peux piloter le projet sur place ou à distance selon vos besoins.",
  },
  {
    question: 'Pouvez-vous intégrer des données produit ou techniques dans vos vidéos ?',
    answer:
      'Absolument. Mon background en motion design me permet de vulgariser des sujets complexes tout en conservant une direction artistique premium.',
  },
];
const COLLAPSIBLE_SECTIONS = [
  'projets',
  'a-propos',
  'monteur-video',
  'seo-snippet',
  'faq',
  'contact',
] as const;
type CollapsibleSection = (typeof COLLAPSIBLE_SECTIONS)[number];

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [CommonModule, AutoplayOnVisibleDirective, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  protected readonly portfolioSections: PortfolioSection[] = PORTFOLIO_SECTIONS;
  protected readonly portfolioProjects: PortfolioProject[] = PORTFOLIO_PROJECTS;
  protected readonly faqs = HOME_FAQ;
  protected portfolioAccordionState: Record<string, boolean> = this.portfolioSections.reduce(
    (state, section) => ({ ...state, [section.title]: false }),
    {} as Record<string, boolean>,
  );
  protected sectionState: Record<CollapsibleSection, boolean> = COLLAPSIBLE_SECTIONS.reduce(
    (state, section) => ({ ...state, [section]: false }),
    {} as Record<CollapsibleSection, boolean>,
  );

  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.updateTags({
      title: 'Alexandre Marsollier · Monteur vidéo, réalisateur & motion designer à Toulouse',
      description:
        'Alexandre Marsollier, monteur vidéo freelance et motion designer à Toulouse : montage premium, films de marque et contenus social media pour entreprises, startups et associations.',
      keywords: [
        'monteur vidéo',
        'monteur vidéo freelance',
        'monteur vidéo Toulouse',
        'motion designer Toulouse',
        'post production',
        'réalisateur freelance',
      ],
      canonicalUrl: `${SITE_URL}/`,
      openGraph: {
        type: 'website',
        url: `${SITE_URL}/`,
        image: {
          url: OG_IMAGE,
          alt: 'Alexandre Marsollier, monteur vidéo freelance à Toulouse',
        },
      },
      twitter: {
        card: 'summary_large_image',
        image: {
          url: OG_IMAGE,
          alt: 'Alexandre Marsollier, monteur vidéo freelance à Toulouse',
        },
      },
    });

    this.seo.setJsonLd('home-reels', this.buildVideoStructuredData());
    this.seo.setJsonLd('home-faq', this.buildFaqStructuredData());
  }

  ngOnDestroy(): void {
    this.seo.setJsonLd('home-reels', null);
    this.seo.setJsonLd('home-faq', null);
  }

  protected toggleSection(section: CollapsibleSection): void {
    this.sectionState = {
      ...this.sectionState,
      [section]: !this.sectionState[section],
    };
  }

  protected isSectionOpen(section: CollapsibleSection): boolean {
    return this.sectionState[section];
  }

  protected togglePortfolioSection(title: string): void {
    this.portfolioAccordionState = {
      ...this.portfolioAccordionState,
      [title]: !this.portfolioAccordionState[title],
    };
  }

  protected isPortfolioSectionOpen(title: string): boolean {
    return this.portfolioAccordionState[title];
  }

  protected get videoStructuredData(): string {
    return JSON.stringify(this.buildVideoStructuredData(), null, 2);
  }

  private buildVideoStructuredData() {
    return {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListOrder: 'https://schema.org/ItemListOrderAscending',
      itemListElement: this.portfolioProjects.map((reel, index) => ({
        '@type': 'VideoObject',
        position: index + 1,
        name: `${reel.title} — ${reel.client}`,
        description: reel.summary,
        uploadDate: `${reel.year}-01-01`,
        inLanguage: 'fr-FR',
        url: `${SITE_URL}/projets/${reel.slug}/`,
        contentUrl: reel.videoUrl,
        embedUrl: reel.videoUrl,
        thumbnailUrl: `${SITE_URL}/assets/alexandre_marsollier_monteur_video.png`,
        publisher: {
          '@type': 'Person',
          name: 'Alexandre Marsollier',
          jobTitle: 'Monteur vidéo et réalisateur',
          url: SITE_URL,
        },
        keywords: reel.tags.join(', '),
        genre: reel.tags,
      })),
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
}
