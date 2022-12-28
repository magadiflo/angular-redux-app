//* Toda esta importación lo reemplazaremos por el * as fromContador
//* import { INCREMENTAR, DECREMENTAR, MULTIPLICAR, actions, MultiplicarAction, DIVIDIR, DividirAction, RESET } from './contador.actions';
import * as fromContador from './contador.actions';

export function contadorReducer(state: number = 10, action: fromContador.actions) {
    switch (action.type) {
        case fromContador.INCREMENTAR:
            return state + 1;
        case fromContador.DECREMENTAR:
            return state - 1;
        case fromContador.MULTIPLICAR:
            return state * (action as fromContador.MultiplicarAction).payload;
        case fromContador.DIVIDIR:
            return state / (action as fromContador.DividirAction).payload;
        case fromContador.RESET:
            return 0;
        default:
            return state;
    }
}