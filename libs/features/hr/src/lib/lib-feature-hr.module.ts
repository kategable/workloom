import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { libFeatureHrRoutes } from './lib.routes';
import { FeatureHrComponent } from './feature-hr.component';

@NgModule({
  imports: [FeatureHrComponent,CommonModule, RouterModule.forChild(libFeatureHrRoutes)],
  exports: [FeatureHrComponent],
})
export class LibFeatureHrModule {}
