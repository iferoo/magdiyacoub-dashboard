import React from 'react';

import { ChartsSection } from '../../styles/Analytics.Styled';
import AnalyticsBeds from './Analytics.Beds';
import AnalyticsPatients from './Analytics.Patients';
import AnalyticsStaff from './Analytics.Staff';

export default function TodayAnalytics() {
  return (
    <ChartsSection>
      <AnalyticsPatients />
      <AnalyticsBeds />
      <AnalyticsStaff />
    </ChartsSection>
  );
}
