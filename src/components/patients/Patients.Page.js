import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

import { PageSection } from "../../styles/styles";

export default function PatientsPage() {
  const { pathname } = useLocation();
  const [activeLink, setActiveLink] = useState(1);

  useEffect(() => {
    const handleActiveLink = () => {
      pathname === "/patients/add" ? setActiveLink(2) : setActiveLink(1);
    };

    handleActiveLink();
  }, [pathname]);

  return (
    <PageSection>
      <div className="container">
        <div className="top">
          <h2>Patients</h2>
          <div>
            <Link
              to=""
              className={`${activeLink === 1 && "active"}`}
              onClick={() => setActiveLink(1)}
            >
              View
            </Link>
            <Link
              to="add"
              className={`${activeLink === 2 && "active"}`}
              onClick={() => setActiveLink(2)}
            >
              Add
            </Link>
          </div>
        </div>

        <div className="down">
          <Outlet />
        </div>
      </div>
    </PageSection>
  );
}
