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

export const addDoctor = createAsyncThunk(
  'doctor/addDoctors',
  async (doctor, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(doctorsUrl, {
        method: 'POST',
        body: JSON.stringify(doctor),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      //report
      const data = await res.json();
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateDoctor = createAsyncThunk(
  'doctor/updateDoctors',
  async (doctor, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;
    try {
      const res = await fetch(doctorsUrl + doctor.id, {
        method: 'PUT',
        body: JSON.stringify(doctor),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      //report
      const data = await res.json();
      dispatch(getDoctors());
      return data.data;
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

    //add doctors
    [addDoctor.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [addDoctor.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.doctors.push(action.payload.data);
    },
    [addDoctor.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //aupdate doctors
    [updateDoctor.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [updateDoctor.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [updateDoctor.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default doctorSlice.reducer;
