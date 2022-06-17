import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { ApiRequest } from '../api-request';
import { Commit } from './interfaces';

export interface CommitCards {
  firstCard: Commit[];
  secondCard: Commit[];
}

type InitialState = {
  loading: boolean;
  commit: CommitCards;
  error: string;
};
const initialState: InitialState = {
  loading: false,
  commit: { firstCard: [], secondCard: [] },
  error: '',
};

type Params = {
  repos: string[];
  name: string;
};

// Generates pending, fulfilled and rejected action types
export const fetchCommit = createAsyncThunk('github/fetchCommit', async (params: Params) => {
  const { repos, name } = params;
  const response = {
    firstCard: await ApiRequest([name, repos[0], 'commits']),
    secondCard: await ApiRequest([name, repos[1], 'commits']),
  };

  return response;
});

// new reducer slices
const githubSlice = createSlice({
  name: 'commit',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCommit.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCommit.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.commit = action.payload;
      state.error = '';
    });
    builder.addCase(fetchCommit.rejected, (state, action) => {
      state.loading = false;
      state.commit = { firstCard: [], secondCard: [] };
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export default githubSlice.reducer;
