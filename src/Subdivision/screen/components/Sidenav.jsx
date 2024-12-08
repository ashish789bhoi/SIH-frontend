import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Sidenav() {
  const location = useLocation();
  const [userData, setUserData] = useState({});
  const [districtName, setDistrictName] = useState(""); // State for District Name
  const [subdivisionName, setSubdivisionName] = useState(""); // State for Subdivision Name
  const [blockLists, setBlockLists] = useState([]); // State for block lists
  const [selectedBlock, setSelectedBlock] = useState(""); // State for selected block

  // Set userData from location state
  useEffect(() => {
    const data = location.state?.userData.userData || {};
    setUserData(data);
    setDistrictName(data.district_name || ""); // Set district name
    setSubdivisionName(data.subdivision_name || ""); // Set subdivision name
  }, [location.state]);

  // Fetch block list based on the subdivision ID
  useEffect(() => {
    if (userData.subdivisionId) {
      console.log("Fetching block list for subdivisionId:", userData.subdivisionId);
      const getBlockList = async () => {
        try {
          const response = await fetch(`/api/blocks?subdivisionId=${userData.subdivisionId}`); // API endpoint for blocks
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setBlockLists(data.blockList || []); // Assuming the API returns { blockList: [...] }
        } catch (error) {
          console.error("Error fetching block list:", error);
        }
      };
      getBlockList();
    }
  }, [userData.subdivisionId]); // Re-fetch when subdivisionId changes

  return (
    <div className="sidebar py-4 shadow">
      <div className="owner">
        <div className="logo"></div>
        <div className="profile"></div>
        <legend>District Name</legend>
        <h4>{districtName || "Loading..."}</h4> {/* Display the district name */}
      </div>

      <h3 style={{ marginBottom: "2px", paddingBottom: "0" }}>Subdivision Name</h3>
      <h4>{subdivisionName || "Loading..."}</h4> {/* Display the subdivision name */}

      {/* Heading for the block office dropdown */}
      <h3>Sub Post Office</h3>
      <div className="dropdown">
        <select
          onChange={(e) => setSelectedBlock(e.target.value)}
          value={selectedBlock}
        >
          <option value="">Select a block</option>
          {blockLists.map((block, index) => (
            <option key={index} value={block.block_id}>
              {block.block_name}
            </option>
          ))}
        </select>
      </div>

      <div className="signOut">
        <a href="/">
          <div className="bi bi-info-square"></div> Sign-out
        </a>
      </div>
    </div>
  );
}
