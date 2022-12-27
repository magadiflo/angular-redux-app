import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: [
  ]
})
export class HijoComponent {

  @Input() contador!: number;
  @Output() onCambioContador: EventEmitter<number> = new EventEmitter();

  multiplicar(): void {
    this.contador *= 2;
    this.onCambioContador.emit(this.contador);
  }

  dividir(): void {
    this.contador /= 2;
    this.onCambioContador.emit(this.contador);
  }

  resetNieto(nuevoContador: number) {
    this.contador = nuevoContador;
    this.onCambioContador.emit(this.contador);
  }

}
