import { ChangeDetectionStrategy, Component, signal, computed, OnInit, OnDestroy, HostListener, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { COMPANY_NAME, NAVIGATION_ITEMS } from '../../shared/constants';
import type { NavbarState } from '../../shared/interfaces';

@Component({
  selector: 'rocque-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 
    'class': 'navbar-fixed',
    '[class.scrolled]': 'isScrolled()',
    '[attr.aria-expanded]': 'isMenuOpen()',
    'role': 'navigation',
    'aria-label': 'Main navigation'
  }
})
export class NavbarComponent implements OnInit, OnDestroy {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  protected readonly companyName = COMPANY_NAME;
  protected readonly navigationItems = NAVIGATION_ITEMS;
  protected readonly isMenuOpen = signal(false);
  protected readonly isScrolled = signal(false);
  
  // Unique SVG filter id used by the glass wrapper so multiple instances don't clash
  protected readonly filterId = `glass-filter-${crypto.randomUUID()}`;
  
  // Computed property for menu toggle aria-label
  protected readonly menuToggleLabel = computed(() => 
    this.isMenuOpen() ? 'Close navigation menu' : 'Open navigation menu'
  );

  private scrollThreshold = 100; // Pixels to scroll before triggering compact mode

  ngOnInit(): void {
    // Only check scroll position in browser environment
    if (isPlatformBrowser(this.platformId)) {
      this.checkScrollPosition();
    }
  }

  ngOnDestroy(): void {
    // Angular's HostListener handles cleanup automatically
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.checkScrollPosition();
  }

  private checkScrollPosition(): void {
    // Guard against server-side rendering
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    this.isScrolled.set(scrollPosition > this.scrollThreshold);
  }

  protected toggleMenu(): void {
    this.isMenuOpen.update(open => !open);
  }

  protected closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  // Handle keyboard navigation
  protected onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Escape' && this.isMenuOpen()) {
      this.closeMenu();
    }
  }
}
