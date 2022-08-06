import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { doctorsUrl } from '../util/url';

export const getDoctors = createAsyncThunk(
  'doctor/getDoctors',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(doctorsUrl);
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const doctorSlice = createSlice({
  name: 'doctor',
  initialState: { doctors: [], isLoading: false, error: null },
  extraReducers: {
    //get doctors
    [getDoctors.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getDoctors.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.doctors = action.payload.data;
    },
    [getDoctors.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default doctorSlice.reducer;
