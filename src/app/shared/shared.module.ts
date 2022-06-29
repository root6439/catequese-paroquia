import { RgPipe } from './pipes/rg.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PhonePipe } from './pipes/phone.pipe';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertFilterComponent } from './components/insert-filter/insert-filter.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CpfPipe } from './pipes/cpf.pipe';
import { AlertComponent } from './components/alert/alert.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    InsertFilterComponent,
    BreadcrumbComponent,
    PhonePipe,
    CpfPipe,
    RgPipe,
    AlertComponent,
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
    MatSnackBarModule,
  ],
  exports: [
    InsertFilterComponent,
    BreadcrumbComponent,
    PhonePipe,
    CpfPipe,
    RgPipe,
    AlertComponent,
  ],
})
export class SharedModule {}
