
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  Employee,
  hrFeature,
  hrFeatureActions,
  employeeViewModels,
} from '@workloom/lib-data-access-hr';

@Component({
  selector: 'lib-lib-feature-hr',
  template: `
    @if (loading()) {
    <li>Loading...</li>
    } @else {
    <h2>Employees</h2>
    <button (click)="addEmployee()">Add</button>
    <ul>
      @for (item of employees(); track item.id) {
      <li>{{ item.name }}</li>
      } @empty {
      <li>No items found.</li>
      }
    </ul>
    }
  `,
  styles: ``,
})
export class LibFeatureHrComponent {
  store = inject(Store);
  employees = this.store.selectSignal(employeeViewModels);
  loading = this.store.selectSignal(hrFeature.selectLoading);
  constructor() {
    this.store.dispatch(hrFeatureActions.loadHrs());
  }
  addEmployee() {
    const uniqueId = Date.now();
    this.store.dispatch(
      hrFeatureActions.addEmployee({
        employee: {
          firstName: 'New',
          lastName: 'Employee',
          id: uniqueId,
        } as Employee,
      })
    );
  }
}
