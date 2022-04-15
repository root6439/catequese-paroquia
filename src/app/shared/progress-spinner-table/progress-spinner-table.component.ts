import { SpinnerService } from './spinner.service';
import { Component } from '@angular/core';

@Component({
  selector: 'spinner-table',
  templateUrl: './progress-spinner-table.component.html',
  styleUrls: ['./progress-spinner-table.component.scss'],
})
export class ProgressSpinnerTableComponent {
  constructor(public spinnerService: SpinnerService) {}
}
