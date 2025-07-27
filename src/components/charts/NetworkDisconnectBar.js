import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { time: '10:00', disconnects: 1 },
  { time: '10:10', disconnects: 0 },
  { time: '10:20', disconnects: 2 },
  { time: '10:30', disconnects: 3 },
  { time: '10:40', disconnects: 1 }
];

const NetworkDisconnectBar = () => (
  <div className="chart-card">
    <h4>Network Disconnect Trends</h4>
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorDisconnects" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#124463" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#124463" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="time" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="disconnects" stroke="#124463" fillOpacity={1} fill="url(#colorDisconnects)" />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

export default NetworkDisconnectBar;