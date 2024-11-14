import React, { useState } from 'react';

//styles for the ContactPage
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
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.7)',
    zIndex: 1
  },
  pageTitle: {
    fontSize: '36px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '40px',
    color: '#ff9800'
  },
  contactInfo: {
    marginBottom: '40px',
    textAlign: 'center'
  },
  contactInfoHeader: {
    marginTop: '20px',
    fontSize: '24px',
    color: '#ff9800'
  },
  contactInfoList: {
    listStyleType: 'none',
    paddingLeft: 0,
    fontSize: '18px'
  },
  contactInfoListItem: {
    marginBottom: '10px'
  },
  contactForm: {
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '20px',
    borderRadius: '10px',
    zIndex: 2 
  },
  formGroup: {
    marginBottom: '20px'
  },
  label: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#ff9800'
  },
  input: {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #444',
    backgroundColor: '#333',
    color: '#ffffff'
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
    display: 'block',
    width: '100%'
  },
  statusMessage: {
    marginTop: '20px',
    fontSize: '18px',
    color: '#4caf50',
    fontWeight: 'bold',
    textAlign: 'center'
  }
};

const ContactPage = () => {
  // States to handle form input
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  // Simulate form submission with a mock API call
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !message) {
      setStatus('Please fill in all fields.');
      return;
    }

    // Simulate an API call delay with setTimeout
    setStatus('Submitting your message...');
    setTimeout(() => {
      // Simulate a successful form submission response
      const isSuccess = Math.random() > 0.2; // Simulate a 80% success rate
      if (isSuccess) {
        setStatus('Thank you for your message! We will get back to you soon.');
      } else {
        setStatus('There was an error submitting your message. Please try again later.');
      }

      // Reset form fields after submission
      setName('');
      setEmail('');
      setMessage('');
    }, 7000); 
  };

  return (
    <div style={styles.contactPage}>
      <div style={styles.overlay}></div>
      <h1 style={styles.pageTitle}>Contact Us</h1>
      <div style={styles.contactInfo}>
        <p>If you have any questions or feedback, feel free to reach out to us!</p>
        <h4 style={styles.contactInfoHeader}>Our Contact Details:</h4>
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
        </div>
        <button type="submit" style={styles.button}>
          Send Message
        </button>
      </form>

      {status && <p style={styles.statusMessage}>{status}</p>}
    </div>
  );
};

export default ContactPage;



