import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AutoplayOnVisibleDirective } from '../../directives/autoplay-on-visible.directive';

interface Project {
  title: string;
  role: string;
  year: string;
  description: string;
  tags: string[];
}

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [CommonModule, AutoplayOnVisibleDirective, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  protected readonly projects: Project[] = [
    {
      title: 'Sillage — Maison Dumesnil',
      role: 'Je signe la réalisation & le motion design',
      year: '2024',
      description:
        'Film manifeste pour la collection parfum Sillage. Montage vidéo premium, direction artistique, tournage sur Alexa Mini LF et animations typographiques génératives.',
      tags: ['Luxe', '4K HDR', 'Narration sensorielle'],
    },
    {
      title: 'Orbital Stories — CosmoTech',
      role: 'Je prends la direction de création',
      year: '2023',
      description:
        "Série documentaire qui vulgarise l'industrie spatiale française. Montage vidéo documentaire, mix entre interviews cinéma et motion design data-driven.",
      tags: ['Documentaire', 'Data storytelling', 'Scientifique'],
    },
    {
      title: 'Pulse UI — Nova Health',
      role: 'Je pilote le motion design',
      year: '2022',
      description:
        'Système d’identité animé pour l’application Pulse UI. Montage des démonstrations produit, design system, micro-interactions et livraison multi-plateforme.',
      tags: ['Produit digital', 'After Effects', 'Design system'],
    },
  ];
}
