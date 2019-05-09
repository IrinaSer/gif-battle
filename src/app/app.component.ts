import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <section class="hero is-fullheight is-warning is-bщдв">
      <div class="hero-body">
        <router-outlet></router-outlet>
      </div>
    </section>
    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'gift-battle';
}
