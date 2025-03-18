import { createReducer, on } from '@ngrx/store';
import { Training } from './trainings.models';
import * as TrainingsActions from './trainings.actions';

export interface TrainingsState {
  trainings: Training[];
  loading: boolean;
  error: any;
}

export const initialState: TrainingsState = {
  trainings: [],
  loading: false,
  error: null,
};

export const trainingsReducer = createReducer(
  initialState,
  on(TrainingsActions.loadTrainings, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(TrainingsActions.loadTrainingsSuccess, (state, { trainings }) => ({
    ...state,
    trainings,
    loading: false,
  })),
  on(TrainingsActions.loadTrainingsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(TrainingsActions.createTrainingSuccess, (state, { training }) => ({
    ...state,
    trainings: [...state.trainings, training],
  })),
  on(TrainingsActions.updateTrainingSuccess, (state, { training }) => ({
    ...state,
    trainings: state.trainings.map((t) => (t.id === training.id ? training : t)),
  })),
  on(TrainingsActions.deleteTrainingSuccess, (state, { id }) => ({
    ...state,
    trainings: state.trainings.filter((t) => t.id !== id),
  }))
); 