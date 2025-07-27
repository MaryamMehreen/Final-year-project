import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Student A', switches: 3 },
  { name: 'Student B', switches: 5 },
  { name: 'Student C', switches: 1 },
  { name: 'Student D', switches: 4 }
];

const TabSwitchBar = () => (
  <div className="chart-card">
    <h4>Tab Switching Frequency</h4>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="switches" fill="#124463" barSize={40} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default TabSwitchBar;