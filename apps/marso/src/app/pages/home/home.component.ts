import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AutoplayOnVisibleDirective } from '../../directives/autoplay-on-visible.directive';
import { REEL_PROJECTS, ReelProject } from '../../data/reel-projects';

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [CommonModule, AutoplayOnVisibleDirective, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  protected readonly reels: ReelProject[] = REEL_PROJECTS;
}
