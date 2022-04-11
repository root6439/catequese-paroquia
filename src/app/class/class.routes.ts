import { InsertClassComponent } from './insert-class/insert-class.component';
import { SearchClassComponent } from './search-class/search-class.component';
import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  { path: 'busca', component: SearchClassComponent },
  { path: 'cadastro', component: InsertClassComponent },
];
