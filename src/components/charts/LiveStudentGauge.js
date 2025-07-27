import React from 'react';
import { RadialBarChart, RadialBar, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Active', uv: 80, fill: '#124463' },
  { name: 'Inactive', uv: 20, fill: '#5f7b99' }
];

const LiveStudentGauge = () => (
  <div className="chart-card">
    <h4>Live Student Activity %</h4>
    <ResponsiveContainer width="100%" height={300}>
      <RadialBarChart
        innerRadius="20%"
        outerRadius="90%"
        barSize={18}
        data={data}
      >
        <RadialBar minAngle={15} background clockWise dataKey="uv" />
        <Legend iconSize={10} layout="horizontal" verticalAlign="bottom" align="center" />
        <Tooltip />
      </RadialBarChart>
    </ResponsiveContainer>
  </div>
);

export default LiveStudentGauge;
