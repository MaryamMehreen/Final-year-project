import React from 'react';
import LiveStudentGauge from '../components/charts/LiveStudentGauge';
import TabSwitchBar from '../components/charts/TabSwitchBar';
import NetworkDisconnectBar from '../components/charts/NetworkDisconnectBar';
import EyeMovementBar from '../components/charts/EyeMovementBar';
import CheatingSummaryPie from '../components/charts/CheatingSummaryPie';
import FrequencyChart from '../components/charts/FrequencyChart';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>🎓 AI Invigilator Monitoring Dashboard</h2>
      <div className="dashboard-container">

  <div className="chart-row">
    <div className="chart-card"><LiveStudentGauge /></div>
    <div className="chart-card"><CheatingSummaryPie /></div>
  </div>

  <div className="chart-row">
    <div className="chart-card"><TabSwitchBar /></div>
    <div className="chart-card"><EyeMovementBar /></div>
  </div>

  <div className="chart-row">
    <div className="chart-card"><NetworkDisconnectBar /></div>
    <div className="chart-card"><FrequencyChart /></div>
  </div>
</div>


    </div>
  );
};

export default Dashboard;
