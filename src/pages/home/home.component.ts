import { ChangeDetectionStrategy, Component, ElementRef, AfterViewInit, ViewChild, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { COMPANY_NAME, TAGLINE } from '../../shared/constants';

@Component({
  selector: 'rocque-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  @ViewChild('videoContainer') videoContainer!: ElementRef;
  @ViewChild('videoPlayer') videoPlayer!: ElementRef;
  
  protected readonly companyName = COMPANY_NAME;
  protected readonly tagline = TAGLINE;
  
  private observer?: IntersectionObserver;
  private player: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    // Only run in browser environment
    if (isPlatformBrowser(this.platformId)) {
      this.setupIntersectionObserver();
      this.loadYouTubeAPI();
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId) && this.observer) {
      this.observer.disconnect();
    }
  }

  private loadYouTubeAPI(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    // Check if YouTube API is already loaded
    if (!(window as any).YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

      (window as any).onYouTubeIframeAPIReady = () => {
        this.initializePlayer();
      };
    } else {
      this.initializePlayer();
    }
  }

  private initializePlayer(): void {
    this.player = new (window as any).YT.Player(this.videoPlayer.nativeElement, {
      events: {
        'onReady': () => {
          // Player is ready
        }
      }
    });
  }

  private setupIntersectionObserver(): void {
    if (!isPlatformBrowser(this.platformId) || typeof IntersectionObserver === 'undefined') {
      return;
    }

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Video must be at least 50% visible
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (this.player && this.player.pauseVideo && this.player.playVideo) {
          if (entry.isIntersecting) {
            // Video is visible, play it
            this.player.playVideo();
          } else {
            // Video is out of sight, pause it
            this.player.pauseVideo();
          }
        }
      });
    }, options);

    if (this.videoContainer) {
      this.observer.observe(this.videoContainer.nativeElement);
    }
  }
}
