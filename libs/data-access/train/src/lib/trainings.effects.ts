import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, of } from 'rxjs';
import { catchError, delay, exhaustMap, map } from 'rxjs/operators'; 
import * as TrainingsActions from './trainings.actions';
import { TrainingsDataAccessService } from './trainings.service';

export const loadTrainings = createEffect(
  (actions$ = inject(Actions), trainingsService = inject(TrainingsDataAccessService)) => {
    return actions$.pipe(
      ofType(TrainingsActions.loadTrainings),
      exhaustMap(() =>
        from(trainingsService.getTrainings()).pipe(
          delay(5000),
          map(trainings => TrainingsActions.loadTrainingsSuccess({ trainings })),
          catchError((error: any) =>
            of(TrainingsActions.loadTrainingsFailure({ error }))
          )
        )
      )
    );
  },
  { functional: true }
);

export const createTraining = createEffect(
  (actions$ = inject(Actions), trainingsService = inject(TrainingsDataAccessService)) => {
    return actions$.pipe(
      ofType(TrainingsActions.createTraining),
      exhaustMap(({ training }) =>
        from(trainingsService.createTraining(training)).pipe(
          delay(5000),
          map(newTraining => TrainingsActions.createTrainingSuccess({ training: newTraining })),
          catchError((error: any) =>
            of(TrainingsActions.createTrainingFailure({ error }))
          )
        )
      )
    );
  },
  { functional: true }
);

export const updateTraining = createEffect(
  (actions$ = inject(Actions), trainingsService = inject(TrainingsDataAccessService)) => {
    return actions$.pipe(
      ofType(TrainingsActions.updateTraining),
      exhaustMap(({ training }) =>
        from(trainingsService.updateTraining(training)).pipe(
          delay(5000),
          map(updatedTraining => TrainingsActions.updateTrainingSuccess({ training: updatedTraining })),
          catchError((error: { message: string }) =>
            of(TrainingsActions.updateTrainingFailure({ error }))
          )
        )
      )
    );
  },
  { functional: true }
);

export const deleteTraining = createEffect(
  (actions$ = inject(Actions), trainingsService = inject(TrainingsDataAccessService)) => {
    return actions$.pipe(
      ofType(TrainingsActions.deleteTraining),
      exhaustMap(({ id }) =>
        from(trainingsService.deleteTraining(id)).pipe(
          delay(5000),
          map(() => TrainingsActions.deleteTrainingSuccess({ id })),
          catchError((error: { message: string }) =>
            of(TrainingsActions.deleteTrainingFailure({ error }))
          )
        )
      )
    );
  },
  { functional: true }
); 