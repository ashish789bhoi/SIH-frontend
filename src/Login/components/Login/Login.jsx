import  { useState } from "react";

import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./Login.css";


function Login() {
  // State variables for username, password, and dropdown
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [dropdown, setDropdown] = useState("Subdivision");
  const [loading, setLoading] = useState(false); // For loading state
  const navigate = useNavigate();

  // Handler function for the Login button
  const handleLogin = async () => {
    setLoading(true); // Set loading state

    // Log values to check if function is called
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Dropdown Selection:", dropdown);

    // Check if all fields are valid
    if (username && password && dropdown !== "") {
      try {
        // Send login request to the backend
        const response = await fetch('http://localhost:5000/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            password,
            dropdown,
          }),
        });

        const data = await response.json();

        if (data.success) {
          console.log("Login successful from frontend");
          // Redirect based on the selected dropdown
          if (dropdown === "HPM") {
            navigate("/subdivision"); // React Router's navigate
          } else if (dropdown === "SPM") {
            navigate("/block"); // React Router's navigate
          } else if (dropdown === "SP") {
            navigate("/district"); // React Router's navigate
          } else if (dropdown === "Admin") {
            navigate("/admin"); // React Router's navigate
          }
        } else {
          // Handle failure response (invalid credentials, role mismatch, etc.)
          alert(data.message);
        }
      } catch (error) {
        console.error("Error during login:", error);
        alert("An error occurred. Please try again.");
      }
    } else {
      alert("Please fill all fields correctly.");
    }

    setLoading(false); // Reset loading state
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
              className="form-control" // Bootstrap input class
              placeholder="Username"
              value={username} // Bind state to input
              onChange={(e) => setUsername(e.target.value)} // Update state on input
            />
          </div>
          <div className="Login-input">
            <input
              type="password"
              className="form-control" // Bootstrap input class
              placeholder="Password"
              value={password} // Bind state to input
              onChange={(e) => setPassword(e.target.value)} // Update state on input
            />
          </div>
          <div>
            <select
              className="form-select" // Bootstrap select class
              value={dropdown} // Bind state to select
              onChange={(e) => setDropdown(e.target.value)} // Update state on selection
            >
              <option value="HPM">Subdivision</option>
              <option value="SPM">Blocks</option>
              <option value="SP">District</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
        </div>

        <div className="login-buttons">
          {/* Forgot Password Button (Bootstrap Button) */}
          <button className="btn btn-danger mt-3 login-button">
            Forgot Password? Click Here!
          </button>
          {/* Login Button (Bootstrap Button) */}
          <button className="btn btn-primary mt-3 login-button" onClick={handleLogin} disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
