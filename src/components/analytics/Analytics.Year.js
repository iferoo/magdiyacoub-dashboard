import React from 'react';

import AnalyticsPie from './Analytics.Pie';
import { AnalyticsSection } from '../../styles/Analytics.Styled';

export default function YearAnalytics() {
  var rooms = [
    { name: 'Full', value: 10 },
    { name: 'Free', value: 30 },
  ];

  var patients = [
    { name: 'Dangerous', value: 30 },
    { name: 'Under Control', value: 40 },
    { name: 'Stable', value: 50 },
  ];

  const RCOLORS = ['#888888', 'green'];
  const PCOLORS = ['#ff2828', '#a1df3f', '#00C49F'];
  return (
    <AnalyticsSection>
      <AnalyticsPie data={rooms} COLORS={RCOLORS} />
      <AnalyticsPie data={patients} COLORS={PCOLORS} />
    </AnalyticsSection>
  );
}
