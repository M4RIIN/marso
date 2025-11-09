import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Service {
  title: string;
  description: string;
  deliverables: string[];
}

interface WorkflowStep {
  title: string;
  detail: string;
}

interface Faq {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-monteur-video',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './monteur-video.component.html',
  styleUrl: './monteur-video.component.css',
})
export class MonteurVideoComponent {
  protected readonly introParagraphs = [
    'Bonjour et bienvenue sur mon profil. Je réalise des montages pour des films d’entreprises, interviews, teasers ou autres formats avec animation de texte, colorimétrie, effets visuels et voix off.',
    'Je peux vous aider, vous ou votre entreprise, dans le montage et la post-production, du derush à la livraison finale optimisée pour vos canaux.',
    'Ayant travaillé trois années au pôle audiovisuel d’Enedis, je saurai attribuer à vos vidéos une qualité professionnelle et une organisation rigoureuse.',
  ];

  protected readonly services: Service[] = [
    {
      title: 'Montage narratif premium',
      description:
        'Structuration du récit, séquençage rythmé, sélection musique/licences et titrage pour films de marque et documentaires.',
      deliverables: ['Timeline 4K/HD', 'Exports master + web', 'Conformité broadcast'],
    },
    {
      title: 'Montage social & ads',
      description:
        'Déclinaisons verticales, hooks performants et formats courts optimisés pour TikTok, Instagram Reels et YouTube Shorts.',
      deliverables: ['3 à 6 déclinaisons', 'Sous-titres multilingues', 'Templates réutilisables'],
    },
    {
      title: 'Habillage motion & sound design',
      description:
        'Transitions, typographies animées, UI motion et mixage rapide pour donner une signature immédiatement reconnaissable.',
      deliverables: ['Kit motion custom', 'Mixage stéréo', 'Livraison alpha/transparent'],
    },
  ];

  protected readonly skills = [
    'Adobe Premiere Pro',
    'Adobe After Effects',
    'Montage vidéo',
    'Post-production',
    'Animation',
  ];

  protected readonly workflow: WorkflowStep[] = [
    {
      title: 'Kick-off & intention',
      detail:
        'Réception du brief, décryptage des objectifs marketing, benchmark de référence et plan d’action montage.',
    },
    {
      title: 'Assemblage & rythme',
      detail:
        'Pré-montage narratif sous Premiere Pro / Davinci Resolve, calibrage du ton, première proposition commentée.',
    },
    {
      title: 'Habillage & corrections',
      detail:
        'Intégration des animations, mixage audio, étalonnage, puis itérations supervisées avec retour vidéo ou salle virtuelle.',
    },
    {
      title: 'Livraison & optimisation',
      detail:
        'Exports master + déclinaisons, packaging des fichiers source, préparation des assets pour marketing automation.',
    },
  ];

  protected readonly faqs: Faq[] = [
    {
      question: 'Êtes-vous disponible en présentiel pour le montage ?',
      answer:
        'Oui. Basé à Toulouse, je peux rejoindre votre salle de montage ou accueillir votre équipe en session supervisée. Les missions hybrides sont également possibles.',
    },
    {
      question: 'Quel logiciel de montage vidéo utilisez-vous ?',
      answer:
        'Premiere Pro, DaVinci Resolve et parfois Final Cut pour des workflows spécifiques. Les projets sont livrés avec les timelines propres et documentées.',
    },
    {
      question: 'Comment se passe la collaboration via Malt ?',
      answer:
        'Mon profil Malt est vérifié, ce qui sécurise contrat, paiement et assurance. Nous pouvons démarrer en 48h avec acompte et planification claire.',
    },
  ];
}
