import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../app.reducers';

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
    this.contador *= 2;
  }

  dividir(): void {
    this.contador /= 2;
  }

  resetNieto(nuevoContador: number) {
    this.contador = nuevoContador;
  }

}
