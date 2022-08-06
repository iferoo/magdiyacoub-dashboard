import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { nursesUrl } from '../util/url';

export const getNurses = createAsyncThunk(
  'nurse/getNurses',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(nursesUrl);
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const nurseSlice = createSlice({
  name: 'nurse',
  initialState: { nurses: [], isLoading: false, error: null },
  extraReducers: {
    //get nurses
    [getNurses.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getNurses.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.nurses = action.payload.data;
    },
    [getNurses.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default nurseSlice.reducer;
