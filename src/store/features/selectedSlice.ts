import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RepoSelector } from './commitSlice';

type InitialState = {
  selectedData: RepoSelector;
};

const defaultSelected = {
  first: 'test-home',
  second: 'test-serve',
  name: 'luigifgp',
  mode: true,
};

const initialState: InitialState = {
  selectedData: defaultSelected,
};

// Generates pending, fulfilled and rejected action types
export const fetchSelectedData = createAsyncThunk('form/selected', async (selected: RepoSelector) => {
  return selected;
});

// new reducer slices
const githubSlice = createSlice({
  name: 'SelectedData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSelectedData.fulfilled, (state, action: PayloadAction<any>) => {
      state.selectedData = action.payload;
    });
  },
});

export default githubSlice.reducer;
