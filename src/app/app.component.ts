import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';

interface AppState {
  contador: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-redux-app';

  contador!: number;

  constructor(private _store: Store<AppState>) {
    //* this.contador = 10;
    this._store
      .subscribe(state => {
        this.contador = state.contador;
      });
  }

  incrementar(): void {
    //* this.contador++;
    const accion: Action = {
      type: 'INCREMENTAR'
    };

    this._store.dispatch(accion);
  }

  decrementar(): void {
    //* this.contador--;
    const accion: Action = {
      type: 'DECREMENTAR'
    };

    this._store.dispatch(accion);
  }

}
