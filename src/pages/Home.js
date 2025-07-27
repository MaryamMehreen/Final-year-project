import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>AI Virtual Invigilator</h1>
        <p>
          A smart invigilation system integrated with Moellium LMS to monitor online exams using eye tracking and behavior analysis.
        </p>
        <Link to="/startUp" className="cta-button">Start Monitoring</Link>
      </div>

      <div className="features-section">
       
       <div className="features-section">
  <h2 className="features-title">🔍 Key Features</h2>
  <div className="features-grid">
    <div className="feature-card">
      <img src="https://cdn-icons-png.flaticon.com/512/1548/1548682.png" alt="Eye Tracking" />
      <h3>Real-Time Eye Tracking</h3>
      <p>Detects student focus, distractions, and gaze patterns during exams.</p>
    </div>
    <div className="feature-card">
      <img src="https://cdn-icons-png.flaticon.com/512/2601/2601200.png" alt="Behavior Analysis" />
      <h3>Behavior Analysis</h3>
      <p>Monitors tab switching, head movement, and suspicious activity in real time.</p>
    </div>
    <div className="feature-card">
      <img src="https://cdn-icons-png.flaticon.com/512/2331/2331970.png" alt="LMS Integration" />
      <h3>Moellium LMS Integration</h3>
      <p>Seamlessly syncs with Riphah University’s Moellium platform for live performance data.</p>
    </div>
    <div className="feature-card">
      <img src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" alt="Reports" />
      <h3>Reports & Alerts</h3>
      <p>Generates alerts and analytics instantly after the exam session ends.</p>
    </div>
  <div className="feature-card">
  <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Admin" />
  <h3>Admin Details</h3>
  <p>Admins can configure settings, monitor all students, and access full reports.</p>
</div>

<div className="feature-card">
  <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="User" />
  <h3>User Details</h3>
  <p>Students can track their monitoring status and review exam reports easily.</p>
</div>

  </div>
</div>

      </div>

      <div className="university-section">
        <h2>Developed for Riphah International University</h2>
        <p>
          Our system is tailored to enhance the academic integrity of online assessments at Riphah International University.
          The integration with Moellium LMS ensures smooth exam experience and transparent monitoring.
        </p>
      </div>

      <div className="contact-cta">
        <h2>Need Help or Demo?</h2>
        <p>We offer live demonstrations, setup support, and documentation.</p>
        <Link to="/contact" className="cta-button">Contact Us</Link>
      </div>
    </div>
  );
}

export default Home;
