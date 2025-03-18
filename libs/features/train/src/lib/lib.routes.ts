import { Route } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { trainEffects, trainFeature } from '@workloom/data-access-train';
import { LibFeatureTrainComponent } from './feature-train.component';

export const routes: Route[] = [
  {
    path: '',
    component: LibFeatureTrainComponent,
    providers: [provideState(trainFeature), provideEffects(trainEffects)],
  },
];
