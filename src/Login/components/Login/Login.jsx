import React, { useState } from 'react';
import './Login.css';

function Login() {
  // State variables for username, password, and dropdown
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [dropdown, setDropdown] = useState('Subdivision');

  // Handler function for the Login button
  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Dropdown Selection:', dropdown);

    // For demonstration purposes
    if (username && password && dropdown !== 'Subdivision') {
      alert('Login Successful!');
    } else {
      alert('Please fill all fields correctly.');
    }
  };

  return (
    <div className="whole">
      <div className="Login-Container">
        <div className="Login-Header">
          <div className="Login-text">Sign Up</div>
          <div className="underline"></div>
        </div>
        <div className="Login-inputs">
          <div className="Login-input">
            <input
              type="text"
              placeholder="Username"
              value={username} // Bind state to input
              onChange={(e) => setUsername(e.target.value)} // Update state on input
            />
          </div>
          <div className="Login-input">
            <input
              type="password"
              placeholder="Password"
              value={password} // Bind state to input
              onChange={(e) => setPassword(e.target.value)} // Update state on input
            />
          </div>
          <select
            className="Login-input-dropdown"
            value={dropdown} // Bind state to select
            onChange={(e) => setDropdown(e.target.value)} // Update state on selection
          >
            <option value="Subdivision">Subdivision</option>
            <option value="Blocks">Blocks</option>
            <option value="District">District</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        <div className="forgot-password">
          Forgot Password? <span>Click Here!</span>
        </div>
        <div className="Login-submit" onClick={handleLogin}>
          <div className="Login-submitt">Login</div>
        </div>
      </div>
    </div>
  );
}

export default Login;
