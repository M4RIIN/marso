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
      role: 'Alexandre Marsollier · Réalisateur & Motion designer',
      year: '2024',
      description:
        'Film manifeste pour la collection parfum Sillage. Direction artistique, tournage sur Alexa Mini LF et animations typographiques génératives.',
      tags: ['Luxe', '4K HDR', 'Narration sensorielle'],
    },
    {
      title: 'Orbital Stories — CosmoTech',
      role: 'Alexandre Marsollier · Directeur de création',
      year: '2023',
      description:
        "Série documentaire qui vulgarise l'industrie spatiale française. Mix entre interviews cinéma et motion design data-driven.",
      tags: ['Documentaire', 'Data storytelling', 'Scientifique'],
    },
    {
      title: 'Pulse UI — Nova Health',
      role: 'Alexandre Marsollier · Motion lead',
      year: '2022',
      description:
        'Système d’identité animé pour l’application Pulse UI. Design system, micro-interactions et livraison multi-plateforme.',
      tags: ['Produit digital', 'After Effects', 'Design system'],
    },
  ];
}
