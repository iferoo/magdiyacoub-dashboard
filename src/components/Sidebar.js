import React, { useState } from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";

import { ImProfile } from "react-icons/im";
import { FaBed } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";
import { BsFillChatTextFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { GiHamburgerMenu } from "react-icons/gi";

import { SideBar } from "../styles/Sidebar.Styled";


export default function Sidebar() {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const [navbarState, setNavbarState] = useState(false);

  const html = document.querySelector("html");
  html.addEventListener("click", () => setNavbarState(false));

  return (
    <>
      <SideBar>
        <div className="top">
          <div className="responsive">
            <Link className="brand" to="/">
              <span>
                <img src="/assets/magdi-yacoub-logo.png" alt="logo" />
              </span>
            </Link>
            <div className="toggle">
              {navbarState ? (
                <VscChromeClose onClick={() => setNavbarState(false)} />
              ) : (
                <GiHamburgerMenu
                  onClick={(e) => {
                    e.stopPropagation();
                    setNavbarState(true);
                  }}
                />
              )}
            </div>
          </div>

          <div className={`links ${navbarState ? "showLinks" : ""}`}>
            <NavLink
              to="/patients"
              className={`${
                pathname === "/edit-patient" || pathname === "/add-patient"
                  ? "active"
                  : ""
              }`}
            >
              <ImProfile />
              <span> Patient</span>
            </NavLink>
            <NavLink to="/rooms">
              <FaBed />
              <span> Rooms</span>
            </NavLink>
            <NavLink to="/staff">
              <MdEngineering />
              <span> Staff</span>
            </NavLink>
            <NavLink to="/analytics">
              <BsFillChatTextFill />
              <span> Analytics</span>
            </NavLink>
          </div>
          
        </div>

        <div className={`logout ${navbarState ? "showLogout" : ""}`}>
          <Link
            to="/login"
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/login");
            }}
          >
            <BiLogOut />
            <span> Logout</span>
          </Link>
        </div>
      </SideBar>
    </>
  );
}
