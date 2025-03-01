import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LibFeaturesHrComponent } from '@workloom/lib-features-hr';

@Component({
  imports: [LibFeaturesHrComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'hr-loom';
}
