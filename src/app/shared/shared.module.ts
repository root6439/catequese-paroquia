import { PhonePipe } from './pipes/phone.pipe';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertFilterComponent } from './insert-filter/insert-filter.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [InsertFilterComponent, BreadcrumbComponent, PhonePipe],
  imports: [CommonModule, MatIconModule, MatButtonModule, RouterModule],
  exports: [InsertFilterComponent, BreadcrumbComponent, PhonePipe],
})
export class SharedModule {}
