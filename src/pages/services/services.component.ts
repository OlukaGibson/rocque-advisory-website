import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SERVICES } from '../../shared/constants';

@Component({
  selector: 'rocque-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServicesComponent {
  protected readonly services = SERVICES;
}
