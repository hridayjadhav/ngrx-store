import { createReducer, on } from "@ngrx/store";
import { initialState } from "./posts.state";
import { addPost } from "./posts.actions";


//we need to update addPost, that's why we use addPost, and it will take the state as an argument,
//so in the method  we have to return the state and here we have to upgrade the new post.
const _postsReducer = createReducer(initialState, on(addPost, (state, action) =>{
    let post = { ...action.post };
    post.id = state.posts.length +1;   //this is bcz we have to take a new id to add in the table.
    return {
        ...state,
        posts : [...state.posts, post],
    } 
}))

export function postsReducer(state: any, action: any){
    return _postsReducer(state, action);

}