import { createAction } from "@ngrx/store";

export const increments = createAction('a')
export const decrements = createAction('decrements')
export const reset = createAction('reset')