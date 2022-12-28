import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../app.reducers';
import { MultiplicarAction, DividirAction } from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: [
  ]
})
export class HijoComponent implements OnInit {

  contador!: number;

  constructor(private _store: Store<AppState>) { }

  ngOnInit(): void {
    this._store.select('contador')
      .subscribe(contador => {
        this.contador = contador;
        console.log('hijo -> ', contador);
      });
  }

  multiplicar(): void {
    // this.contador *= 2;
    const accion = new MultiplicarAction(5);
    this._store.dispatch(accion);

  }

  dividir(): void {
    // this.contador /= 2;
    const accion = new DividirAction(5);
    this._store.dispatch(accion);
  }

  resetNieto(nuevoContador: number) {
    this.contador = nuevoContador;
  }

}
