// src/components/charts/FrequencyChart.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Student A', frequency: 3 },
  { name: 'Student B', frequency: 5 },
  { name: 'Student C', frequency: 2 },
  { name: 'Student D', frequency: 7 },
];

const FrequencyChart = () => {
  return (
    <div>
      <h2>📊 Cheating Frequency</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="frequency" fill="#5f7b99" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FrequencyChart;
