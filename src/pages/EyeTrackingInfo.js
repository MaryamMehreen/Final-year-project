import React from 'react';
import { FaCheckCircle, FaEye, FaLaptopCode, FaUserShield, FaGamepad } from 'react-icons/fa';

const EyeTrackingInfo = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>👁️ Eye Tracking Technology</h1>
      <p style={styles.intro}>
        Eye tracking is a cutting-edge technology that tracks where and how your eyes move. It helps determine attention, focus, drowsiness, and more. This system is being widely adopted in education, research, gaming, and user experience design.
      </p>

      {/* Section: How it Works */}
      <div style={styles.section}>
        <h2>🔧 How Does It Work?</h2>
        <ul style={styles.list}>
          <li><FaCheckCircle /> A webcam or specialized camera captures your facial features.</li>
          <li><FaCheckCircle /> Software uses computer vision (OpenCV, dlib) to detect eye landmarks.</li>
          <li><FaCheckCircle /> Real-time tracking maps your eye movement on the screen.</li>
          <li><FaCheckCircle /> Data is analyzed to detect gaze patterns and focus.</li>
        </ul>
      </div>

      {/* Section: System Requirements */}
      <div style={styles.section}>
        <h2>🖥️ System Requirements</h2>
        <ul style={styles.list}>
          <li><FaCheckCircle /> Working webcam</li>
          <li><FaCheckCircle /> Browser access with camera permissions</li>
          <li><FaCheckCircle /> Stable internet connection (for live monitoring)</li>
          <li><FaCheckCircle /> AI-enabled invigilation backend</li>
        </ul>
      </div>

      {/* Section: Use Cases */}
      <div style={styles.section}>
        <h2>🎯 Use Cases</h2>
        <div style={styles.useCases}>
          <div style={styles.useCaseBox}>
            <FaUserShield size={30} color="#3498db" />
            <h4>Exam Monitoring</h4>
            <p>Detects if a student is looking away from the screen or switching tabs.</p>
          </div>
          <div style={styles.useCaseBox}>
            <FaEye size={30} color="#27ae60" />
            <h4>Accessibility</h4>
            <p>Enables users with disabilities to control screens using their eyes.</p>
          </div>
          <div style={styles.useCaseBox}>
            <FaGamepad size={30} color="#8e44ad" />
            <h4>Gaming</h4>
            <p>Immersive eye-controlled gaming experiences.</p>
          </div>
          <div style={styles.useCaseBox}>
            <FaLaptopCode size={30} color="#f39c12" />
            <h4>User Research</h4>
            <p>Track user focus on websites and software UIs for better UX.</p>
          </div>
        </div>
      </div>

      {/* Section: Benefits */}
      <div style={styles.section}>
        <h2>💡 Benefits of Eye Tracking</h2>
        <ul style={styles.list}>
          <li><FaCheckCircle /> Non-intrusive and contactless</li>
          <li><FaCheckCircle /> Real-time monitoring</li>
          <li><FaCheckCircle /> Improved exam fairness</li>
          <li><FaCheckCircle /> Supports research and accessibility</li>
        </ul>
      </div>

      {/* Section: Our Tech Stack */}
      <div style={styles.section}>
        <h2>⚙️ Technologies Used in This Project</h2>
        <ul style={styles.list}>
          <li><FaCheckCircle /> ReactJS (Frontend)</li>
          <li><FaCheckCircle /> OpenCV & Dlib (Eye landmark detection)</li>
          <li><FaCheckCircle /> PyAutoGUI / Gaze Tracking APIs</li>
          <li><FaCheckCircle /> Socket.IO & Express for real-time data</li>
        </ul>
      </div>

      {/* Section: Invigilation Explanation */}
      <div style={styles.section}>
        <h2>🎓 Eye Tracking for Invigilation</h2>
        <p>
          During an online test, the camera keeps tracking the student's eye direction. If the student looks away from the screen too often or switches tabs, alerts are generated. This ensures that online assessments remain fair and secure.
        </p>
        <p>
          Our system can also record the session for further review and provide a detailed log of suspicious activity during the test.
        </p>
      </div>

      <footer style={styles.footer}>
        <p>📍 EyeTracking AI Invigilator | Built with ❤️ by Team Asma</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px',
    fontFamily: "'Poppins', sans-serif",
    background: 'linear-gradient(to right, #fdfbfb, #ebedee)',
    color: '#2c3e50',
    minHeight: '100vh',
  },
  heading: {
    fontSize: '36px',
    textAlign: 'center',
    marginBottom: '10px',
    color: '#1a2a6c',
  },
  intro: {
    textAlign: 'center',
    fontSize: '18px',
    marginBottom: '30px',
    color: '#555',
  },
  section: {
    marginBottom: '40px',
  },
  list: {
    listStyle: 'none',
    paddingLeft: '0',
    fontSize: '16px',
    lineHeight: '2',
  },
  useCases: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '30px',
    justifyContent: 'center',
  },
  useCaseBox: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '20px',
    width: '220px',
    boxShadow: '0 6px 15px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  footer: {
    marginTop: '60px',
    textAlign: 'center',
    fontSize: '14px',
    color: '#777',
    borderTop: '1px solid #ccc',
    paddingTop: '20px',
  },
};

export default EyeTrackingInfo;
