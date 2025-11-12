import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AutoplayOnVisibleDirective } from '../../directives/autoplay-on-visible.directive';
import { REEL_PROJECTS, ReelProject } from '../../data/reel-projects';

const BASE_URL = 'https://m4riin.github.io/marso';

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [CommonModule, AutoplayOnVisibleDirective, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  protected readonly reels: ReelProject[] = REEL_PROJECTS;
  protected readonly videoStructuredData = JSON.stringify(
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListOrder: 'https://schema.org/ItemListOrderAscending',
      itemListElement: this.reels.map((reel, index) => ({
        '@type': 'VideoObject',
        position: index + 1,
        name: `${reel.title} — ${reel.client}`,
        description: reel.summary,
        uploadDate: `${reel.year}-01-01`,
        inLanguage: 'fr-FR',
        url: `${BASE_URL}/projets/${reel.slug}/`,
        contentUrl: `${BASE_URL}/assets/media/${reel.videoSrc}`,
        embedUrl: `${BASE_URL}/assets/media/${reel.videoSrc}`,
        thumbnailUrl: `${BASE_URL}/og-cover.jpg`,
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
