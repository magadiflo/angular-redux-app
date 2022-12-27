import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-redux-app';

  contador: number;

  constructor() {
    this.contador = 10;
  }

  incrementar(): void {
    this.contador++;
  }

  decrementar(): void {
    this.contador--;
  }

}
