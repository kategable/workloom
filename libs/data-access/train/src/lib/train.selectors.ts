import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TrainingsState } from './trainings.reducer';

export const selectTrainState = createFeatureSelector<TrainingsState>('trainings');

export const selectAllTrains = createSelector(
  selectTrainState,
  (state: TrainingsState) => state.trainings
);

export const selectTrainLoading = createSelector(
  selectTrainState,
  (state: TrainingsState) => state.loading
);

export const selectTrainError = createSelector(
  selectTrainState,
  (state: TrainingsState) => state.error
);

export const selectTrainById = (id: string) =>
  createSelector(selectAllTrains, (trains) =>
    trains.find((train) => train.id === id)
  ); 