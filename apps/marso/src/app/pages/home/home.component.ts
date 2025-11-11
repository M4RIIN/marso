import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AutoplayOnVisibleDirective } from '../../directives/autoplay-on-visible.directive';

interface ReelProject {
  title: string;
  client: string;
  role: string;
  year: string;
  location: string;
  format: string;
  videoSrc: string;
  tags: string[];
  accent: string;
}

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [CommonModule, AutoplayOnVisibleDirective, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  protected readonly reels: ReelProject[] = [
    {
      title: 'Capsule Club',
      client: 'PLK',
      role: 'Direction montage & textures analogiques',
      year: '2024',
      location: 'Paris',
      format: 'Reel 9:16',
      videoSrc: 'PLK.mp4',
      tags: ['Musique', 'Grain 16mm', 'Cut nerveux'],
      accent: '#f7c740',
    },
    {
      title: 'STON Festival',
      client: 'OFS Studio',
      role: 'Réalisateur & monteur documentaire',
      year: '2023',
      location: 'Marseille',
      format: 'Reel 9:16',
      videoSrc: 'REEL_OFS_ston.mp4',
      tags: ['Culture', 'Super 8', 'Color grading teal'],
      accent: '#8ecdd4',
    },
    {
      title: 'Atelier des Maîtres',
      client: 'Louis Vuitton',
      role: 'Montage narratif & motion typographique',
      year: '2023',
      location: 'Paris',
      format: 'Reel 9:16',
      videoSrc: 'Reel_Louis_Vuitton.mp4',
      tags: ['Luxe', 'Film parfum', 'Slow motion'],
      accent: '#f4c6a6',
    },
    {
      title: 'Pulse Campus',
      client: 'ISTEF',
      role: 'Création contenu social & montage rapide',
      year: '2022',
      location: 'Toulouse',
      format: 'Reel 9:16',
      videoSrc: 'Reel_istef.mp4',
      tags: ['Éducation', 'Social ads', 'Cadres dynamiques'],
      accent: '#c1ff72',
    },
    {
      title: 'International Santé',
      client: 'International Santé',
      role: 'Création contenu social & montage rapide',
      year: '2022',
      location: 'Toulouse',
      format: 'Reel 9:16',
      videoSrc: 'REEL_vide_o_1.mp4',
      tags: ['Santé', 'Social ads', 'Promotion'],
      accent: '#ff72aa',
    },
  ];
}
