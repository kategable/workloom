import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TrainingsState, trainingsReducer } from './trainings.reducer';

export const selectTrainingsState = createFeatureSelector<TrainingsState>('trainings');

export const selectAllTrainings = createSelector(
  selectTrainingsState,
  (state: TrainingsState) => state.trainings
);

export const selectTrainingsLoading = createSelector(
  selectTrainingsState,
  (state: TrainingsState) => state.loading
);

export const selectTrainingsError = createSelector(
  selectTrainingsState,
  (state: TrainingsState) => state.error
);

export const selectTrainingById = (id: string) =>
  createSelector(selectAllTrainings, (trainings) =>
    trainings.find((training) => training.id === id)
  ); 