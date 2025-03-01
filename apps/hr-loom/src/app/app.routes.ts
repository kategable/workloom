import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {path: '', loadChildren: () => import('@workloom/lib-feature-hr').then(m => m.LibFeatureHrModule)},
];
