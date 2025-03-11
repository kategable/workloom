import { createFeatureSelector, createSelector } from '@ngrx/store';
import { hrFeature, HrState } from './hr.reducer';
import { Employee } from './hr.models';


export const selectHrFeature =
  createFeatureSelector<HrState>(hrFeature.name);

// Select specific data from the feature state
export const employeeViewModels = createSelector(selectHrFeature, state =>
  state.employees.map((emp: Employee) => ({
    name: emp.firstName + ' ' + emp.lastName,
    id: emp.id,
  }))
);

