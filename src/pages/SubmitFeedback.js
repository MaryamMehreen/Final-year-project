import React, { useState } from 'react';
import './SubmitFeedback.css';

const SubmitFeedback = () => {
  const [formData, setFormData] = useState({ name: '', feedback: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get existing feedbacks
    const existing = JSON.parse(localStorage.getItem('feedbacks')) || [];

    // Add new feedback
    const updated = [...existing, formData];
    localStorage.setItem('feedbacks', JSON.stringify(updated));

    alert('Feedback submitted successfully!');
    setFormData({ name: '', feedback: '' });
  };

  return (
    <div className="dashboard-container">
      <h2>Submit Feedback</h2>
      <div className="chart-card">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <textarea
            name="feedback"
            placeholder="Write your feedback..."
            value={formData.feedback}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SubmitFeedback;
