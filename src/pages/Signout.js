import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SignOut = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear any session or token data
    localStorage.clear();

    // Redirect to login after 3 seconds
    const timer = setTimeout(() => {
      navigate('/login');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>👋 You have been signed out</h1>
      <p style={styles.subtext}>Redirecting to login page...</p>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, #124463, #5f7b99)",
    color: "#fff",
    fontFamily: "'Segoe UI', sans-serif",
    textAlign: "center",
  },
  heading: {
    fontSize: "36px",
    marginBottom: "20px",
  },
  subtext: {
    fontSize: "18px",
    opacity: 0.9,
  },
};

export default SignOut;
