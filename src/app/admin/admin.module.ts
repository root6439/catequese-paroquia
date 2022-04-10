import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { ROUTES } from './admin.routes';

@NgModule({
  declarations: [AdminComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
})
export class AdminModule {}
