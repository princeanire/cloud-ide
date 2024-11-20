import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    imports: [],
    template: `
  <section>
    <h1>Find a City</h1>
  <form>
    <input type="text" placeholder="Filter by City"/>
    <button>Search</button>
  </form>
  </section>
  `,
    styles: ``
})
export class HomeComponent {

}
