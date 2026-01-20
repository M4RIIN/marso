import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

interface SeoImageConfig {
  url: string;
  alt?: string;
}

interface OpenGraphConfig {
  type?: string;
  title?: string;
  description?: string;
  url?: string;
  image?: SeoImageConfig;
}

interface TwitterCardConfig {
  card?: string;
  title?: string;
  description?: string;
  image?: SeoImageConfig;
}

export interface SeoConfig {
  title?: string;
  description?: string;
  keywords?: string[] | string;
  canonicalUrl?: string;
  openGraph?: OpenGraphConfig;
  twitter?: TwitterCardConfig;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly renderer: Renderer2;

  constructor(
    private readonly meta: Meta,
    private readonly title: Title,
    rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private readonly document: Document,
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  updateTags(config: SeoConfig): void {
    if (config.title) {
      this.title.setTitle(config.title);
      this.updateMeta('property', 'og:title', config.openGraph?.title ?? config.title);
      this.updateMeta('name', 'twitter:title', config.twitter?.title ?? config.title);
    }

    if (config.description) {
      this.updateMeta('name', 'description', config.description);
      this.updateMeta('property', 'og:description', config.openGraph?.description ?? config.description);
      this.updateMeta('name', 'twitter:description', config.twitter?.description ?? config.description);
    } else {
      this.updateMeta('property', 'og:description', config.openGraph?.description);
      this.updateMeta('name', 'twitter:description', config.twitter?.description);
    }

    const keywords =
      typeof config.keywords === 'string' ? config.keywords : config.keywords?.filter(Boolean).join(', ');
    if (keywords) {
      this.updateMeta('name', 'keywords', keywords);
    }

    if (config.canonicalUrl) {
      this.setCanonicalUrl(config.canonicalUrl);
      this.updateMeta('property', 'og:url', config.openGraph?.url ?? config.canonicalUrl);
    } else if (config.openGraph?.url) {
      this.updateMeta('property', 'og:url', config.openGraph.url);
    }

    if (config.openGraph?.type) {
      this.updateMeta('property', 'og:type', config.openGraph.type);
    }

    if (config.openGraph?.image?.url) {
      this.updateMeta('property', 'og:image', config.openGraph.image.url);
      this.updateMeta('property', 'og:image:alt', config.openGraph.image.alt);
    }

    if (config.twitter?.card) {
      this.updateMeta('name', 'twitter:card', config.twitter.card);
    }

    if (config.twitter?.image?.url) {
      this.updateMeta('name', 'twitter:image', config.twitter.image.url);
      this.updateMeta('name', 'twitter:image:alt', config.twitter.image.alt);
    }
  }

  setJsonLd(id: string, data: unknown | null): void {
    const scriptId = `seo-jsonld-${id}`;
    const existingScript = this.document.getElementById(scriptId);

    if (!data) {
      if (existingScript?.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
      return;
    }

    const jsonContent = typeof data === 'string' ? data : JSON.stringify(data, null, 2);
    if (existingScript) {
      existingScript.textContent = jsonContent;
      return;
    }

    const script = this.renderer.createElement('script');
    script.type = 'application/ld+json';
    script.id = scriptId;
    script.text = jsonContent;
    this.renderer.appendChild(this.document.head, script);
  }

  private updateMeta(attrName: 'name' | 'property', attrValue: string, content?: string): void {
    if (!attrValue || !content) {
      return;
    }

    this.meta.updateTag({ [attrName]: attrValue, content });
  }

  private setCanonicalUrl(url: string): void {
    if (!url) {
      return;
    }

    let linkEl = this.document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!linkEl) {
      linkEl = this.renderer.createElement('link');
      linkEl?.setAttribute('rel', 'canonical');
      this.renderer.appendChild(this.document.head, linkEl);
    }

    linkEl?.setAttribute('href', url);
  }
}
