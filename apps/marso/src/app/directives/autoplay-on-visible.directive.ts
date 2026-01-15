import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  Inject,
  NgZone,
  OnDestroy,
  PLATFORM_ID,
} from '@angular/core';

@Directive({
  selector: 'video[appAutoplayOnVisible]',
  standalone: true,
})
export class AutoplayOnVisibleDirective implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;
  private readonly isBrowser: boolean;
  private hasLoadedSources = false;
  private sources: HTMLSourceElement[] = [];

  constructor(
    private readonly elementRef: ElementRef<HTMLVideoElement>,
    @Inject(PLATFORM_ID) platformId: object,
    private readonly ngZone: NgZone
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) {
      return;
    }

    this.ngZone.runOutsideAngular(() => {
      const video = this.elementRef.nativeElement;
      this.prepareVideo(video);
      this.captureSources(video);

      const handleEntries = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          const ratio = entry.intersectionRatio;
          if (entry.isIntersecting && ratio > 0.05) {
            this.loadMediaIfNeeded(video);
            this.playVideo(video);
          } else {
            video.pause();
            this.unloadMedia(video);
          }
        });
      };

      this.observer = new IntersectionObserver(handleEntries, {
        rootMargin: '0px 0px 200px 0px',
        threshold: [0, 0.1, 0.25, 0.5],
      });

      this.observer.observe(video);

      // Safeguard for initial view before observer fires
      requestAnimationFrame(() => {
        if (this.isElementVisible(video)) {
          this.loadMediaIfNeeded(video);
          this.playVideo(video);
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private prepareVideo(video: HTMLVideoElement): void {
    video.defaultMuted = true;
    video.muted = true;
    video.volume = 0;
    video.playsInline = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.preload = 'none';
    video.removeAttribute('controls');
  }

  private captureSources(video: HTMLVideoElement): void {
    this.sources = Array.from(video.querySelectorAll('source'));
    this.sources.forEach((source) => {
      const dataSrc = source.dataset['src'] || source.getAttribute('src');
      if (dataSrc) {
        source.dataset['src'] = dataSrc;
      }
      source.removeAttribute('src');
    });
  }

  private loadMediaIfNeeded(video: HTMLVideoElement): void {
    if (this.hasLoadedSources) {
      return;
    }

    this.sources.forEach((source) => {
      const dataSrc = source.dataset['src'];
      if (dataSrc) {
        source.src = dataSrc;
      }
    });

    video.load();
    this.hasLoadedSources = true;
  }

  private unloadMedia(video: HTMLVideoElement): void {
    if (!this.hasLoadedSources) {
      return;
    }

    this.sources.forEach((source) => {
      const currentSrc = source.getAttribute('src');
      if (currentSrc) {
        source.dataset['src'] = currentSrc;
        source.removeAttribute('src');
      }
    });

    this.hasLoadedSources = false;
    video.load(); // cancels any pending network request
  }

  private playVideo(video: HTMLVideoElement): void {
    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      void video.play().catch(this.logAutoplayWarning);
    } else {
      const onLoadedData = () => {
        video.removeEventListener('loadeddata', onLoadedData);
        void video.play().catch(this.logAutoplayWarning);
      };
      video.addEventListener('loadeddata', onLoadedData);
      if (video.readyState === HTMLMediaElement.HAVE_NOTHING) {
        video.load();
      }
    }
  }

  private isElementVisible(video: HTMLVideoElement): boolean {
    const rect = video.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    return (
      rect.bottom > 0 &&
      rect.right > 0 &&
      rect.top < viewportHeight &&
      rect.left < viewportWidth
    );
  }

  private readonly logAutoplayWarning = (error: unknown) =>
    console.warn('Lecture automatique impossible. Interaction requise.', error);
}
