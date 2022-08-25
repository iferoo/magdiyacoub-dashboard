import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';

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

import AOS from 'aos';
import 'aos/dist/aos.css';

const lightTheme = {
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

const darkTheme = {
  colors: {
    primary: '#000000',
    secondary: '#f52225',
    third: '#0197f6',
    fourth: '#e3c98d',
    fifth: '#448fa3',
  },
  fontsColors: {
    primary: '#000000',
    secondary: '#ffffff',
    third: '#8D8B84',
  },
  mobile: '768px',
};

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  const navigate = useNavigate();
  // const { token } = useSelector(state => state.auth);

  useEffect(() => {
    if (localStorage.getItem('token') == null) {
      navigate('/login');
    }
  }, []);

  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Routes>
          <Route
            path="/"
            element={<AppPages theme={theme} toggleTheme={toggleTheme} />}
          >
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
