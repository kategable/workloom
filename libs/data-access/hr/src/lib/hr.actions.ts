import { createAction, props } from '@ngrx/store';

export const loadHrs = createAction('[HR] Load Hrs');
export const loadHrsSuccess = createAction(
  '[HR] Load Hrs Success',
  props<{ data: any }>()
);
export const loadHrsFailure = createAction(
  '[HR] Load Hrs Failure',
  props<{ error: any }>()
);
export const addEmployee = createAction(
  '[HR] Add Employee',
  props<{ employee: any }>()
);
export const hrFeatureActions = {
  loadHrs,
  loadHrsSuccess,
  loadHrsFailure,
  addEmployee,
};
