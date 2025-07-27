// src/pages/TrackingReport.js

import React from 'react';

function TrackingReport() {
  const reportData = {
    studentId: 'STD123',
    name: 'Asma Sharif',
    examTitle: 'AI Virtual Invigilator Test',
    tabSwitches: 2,
    cameraDisconnections: 1,
    totalViolations: 3,
    suspiciousBehaviors: [
      '❗ Tab switched at 03:12',
      '📷 Camera turned off at 03:14',
      '👀 Eyes moved away from screen at 03:18',
    ],
    duration: '15 minutes',
    score: '7 / 10',
    date: '2025-07-03',
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>📊 Eye-Tracking Report</h2>
      <div style={styles.card}>
        <p><strong>👩‍🎓 Student Name:</strong> {reportData.name}</p>
        <p><strong>🆔 Student ID:</strong> {reportData.studentId}</p>
        <p><strong>📘 Exam Title:</strong> {reportData.examTitle}</p>
        <p><strong>🕒 Duration:</strong> {reportData.duration}</p>
        <p><strong>📅 Date:</strong> {reportData.date}</p>
        <hr />
        <p><strong>🧠 Score:</strong> {reportData.score}</p>
        <p><strong>🚫 Tab Switches:</strong> {reportData.tabSwitches}</p>
        <p><strong>📷 Camera Disconnections:</strong> {reportData.cameraDisconnections}</p>
        <p><strong>⚠️ Total Violations:</strong> {reportData.totalViolations}</p>
        <hr />
        <div>
          <strong>🔍 Suspicious Behavior Log:</strong>
          <ul style={styles.list}>
            {reportData.suspiciousBehaviors.map((item, index) => (
              <li key={index} style={styles.listItem}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '40px',
    maxWidth: '800px',
    margin: 'auto',
    fontFamily: '"Segoe UI", sans-serif',
    background: 'linear-gradient(to bottom right, #f2f2f2, #e0e0e0)',
    borderRadius: '20px',
    boxShadow: '0 12px 35px rgba(0,0,0,0.1)',
  },
  heading: {
    fontSize: '30px',
    textAlign: 'center',
    marginBottom: '30px',
    color: '#2c3e50',
  },
  card: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '15px',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
    lineHeight: '1.8',
  },
  list: {
    marginTop: '10px',
    paddingLeft: '20px',
    color: '#e74c3c',
  },
  listItem: {
    marginBottom: '8px',
  },
};

export default TrackingReport;
