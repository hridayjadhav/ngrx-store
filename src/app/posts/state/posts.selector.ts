    import { createFeatureSelector, createSelector } from "@ngrx/store";
    import { PostsState } from "./posts.state";


    const getPostsState = createFeatureSelector<PostsState>('posts'); // here we gave what's the type of state (PostsState), and the name i.e (posts)

    export const getPosts = createSelector(getPostsState, (State) => {
        return State.posts;
    });
