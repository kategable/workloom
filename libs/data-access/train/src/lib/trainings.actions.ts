import { createAction, props } from '@ngrx/store';
import { Training } from './trainings.models';

export const loadTrainings = createAction('[Trainings] Load Trainings');
export const loadTrainingsSuccess = createAction(
  '[Trainings] Load Trainings Success',
  props<{ trainings: Training[] }>()
);
export const loadTrainingsFailure = createAction(
  '[Trainings] Load Trainings Failure',
  props<{ error: any }>()
);

export const createTraining = createAction(
  '[Trainings] Create Training',
  props<{ training: Omit<Training, 'id' | 'createdAt' | 'updatedAt'> }>()
);
export const createTrainingSuccess = createAction(
  '[Trainings] Create Training Success',
  props<{ training: Training }>()
);
export const createTrainingFailure = createAction(
  '[Trainings] Create Training Failure',
  props<{ error: any }>()
);

export const updateTraining = createAction(
  '[Trainings] Update Training',
  props<{ training: Training }>()
);
export const updateTrainingSuccess = createAction(
  '[Trainings] Update Training Success',
  props<{ training: Training }>()
);
export const updateTrainingFailure = createAction(
  '[Trainings] Update Training Failure',
  props<{ error: any }>()
);

export const deleteTraining = createAction(
  '[Trainings] Delete Training',
  props<{ id: string }>()
);
export const deleteTrainingSuccess = createAction(
  '[Trainings] Delete Training Success',
  props<{ id: string }>()
);
export const deleteTrainingFailure = createAction(
  '[Trainings] Delete Training Failure',
  props<{ error: any }>()
); 