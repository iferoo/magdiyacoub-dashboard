import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";
export default function AppPages() {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
}
