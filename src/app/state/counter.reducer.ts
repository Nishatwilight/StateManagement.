import { createReducer,  on } from "@ngrx/store";
import { decrements, increments, reset } from "./counter.actions";
import { initialState } from "./counter.state";

const counterReducers = createReducer(initialState, 
 on(increments, (state)=>{
  return {
   ...state,
   counter: state.counter +1
  }
 }), on(decrements, (state)=>{
  return {
   ...state,
   counter: state.counter - 1
  }
 }),
 on(reset, (state)=>{
  return {
   ...state,
   counter: 0
  }
 }),
 )

export  function counterReducer(states : any, action: any){
 return counterReducers (states, action);
 

}