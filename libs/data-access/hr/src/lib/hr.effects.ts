import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, delay, exhaustMap, map } from 'rxjs/operators';
import { loadHrs, loadHrsFailure, loadHrsSuccess } from './hr.actions';
import { HrService } from './hr.service';

export const loadHr = createEffect(
  (actions$ = inject(Actions), actorsService = inject(HrService)) => {
    return actions$.pipe(
      ofType(loadHrs),
      exhaustMap(() =>
        actorsService.getData().pipe(
          delay(10000),
          map(data =>
            data.users.map((u: any) => {
              return { id: u.id, name: u.firstName + ' ' + u.lastName };
            })
          ),
          map(data => loadHrsSuccess({ data })),
          catchError((error: { message: string }) =>
            of(loadHrsFailure({ error }))
          )
        )
      )
    );
  },
  { functional: true }
);
