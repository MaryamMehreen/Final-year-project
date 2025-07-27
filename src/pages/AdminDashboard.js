import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';
import { FaUserGraduate, FaClipboardList, FaChartBar } from 'react-icons/fa';

function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
      </div>

      {/* <h2 className="dashboard-title">Manage Your System</h2> */}

      <div className="card-container">
        <div className="dashboard-card" onClick={() => navigate('/StudentManagement')}>
          <FaUserGraduate className="dashboard-icon" />
          <h3>Manage Students</h3>
          <p>Add, view, and update student information.</p>
        </div>

        <div className="dashboard-card" onClick={() => navigate('/exam-management')}>
          <FaClipboardList className="dashboard-icon" />
          <h3>Manage Exams</h3>
          <p>Create and organize upcoming exams.</p>
        </div>

        <div className="dashboard-card" onClick={() => navigate('/admin-report')}>
          <FaChartBar className="dashboard-icon" />
          <h3>View Reports</h3>
          <p>Analyze student performance and results.</p>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
