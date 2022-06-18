import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { ApiRequest } from '../api-request';
import { UserRepos } from './interfaces';

type InitialState = {
  loading: boolean;
  userRepos: UserRepos[];
  error: string;
};
const initialState: InitialState = {
  loading: false,
  userRepos: [],
  error: '',
};

// Generates pending, fulfilled and rejected action types
export const fetchUserRepos = createAsyncThunk('github/fetchUserRepos', async (name: string) => {
  return await ApiRequest(name);
});

// new reducer slices
const githubSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserRepos.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUserRepos.fulfilled, (state, action: PayloadAction<any[]>) => {
      state.loading = false;
      state.userRepos = action.payload;
      state.error = '';
    });
    builder.addCase(fetchUserRepos.rejected, (state, action) => {
      state.loading = false;
      state.userRepos = [];
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export default githubSlice.reducer;
