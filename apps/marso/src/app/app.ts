import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { AutoplayOnVisibleDirective } from './directives/autoplay-on-visible.directive';
import { NameService } from './services/name.service';

interface Project {
  title: string;
  role: string;
  year: string;
  description: string;
  tags: string[];
}

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule, AutoplayOnVisibleDirective],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly nameService = inject(NameService);
  protected readonly heroName = toSignal(this.nameService.name$, {
    initialValue: 'Alexandre',
  });

  protected readonly projects: Project[] = [
    {
      title: 'Nom du projet 1',
      role: 'Réalisateur',
      year: '2024',
      description:
        'Pitch du projet en une ou deux phrases pour raconter le contexte et ton rôle principal.',
      tags: ['Publicité', '4K', 'Client A'],
    },
    {
      title: 'Nom du projet 2',
      role: 'Chef opérateur',
      year: '2023',
      description:
        'Explique ici les objectifs du projet et les défis créatifs ou techniques que tu as relevés.',
      tags: ['Documentaire', 'Lumière naturelle'],
    },
    {
      title: 'Nom du projet 3',
      role: 'Motion designer',
      year: '2022',
      description:
        'Ajoute un aperçu rapide des éléments graphiques, du style et de l’histoire racontée.',
      tags: ['Animation 2D', 'After Effects', 'Festival'],
    },
  ];
}
