import { INCREMENTAR, DECREMENTAR, MULTIPLICAR, actions, MultiplicarAction, DIVIDIR, DividirAction } from './contador.actions';

export function contadorReducer(state: number = 10, action: actions) {
    switch (action.type) {
        case INCREMENTAR:
            return state + 1;
        case DECREMENTAR:
            return state - 1;
        case MULTIPLICAR:
            return state * (action as MultiplicarAction).payload;
        case DIVIDIR:
            return state / (action as DividirAction).payload;
        default:
            return state;
    }
}