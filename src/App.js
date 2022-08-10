import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PatientsPage from './components/patients/Patients.Page';
import ViewPatient from './components/patients/Patients.View';
import PatientsAdd from './components/patients/Patients.Add';

import StaffPage from './components/staff/Staff.Page';
import ViewStaff from './components/staff/Staff.View';
import UpdateStaff from './components/staff/Staff.Update';
import AddStaff from './components/staff/Staff.Add';

import RoomsPage from './components/rooms/Rooms.Page';
import ViewRooms from './components/rooms/Rooms.View';

import AnalyticsPage from './components/analytics/Analytics.Page';
import TodayAnalytics from './components/analytics/Analytics.Today';

import LogIn from './components/sign/Sign.LogIn';
import SignUp from './components/sign/Sign.SignUp';
import ForgetPassword from './components/sign/Sign.ForgetPassword';
import SignPage from './pages/SignPages';

import AppPages from './pages/AppPages';

import NotFoundPage from './pages/NotFoundPage';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/Global';

const theme = {
  colors: {
    primary: '#ffffff',
    secondary: '#f52225',
    third: '#0197f6',
    fourth: '#e3c98d',
    fifth: '#448fa3',
  },
  fontsColors: {
    primary: '#000000',
    secondary: '#3C4047',
    third: '#8D8B84',
  },
  mobile: '768px',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<AppPages />}>
            <Route index element={<Navigate to="/analytics" replace />} />
            <Route path="patients" element={<PatientsPage />}>
              <Route index element={<Navigate to="view" replace />} />
              <Route path="view" element={<ViewPatient />} />
              <Route path="add" element={<PatientsAdd />} />
            </Route>
            <Route path="/rooms" element={<RoomsPage />}>
              <Route index element={<ViewRooms />} />
            </Route>
            <Route path="/staff" element={<StaffPage />}>
              <Route index element={<Navigate to="view" replace />} />
              <Route path="view" element={<ViewStaff />} />
              <Route path="Update" element={<UpdateStaff />} />
              <Route path="add" element={<AddStaff />} />
            </Route>
            <Route path="/analytics" element={<AnalyticsPage />}>
              <Route index element={<TodayAnalytics />} />
            </Route>
          </Route>
          <Route path="/" element={<SignPage />}>
            <Route path="login" element={<LogIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="forgetpassword" element={<ForgetPassword />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <ToastContainer />
      </>
    </ThemeProvider>
  );
}

export default App;
