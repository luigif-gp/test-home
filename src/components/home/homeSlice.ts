import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

type User = {
  id: number;
  name: string;
};
type InitialState = {
  loading: boolean;
  github: any;
  error: string;
};
const initialState: InitialState = {
  loading: false,
  github: [],
  error: '',
};

// Generates pending, fulfilled and rejected action types
export const fetchGithub = createAsyncThunk('github/fetchGithub', async (thunkAPI) => {
  const url = process.env.REACT_APP_API;
  if (!url) {
    throw Error('credentials are missing');
  }
  const response = await fetch('https://api.github.com/users/luigifgp/repos').then((data) => data.json());

  return response;
});

const githubSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGithub.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchGithub.fulfilled, (state, action: PayloadAction<any[]>) => {
      state.loading = false;
      state.github = action.payload;
      state.error = '';
    });
    builder.addCase(fetchGithub.rejected, (state, action) => {
      state.loading = false;
      state.github = [];
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export default githubSlice.reducer;
