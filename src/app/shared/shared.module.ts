import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PhonePipe } from './pipes/phone.pipe';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertFilterComponent } from './insert-filter/insert-filter.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ProgressSpinnerTableComponent } from './progress-spinner-table/progress-spinner-table.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    InsertFilterComponent,
    BreadcrumbComponent,
    PhonePipe,
    ProgressSpinnerTableComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    InsertFilterComponent,
    BreadcrumbComponent,
    PhonePipe,
    ProgressSpinnerTableComponent,
  ],
})
export class SharedModule {}
