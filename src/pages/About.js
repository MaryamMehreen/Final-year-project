import React from 'react';
import { FaEye, FaUserShield, FaBrain, FaUsers, FaLaptopCode } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div style={styles.wrapper}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.title}>👁️ About EyeTracking Invigilator</h1>
        <p style={styles.subtitle}>
          EyeTracking Invigilator is an AI-powered online proctoring system designed to ensure exam integrity by monitoring eye movements, preventing tab switching, and recording student behavior throughout the exam.
        </p>
      </section>

      {/* Features Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>🔍 Key Features</h2>
        <div style={styles.features}>
          <div style={styles.card}>
            <FaEye size={40} color="#3498db" />
            <h3>Real-Time Eye Tracking</h3>
            <p>Monitors where the student is looking during the exam to detect cheating attempts like looking away or talking to someone.</p>
          </div>
          <div style={styles.card}>
            <FaUserShield size={40} color="#e67e22" />
            <h3>Behavior Monitoring</h3>
            <p>Detects suspicious activities such as tab switching, camera disabling, or multiple warnings and takes appropriate action.</p>
          </div>
          <div style={styles.card}>
            <FaBrain size={40} color="#2ecc71" />
            <h3>AI Decision Making</h3>
            <p>Our system uses AI models to automatically learn and adapt to new cheating patterns and improve invigilation accuracy.</p>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>🎯 Our Mission & Vision</h2>
        <p style={styles.paragraph}>
          Our mission is to build trust in remote education by providing intelligent invigilation tools. We believe that fair assessment is essential for quality education. 
          EyeTracking Invigilator aims to be a complete, affordable, and privacy-respecting solution to online cheating prevention.
        </p>
        <p style={styles.paragraph}>
          Our vision is to become the leading AI-based exam monitoring platform in Pakistan and beyond, supporting universities, training centers, and online educators.
        </p>
      </section>

      {/* Team Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>👩‍💻 Meet the Team</h2>
        <div style={styles.team}>
          <div style={styles.teamCard}>
            <FaUsers size={30} color="#8e44ad" />
            <h4>Asma Sharif</h4>
            <p>Team Lead & React Developer</p>
          </div>
          <div style={styles.teamCard}>
            <FaLaptopCode size={30} color="#2980b9" />
            <h4>Zainab Ahmed</h4>
            <p>Backend & AI Model Integration</p>
          </div>
          <div style={styles.teamCard}>
            <FaLaptopCode size={30} color="#16a085" />
            <h4>Areeba Khan</h4>
            <p>UI/UX Designer & Tester</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} EyeTracking Invigilator — All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  wrapper: {
    fontFamily: "'Poppins', sans-serif",
    color: '#2c3e50',
    padding: '40px',
    background: 'linear-gradient(to bottom, #ffffff, #ecf0f1)',
  },
  hero: {
    textAlign: 'center',
    marginBottom: '60px',
  },
  title: {
    fontSize: '36px',
    marginBottom: '10px',
    color: '#1a2a6c',
  },
  subtitle: {
    fontSize: '18px',
    color: '#555',
    maxWidth: '800px',
    margin: '0 auto',
  },
  section: {
    marginBottom: '50px',
  },
  sectionTitle: {
    fontSize: '28px',
    marginBottom: '25px',
    color: '#34495e',
    textAlign: 'center',
  },
  paragraph: {
    fontSize: '16px',
    lineHeight: '1.7',
    maxWidth: '900px',
    margin: '0 auto 20px',
    textAlign: 'center',
    color: '#444',
  },
  features: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '30px',
  },
  card: {
    flex: '1 1 280px',
    backgroundColor: '#fff',
    padding: '25px',
    borderRadius: '15px',
    textAlign: 'center',
    boxShadow: '0 10px 20px rgba(0,0,0,0.08)',
  },
  team: {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    flexWrap: 'wrap',
  },
  teamCard: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '15px',
    width: '220px',
    textAlign: 'center',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
  },
  footer: {
    textAlign: 'center',
    paddingTop: '30px',
    borderTop: '1px solid #ccc',
    fontSize: '14px',
    color: '#777',
  },
};

export default AboutUs;
