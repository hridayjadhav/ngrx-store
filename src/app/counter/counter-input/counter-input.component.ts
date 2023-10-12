import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { customIncrement } from '../state/counter.actions';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.scss']
})
export class CounterInputComponent implements OnInit {

  value!: number;
  onAdd(){
    this.store.dispatch(customIncrement({count : +this.value}))   //here + sign will be use to add the counter number and custom number.
    
  }
  constructor(private store: Store<{ counter:CounterState }>){}
  ngOnInit(): void{}

}
