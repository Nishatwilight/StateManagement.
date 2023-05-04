import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrements, increments, reset } from '../state/counter.actions';

@Component({
  selector: 'app-counter-btn',
  templateUrl: './counter-btn.component.html',
  styleUrls: ['./counter-btn.component.scss']
})
export class CounterBtnComponent {

  constructor(private store: Store<{count: {counterMyWish: number }}>){

  }
  
  increment(){
this.store.dispatch(increments())
  }
  decrement(){
this.store.dispatch(decrements())
  }
  reset(){
this.store.dispatch(reset())
  }
}
