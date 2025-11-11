import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ReelProject, getReelBySlug } from '../../data/reel-projects';
import { NineSixteenHeroComponent } from '../../components/nine-sixteen-hero/nine-sixteen-hero.component';

@Component({
  selector: 'app-reel-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, NineSixteenHeroComponent],
  templateUrl: './reel-detail.component.html',
  styleUrl: './reel-detail.component.css',
})
export class ReelDetailComponent {
  protected reel?: ReelProject;

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
}
