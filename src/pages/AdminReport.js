import React from 'react';
import { FaDownload } from 'react-icons/fa';

const AdminReport = () => {
  const reportData = {
    examTitle: 'Pakistan Studes - Mid Term',
    candidateName: 'Asma Sharif',
    score: '85%',
    status: 'Pass',
    duration: '40 mins',
    date: 'May 7, 2025',
  };

  const handleDownload = () => {
    alert('Download feature coming soon!');
  };

  return (
    <div style={styles.container}>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      <h1 style={styles.heading}>Exam Report Summary</h1>
      <div style={styles.card}>
        <div style={styles.row}>
          <strong>📝 Exam Title:</strong>
          <span>{reportData.examTitle}</span>
        </div>
        <div style={styles.row}>
          <strong>👤 Candidate Name:</strong>
          <span>{reportData.candidateName}</span>
        </div>
        <div style={styles.row}>
          <strong>📊 Score:</strong>
          <span>{reportData.score}</span>
        </div>
        <div style={styles.row}>
          <strong>✅ Status:</strong>
          <span
            style={{
              color: reportData.status === 'Pass' ? '#27ae60' : '#e74c3c',
              fontWeight: 'bold',
            }}
          >
            {reportData.status}
          </span>
        </div>
        <div style={styles.row}>
          <strong>⏱ Duration:</strong>
          <span>{reportData.duration}</span>
        </div>
        <div style={styles.row}>
          <strong>📅 Date:</strong>
          <span>{reportData.date}</span>
        </div>

        <button style={styles.button} onClick={handleDownload}>
          <FaDownload style={{ marginRight: 8 }} />
          Download Report
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Inter', sans-serif",
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px 20px',
  },
  heading: {
    position: 'absolute',
    top: 100,
    fontSize: 50,
    color: '#2c3e50',
    fontWeight: 700,
    color:'#124463',
  },
  card: {
    width: '100%',
    maxWidth: 480,
    background: '#4b6c82',
    backdropFilter: 'blur(10px)',
    borderRadius: 20,
    padding: 30,
    boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: 16,
    color: 'white',
  },
  button: {
    marginTop: 20,
    width: '100%',
    backgroundColor: '#2980b9',
    color: '#fff',
    border: 'none',
    borderRadius: 10,
    padding: '14px 16px',
    fontSize: 16,
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.15)',
  },
  buttonHover: {
    backgroundColor: '#3498db',
    transform: 'scale(1.05)',
  },
};

export default AdminReport;
