import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UserProflie.css'; // Optional: style file

function UserProfile() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('currentUser'));

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userRole');
    localStorage.removeItem('currentUser');
    navigate('/'); // Redirect to homepage or login
  };

  if (!user) {
    return <p>No user logged in</p>;
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        <p>Role: {user.role}</p>
        <button onClick={handleLogout}>Sign Out</button>
      </div>
    </div>
  );
}

export default UserProfile;
