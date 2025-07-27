import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Login.css';

function Login() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const role = location.state?.role || 'student';

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(
      (u) =>
        u.email === credentials.email &&
        u.password === credentials.password &&
        u.role === role
    );

    if (user) {
      localStorage.setItem('authToken', `${role}-token`);
      localStorage.setItem('userRole', role);
      localStorage.setItem('currentUser', JSON.stringify(user)); // ✅ Save logged in user
      navigate(role === 'admin' ? '/AdminDashboard' : '/startUp');
    } else {
      setError('❌ Invalid credentials or not registered');
    }
  };

  const handleRegister = () => {
    navigate('/register', { state: { role } });
  };

  const backgroundImage = `${process.env.PUBLIC_URL}/logo.png`; // ✅ from public folder

  return (
    <div
      className="login-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <button className="back-button" onClick={() => navigate(-1)}>← Back</button>

      <form className="login-form" onSubmit={handleSubmit}>
        <h2>{role === 'admin' ? 'Admin Login' : 'Student Login'}</h2>

        <input
          type="email"
          name="email"
          placeholder="✉️ Email"
          value={credentials.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="🔑 Password"
          value={credentials.password}
          onChange={handleChange}
          required
        />

        {error && <p className="error-text">{error}</p>}

        <button type="submit">Login</button>

        <div className="register-options">
          <p>Don't have an account?</p>
          <button type="button" onClick={handleRegister} className="register-btn">
            Register as {role === 'admin' ? 'Admin' : 'Student'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
