// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">FITFORMULA</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/fitness">Fitness</Link>
            </li>
<<<<<<<<< Temporary merge branch 1
=========
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>  {/* Link to Contact Page */}
            </li>
>>>>>>>>> Temporary merge branch 2
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
