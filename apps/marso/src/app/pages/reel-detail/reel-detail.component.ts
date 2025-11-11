import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ReelProject, getReelBySlug } from '../../data/reel-projects';

@Component({
  selector: 'app-reel-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './reel-detail.component.html',
  styleUrl: './reel-detail.component.css',
})
export class ReelDetailComponent {
  protected reel?: ReelProject;
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
    });
  }

  private playVideo(video: HTMLVideoElement): void {
    void video.play().catch(() => {
      /* Autoplay may be blocked; ignore */
    });
  }
}
