import { ChangeDetectionStrategy, Component } from '@angular/core';
import { COMPANY_NAME, CONTACT_INFO } from '../../shared/constants';

@Component({
  selector: 'rocque-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  protected readonly companyName = COMPANY_NAME;
  protected readonly contactInfo = CONTACT_INFO;
  protected readonly currentYear = new Date().getFullYear();

  protected formatPhoneForTel(phone: string): string {
    return phone.replace(/\s/g, '');
  }
}