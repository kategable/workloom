import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes as trainRoutes } from '@workloom/train-feature';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter([...appRoutes, ...trainRoutes]),
    provideStore(),
    provideStoreDevtools({ logOnly: !isDevMode() }), // Enables DevTools in development mode
  ],
};

