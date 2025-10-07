import { ChangeDetectionStrategy, Component, signal, computed } from '@angular/core';
import { COMPANY_NAME, NAVIGATION_ITEMS } from '../../shared/constants';
import type { NavbarState } from '../../shared/interfaces';

@Component({
  selector: 'rocque-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 
    'class': 'navbar-fixed',
    '[attr.aria-expanded]': 'isMenuOpen()',
    'role': 'navigation',
    'aria-label': 'Main navigation'
  }
})
export class NavbarComponent {
  protected readonly companyName = COMPANY_NAME;
  protected readonly navigationItems = NAVIGATION_ITEMS;
  protected readonly isMenuOpen = signal(false);
  
  // Unique SVG filter id used by the glass wrapper so multiple instances don't clash
  protected readonly filterId = `glass-filter-${crypto.randomUUID()}`;
  
  // Computed property for menu toggle aria-label
  protected readonly menuToggleLabel = computed(() => 
    this.isMenuOpen() ? 'Close navigation menu' : 'Open navigation menu'
  );

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
