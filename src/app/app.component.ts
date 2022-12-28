import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { IncrementarAction, DecrementarAction } from './contador/contador.actions';
import { AppState } from './app.reducers';

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
    this._store.select('contador') //* Le decimos que solo necesitamos estar atentos a una propiedad específica del estado que tenga la aplicación
      .subscribe(contador => {
        console.log(contador);
        this.contador = contador;
      });
  }

  incrementar(): void {
    //* this.contador++;
    const accion = new IncrementarAction();
    this._store.dispatch(accion);
  }

  decrementar(): void {
    //* this.contador--;
    const accion = new DecrementarAction();
    this._store.dispatch(accion);
  }

}
