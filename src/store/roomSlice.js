import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { bedUrl, roomUrl } from '../util/url';

export const getRooms = createAsyncThunk(
  'room/getRooms',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(roomUrl);
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addRoom = createAsyncThunk(
  'room/addRoom',
  async (room, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(roomUrl, {
        method: 'POST',
        body: JSON.stringify({ Name: room.Name }),
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

export const updateRoom = createAsyncThunk(
  'room/updateRoom',
  async (room, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(roomUrl + room.room.id, {
        method: 'PUT',
        body: JSON.stringify({ Name: room.Name }),
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

export const deleteRoom = createAsyncThunk(
  'room/deleteRoom',
  async (room, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(roomUrl + room.id, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      return room;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteRoomBed = createAsyncThunk(
  'room/deleteRoomBed',
  async (bed, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(bedUrl + bed.id, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      return bed;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const insertRoomBed = createAsyncThunk(
  'room/insertRoomBed',
  async (bed, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(bedUrl, {
        method: 'POST',
        body: JSON.stringify(bed),
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

const roomSlice = createSlice({
  name: 'room',
  initialState: { rooms: [], isLoading: false, error: null },
  extraReducers: {
    //get rooms
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

    //add rooms
    [addRoom.pending]: (state, action) => {
      state.isLoading = false;
      state.error = null;
    },
    [addRoom.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.rooms.push(action.payload);
    },
    [addRoom.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //delete rooms
    [deleteRoom.pending]: (state, action) => {
      state.isLoading = false;
      state.error = null;
    },
    [deleteRoom.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.rooms = state.rooms.filter(room => room.id !== action.payload.id);
    },
    [deleteRoom.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //update rooms
    [updateRoom.pending]: (state, action) => {
      state.isLoading = false;
      state.error = null;
    },
    [updateRoom.fulfilled]: (state, action) => {
      state.isLoading = false;
      const newRooms = state.rooms.map(room => {
        if (room.id === action.payload.id) {
          return { ...room, Name: action.payload.Name };
        }
        return { ...room };
      });
      state.rooms = newRooms;
    },
    [updateRoom.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //insert Bed
    [insertRoomBed.pending]: (state, action) => {
      state.isLoading = false;
      state.error = null;
    },
    [insertRoomBed.fulfilled]: (state, action) => {
      state.isLoading = false;

      const roomIndex = state.rooms.findIndex(
        room => room.id === action.payload.RoomID
      );

      const selectedRoom = state.rooms.find(
        room => room.id === action.payload.RoomID
      );

      selectedRoom.Beds.push(action.payload);

      state.rooms[roomIndex] = selectedRoom;
    },
    [insertRoomBed.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //delete bed
    [deleteRoomBed.pending]: (state, action) => {
      state.isLoading = false;
      state.error = null;
    },
    [deleteRoomBed.fulfilled]: (state, action) => {
      state.isLoading = false;

      const selectedRoom = state.rooms.find(
        room => room.id === action.payload.RoomID
      );

      const beds = selectedRoom.Beds.filter(
        bed => bed.id !== action.payload.id
      );

      selectedRoom.Beds = beds;

      const roomIndex = state.rooms.findIndex(
        room => room.id === action.payload.RoomID
      );

      state.rooms[roomIndex] = selectedRoom;
    },
    [deleteRoomBed.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default roomSlice.reducer;
