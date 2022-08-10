import React from 'react';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
  BarChart,
} from 'recharts';

const data = [
  {
    name: 'On Duty',
    Doctors: 20,
    Nurses: 35,
  },
  {
    name: 'Next Shift',
    Doctors: 15,
    Nurses: 20,
  },
  {
    name: 'Vacation',
    Doctors: 35,
    Nurses: 40,
  },
];

export default function AnalyticsStaff() {
  return (
    <div className="char">
      <div className="charTitle">
        <h1>Staff</h1>
      </div>
      <div className="charGraph">
        <BarChart width={930} height={450} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Doctors" fill="#82ca9d" />
          <Bar dataKey="Nurses" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
}
