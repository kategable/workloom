import { Route } from '@angular/router';
import { FeatureHrComponent } from './feature-hr.component';

export const libFeatureHrRoutes: Route[] = [
   { path: '', pathMatch: 'full', component: FeatureHrComponent },
];
