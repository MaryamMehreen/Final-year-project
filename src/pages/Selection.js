import React from "react";
import { useNavigate } from "react-router-dom";
import "./Selection.css"; // You can keep this for layout/styling only (not for background)

const Selection = () => {
  const navigate = useNavigate();

  const handleLogin = (role) => {
    navigate("/login", { state: { role } });
  };

  return (
    <div
      className="selection-page"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/logo.png'})`, // ✅ Image from public folder
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100vw',
      }}
    >
      <div className="role-container">
        <h2 className="headtitle">🎓 Choose Your Role</h2>
        <p className="subtitle">Access personalized features by selecting your role</p>

        <div className="role-grid">
          <div
            className="role-box student-box"
            onClick={() => handleLogin("student")}
          >
            <img
              src="https://img.icons8.com/ios-filled/100/graduation-cap.png"
              alt="Student"
              className="role-icon"
            />
            <h3>Student</h3>
            <p>Click to Login or Register</p>
          </div>

          <div
            className="role-box admin-box"
            onClick={() => handleLogin("admin")}
          >
            <img
              src="https://img.icons8.com/ios-filled/100/admin-settings-male.png"
              alt="Admin"
              className="role-icon"
            />
            <h3>Admin</h3>
            <p>Click to Login or Register</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Selection;
