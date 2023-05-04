import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent {
  number!: number
  constructor(private store: Store<{count: {counter: number}}>){
    
  }
  ngOnInit(){
    this.store.select('count').subscribe(data =>{
      console.log(data);
      this.number = data.counter;
    })
  }
}
