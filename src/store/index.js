import { configureStore } from '@reduxjs/toolkit';
import books from './bookSlice';
import auth from './authSlice';
import report from './reportSlice';
import rooms from './roomSlice';
import patients from './patientSlice';

const store = configureStore({
  reducer: {
    books,
    auth,
    report,
    rooms,
    patients,
  },
});

export default store;
