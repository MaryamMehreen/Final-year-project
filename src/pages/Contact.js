import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactUs = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('📨 Thank you! Your message has been submitted.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>📬 Contact Us</h1>
      <p style={styles.subheading}>
        We'd love to hear from you! Whether it's a question, feedback, or support — just reach out.
      </p>

      <div style={styles.contactWrapper}>
        {/* Left Section */}
        <div style={styles.infoSection}>
          <h2 style={styles.infoTitle}>Get in Touch</h2>
          <p><FaPhone /> +92 300 1234567</p>
          <p><FaEnvelope /> eyeinvigilator@support.com</p>
          <p><FaMapMarkerAlt /> COMSATS University, Islamabad Campus</p>

          <div style={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook size={24} color="#3b5998" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin size={24} color="#0077b5" /></a>
            <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub size={24} color="#000" /></a>
          </div>
        </div>

        {/* Right Section (Form) */}
        <form style={styles.form} onSubmit={handleSubmit}>
          <h2 style={styles.formTitle}>Send us a Message</h2>
          <input
            type="text"
            name="name"
            placeholder="👤 Your Name"
            value={form.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="📧 Your Email"
            value={form.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <textarea
            name="message"
            placeholder="📝 Your Message"
            value={form.message}
            onChange={handleChange}
            style={styles.textarea}
            required
          />
          <button type="submit" style={styles.button}>📨 Submit</button>
        </form>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} EyeTracking Invigilator — Built with ❤️ by Asma Sharif & Team</p>
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
  subheading: {
    textAlign: 'center',
    fontSize: '18px',
    marginBottom: '40px',
    color: '#555',
  },
  contactWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '40px',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  infoSection: {
    flex: '1 1 300px',
    backgroundColor: '#fff',
    padding: '25px',
    borderRadius: '15px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
    lineHeight: '1.8',
  },
  infoTitle: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  socialIcons: {
    marginTop: '20px',
    display: 'flex',
    gap: '15px',
  },
  form: {
    flex: '1 1 400px',
    backgroundColor: '#fff',
    padding: '25px',
    borderRadius: '15px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  formTitle: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  input: {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  textarea: {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px',
    minHeight: '120px',
    resize: 'vertical',
  },
  button: {
    backgroundColor: '#3498db',
    color: '#fff',
    padding: '12px',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: '0.3s',
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

export default ContactUs;
