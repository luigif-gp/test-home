import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import commitReducer from './features/commitSlice';
import userDataReducer from './features/userReposSlice';

const store = configureStore({
  reducer: {
    commits: commitReducer,
    userData: userDataReducer,
  },
  middleware: getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
