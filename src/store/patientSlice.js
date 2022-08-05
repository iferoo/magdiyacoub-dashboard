import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { patientsUrl } from '../util/url';

export const getPatients = createAsyncThunk(
  'patient/getPatients',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(patientsUrl);
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const patientSlice = createSlice({
  name: 'patient',
  initialState: { patients: [], isLoading: false, error: null },
  extraReducers: {
    //get patients
    [getPatients.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getPatients.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.patients = action.payload.data;
    },
    [getPatients.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default patientSlice.reducer;
