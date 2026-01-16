import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface MethodStep {
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
  protected readonly heroParagraphs = [
    "Je suis Alexandre Marsollier, monteur vidéo et alternant chargé d’audiovisuel. Après plusieurs expériences professionnelles en entreprise et auprès de clients variés, j’accompagne les structures qui souhaitent communiquer avec de la vidéo claire, rythmée et authentique.",
    'Basé à Toulouse, je travaille sur place ou à distance selon vos besoins et j’assure un accompagnement complet : brief, montage, habillage, corrections et livraison optimisée pour vos plateformes.',
  ];

  protected readonly prestations = [
    'Montage vidéo (tous formats)',
    'Interviews & micro-trottoirs',
    'Vidéos événementielles',
    'Capsules social media (Reels, Shorts, TikTok)',
    'Sous-titres & déclinaisons multi-format',
  ];

  protected readonly methodSteps: MethodStep[] = [
    {
      title: '1 - Kick-off & intention',
      detail:
        'Brief, objectifs, références visuelles et plan d’action (rendez-vous à Toulouse ou en visio).',
    },
    {
      title: '2 - Assemblage & rythme',
      detail:
        'Pré-montage narratif, choix du ton, première version commentée pour valider le storytelling.',
    },
    {
      title: '3 - Habillage & corrections',
      detail:
        'Titres animés, mixage audio, colorimétrie et ajustements supervisés jusqu’à validation.',
    },
    {
      title: '4 - Livraison & optimisation',
      detail:
        'Exports master + déclinaisons réseaux (16:9 / 9:16 / 1:1) et fichiers prêts à diffuser.',
    },
  ];

  protected readonly skills = [
    'Montage et mixage : Adobe Premiere Pro',
    'Animation & habillage : After Effects',
    'Étalonnage : DaVinci Resolve',
  ];

  protected readonly skillsSummary =
    'Je prends en charge l’ensemble de la post-production : structure, rythme, animation, son et exports calibrés selon vos plateformes.';

  protected readonly faqs: Faq[] = [
    {
      question: 'Êtes-vous disponible en présentiel ?',
      answer:
        'Oui. Basé à Toulouse, je peux rejoindre votre salle de montage ou accueillir votre équipe en session supervisée. Missions hybrides possibles en Occitanie et à distance.',
    },
    {
      question: 'Quel logiciel utilisez-vous ?',
      answer:
        'Premiere Pro pour le montage, After Effects pour les animations, DaVinci Resolve pour l’étalonnage. Les projets sont livrés avec timelines propres, exports calibrés et dossier organisé.',
    },
    {
      question: 'Comment se passe une mission via Malt ?',
      answer:
        'Mon profil Malt est vérifié, ce qui garantit contrat, paiement et assurance. Nous pouvons démarrer en 48h avec acompte et planification claire.',
    },
  ];
}
