import { InsertCatechistsComponent } from './insert-catechists/insert-catechists.component';
import { SearchCatechistsComponent } from './search-catechists/search-catechists.component';
import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  { path: 'busca', component: SearchCatechistsComponent },
  { path: 'cadastro', component: InsertCatechistsComponent },
  { path: '', redirectTo: 'busca' },
];
