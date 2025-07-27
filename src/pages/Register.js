import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Register.css';

function Register() {
  const navigate = useNavigate();
  const location = useLocation();
  const role = location.state?.role || 'student';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const userExists = users.find(
      (user) => user.email === formData.email && user.role === role
    );

    if (userExists) {
      setError('❌ User already registered with this email and role.');
      return;
    }

    const newUser = { ...formData, role };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(newUser)); // ✅ Save current user
    setSuccess('✅ Registered successfully. Redirecting to login...');

    setTimeout(() => {
      navigate('/login', { state: { role } });
    }, 1500);
  };

  const backgroundImage = `${process.env.PUBLIC_URL}/logo.png`; // ✅ Public image path

  return (
    <div
      className="register-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <button className="back-button" onClick={() => navigate(-1)}>← Back</button>

      <form className="register-form" onSubmit={handleSubmit}>
        <h2>{role === 'admin' ? 'Admin Register' : 'Student Register'}</h2>

        <input
          type="text"
          name="name"
          placeholder="👤 Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="✉️ Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="🔑 Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        {error && <p className="error-text">{error}</p>}
        {success && <p className="success-text">{success}</p>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
