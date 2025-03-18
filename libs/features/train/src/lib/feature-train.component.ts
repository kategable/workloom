import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import {
  Training,
  TrainingsActions,
  selectAllTrainings,
  selectTrainingsError,
  selectTrainingsLoading,
} from '@workloom/data-access-train';

@Component({
  selector: 'workloom-feature-train',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="trainings-container">
      <h2>Trainings</h2>

      <div *ngIf="loading()" class="loading">Loading trainings...</div>

      <div *ngIf="error()" class="error">Error: {{ error()?.message }}</div>

      <div *ngIf="trainings()" class="trainings-list">
        <div *ngFor="let training of trainings()" class="training-item">
          <h3>{{ training.name }}</h3>
          <p>{{ training.description }}</p>
          <p>Status: {{ training.status }}</p>
          <p>Created: {{ training.createdAt | date }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .trainings-container {
        padding: 20px;
      }

      .loading {
        text-align: center;
        padding: 20px;
      }

      .error {
        color: red;
        padding: 10px;
        margin: 10px 0;
        border: 1px solid red;
        border-radius: 4px;
      }

      .trainings-list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 20px;
        padding: 20px 0;
      }

      .training-item {
        padding: 15px;
        border: 1px solid #ddd;
        border-radius: 4px;
        background-color: #f9f9f9;
      }

      .training-item h3 {
        margin: 0 0 10px 0;
        color: #333;
      }

      .training-item p {
        margin: 5px 0;
        color: #666;
      }
    `,
  ],
})
export class LibFeatureTrainComponent implements OnInit {
  private store = inject(Store);

  trainings = toSignal(this.store.select(selectAllTrainings), {
    initialValue: [] as Training[],
  });
  loading = toSignal(this.store.select(selectTrainingsLoading), {
    initialValue: false,
  });
  error = toSignal(this.store.select(selectTrainingsError), {
    initialValue: null,
  });

  ngOnInit() {
    this.store.dispatch(TrainingsActions.loadTrainings());
  }
}
