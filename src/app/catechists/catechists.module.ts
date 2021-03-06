import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertCatechistsComponent } from './insert-catechists/insert-catechists.component';
import { SearchCatechistsComponent } from './search-catechists/search-catechists.component';
import { ROUTES } from './catechists.routes';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [InsertCatechistsComponent, SearchCatechistsComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
  ],
})
export class CatechistsModule {}
