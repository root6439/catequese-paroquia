import { AlertService } from './alert.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {
  constructor(public service: AlertService) {}
}

export enum AlertTypeEnum {
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
}
