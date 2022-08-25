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



export default function AnalyticsStaff({ data }) {
  return (
    <div className="char" data-aos="fade-up">
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
