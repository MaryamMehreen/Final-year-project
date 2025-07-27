import React, { useEffect, useState } from 'react';

const ViewFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('feedbacks')) || [];
    setFeedbacks(stored);
  }, []);

  return (
    <div className="dashboard-container">
      <h2>View Feedback</h2>
      <div className="chart-card">
        {feedbacks.length === 0 ? (
          <p>No feedback yet.</p>
        ) : (
          <ul>
            {feedbacks.map((item, index) => (
              <li key={index}>
                <strong>{item.name}:</strong> {item.feedback}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ViewFeedback;
