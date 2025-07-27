import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  const handleLogout = () => {
    localStorage.clear();
    setMenuOpen(false);
    navigate('/login');
  };

  useEffect(() => {
    const role = localStorage.getItem('userRole');         // "student" or "admin"
    const authToken = localStorage.getItem('authToken');   // "student-token" or "admin-token"
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const currentUser = users.find(
      (u) => `${u.role}-token` === authToken
    );

    if (currentUser) {
      setUserEmail(currentUser.email);
    }
  }, []);

  return (
    <nav className="custom-navbar">
      <div className="navbar-left">
        <FaArrowLeft className="nav-icon" onClick={goBack} title="Go Back" />
        <h1 className="navbar-title">AI VIRTUAL INVIGILATOR</h1>
      </div>

      {/* User Icon Trigger */}
      <div className="user-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <FaUserCircle size={28} title="User Menu" />
      </div>

      {menuOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-item profile-info">
            <FaUserCircle size={24} style={{ marginRight: "10px" }} />
            <div>
              <strong>User</strong>
              <p style={{ fontSize: "12px", margin: 0 }}>{userEmail || 'No Email'}</p>
            </div>
          </div>

          <div className="dropdown-item" onClick={handleLogout}>
            <FaSignOutAlt size={18} style={{ marginRight: "10px" }} />
            Sign Out
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
