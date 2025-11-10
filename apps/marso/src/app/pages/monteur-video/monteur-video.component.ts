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
    'Je suis Alexandre Marsollier, monteur vidéo freelance basé à Toulouse. J’épaule les directions marketing, agences et producteurs qui ont besoin d’un montage vidéo premium, d’une narration claire et d’un pilotage technique fiable.',
    'Mon offre couvre le derush, le montage, l’habillage motion, l’étalonnage et les exports calibrés pour vos canaux (TV, YouTube, Instagram, LinkedIn ou activation en boutique).',
    'Après trois années au pôle audiovisuel d’Enedis puis en freelance, j’ai créé un workflow documenté (Frame.io, Notion, Slack) qui rassure les clients toulousains comme les équipes internationales.',
  ];

  protected readonly services: Service[] = [
    {
      title: 'Montage narratif premium',
      description:
        'Structuration du récit, séquençage rythmé, sélection musique/licences et titrage pour films de marque et documentaires avec un rendu premium.',
      deliverables: ['Timeline 4K/HD', 'Exports master + web', 'Conformité broadcast', 'Notice montage pour vos équipes'],
    },
    {
      title: 'Montage social & ads',
      description:
        'Déclinaisons verticales, hooks performants et formats courts optimisés pour TikTok, Instagram Reels, YouTube Shorts et campagnes locales Toulouse.',
      deliverables: ['3 à 6 déclinaisons', 'Sous-titres multilingues', 'Templates réutilisables', 'Pack social media prêt à publier'],
    },
    {
      title: 'Habillage motion & sound design',
      description:
        'Transitions, typographies animées, UI motion et mixage rapide pour donner une signature immédiatement reconnaissable à vos vidéos corporate ou publicitaires.',
      deliverables: ['Kit motion custom', 'Mixage stéréo', 'Livraison alpha/transparent', 'Présets adaptables par vos équipes'],
    },
  ];

  protected readonly skills = [
    'Monteur vidéo Toulouse',
    'Montage vidéo freelance',
    'Adobe Premiere Pro',
    'DaVinci Resolve',
    'Adobe After Effects',
    'Motion design',
    'Post-production',
    'Animation typographique',
  ];

  protected readonly workflow: WorkflowStep[] = [
    {
      title: 'Kick-off & intention',
      detail:
        'Réception du brief, décryptage des objectifs marketing, benchmark de référence et plan d’action montage (visioconférence ou rendez-vous à Toulouse).',
    },
    {
      title: 'Assemblage & rythme',
      detail:
        'Pré-montage narratif sous Premiere Pro / Davinci Resolve, calibrage du ton, première proposition commentée pour valider le storytelling.',
    },
    {
      title: 'Habillage & corrections',
      detail:
        'Intégration des animations, mixage audio, étalonnage, puis itérations supervisées avec retour vidéo ou salle virtuelle/salle de montage toulousaine.',
    },
    {
      title: 'Livraison & optimisation',
      detail:
        'Exports master + déclinaisons, packaging des fichiers source, préparation des assets pour marketing automation et référencement vidéo.',
    },
  ];

  protected readonly faqs: Faq[] = [
    {
      question: 'Êtes-vous disponible en présentiel pour le montage ?',
      answer:
        'Oui. Basé à Toulouse, je peux rejoindre votre salle de montage ou accueillir votre équipe en session supervisée. Les missions hybrides sont également possibles pour les entreprises hors Occitanie.',
    },
    {
      question: 'Quel logiciel de montage vidéo utilisez-vous ?',
      answer:
        'Premiere Pro, DaVinci Resolve et parfois Final Cut pour des workflows spécifiques. Les projets sont livrés avec des timelines propres, des exports calibrés et une note détaillant l’organisation.',
    },
    {
      question: 'Comment se passe la collaboration via Malt ?',
      answer:
        'Mon profil Malt est vérifié, ce qui sécurise contrat, paiement et assurance. Nous pouvons démarrer en 48h avec acompte et planification claire, que vous soyez à Toulouse ou ailleurs.',
    },
    {
      question: 'Proposez-vous des packs dédiés aux entreprises toulousaines ?',
      answer:
        'Oui, je propose des packs de montage vidéo incluant tournage local si nécessaire, coordination avec les studios son toulousains et déplacements optimisés autour de la métropole.',
    },
  ];
}
