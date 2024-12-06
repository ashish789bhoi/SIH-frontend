import React, { useState } from "react";

export default function Sidenav() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectionChange = (event) => {
    const option = event.target.value;
    setSelectedOption(option);
  };

  return (
    <div className="sidebar py-4 shadow">
      <div className="owner">
        <div className="logo"></div>
        <div className="profile"></div>
        <small>Namaskaram,</small>
        <b>Fhulera HO</b>
        <legend>Division Name</legend>
        <span>Balia</span>
      </div>

      {/* Heading for the dropdown */}
      <h3 style={{ marginBottom: "2px", paddingBottom: "0" }}>Sub Post Office</h3> {/* Reduced margin and padding */}
      <div className="dropdown" style={{ marginTop: "0" , marginBottom:"110px"}}>
        <select
          onChange={handleSelectionChange}
          value={selectedOption}
          
        >
          <option value="">Select an option</option>
          <option value="a">Option A</option>
          <option value="b">Option B</option>
        </select>
      </div>

      <div className="signOut">
        <a href="">
          <div className="bi bi-info-square"></div> Sign-out
        </a>
      </div>
    </div>
  );
}
