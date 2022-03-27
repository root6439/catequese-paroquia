import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: 'catequisandos',
    loadChildren: () =>
      import('./catechizing/catechizing.module').then(
        (m) => m.CatechizingModule
      ),
  },
];
