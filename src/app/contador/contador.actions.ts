import { Action } from '@ngrx/store';
//* Creamos dos acciones
//* Lo que pongamos en las '...' da igual, solamente es para 
//* identificar qué acción se va a realizar. La idea es que cuando
//* llamemos, por ejemplo al incrementar, usemos la constante INCREMENTAR 
export const INCREMENTAR = '[Contador] Incrementar';
export const DECREMENTAR = '[Contador] Decrementar';
export const MULTIPLICAR = '[Contador] Multiplicar';
export const DIVIDIR = '[Contador] Dividir';
export const RESET = '[Contador] Reset';

export class IncrementarAction implements Action {
    readonly type: string = INCREMENTAR;
}

export class DecrementarAction implements Action {
    readonly type: string = DECREMENTAR;
}

export class MultiplicarAction implements Action {
    readonly type: string = MULTIPLICAR;

    constructor(public payload: number) { }
}

export class DividirAction implements Action {
    readonly type: string = DIVIDIR;

    constructor(public payload: number) { }
}

export class ResetAction implements Action {
    readonly type: string = RESET;
}

export type actions = IncrementarAction | DecrementarAction | MultiplicarAction | DividirAction | ResetAction;