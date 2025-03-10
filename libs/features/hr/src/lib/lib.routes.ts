import { Route } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { hrEffects, hrFeature } from '@workloom/lib-data-access-hr';
import { LibFeatureHrComponent } from './lib-feature-hr.component';

export const libFeatureHrRoutes: Route[] = [
  {
    path: '',
    component: LibFeatureHrComponent,
    providers: [provideState(hrFeature), provideEffects(hrEffects)],
  },
];
