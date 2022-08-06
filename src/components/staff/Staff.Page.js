import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import { PageSection } from '../../styles/Global';

export default function StaffPage() {
  return (
    <PageSection>
      <div className="container">
        <div className="top">
          <h2>Staff</h2>
          <div>
            <NavLink to="view">View</NavLink>
            <NavLink to="update">Update</NavLink>
            <NavLink to="add">Add</NavLink>
          </div>
        </div>

        <div className="down">
          <Outlet />
        </div>
      </div>
    </PageSection>
  );
}
