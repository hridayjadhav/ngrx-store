import { createReducer, on } from '@ngrx/store';
import { initialState } from './counter.state';
import { decrement, increment, reset } from './counter.actions';

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
  })
);
export function counterReducer(state: any, action: any) {
  // state and action are 2 things which we will update, so thats why we have to pass it.
  return _counterReducer(state, action);
}
