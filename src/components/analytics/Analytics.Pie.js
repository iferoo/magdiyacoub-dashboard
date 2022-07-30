import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function AnalyticsPie({ data, COLORS }) {
  return (
    <div className="char">
      <div className="charTitle">
        <h1>Rooms</h1>
      </div>
      <div className="charGraph">
        <PieChart width={250} height={250}>
          <Pie
            data={data}
            cx={120}
            cy={120}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
      {/* <div className="charInfo">
        <div>
          <span className={data[0].name}></span>
          <p>{data[0].name}</p>
        </div>
        <div>
          <span className={data[1].name}></span>
          <p>{data[1].name}</p>
        </div>
      </div> */}
    </div>
  );
}
