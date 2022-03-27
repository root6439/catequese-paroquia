import { SharedModule } from './../shared/shared.module';
import { ROUTES } from './catechizing.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchCatechizingComponent } from './search-catechizing/search-catechizing.component';
import { InsertCatechizingComponent } from './insert-catechizing/insert-catechizing.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [SearchCatechizingComponent, InsertCatechizingComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    RouterModule.forChild(ROUTES),
    SharedModule,
  ],
})
export class CatechizingModule {}
