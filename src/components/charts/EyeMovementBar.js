import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { time: '10:00', movement: 1 },
  { time: '10:10', movement: 3 },
  { time: '10:20', movement: 5 },
  { time: '10:30', movement: 2 },
  { time: '10:40', movement: 6 }
];

const EyeMovementLine = () => (
  <div className="chart-card">
    <h4>Eye Movement Over Time</h4>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="movement" stroke="#5f7b99" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default EyeMovementLine;
