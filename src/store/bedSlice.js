import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { bedUrl } from '../util/url';

export const getBeds = createAsyncThunk('bed/getBeds', async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const res = await fetch(bedUrl);
    const data = await res.json();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const bedSlice = createSlice({
  name: 'bed',
  initialState: { beds: [], isLoading: false, error: null },
  extraReducers: {
    //get beds
    [getBeds.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getBeds.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.beds = action.payload.data;
    },
    [getBeds.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default bedSlice.reducer;
