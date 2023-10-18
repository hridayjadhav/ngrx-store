import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostsState } from './posts.state';

const getPostsState = createFeatureSelector<PostsState>('posts'); // here we gave what's the type of state (PostsState), and the name i.e (posts)

export const getPosts = createSelector(getPostsState, (state) => {
  return state.posts;
});

const selectPostsState = createFeatureSelector<PostsState>('posts');

export const selectPosts = createSelector(
  selectPostsState,
  (state) => state.posts
);

export const selectPostById = (id: any) =>
  createSelector(selectPosts, (posts) => posts.find((post) => post.id === id));
