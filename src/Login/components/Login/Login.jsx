import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [dropdown, setDropdown] = useState("Subdivision");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);

    if (username && password && dropdown !== "") {
      try {
        const response = await fetch("http://localhost:5000/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
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

          // Pass user data and districtId
          const districtId = data.districtId || "12345";
          const stateToSend = { districtId, userData: data };

          // Navigate based on dropdown
          if (dropdown === "SP") {
            navigate("/district", { state: stateToSend });
          } else if (dropdown === "HPM") {
            navigate("/subdivision", { state: stateToSend });
          } else if (dropdown === "SPM") {
            navigate("/block", { state: stateToSend });
          } else if (dropdown === "Admin") {
            navigate("/admin", { state: stateToSend });
          }
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.error("Error during login:", error);
        alert("An error occurred. Please try again.");
      }
    } else {
      alert("Please fill all fields correctly.");
    }

    setLoading(false);
  };

  return (
    <div className="whole">
      <div className="Login-Container">
        <div className="Login-Header">
          <div className="Login-text">Sign In</div>
          <div className="underline"></div>
        </div>
        <div className="Login-inputs">
          <div className="Login-input">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="Login-input">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <select
              className="form-select"
              value={dropdown}
              onChange={(e) => setDropdown(e.target.value)}
            > <option value="None">Select role</option>
              <option value="SP">Divisional Post Office</option>
              <option value="HPM">Head Post Office</option>
              <option value="SPM">Sub Post Office</option>
              {/* <option value="Admin">Administrator</option> */}
            </select>
          </div>
        </div>

        <div className="login-buttons">
          {/* <button className="btn btn-danger mt-3 login-button">
            Forgot Password? Click Here!
          </button> */}
          <button className="btn btn-primary mt-3 login-button" onClick={handleLogin} disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>
        <div className="forgot-password">
          <a href="/forgot-password" className="forgot-link">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
