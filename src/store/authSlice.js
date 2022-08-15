import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loginUrl, registerUrl } from '../util/url';

export const logIn = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const res = await fetch(loginUrl, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    const data = await res.json();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (user, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(registerUrl, {
        method: 'POST',
        body: JSON.stringify({
          first_name: user.firstName,
          last_name: user.lastName,
          username: user.username,
          email: user.email,
          password: user.password,
          is_superuser: true,
          is_staff: true,
          is_active: true,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: { isLoggedIn: false, userName: '', token: null, error: true },
  reducers: {
    removeToken: state => {
      state.token = null;
    },
  },
  extraReducers: {
    //login
    [logIn.pending]: (state, action) => {
      state.isLoggedIn = true;
    },
    [logIn.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      state.userName = action.payload.user_info.username;
      state.token = action.payload.token;
      localStorage.setItem('token', action.payload.token);
    },
    [logIn.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = false;
    },
    //sign up
    [signUp.pending]: (state, action) => {
      state.isLoggedIn = true;
    },
    [signUp.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      state.userName = action.payload.user_info.username;
      state.token = action.payload.token;
      localStorage.setItem('token', action.payload.token);
    },
    [signUp.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = false;
    },
  },
});

export const { removeToken } = authSlice.actions;
export default authSlice.reducer;
