import React from 'react';
import { useNavigate } from 'react-router-dom';

function RoleSelection() {
  const navigate = useNavigate();

  return (
    <div className="role-selection">
      <h2>Select Your Role</h2>
      <div className="role-cards">
        <div className="role-card" onClick={() => navigate('/login?role=student')}>
          <img src="https://img.icons8.com/ios-filled/100/graduation-cap.png" alt="Student" />
          <p>Student</p>
        </div>
        <div className="role-card" onClick={() => navigate('/login?role=admin')}>
          <img src="https://img.icons8.com/ios-filled/100/admin-settings-male.png" alt="Admin" />
          <p>Admin</p>
        </div>
      </div>
    </div>
  );
}

export default RoleSelection;
