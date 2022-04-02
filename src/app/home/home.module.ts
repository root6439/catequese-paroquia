import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ROUTES } from './home.routes';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
})
export class HomeModule {}
