import React from 'react';
import { Redirect } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated'); // Can be from context or App.js state

  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
