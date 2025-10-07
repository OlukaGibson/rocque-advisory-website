import { ChangeDetectionStrategy, Component } from '@angular/core';
import { COMPANY_NAME, TAGLINE } from '../../shared/constants';

@Component({
  selector: 'rocque-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  protected readonly companyName = COMPANY_NAME;
  protected readonly tagline = TAGLINE;
}
