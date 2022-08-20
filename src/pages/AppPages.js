import React from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from '../components/Sidebar';
export default function AppPages({ theme, toggleTheme }) {
  return (
    <>
      <Sidebar theme={theme} toggleTheme={toggleTheme} />
      <Outlet />
    </>
  );
}
