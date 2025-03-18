import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'train',
    loadChildren: () =>
      import('@workloom/train-feature').then(m => m.routes),
  },
];
