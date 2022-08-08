import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { patientsUrl } from '../util/url';
import { succNotify } from '../util/Notification';

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

export const addPatients = createAsyncThunk(
  'patient/addPatients',
  async (patient, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;

    return axios
      .post(
        patientsUrl,
        {
          Img: patient.Img[0],
          Name: patient.Name,
          Status: patient.Status,
          Condition: patient.Condition,
          Bed: patient.Bed,
          Age: patient.Age,
          Gender: patient.Gender,
          RegisterDate: patient.RegisterDate,
          Branch: patient.Branch,
          Disease: patient.Disease,
          History: patient.History,
          OtherDiseases: patient.OtherDiseases,
          Diabeyic: patient.Diabeyic,
          Smoker: patient.Smoker,
          Nurse: patient.Nurse,
          Doctor: patient.Doctor,
        },
        {
          headers: {
            'content-type': 'multipart/form-data',
          },
        }
      )
      .then(function (response) {
        succNotify('Add Successfully');
        dispatch(getPatients());
        return response.data;
      })
      .catch(function (error) {
        return rejectWithValue(error.message);
      });
  }
);

export const updatePatients = createAsyncThunk(
  'patient/updatePatients',
  async (patient, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;

    return axios
      .put(
        patientsUrl + patient.id,
        {
          // Img: patient.Img[0],
          Name: patient.Name,
          Status: patient.Status,
          Condition: patient.Condition,
          Bed: patient.Bed,
          Age: patient.Age,
          Gender: patient.Gender,
          RegisterDate: patient.RegisterDate,
          Branch: patient.Branch,
          Disease: patient.Disease,
          History: patient.History,
          OtherDiseases: patient.OtherDiseases,
          Diabeyic: patient.Diabeyic,
          Smoker: patient.Smoker,
          Nurse: patient.Nurse,
          Doctor: patient.Doctor,
        },
        {
          headers: {
            'content-type': 'multipart/form-data',
          },
        }
      )
      .then(function (response) {
        succNotify('Update Successfully');
        dispatch(getPatients());
        return response.data;
      })
      .catch(function (error) {
        return rejectWithValue(error.message);
      });
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
    //add patients
    [addPatients.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [addPatients.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [addPatients.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //update patients
    [updatePatients.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [updatePatients.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [updatePatients.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default patientSlice.reducer;
