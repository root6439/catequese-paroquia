import { InsertCatechizingComponent } from './insert-catechizing/insert-catechizing.component';
import { SearchCatechizingComponent } from './search-catechizing/search-catechizing.component';
import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  { path: 'busca', component: SearchCatechizingComponent },
  { path: 'cadastro', component: InsertCatechizingComponent },
  { path: '', redirectTo: 'busca' },
];
