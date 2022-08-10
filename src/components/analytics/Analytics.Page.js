import React from 'react';
import { Outlet } from 'react-router-dom';
import { AnalyticsSection } from '../../styles/Analytics.Styled';
import AnalyticsWidget from './Analytics.Widget';

export default function AnalyticsPage() {
  return (
    <AnalyticsSection>
      <div className="container">
        <div className="top">
          <h2>Analytics</h2>
        </div>

        <div className="down">
          <AnalyticsWidget />
          <Outlet />
        </div>
      </div>
    </AnalyticsSection>
  );
}
