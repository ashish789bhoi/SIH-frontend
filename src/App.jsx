/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const App = () => {
  const [apiMessage, setApiMessage] = useState('');

  useEffect(() => {
    fetch('/api')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to connect to backend');
        }
        return response.json();
      })
      .then((data) => setApiMessage(data.message))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h1>Frontend-Backend Connection Test</h1>
      <p>{apiMessage || 'Loading...'}</p>
    </div>
  );
};

export default App;
