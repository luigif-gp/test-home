import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import githubReducer from '../components/home/homeSlice';

const store = configureStore({
  reducer: {
    github: githubReducer,
  },
  middleware: getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
