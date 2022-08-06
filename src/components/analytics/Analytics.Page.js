import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { PageSection } from '../../styles/Global';

export default function AnalyticsPage() {
  return (
    <PageSection>
      <div className="container">
        <div className="top">
          <h2>Analytics</h2>
          <div className="date">
            <NavLink to="today">Today</NavLink>
            <NavLink to="week">This week</NavLink>
            <NavLink to="month">This month</NavLink>
            <NavLink to="year">This year</NavLink>
          </div>
        </div>

        <div className="down">
          <Outlet />
        </div>
      </div>
    </PageSection>
  );
}
