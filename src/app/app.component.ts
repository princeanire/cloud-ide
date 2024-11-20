import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HousingLocationComponent } from './housing-location/housing-location.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, HousingLocationComponent],
  template: `
    <header>
      <img alt="Home header" aria-hidden="true" src="/icon.svg" />
    </header>
    <app-home></app-home>
    <app-housing-location></app-housing-location>
  `,
  styles: [],
})
export class AppComponent {
  title = 'home-app';
}
