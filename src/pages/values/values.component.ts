import { ChangeDetectionStrategy, Component } from '@angular/core';
import { VALUES } from '../../shared/constants';

@Component({
  selector: 'rocque-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ValuesComponent {
  protected readonly values = VALUES;
}
