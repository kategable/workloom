import { createFeatureSelector, createSelector } from '@ngrx/store';
import { hrFeature, HrState } from './hr.reducer';

// export const selectHrViewModel = createSelector(
//   hrFeature.selectEmployees,
//   hrFeature.selectLoading,
//   (employees, loading) => ({ employees, loading })
// );
// export const selectFeature = (state: HrState) => state;

// export const selectEmployees = createSelector(
//   selectFeature,
//   (state: HrState) => state.employees
// );

// export const selectLoading = createSelector(
//   selectFeature,
//   (state: HrState) => state.loading
// );
export const selectHrFeature =
  createFeatureSelector<HrState>(hrFeature.name);

// Select specific data from the feature state
export const selectHrEmployy = createSelector(
  selectHrFeature,
  state => state.employees
);
