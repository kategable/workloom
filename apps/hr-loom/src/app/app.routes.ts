import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const appRoutes: Route[] = [
  { path: '', component: HomeComponent },
  {
    path: 'hr',
    loadChildren: () =>
      import('@workloom/feature-hr').then(m => m.libFeatureHrRoutes),
  },
];
