import React, { useEffect, useState } from 'react';

const StartTracking = () => {
  const [trackingStatus, setTrackingStatus] = useState('Initializing...');
  const [videoStream, setVideoStream] = useState(null);
  const videoRef = React.useRef(null);

  useEffect(() => {
    startTracking();
    return () => stopTracking();
  }, []);

  const startTracking = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setVideoStream(stream);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setTrackingStatus('✅ Eye tracking is now active.');
    } catch (error) {
      console.error('Camera access denied:', error);
      setTrackingStatus('❌ Unable to access camera. Please allow permissions.');
    }
  };

  const stopTracking = () => {
    if (videoStream) {
      videoStream.getTracks().forEach(track => track.stop());
    }
    setTrackingStatus('⛔ Tracking stopped.');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🎯 Start Eye Tracking</h2>
      <p style={styles.description}>
        This page activates your webcam and starts the eye-tracking session. Your eye movement will be recorded to ensure full attention during online exams, interviews, or assessments.
      </p>

      <div style={styles.videoWrapper}>
        <video
          ref={videoRef}
          autoPlay
          playsInline
          width="400"
          height="300"
          style={styles.video}
        />
        <p style={styles.statusText}>{trackingStatus}</p>
      </div>

      <div style={styles.infoSection}>
        <h3>🔍 Tracking Details</h3>
        <ul>
          <li>Your webcam feed is monitored live.</li>
          <li>Eye gaze direction, blink rate, and presence are analyzed.</li>
          <li>Ensure proper lighting and avoid wearing sunglasses.</li>
          <li>Stay in front of the camera throughout the session.</li>
        </ul>
      </div>

      <button style={styles.stopButton} onClick={stopTracking}>
        🛑 Stop Tracking
      </button>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px',
    maxWidth: '900px',
    margin: 'auto',
    fontFamily: 'Poppins, sans-serif',
    background: 'linear-gradient(to right, #f8f9ff, #e6e9f0)',
    borderRadius: '20px',
    boxShadow: '0 12px 25px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '32px',
    marginBottom: '20px',
    color: '#2c3e50',
  },
  description: {
    fontSize: '16px',
    color: '#444',
    marginBottom: '30px',
    lineHeight: '1.6',
  },
  videoWrapper: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  video: {
    borderRadius: '12px',
    border: '2px solid #ccc',
  },
  statusText: {
    marginTop: '10px',
    fontWeight: 'bold',
    fontSize: '16px',
    color: '#1e272e',
  },
  infoSection: {
    background: '#fff',
    padding: '20px',
    borderRadius: '12px',
    marginTop: '20px',
    boxShadow: '0 5px 10px rgba(0, 0, 0, 0.05)',
  },
  stopButton: {
    marginTop: '30px',
    padding: '12px 25px',
    fontSize: '16px',
    backgroundColor: '#e74c3c',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    fontWeight: '600',
  },
};

export default StartTracking;
