import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const data = [
  {
    name: 'Page A',
    stable: 4000,
    dangerous: 2400,
    controled: 2400,
  },
  {
    name: 'Page B',
    stable: 3000,
    dangerous: 2210,
    controled: 1398,
  },
  {
    name: 'Page C',
    stable: 2000,
    dangerous: 2290,
    controled: 9800,
  },
  {
    name: 'Page D',
    stable: 2780,
    dangerous: 2000,
    controled: 3908,
  },
  {
    name: 'Page E',
    stable: 1890,
    dangerous: 2181,
    controled: 4800,
  },
  {
    name: 'Page F',
    stable: 2390,
    dangerous: 2500,
    controled: 3800,
  },
  {
    name: 'Page G',
    stable: 3490,
    dangerous: 2100,
    controled: 4300,
  },
];

export default function AnalyticsPatients() {
  return (
    <div className="char">
      <div className="charTitle">
        <h1>Patients</h1>
      </div>
      <div className="charGraph">
        <LineChart
          width={930}
          height={450}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Line type="monotone" dataKey="stable" stroke="#82ca9d" />
          <Line type="monotone" dataKey="dangerous" stroke="#f52225" />
          <Line type="monotone" dataKey="controled" stroke="#0197f6" />
        </LineChart>
      </div>
    </div>
  );
}
