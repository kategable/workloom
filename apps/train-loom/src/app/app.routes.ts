import { Route } from '@angular/router';

export const appRoutes: Route[] = [

  {
    path: 'train',
    loadChildren: () =>
      import('@workloom/lib-feature-hr').then(m => m.libFeatureHrRoutes),
  },
];
