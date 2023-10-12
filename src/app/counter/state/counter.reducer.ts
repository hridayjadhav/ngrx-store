import { createReducer, on } from '@ngrx/store';
import { initialState } from './counter.state';
import { customIncrement, decrement, increment, reset } from './counter.actions';

const _counterReducer = createReducer(
  initialState,
  on(increment, (state: any) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }), on(decrement, (state)=>{
    return{
        ...state,
        counter: state.counter - 1,
    };
  }), on(reset, (state)=>{
    return{
        ...state,
        counter: 0,
    }
  }), on(customIncrement, (state, action)=>{   //we have to use action to implement any actions we have to do.
    return{
      ...state,
      // counter:  action.count   //via this we can change the value of counter manually.
      counter:  state.counter + action.count   // this will add the custom manually putted number into the counter number which is already there on display. 
    }
  })
);
export function counterReducer(state: any, action: any) {
  // state and action are 2 things which we will update, so thats why we have to pass it.
  return _counterReducer(state, action);
}
