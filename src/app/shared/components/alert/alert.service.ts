import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertTypeEnum, AlertComponent } from './alert.component';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  alertType: AlertTypeEnum | undefined;

  message: string = '';

  constructor(private snackBar: MatSnackBar) {}

  success(message: string): void {
    this.message = message;
    this.snackBar.openFromComponent(AlertComponent, {
      duration: 2000,
      panelClass: ['success'],
    });
  }

  error(message: string): void {
    this.message = message;
    this.snackBar.openFromComponent(AlertComponent, {
      duration: 2000,
      panelClass: ['error'],
    });
  }

  warning(message: string): void {
    this.message = message;
    this.snackBar.openFromComponent(AlertComponent, {
      duration: 2000,
      panelClass: ['warning'],
    });
  }
}
