import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnDestroy, ViewChild, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { PortfolioProject, getPortfolioProjectBySlug } from '../../data/portfolio';
import { SeoService } from '../../services/seo.service';

const SITE_URL = 'https://marsolliervideo.fr';
const OG_IMAGE = `${SITE_URL}/assets/alexandre_marsollier_monteur_video.png`;

@Component({
  selector: 'app-reel-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './reel-detail.component.html',
  styleUrl: './reel-detail.component.css',
})
export class ReelDetailComponent implements OnDestroy {
  protected project?: PortfolioProject;
  @ViewChild('detailVideo')
  protected set detailVideo(element: ElementRef<HTMLVideoElement> | undefined) {
    if (element) {
      this.playVideo(element.nativeElement);
    }
  }

  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly seo = inject(SeoService);

  constructor() {
    this.route.paramMap.pipe(takeUntilDestroyed()).subscribe((params) => {
      const slug = params.get('slug');
      const project = slug ? getPortfolioProjectBySlug(slug) : undefined;

      if (!project) {
        this.seo.setJsonLd('reel-detail', null);
        void this.router.navigateByUrl('/');
        return;
      }

      this.project = project;
      const projectUrl = `${SITE_URL}/projets/${project.slug}`;
      const title = `${project.title} — ${project.client} | Alexandre Marsollier`;

      this.seo.updateTags({
        title,
        description: project.summary,
        keywords: project.tags,
        canonicalUrl: projectUrl,
        openGraph: {
          type: 'video.other',
          url: projectUrl,
          description: project.summary,
          image: {
            url: OG_IMAGE,
            alt: `${project.title} — ${project.client}`,
          },
        },
        twitter: {
          card: 'summary_large_image',
          description: project.summary,
          image: {
            url: OG_IMAGE,
            alt: `${project.title} — ${project.client}`,
          },
        },
      });

      this.seo.setJsonLd('reel-detail', this.buildVideoSchema(project, projectUrl));
    });
  }

  private playVideo(video: HTMLVideoElement): void {
    void video.play().catch(() => {
      /* Autoplay may be blocked; ignore */
    });
  }

  private buildVideoSchema(reel: PortfolioProject, url: string) {
    return {
      '@context': 'https://schema.org',
      '@type': 'VideoObject',
      name: `${reel.title} — ${reel.client}`,
      description: reel.summary,
      uploadDate: `${reel.year}-01-01`,
      inLanguage: 'fr-FR',
      url,
      contentUrl: reel.videoUrl,
      embedUrl: reel.videoUrl,
      thumbnailUrl: OG_IMAGE,
      publisher: {
        '@type': 'Person',
        name: 'Alexandre Marsollier',
        jobTitle: 'Monteur vidéo et réalisateur',
        url: SITE_URL,
      },
      genre: reel.tags,
      keywords: reel.tags.join(', '),
    };
  }

  ngOnDestroy(): void {
    this.seo.setJsonLd('reel-detail', null);
  }
}
