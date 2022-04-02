import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertCatechistsComponent } from './insert-catechists/insert-catechists.component';
import { SearchCatechistsComponent } from './search-catechists/search-catechists.component';
import { ROUTES } from './catechists.routes';

@NgModule({
  declarations: [InsertCatechistsComponent, SearchCatechistsComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
})
export class CatechistsModule {}
