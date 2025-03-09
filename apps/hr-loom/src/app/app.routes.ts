import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const appRoutes: Route[] = [
  { path: '', component: HomeComponent },
  {
    path: 'hr',
    loadComponent: () => import('@workloom/lib-feature-hr').then(m => m.LibFeatureHrComponent)
  },
];
