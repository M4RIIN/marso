import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { PortfolioProject, getPortfolioProjectBySlug } from '../../data/portfolio';

const BASE_URL = 'https://m4riin.github.io/marso';

@Component({
  selector: 'app-reel-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './reel-detail.component.html',
  styleUrl: './reel-detail.component.css',
})
export class ReelDetailComponent {
  protected project?: PortfolioProject;
  protected videoSchema?: string;
  @ViewChild('detailVideo')
  protected set detailVideo(element: ElementRef<HTMLVideoElement> | undefined) {
    if (element) {
      this.playVideo(element.nativeElement);
    }
  }

  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  constructor() {
    this.route.paramMap.pipe(takeUntilDestroyed()).subscribe((params) => {
      const slug = params.get('slug');
      const project = slug ? getPortfolioProjectBySlug(slug) : undefined;

      if (!project) {
        void this.router.navigateByUrl('/');
        return;
      }

      this.project = project;
      this.videoSchema = this.buildVideoSchema(project);
    });
  }

  private playVideo(video: HTMLVideoElement): void {
    void video.play().catch(() => {
      /* Autoplay may be blocked; ignore */
    });
  }

  private buildVideoSchema(reel: PortfolioProject): string {
    return JSON.stringify(
      {
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
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
        genre: reel.tags,
        keywords: reel.tags.join(', '),
      },
      null,
      2,
    );
  }
}
