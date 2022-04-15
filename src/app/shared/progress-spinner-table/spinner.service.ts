import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  showSpinner: boolean = false;

  show(): void {
    this.showSpinner = true;
  }

  hide(): void {
    this.showSpinner = false;
  }
}
