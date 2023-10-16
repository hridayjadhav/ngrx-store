import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Name, customIncrement } from '../state/counter.actions';
import { Observable } from 'rxjs';
import { getName } from '../state/counter.selector';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.scss']
})
export class CounterInputComponent implements OnInit {

  value!: number;
  Name$!: Observable<string>;


  ngOnInit(): void{
    this.Name$ = this.store.select(getName);
  }
   
  constructor(private store: Store<AppState>){  }
  
  
  onAdd(){
    this.store.dispatch(customIncrement({count : +this.value}))   //here + sign will be use to add the counter number and custom number.
    
  }

  onChangeName(){
    this.store.dispatch(Name());
  }

}
