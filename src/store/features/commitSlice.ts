import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { ApiRequest } from '../api-request';
import { Commit } from './interfaces';

interface commitTypes {
  firstTable: Commit[];
  secondTable: Commit[];
}

type InitialState = {
  loading: boolean;
  commit: commitTypes;
  error: string;
};
const initialState: InitialState = {
  loading: false,
  commit: { firstTable: [], secondTable: [] },
  error: '',
};

// Generates pending, fulfilled and rejected action types
export const fetchCommit = createAsyncThunk('github/fetchCommit', async (params: string[]) => {
  const response = await {
    firstTable: ApiRequest(params[0]),
    secondTable: ApiRequest(params[1]),
  };

  return response;
});

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
      state.commit = { firstTable: [], secondTable: [] };
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export default githubSlice.reducer;
