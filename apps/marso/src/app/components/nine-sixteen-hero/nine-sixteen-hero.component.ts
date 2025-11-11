import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReelProject } from '../../data/reel-projects';

@Component({
  selector: 'app-nine-sixteen-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nine-sixteen-hero.component.html',
  styleUrl: './nine-sixteen-hero.component.css',
})
export class NineSixteenHeroComponent {
  @Input() reel!: ReelProject;

  protected get videoSource(): string {
    return `assets/media/${this.reel.videoSrc}`;
  }
}
