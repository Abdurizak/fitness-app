import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          {/* Column 1: Links or App Info */}
          <div className="col-md-4 mb-3">
            <h5>FITFORMULA</h5>
            <p>Helping you thrive every day through health and wellness.</p>
          </div>

          {/* Column 2: Useful Links */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            {/* Use flex to align links horizontally */}
            <ul className="list-unstyled d-flex justify-content-between">
              <li className="me-3">
                <Link className="text-white" to="/about">About Us</Link>
              </li>
              <li className="me-3">
                <Link className="text-white" to="/fitness">Fitness Plans</Link>
              </li>
              <li className="me-3">
                <Link className="text-white" to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Media Links */}
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <ul className="list-unstyled d-flex">
              <li className="me-3">
                <a className="text-white" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i> Facebook
                </a>
              </li>
              <li className="me-3">
                <a className="text-white" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </li>
              <li>
                <a className="text-white" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="text-center mt-4">
          <p className="mb-0">&copy; {new Date().getFullYear()} FitnessApp. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
