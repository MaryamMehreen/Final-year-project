// src/pages/CameraCheck.js

import React, { useRef, useState, useEffect } from 'react';

function CameraCheck() {
  const videoRef = useRef(null);
  const [cameraStatus, setCameraStatus] = useState('⏳ Checking...');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const checkCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
        setCameraStatus('✅ Camera is working fine!');
      } catch (error) {
        setCameraStatus('❌ Camera not accessible');
        setErrorMessage(
          'Please allow camera access from your browser settings or check if another application is using it.'
        );
      }
    };

    checkCamera();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>📷 Camera Test</h2>
      <p style={styles.description}>
        Please ensure your camera is working properly before starting the exam.
      </p>

      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        width="400"
        height="300"
        style={styles.video}
      />

      <div style={styles.statusBox}>
        <strong>Status:</strong> <span>{cameraStatus}</span>
      </div>

      {errorMessage && (
        <div style={styles.errorBox}>
          <strong>⚠️ Error:</strong> <p>{errorMessage}</p>
        </div>
      )}

      <ul style={styles.instructions}>
        <li>Make sure your face is fully visible.</li>
        <li>Avoid using any other apps that use the camera.</li>
        <li>Check lighting for clear visibility.</li>
        <li>Use Chrome/Edge browser for best compatibility.</li>
      </ul>
    </div>
  );
}

const styles = {
  container: {
    padding: '40px',
    background: 'linear-gradient(to right, #eef2f3, #8e9eab)',
    borderRadius: '15px',
    boxShadow: '0 12px 35px rgba(0,0,0,0.1)',
    fontFamily: '"Segoe UI", sans-serif',
    maxWidth: '800px',
    margin: 'auto',
    marginTop: '40px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '28px',
    color: '#2c3e50',
    marginBottom: '10px',
  },
  description: {
    fontSize: '16px',
    marginBottom: '20px',
    color: '#333',
  },
  video: {
    borderRadius: '10px',
    border: '2px solid #ccc',
    marginBottom: '20px',
  },
  statusBox: {
    fontSize: '18px',
    color: '#2c3e50',
    marginBottom: '10px',
  },
  errorBox: {
    backgroundColor: '#ffe6e6',
    color: '#a94442',
    padding: '15px',
    borderRadius: '10px',
    marginTop: '10px',
  },
  instructions: {
    textAlign: 'left',
    marginTop: '30px',
    fontSize: '15px',
    color: '#333',
    lineHeight: '1.8',
  },
};

export default CameraCheck;
