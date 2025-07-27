import React from 'react';
import './startUp.css';
import { Link } from 'react-router-dom';
// import logo from '../public/logo.png'; // adjust path as needed

const StartPage = () => {
  return (
    <div className="container">
      <div className="card fade-in">
         <div className="logo-container">
          <img src="riphah1.png" alt="Logo" className="logo-image" />
        </div>
        <h1 className="title">AI Virtual Invigilator</h1>
        <p className="subtitle">
          Smart proctoring system powered by AI, integrated with Moellium LMS.
        </p>

        <Link to="/instructions">
          <button className="start-btn">🚀 Start Exam</button>
        </Link>

        <div className="features">
          <p>✔️ Ensure Academic Integrity</p>
          <p>✔️ Monitor Student Behavior</p>
          <p>✔️ Automate Invigilation</p>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
