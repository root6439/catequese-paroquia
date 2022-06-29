import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: 'catequisandos',
    loadChildren: () =>
      import('./catechizing/catechizing.module').then(
        (m) => m.CatechizingModule
      ),
  },
  {
    path: 'catequistas',
    loadChildren: () =>
      import('./catechists/catechists.module').then((m) => m.CatechistsModule),
  },
  {
    path: 'turmas',
    loadChildren: () =>
      import('./class/class.module').then((m) => m.ClassModule),
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
];
