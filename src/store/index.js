import { configureStore } from '@reduxjs/toolkit';
import books from './bookSlice';
import auth from './authSlice';
import report from './reportSlice';
import rooms from './roomSlice';
import patients from './patientSlice';
import doctors from './doctorSlice';
import nurses from './nurseSlice';
import beds from './bedSlice';

const store = configureStore({
  reducer: {
    books,
    auth,
    report,
    rooms,
    patients,
    doctors,
    nurses,
    beds,
  },
});

export default store;
