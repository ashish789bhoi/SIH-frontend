import React, { useState } from "react";

export default function Sidenav() {
  const [selectedOption, setSelectedOption] = useState("");
  const [subOptions, setSubOptions] = useState([]);

  const handleSelectionChange = (event) => {
    const option = event.target.value;
    setSelectedOption(option);

    if (option === "a") {
      setSubOptions(["e", "f"]);
    } else if (option === "b") {
      setSubOptions(["i", "j"]);
    } else if (option === "c") {
      setSubOptions(["k", "l"]);
    } else if (option === "d") {
      setSubOptions(["m", "n"]);
    } else {
      setSubOptions([]);
    }
  };

  return (
    <div className="sidebar py-4 shadow">
      <div className="owner">
        <div className="logo"></div>
        <div className="profile"></div>
        <small>Namaskaram,</small>
        <b>Fhulera</b>
        <legend>Division Name</legend>
        <span>Balia</span>
      </div>

      {/* Heading for the first dropdown */}
      <h3 style={{ marginBottom: "2px", paddingBottom: "0" }}>Head Post Office</h3>
      <div className="dropdown" >
        <select onChange={handleSelectionChange} value={selectedOption} style={{ marginTop: "0" , marginBottom:"226px"}}>
          <option value="">Select an option</option>
          <option value="a">Option A</option>
          <option value="b">Option B</option>
          <option value="c">Option C</option>
          <option value="d">Option D</option>
        </select>
      </div>

      {selectedOption && (
        <>
          {/* Heading for the second dropdown */}
          <h3 style={{marginTop:"-209px"}}>Sub Post Office</h3>
          <div className="dropdown">
            <select>
              <option value="">Select a sub-option</option>
              {subOptions.map((subOption, index) => (
                <option key={index} value={subOption}>
                  {subOption}
                </option>
              ))}
            </select>
          </div>
        </>
      )}

      <div className="signOut">
        <a href="">
          <div className="bi bi-info-square"></div> Sign-out
        </a>
      </div>
    </div>
  );
}
