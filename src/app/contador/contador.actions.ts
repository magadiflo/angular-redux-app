import { Action } from '@ngrx/store';
//* Creamos dos acciones
//* Lo que pongamos en las '...' da igual, solamente es para 
//* identificar qué acción se va a realizar. La idea es que cuando
//* llamemos, por ejemplo al incrementar, usemos la constante INCREMENTAR 
export const INCREMENTAR = '[Contador] Incrementar';
export const DECREMENTAR = '[Contador] Decrementar';

export class IncrementarAction implements Action {
    readonly type: string = INCREMENTAR;    
}

export class DecrementarAction implements Action {
    readonly type: string = DECREMENTAR;    
}