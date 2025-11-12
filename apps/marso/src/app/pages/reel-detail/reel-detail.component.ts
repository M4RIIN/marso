import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ReelProject, getReelBySlug } from '../../data/reel-projects';

const BASE_URL = 'https://m4riin.github.io/marso';

@Component({
  selector: 'app-reel-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './reel-detail.component.html',
  styleUrl: './reel-detail.component.css',
})
export class ReelDetailComponent {
  protected reel?: ReelProject;
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
      const project = slug ? getReelBySlug(slug) : undefined;

      if (!project) {
        void this.router.navigateByUrl('/');
        return;
      }

      this.reel = project;
      this.videoSchema = this.buildVideoSchema(project);
    });
  }

  private playVideo(video: HTMLVideoElement): void {
    void video.play().catch(() => {
      /* Autoplay may be blocked; ignore */
    });
  }

  private buildVideoSchema(reel: ReelProject): string {
    return JSON.stringify(
      {
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
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
        genre: reel.tags,
        keywords: reel.tags.join(', '),
      },
      null,
      2,
    );
  }
}
