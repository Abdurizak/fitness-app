import React from 'react';

const AboutPage = () => {
  const styles = {
    aboutPage: {
      padding: '40px',
      background: "url('/images/About-Background.jpg') no-repeat center center",
      backgroundSize: 'cover',
      color: '#333',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      position: 'relative',
      minHeight: '100vh',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.6)',
      zIndex: 1,
    },
    content: {
      position: 'relative',
      zIndex: 2,
      padding: '20px',
    },
    header: {
      background: 'rgba(0, 0, 0, 0.7)',
      color: '#fff',
      padding: '20px',
      borderRadius: '10px',
      marginBottom: '30px',
    },
    headerTitle: {
      fontSize: '2.5em',
      margin: 0,
      color: '#ff9800',
    },
    headerSubtitle: {
      fontSize: '1.2em',
      marginTop: '10px',
      color: '#f0f0f0',
    },
    section: {
      background: 'rgba(0, 0, 0, 0.7)',
      padding: '20px',
      borderRadius: '10px',
      marginBottom: '20px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      color: '#f0f0f0',
    },
    sectionTitle: {
      color: '#ff9800',
      fontSize: '1.8em',
      marginBottom: '15px',
    },
    paragraph: {
      fontSize: '1.1em',
      lineHeight: '1.6',
      margin: '0 0 15px 0',
    },
    valuesList: {
      listStyleType: 'none',
      padding: 0,
      margin: 0,
    },
    valuesItem: {
      fontSize: '1.1em',
      margin: '10px 0',
    },
    valuesItemStrong: {
      color: '#ff9800',
    },
    contactLink: {
      color: '#ff9800',
      textDecoration: 'none',
      fontWeight: 'bold',
      transition: 'color 0.3s',
    },
    contactLinkHover: {
      color: '#ffa726',
      textDecoration: 'underline',
    },
  };

  return (
    <div style={styles.aboutPage}>
      <div style={styles.overlay}></div>
      <div style={styles.content}>
        <header style={styles.header}>
          <h1 style={styles.headerTitle}>About FITFORMULA</h1>
          <p style={styles.headerSubtitle}>Your Partner in Health and Fitness</p>
        </header>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Our Mission</h2>
          <p style={styles.paragraph}>
            At FITFORMULA, our mission is to inspire and support your journey to a healthier lifestyle. Through personalized
            fitness plans, expert guidance, and unwavering support, we aim to help you achieve and sustain your health and
            wellness goals.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Meet Our Team</h2>
          <p style={styles.paragraph}>
            Our team is comprised of certified fitness professionals, nutritionists, and wellness coaches who are passionate
            about helping you succeed. With years of experience, we are dedicated to providing top-quality fitness and health
            advice tailored to your individual needs.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Our Values</h2>
          <ul style={styles.valuesList}>
            <li style={styles.valuesItem}>
              <strong style={styles.valuesItemStrong}>Commitment:</strong> We are committed to your health and fitness
              journey, offering consistent support every step of the way.
            </li>
            <li style={styles.valuesItem}>
              <strong style={styles.valuesItemStrong}>Excellence:</strong> We hold ourselves to high standards, striving for
              excellence in all that we do.
            </li>
            <li style={styles.valuesItem}>
              <strong style={styles.valuesItemStrong}>Community:</strong> We believe in building a strong, supportive
              community where everyone can thrive.
            </li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Contact Us</h2>
          <p style={styles.paragraph}>
            If you have any questions, suggestions, or feedback, do not hesitate to reach out through our{' '}
            <a
              href="/contact"
              style={styles.contactLink}
              onMouseEnter={(e) => (e.currentTarget.style = { ...styles.contactLink, ...styles.contactLinkHover })}
              onMouseLeave={(e) => (e.currentTarget.style = styles.contactLink)}
            >
              Contact Page
            </a>. We are here to help you on your journey!
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
