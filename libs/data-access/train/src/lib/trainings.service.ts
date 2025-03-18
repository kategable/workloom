import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Training } from './trainings.models';

@Injectable({
  providedIn: 'root'
})
export class TrainingsDataAccessService {
  private apiUrl = '/api/trainings'; // Adjust this URL based on your API endpoint


  getTrainings(): Observable<Training[]> {
    return from(
      fetch(this.apiUrl).then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
    );
  }

  createTraining(training: Omit<Training, 'id' | 'createdAt' | 'updatedAt'>): Observable<Training> {
    return from(
      fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(training),
      }).then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
    );
  }

  updateTraining(training: Training): Observable<Training> {
    return from(
      fetch(`${this.apiUrl}/${training.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(training),
      }).then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
    );
  }

  deleteTraining(id: string): Observable<void> {
    return from(
      fetch(`${this.apiUrl}/${id}`, {
        method: 'DELETE',
      }).then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
      })
    );
  }
}
