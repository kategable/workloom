import { createFeature, createReducer, on } from '@ngrx/store';
import * as HrActions from './hr.actions';

export const HR_STORE_FEATURE_KEY = 'hr';

export interface HrState {
  employees: { name: string; id: string }[];
  loading: boolean;
}

export const initialState: HrState = {
  employees: [],
  loading: false,
};

export const hrFeature = createFeature({
  name: HR_STORE_FEATURE_KEY,
  reducer: createReducer(
    initialState,
    on(HrActions.loadHrs, state => ({ ...state, loading: true })),
    on(HrActions.loadHrsSuccess, (state, action) => ({
      ...state,
      employees: action.data,
      loading: false,
    })),
    on(HrActions.loadHrsFailure, (state, action) => ({
      ...state,
      loading: false,
      error: action.error,
    })),
    on(HrActions.addEmployee, (state, action) => ({
      ...state,
      employees: [action.employee, ...state.employees],
    }))
  ),
});

export const {
  name, // feature name
  reducer, // feature reducer
  selectHrState,
  selectEmployees,
  selectLoading,
} = hrFeature;
