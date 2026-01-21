import { CommonModule, isPlatformBrowser } from '@angular/common';
import {AfterViewInit, Component, HostListener, Inject, PLATFORM_ID} from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {
  ConsoleEffect, ConsoleEffectActionHandler,
  EasterBuilder,
  KonamiTrigger,
  MatrixEffectActionHandler,
} from "easter-eggs.ts";

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements AfterViewInit{
  private lastScrollTop = 0;
  private readonly scrollThreshold = 48;
  private readonly isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);


  }

  ngAfterViewInit(): void {
    new EasterBuilder()
      .setTriggerHandler(new KonamiTrigger()) // up, up, down, down...
      .setActionHandler(
        new ConsoleEffectActionHandler("marso")
          .setActionHandler(new MatrixEffectActionHandler())
      );
    }

  protected readonly navItems = [
    { label: 'Portfolio', path: '/' },
    { label: 'Besoin d\'un monteur?', path: '/monteur-video' },
  ];
  protected readonly currentYear = new Date().getFullYear();
  protected isHeaderHidden = false;

  @HostListener('window:scroll', [])
  protected handleWindowScroll(): void {
    if (!this.isBrowser) {
      return;
    }

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || 0;
    const delta = scrollTop - this.lastScrollTop;
    const isScrollingDown = delta > 2;
    const isScrollingUp = delta < -2;

    if (isScrollingDown && scrollTop > this.scrollThreshold) {
      this.isHeaderHidden = true;
    } else if (isScrollingUp || scrollTop <= this.scrollThreshold) {
      this.isHeaderHidden = false;
    }

    this.lastScrollTop = Math.max(scrollTop, 0);
  }
}
