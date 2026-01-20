import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { SeoService } from '../../services/seo.service';

const SITE_URL = 'https://marsolliervideo.fr';
const OG_IMAGE = `${SITE_URL}/assets/alexandre_marsollier_monteur_video.png`;

interface LegalContactItem {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}

@Component({
  selector: 'app-mentions-legales',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mentions-legales.component.html',
  styleUrl: './mentions-legales.component.css',
})
export class MentionsLegalesComponent implements OnInit {
  protected readonly lastUpdated = new Intl.DateTimeFormat('fr-FR', {
    month: 'long',
    year: 'numeric',
  }).format(new Date());

  protected readonly contactItems: LegalContactItem[] = [
    { label: 'Éditeur du site', value: 'Alexandre Marsollier' },
    { label: 'Statut', value: 'Entrepreneur individuel — audiovisuel & motion design' },
    { label: 'Adresse professionnelle', value: '31000 Toulouse, France' },
    {
      label: 'Email',
      value: 'alexandre.marsollier05@gmail.com',
      href: 'mailto:alexandre.marsollier05@gmail.com',
    },
    {
      label: 'Téléphone',
      value: '+33 7 49 86 76 97',
      href: 'tel:+33749867697',
    },
    {
      label: 'Profil Malt',
      value: 'malt.fr/profile/alexandremarsollier',
      href: 'https://www.malt.fr/profile/alexandremarsollier',
      external: true,
    },
  ];

  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.updateTags({
      title: 'Mentions légales — Alexandre Marsollier',
      description:
        'Mentions légales, responsabilités et politique de confidentialité d’Alexandre Marsollier, monteur vidéo freelance à Toulouse.',
      keywords: ['mentions légales', 'Alexandre Marsollier', 'monteur vidéo Toulouse'],
      canonicalUrl: `${SITE_URL}/mentions-legales`,
      openGraph: {
        type: 'article',
        url: `${SITE_URL}/mentions-legales`,
        image: {
          url: OG_IMAGE,
          alt: 'Alexandre Marsollier — Mentions légales',
        },
      },
      twitter: {
        card: 'summary_large_image',
        image: {
          url: OG_IMAGE,
          alt: 'Alexandre Marsollier — Mentions légales',
        },
      },
    });

    this.seo.setJsonLd('legal', this.buildLegalStructuredData());
  }

  private buildLegalStructuredData() {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Alexandre Marsollier — Monteur vidéo & motion designer',
      url: SITE_URL,
      description:
        'Site vitrine d’Alexandre Marsollier, monteur vidéo freelance à Toulouse : prestations, portfolio et contenus éditoriaux.',
      publisher: {
        '@type': 'Person',
        name: 'Alexandre Marsollier',
        address: '31000 Toulouse, France',
        email: 'alexandre.marsollier05@gmail.com',
      },
    };
  }
}
