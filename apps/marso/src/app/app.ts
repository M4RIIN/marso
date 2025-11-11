import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private lastScrollTop = 0;
  private readonly scrollThreshold = 48;
  private readonly isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  protected readonly navItems = [
    { label: 'Accueil', path: '/' },
    { label: 'Monteur vidéo', path: '/monteur-video' },
  ];
  protected readonly currentYear = new Date().getFullYear();
  protected isHeaderCompact = false;

  @HostListener('window:scroll', [])
  protected handleWindowScroll(): void {
    if (!this.isBrowser) {
      return;
    }

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || 0;
    const isScrollingDown = scrollTop > this.lastScrollTop;

    if (isScrollingDown && scrollTop > this.scrollThreshold) {
      this.isHeaderCompact = true;
    } else if (!isScrollingDown || scrollTop <= this.scrollThreshold) {
      this.isHeaderCompact = false;
    }

    this.lastScrollTop = Math.max(scrollTop, 0);
  }
}
