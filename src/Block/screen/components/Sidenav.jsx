import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function BlockPage() {
  const location = useLocation();
  const [userData, setUserData] = useState({});
  const [districtName, setDistrictName] = useState(""); // State for District Name
  const [subdivisionName, setSubdivisionName] = useState(""); // State for Subdivision Name
  const [blockName, setBlockName] = useState(""); // State for Block Name

  // Set userData and fetch district, subdivision, and block names
  useEffect(() => {
    const data = location.state?.userData.userData || {};
    setUserData(data);
    setDistrictName(data.district_name || "Loading..."); // Set district name
    setSubdivisionName(data.subdivision_name || "Loading..."); // Set subdivision name
    setBlockName(data.block_name || "Loading..."); // Set block name
  }, [location.state]);

  return (
    <div className="sidebar py-4 shadow">
      <div className="owner">
        <div className="logo"></div>
        <div className="profile"></div>
        
        {/* District Name Section */}
        <legend>District Name</legend>
        <h4>{districtName}</h4> {/* Display the district name */}
      </div>

      {/* Subdivision Name Section */}
      <h3 style={{ marginBottom: "2px", paddingBottom: "0" }}>Subdivision Name</h3>
      <h4>{subdivisionName}</h4> {/* Display the subdivision name */}

      {/* Block Name Section */}
      <h3>Block Name</h3>
      <h4>{blockName}</h4> {/* Display the block name */}

      <div className="signOut">
        <a href="/">
          <div className="bi bi-info-square"></div> Sign-out
        </a>
      </div>
    </div>
  );
}
