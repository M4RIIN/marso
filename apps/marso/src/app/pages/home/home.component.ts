import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AutoplayOnVisibleDirective } from '../../directives/autoplay-on-visible.directive';
import {
  PORTFOLIO_PROJECTS,
  PORTFOLIO_SECTIONS,
  PortfolioProject,
  PortfolioSection,
} from '../../data/portfolio';

const BASE_URL = 'https://m4riin.github.io/marso';

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [CommonModule, AutoplayOnVisibleDirective, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  protected readonly portfolioSections: PortfolioSection[] = PORTFOLIO_SECTIONS;
  protected readonly portfolioProjects: PortfolioProject[] = PORTFOLIO_PROJECTS;
  protected readonly videoStructuredData = JSON.stringify(
    {
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
        url: `${BASE_URL}/projets/${reel.slug}/`,
        contentUrl: reel.videoUrl,
        embedUrl: reel.videoUrl,
        thumbnailUrl: `${BASE_URL}/og-cover.png`,
        publisher: {
          '@type': 'Person',
          name: 'Alexandre Marsollier',
          jobTitle: 'Monteur vidéo et réalisateur',
          url: BASE_URL,
        },
        keywords: reel.tags.join(', '),
        genre: reel.tags,
      })),
    },
    null,
    2,
  );
}
