import { createAction, props } from "@ngrx/store";

export const increment = createAction('increment'); //createAction is an inbuild method of action.
export const decrement = createAction('decrement');
export const reset = createAction('reset');

export const customIncrement = createAction('customIncrement', props<{count : number}>()); //customIncrement wil recieve the value so the props will give the value.



