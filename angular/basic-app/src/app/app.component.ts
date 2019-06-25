import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1> Welcome to codekul </h1> 
    </div>
  `,
  styles: [`
    h1 {
      border : 1px solid red;
    }
  `]
})
export class AppComponent {
  title = 'codekul angular';
}
