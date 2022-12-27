import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: [
  ]
})
export class NietoComponent {

  @Input() contador!: number;
  @Output() onContadorCambio = new EventEmitter<number>();

  reset(): void {
    this.contador = 0;
    this.onContadorCambio.emit(0);
  }

}
