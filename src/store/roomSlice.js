import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getRooms = createAsyncThunk(
  'room/getRooms',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(
        'https://feroogbas.pythonanywhere.com/hospital/room/'
      );
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const roomSlice = createSlice({
  name: 'room',
  initialState: { rooms: [], isLoading: false, error: null },
  extraReducers: {
    //get books
    [getRooms.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getRooms.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.rooms = action.payload.data;
    },
    [getRooms.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default roomSlice.reducer;
