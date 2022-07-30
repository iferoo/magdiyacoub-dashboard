import { configureStore } from '@reduxjs/toolkit';
import books from './bookSlice';
import auth from './authSlice';
import report from './reportSlice';
import rooms from './roomSlice';

const store = configureStore({
  reducer: {
    books,
    auth,
    report,
    rooms,
  },
});

export default store;
