import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Tab Switch', value: 5 },
  { name: 'Eye Movement', value: 3 },
  { name: 'Network Loss', value: 2 }
];

const COLORS = ['#124463', '#5f7b99', '#87a8c3'];

const CheatingSummaryPie = () => (
  <div className="chart-card">
    <h4>Cheating Types Summary</h4>
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  </div>
);

export default CheatingSummaryPie;