import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  providers: [],
  selector: 'app-root',
  template: `
    <h1>Welcome to {{ title }}</h1>
    <nav>
      <ul>
        <li><a routerLink="/">Home</a></li>
        <li><a routerLink="/hr">HR-Loom</a></li>
      </ul>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: ``,
})
export class AppComponent {
  title = 'hr-loom';
}
