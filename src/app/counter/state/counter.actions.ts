import { createAction } from "@ngrx/store";

export const increment = createAction('increment'); //createAction is an inbuild method of action.
export const decrement = createAction('decrement');
export const reset = createAction('reset');