export * from './lib/trainings.service';
export * from './lib/trainings.models';
export * from './lib/trainings.reducer';
export * from './lib/trainings.selectors';
export * from './lib/trainings.effects';
import { trainingsReducer } from './lib/trainings.reducer';
export * as trainEffects from './lib/trainings.effects';
export const trainFeature = {
  name: 'trainings',
  reducer: trainingsReducer,
};

// Re-export actions with explicit names
export * as TrainingsActions from './lib/trainings.actions'; 