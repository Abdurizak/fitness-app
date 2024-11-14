import React, { useState } from 'react';

const styles = {
  contactPage: {
    padding: '40px',
    background: 'url("/images/Contacts-image.jpg") no-repeat center center',
    backgroundSize: 'cover',
    color: '#ffffff',
    position: 'relative',
    minHeight: '100vh',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2 
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.6)',
    zIndex: 1
  },
  pageTitle: {
    fontSize: '42px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '20px',
    color: '#ff9800',
    zIndex: 3,
  },
  contactInfo: {
    textAlign: 'center',
    marginBottom: '20px',
    zIndex: 3,
  },
  contactInfoHeader: {
    fontSize: '24px',
    color: '#ff9800',
  },
  contactInfoList: {
    listStyleType: 'none',
    paddingLeft: 0,
    fontSize: '18px',
    marginTop: '10px',
  },
  contactInfoListItem: {
    marginBottom: '5px',
  },
  contactForm: {
    maxWidth: '500px',
    margin: '0 auto',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: '20px',
    borderRadius: '8px',
    zIndex: 3,
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#ff9800',
    marginBottom: '5px',
    display: 'block',
  },
  input: {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #555',
    backgroundColor: '#222',
    color: '#ffffff',
    outline: 'none',
  },
  button: {
    padding: '12px 25px',
    backgroundColor: '#e91e63',
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
    width: '100%',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#c2185b',
  },
  statusMessage: {
    marginTop: '15px',
    fontSize: '18px',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  errorMessage: {
    color: '#ff5252',
    fontSize: '14px',
    marginTop: '5px',
  }
};

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email address is invalid';
    if (!message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus('Submitting your message...');
    setTimeout(() => {
      const isSuccess = Math.random() > 0.2;
      if (isSuccess) {
        setStatus('Thank you for your message! We will get back to you soon.');
      } else {
        setStatus('There was an error submitting your message. Please try again later.');
      }

      setName('');
      setEmail('');
      setMessage('');
    }, 5000); 
  };

  return (
    <div style={styles.contactPage}>
      <div style={styles.overlay}></div>
      <h1 style={styles.pageTitle}>Contact Us</h1>
      <div style={styles.contactInfo}>
        <h4 style={styles.contactInfoHeader}>We'd love to hear from you!</h4>
        <ul style={styles.contactInfoList}>
          <li style={styles.contactInfoListItem}>Email: info@fitformula.com</li>
          <li style={styles.contactInfoListItem}>Phone: +123 456 7890</li>
          <li style={styles.contactInfoListItem}>Address: 123 Fitness St, Health City</li>
        </ul>
      </div>

      <form onSubmit={handleSubmit} style={styles.contactForm}>
        <div style={styles.formGroup}>
          <label htmlFor="name" style={styles.label}>Your Name</label>
          <input
            type="text"
            id="name"
            style={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          {errors.name && <p style={styles.errorMessage}>{errors.name}</p>}
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>Your Email</label>
          <input
            type="email"
            id="email"
            style={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && <p style={styles.errorMessage}>{errors.email}</p>}
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="message" style={styles.label}>Your Message</label>
          <textarea
            id="message"
            style={styles.input}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
            required
          />
          {errors.message && <p style={styles.errorMessage}>{errors.message}</p>}
        </div>
        <button
          type="submit"
          style={{
            ...styles.button,
            ...(status === 'Submitting your message...' ? styles.buttonHover : {}),
          }}
        >
          Send Message
        </button>
      </form>

      {status && <p style={{...styles.statusMessage, color: status.includes('error') ? '#ff5252' : '#4caf50'}}>{status}</p>}
    </div>
  );
};

export default ContactPage;
