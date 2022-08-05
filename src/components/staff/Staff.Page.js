import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

import { PageSection } from '../../styles/Global';

export default function StaffPage() {
  const { pathname } = useLocation();
  const [activeLink, setActiveLink] = useState(1);

  useEffect(() => {
    const handleActiveLink = () => {
      pathname === '/staff/update'
        ? setActiveLink(2)
        : pathname === '/staff/add'
        ? setActiveLink(3)
        : setActiveLink(1);
    };

    handleActiveLink();
  }, [pathname]);

  return (
    <PageSection>
      <div className="container">
        <div className="top">
          <h2>Staff</h2>
          <div>
            <Link
              to=""
              className={`${activeLink === 1 && 'active'}`}
              onClick={() => setActiveLink(1)}
            >
              View
            </Link>
            <Link
              to="update"
              className={`${activeLink === 2 && 'active'}`}
              onClick={() => setActiveLink(2)}
            >
              Update
            </Link>
            <Link
              to="add"
              className={`${activeLink === 3 && 'active'}`}
              onClick={() => setActiveLink(3)}
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
