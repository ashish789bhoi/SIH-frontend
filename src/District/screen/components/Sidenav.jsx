import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Sidenav() {
  const location = useLocation();
  const [userData, setUserData] = useState({});
  const [divisionName, setDivisionName] = useState(""); // State for Division Name
  const [subdivisionList, setSubdivisionList] = useState([]); // State for Subdivision List
  const [selectedsubdivision, setselectedsubdivision] = useState(""); // State for selected first dropdown option
  const [blocklists, setblocklists] = useState([]); // State for block lists
  const [selectedblock, setSelectedblock] = useState(""); // State for selected sub-division
  const [districtId, setDistrictId] = useState("NULL"); // State for district ID
  const [subdivisionId, setSubdivisionId] = useState(""); // State for subdivision ID
  const [blockId, setBlockId] = useState(""); // State for block ID
  const [demographicData, setDemographicData] = useState([]); // State for demographic data

  let bid = blockId;
  // Set userData from location state
  useEffect(() => {
    setUserData(location.state?.userData.userData || {});
  }, [location.state]);

  // Fetch Division Name and set analysis for updation in district
  useEffect(() => {
    const loguserdata = () => {
      console.log("in sidenav:", { userData });
      setDistrictId(userData.districtId);
      setDivisionName(userData.district_name);
      // setSubdivisionId(userData.subdivision_id);
    };
    loguserdata();

    const getdata = async () => {
      const url = "http://localhost:5000/getdata"; // Endpoint on the server
      const data = { 
        dpeople: districtId,  // Dynamic data passed to the server
        downloadType: 'pdf' // Add download type to the request
      }; // Dynamic data passed to the server

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const result = await response.json();

        if (result.status === "success") {
          setDemographicData(result.data); // Assuming setDemographicData is defined in your React state
          // console.log("Fetched Demographic Data:", result.data);
        } else {
          console.error("API error:", result.message);
        }
      } catch (error) {
        console.error("Fetch error:", error.message);
      }
    };
    getdata();
  }, [userData, districtId]);

  // Fetch Subdivision List based on the districtId
  useEffect(() => {
    if (districtId) {
      const getSubDivisionList = async () => {
        console.log("District ID in my sidenav:", districtId); // Log districtId to ensure it's correct
        try {
          const response = await fetch(
            `/api/subdivisions?districtId=${districtId}`,
            {
              // Use backticks for template literals
              method: "GET",
              credentials: "include",
            }
          );

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`); // Fix syntax for error message
          }

          const data = await response.json();
          console.log("Subdivision List:", data); // Log the fetched data to check the response
          setSubdivisionList(data.subdivisionList);
        } catch (error) {
          console.error("Error fetching sub-division list:", error);
        }
      };

      getSubDivisionList();
    }
  }, [districtId]); // Re-fetch when districtId changes

  // Fetch subdivisionId when selectedsubdivision changes
  useEffect(() => {
    if (selectedsubdivision) {
      const getSubdivisionId = () => {
        const subdivision = subdivisionList.find(
          (sub) => sub.subdivision_name === selectedsubdivision
        );
        if (subdivision) {
          setSubdivisionId(subdivision.subdivision_id);
        }
      };
      getSubdivisionId();
      console.log("subdivisionId:", subdivisionId);
    }

    const getdata = async () => {
      const url = "http://localhost:5000/getdata"; // Endpoint on the server
      const data = { subdpeople: subdivisionId }; // Dynamic data passed to the server

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const result = await response.json();

        if (result.status === "success") {
          setDemographicData(result.data); // Assuming setDemographicData is defined in your React state
          // console.log("Fetched Demographic Data:", result.data);
        } else {
          console.error("API error:", result.message);
        }
      } catch (error) {
        console.error("Fetch error:", error.message);
      }
    };
    getdata();
  }, [selectedsubdivision, subdivisionList, subdivisionId]); // Re-fetch when selectedsubdivision or subdivisionList changes

  useEffect(() => {
    console.log("Updated demographicData:", demographicData);
  }, [demographicData]);

  // Fetch block list when subdivisionId changes
  useEffect(() => {
    if (subdivisionId) {
      console.log("subdivisionIdincll:", subdivisionId);
      const getBlockList = async () => {
        try {
          const response = await fetch(
            `/api/blocks?subdivisionId=${subdivisionId}`
          ); // Correctly interpolate subdivisionId
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`); // Fix error message interpolation
          }
          const data = await response.json();
          setblocklists(data.blockList); // Assuming the API returns { blockList: ["X", "Y", "Z"] }
          bid = data.blockList[0].block_id;
        } catch (error) {
          console.error("Error fetching block list:", error);
        }
      };

      getBlockList(); // Fetch block list when subdivisionId is available
    }
  }, [subdivisionId]); // Re-fetch when subdivisionId changes

  //set block id if selectedblock changes
  useEffect(() => {
    if (selectedblock) {
      console.log("selectedblock:", selectedblock);
      const getblockId = () => {
        const block = blocklists.find(
          (sub) => sub.block_name === selectedblock
        );
        if (block && block != null) {
          setBlockId(block.block_id);
          console.log("blockId: ", blockId);
        }
      };
      getblockId();
      console.log("blockId: ", blockId);
    }

    const getdata = async () => {
      if (!blockId) {
        console.error("Block ID is missing!");
        return;
      }

      const url = "http://localhost:5000/getdata";
      const data = { blockpeople: blockId };

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const result = await response.json();

        if (result.status === "success") {
          setDemographicData(result.data);
        } else {
          console.error("API error:", result.message);
        }
      } catch (error) {
        console.error("Fetch error:", error.message);
      }
    };

    getdata();
  }, [selectedblock, blocklists, blockId]);

  return (
    <div className="sidebar py-4 shadow">
      <div className="owner">
        <div className="logo"></div>
        <div className="profile"></div>
        <legend>Division Name</legend>
        <h4>{divisionName || "Loading..."}</h4>{" "}
        {/* Display the division name */}
      </div>

      {/* Heading for the subdivision post office dropdown */}
      <h3 style={{ marginBottom: "2px", paddingBottom: "0" }}>
        Head Post Office
      </h3>
      <div className="dropdown">
        <select
          onChange={(e) => setselectedsubdivision(e.target.value)}
          value={selectedsubdivision}
          style={{ marginTop: "0", marginBottom: "20px" }}
        >
          <option value="">Select sub division</option>
          {subdivisionList.map((option, index) => (
            <option key={index} value={option[1]}>
              {option.subdivision_name}
            </option>
          ))}
        </select>
      </div>

      {selectedsubdivision && (
        <>
          {/* Heading for the block office dropdown */}
          <h3>Sub Post Office</h3>
          <div className="dropdown">
            <select
              onChange={(e) => {
                const newBlock = e.target.value;
                setSelectedblock(newBlock);
                console.log("Selected block updated:", newBlock); // Log the selected block
              }}
              value={selectedblock}
            >
              <option value="">Select a block</option>
              {blocklists.map((block, index) => (
                <option key={index} value={block.block_name}>
                  {block.block_name}
                </option>
              ))}
            </select>
          </div>
        </>
      )}

      <div className="signOut">
        <a href="/">
          <div className="bi bi-info-square"></div> Sign-out
        </a>
      </div>
    </div>
  );
}
