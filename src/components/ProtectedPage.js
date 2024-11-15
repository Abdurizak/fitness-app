import React from 'react';

function ProtectedPage({ onLogout }) {
  return (
    <div>
      <h2>Welcome to the Protected Page</h2>
      <p>This page is only accessible to logged-in users.</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default ProtectedPage;
