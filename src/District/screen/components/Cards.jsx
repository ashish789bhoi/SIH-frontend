// import React from "react";
import React, { useState } from "react";
import Spend from "../assets/images/spend.png";
import Income from "../assets/images/income.png";
import Dem from "../assets/images/DEMMO7.png";
import Dem1 from "../assets/images/DEMMO1.svg";
import Dem2 from "../assets/images/DEMMO2.svg";
import Dem3 from "../assets/images/DEMMO3.svg";
import Dem4 from "../assets/images/DEMMO6.png";
import Example from "./datanylys";

import { Pie } from "react-chartjs-2";
// import Chart from "chart.js/auto";
// import ChartDataLabels from "chartjs-plugin-datalabels";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

// Register required modules
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const Card = () => {
  return <div></div>;
};
// export default Card;


export function Balance() {
  // State to hold the scheme name
  const [schemeName, setSchemeName] = useState("Sukanya Yojna");

  return (
    <div className="col-12 p-3 shadow rounded-3">
      <div className="d-flex justify-content-between align-items-center">
        <div style={{ fontSize: "20px", color: "gray" }}>Predicted Popular Scheme</div>
        <div className="d-flex justify-content-between align-items-center">
          {/* Placeholder for additional features */}
        </div>
      </div>
      <div
        className="p-4 justify-content-center align-items-center"
        style={{ fontSize: "40px", fontWeight: "400" }}
      >
        {schemeName}
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <div className="col-4 d-flex justify-content-end">
          {/* <div
            className="position-relative"
            style={{
              background: "#ff6347ba",
              left: "11px",
              borderRadius: "50px",
              width: "30px",
              height: "30px",
            }}
          ></div> */}
          {/* <div
            style={{
              background: "#f68f04",
              borderRadius: "50px",
              width: "30px",
              height: "30px",
            }}
          ></div> */}
        </div>
      </div>
    </div>
  );
}

export function PaymentLimit() {
  // State to hold achieved amount and target amount
  const [achieved, setAchieved] = useState(1200); // Example initial achieved amount
  const [target, setTarget] = useState(3000); // Example target amount

  return (
    <div className="py-3">
      <div className="my-2 d-flex justify-content-between">
        <div style={{ fontSize: "15px", color: "gray" }}>Target Achieved</div>
        <div style={{ fontSize: "12px", color: "gray" }}>
          <span style={{ fontWeight: "400", color: "black" }}>
            ${achieved.toLocaleString()}{" "}
          </span>
          / {target.toLocaleString()}
        </div>
      </div>
      {/* loading */}
      <div className="PaymentLimit rounded-3">
        <div
          className="PaymentLimitChild rounded-3"
          style={{
            width: `${(achieved / target) * 100}%`, // Dynamically adjust progress width
          }}
        ></div>
      </div>
    </div>
  );
}


export function SpendORincome() {
  // State for dynamic values
  const [averageIncome, setAverageIncome] = useState(2254); // Example initial average income
  const [popularOccupation, setPopularOccupation] = useState(2254); // Example initial popular occupation value

  return (
    <div className="py-3 d-flex justify-content-between">
      {/* Average Income */}
      <div
        className="border d-flex p-2 rounded col-5"
        style={{ textAlign: "right" }}
      >
        <img src={Income} alt="income" className="col-6" />
        <div>
          <div className="text-muted">Average Income</div>
          <div className="fw-bold">{averageIncome.toLocaleString()}</div>
        </div>
      </div>

      {/* Popular Occupation */}
      <div
        className="bg-white d-flex shadow-sm p-2 rounded col-6"
        style={{ textAlign: "right" }}
      >
        <img src={Spend} alt="spending" className="col-6" />
        <div>
          <div className="text-muted">Popular Occupation</div>
          <div className="fw-bold">{popularOccupation.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
}


export function Spendtrack() {
  // State for dynamic values
  const [avgAgeGroup, setAvgAgeGroup] = useState(2254); // Example initial value for average age group
  const [totalFemale, setTotalFemale] = useState(2254); // Example initial value for total female

  return (
    <div className="py-3 d-flex justify-content-between">
      {/* Avg. Age Group */}
      <div
        className="border d-flex p-2 rounded col-5"
        style={{ textAlign: "right" }}
      >
        <img src={Income} alt="income" className="col-6" />
        <div>
          <div className="text-muted">Avg. Age Group</div>
          <div className="fw-bold">{avgAgeGroup.toLocaleString()}</div>
        </div>
      </div>

      {/* Total Female */}
      <div
        className="bg-white d-flex shadow-sm p-2 rounded col-6"
        style={{ textAlign: "right" }}
      >
        <img src={Spend} alt="spending" className="col-6" />
        <div>
          <div className="text-muted">Total Female</div>
          <div className="fw-bold">{totalFemale.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
}



export function Population() {
  // State for dynamic values
  const [seniorCitizen, setSeniorCitizen] = useState(2254); // Example initial value for Senior Citizen
  const [totalChildren, setTotalChildren] = useState(2254); // Example initial value for Total Children

  return (
    <div className="py-3 d-flex justify-content-between">
      {/* Senior Citizen */}
      <div
        className="border d-flex p-2 rounded col-5"
        style={{ textAlign: "right" }}
      >
        <img src={Income} alt="income" className="col-6" />
        <div>
          <div className="text-muted">Senior Citizen</div>
          <div className="fw-bold">{seniorCitizen.toLocaleString()}</div>
        </div>
      </div>

      {/* Total Children */}
      <div
        className="bg-white d-flex shadow-sm p-2 rounded col-6"
        style={{ textAlign: "right" }}
      >
        <img src={Spend} alt="spending" className="col-6" />
        <div>
          <div className="text-muted">Total Children</div>
          <div className="fw-bold">{totalChildren.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
}



export function Latextspend() {
  // Dynamically set total population (can be passed as a prop or state)
  const [totalPopulation, setTotalPopulation] = useState(2000); // Default population 2000

  // Initialize the schemes array with 11 schemes using useState
  const [schemes, setSchemes] = useState([
    {
      name: "Kisan Vikas Patra(KVP)",
      beneficiaryPredicted: 500, // Ensure this is smaller than totalPopulation
    },
    {
      name: "Senior Citizens Savings Scheme Account(SCSS)",
      beneficiaryPredicted: 50,
    },
    {
      name: "Mahila Samman Savings Certificate",
      beneficiaryPredicted: 500, // Ensure this is smaller than totalPopulation
    },
    {
      name: "Pradhan Mantri Jan Dhan Yojana (PMJDY)",
      beneficiaryPredicted: 1500,
    },
    {
      name: "Atal Pension Yojana (APY)",
      beneficiaryPredicted: 800,
    },
    {
      name: "Public Provident Fund (PPF)",
      beneficiaryPredicted: 1200,
    },
    {
      name: "Employees' Provident Fund (EPF)",
      beneficiaryPredicted: 1500,
    },
    {
      name: "Pradhan Mantri Awas Yojana (PMAY)",
      beneficiaryPredicted: 1000,
    },
    {
      name: "National Pension Scheme (NPS)",
      beneficiaryPredicted: 1200,
    },
    {
      name: "Sukanya Samriddhi Yojana",
      beneficiaryPredicted: 1800,
    },
    {
      name: "Beti Bachao Beti Padhao Yojana",
      beneficiaryPredicted: 400,
    },
  ]);

  // Validate beneficiaryPredicted to ensure it is smaller than totalPopulation
  const validatedSchemes = schemes.map((scheme) => {
    if (scheme.beneficiaryPredicted > totalPopulation) {
      console.warn(`${scheme.name} has beneficiaryPredicted greater than total population. Adjusting...`);
      scheme.beneficiaryPredicted = totalPopulation - 1; // Ensure beneficiaryPredicted is smaller than totalPopulation
    }
    const percentage = ((scheme.beneficiaryPredicted / totalPopulation) * 100).toFixed(2);
    return { ...scheme, percentage: parseFloat(percentage) };
  });

  // Sort schemes in descending order by percentage
  const sortedSchemes = [...validatedSchemes].sort((a, b) => b.percentage - a.percentage);

  return (
    <div className="py-3">
      {/* Title */}
      <div className="mb-2 d-flex justify-content-between align-items-center">
        <div style={{ fontSize: "20px", fontWeight: "600" }}>
          List of Schemes
        </div>
        <div className="text-muted">View all</div>
      </div>
      <hr />

      {/* Scrollable container for the schemes list */}
      <div
        style={{
          height: "calc(3 * 90px)", // Height of the wrapper equal to 3 schemes (assuming 90px per scheme)
          overflowY: "auto", // Keep it scrollable but hide the scrollbar
          scrollbarWidth: "none", // Firefox (hides scrollbar)
          msOverflowStyle: "none", // Internet Explorer (hides scrollbar)
        }}
      >
        {sortedSchemes.map((scheme, index) => (
          <div key={index} className="d-flex justify-content-between align-items-center mb-3">
            {/* Scheme Card */}
            <div className="d-flex justify-content-center align-items-center">
              <div
                className="p-3 rounded d-flex justify-content-center align-items-center shadow bi bi-search"
                style={{ marginRight: "20px" }}
              ></div>
              <div>
                <b>{scheme.name}</b>
                <p>Benificiary Predicted - {scheme.beneficiaryPredicted}</p>
              </div>
            </div>

            <div
              className="text-dark"
              style={{ fontSize: "20px", fontWeight: "500" }}
            >
              {scheme.percentage}%{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export function Datastact() {
  return (
    <div className="col-12" style={{ height: "250px" }}>
      <Example />
    </div>
  );
}


export function Schemes() {
  // Initialize the schemes array with beneficiaryPredicted values
  const [schemes, setSchemes] = useState([
    { name: "Kisan Vikas Patra(KVP)", beneficiaryPredicted: 500 },
    { name: "Senior Citizens Savings Scheme Account(SCSS)", beneficiaryPredicted: 50 },
    { name: "Mahila Samman Savings Certificate", beneficiaryPredicted: 500 },
    { name: "Pradhan Mantri Jan Dhan Yojana (PMJDY)", beneficiaryPredicted: 1500 },
    { name: "Atal Pension Yojana (APY)", beneficiaryPredicted: 800 },
    { name: "Public Provident Fund (PPF)", beneficiaryPredicted: 1200 },
    { name: "Employees' Provident Fund (EPF)", beneficiaryPredicted: 1500 },
    { name: "Pradhan Mantri Awas Yojana (PMAY)", beneficiaryPredicted: 1000 },
    { name: "National Pension Scheme (NPS)", beneficiaryPredicted: 1200 },
    { name: "Sukanya Samriddhi Yojana", beneficiaryPredicted: 1800 },
    { name: "Beti Bachao Beti Padhao Yojana", beneficiaryPredicted: 400 },
  ]);

  // Calculate the total beneficiary predicted across all schemes
  const totalBeneficiaries = schemes.reduce((acc, scheme) => acc + scheme.beneficiaryPredicted, 0);

  // Sort schemes by beneficiaryPredicted in descending order and get the top 5
  const sortedSchemes = schemes
    .sort((a, b) => b.beneficiaryPredicted - a.beneficiaryPredicted)
    .slice(0, 5);

  // Calculate the data for the Pie chart
  const data = {
    labels: sortedSchemes.map((scheme) => scheme.name), // Scheme names as labels
    datasets: [
      {
        label: "Scheme Population Representation",
        data: sortedSchemes.map((scheme) => scheme.beneficiaryPredicted), // BeneficiaryPredicted values
        backgroundColor: [
          "rgba(28, 118, 222, 0.8)",
          "rgba(231, 160, 18, 0.8)",
          "rgba(83, 30, 173, 0.8)",
          "rgba(230, 89, 59, 0.8)",
          "rgba(34, 197, 94, 0.8)",
        ],
        borderColor: [
          "rgba(28, 118, 222, 1)",
          "rgba(231, 160, 18, 1)",
          "rgba(83, 30, 173, 1)",
          "rgba(230, 89, 59, 1)",
          "rgba(34, 197, 94, 1)",
        ],
        // borderColor:"White",
        borderWidth: 2,
      },
    ],
  };

  // Chart options for displaying percentages
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        formatter: (value, context) => {
          const percentage = ((value / totalBeneficiaries) * 100).toFixed(2); // Calculate percentage
          return `${percentage}%`;
        },
        color: "#fff", // White text for data labels
        font: {
          weight: "bold",
          size: 14,
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const value = tooltipItem.raw;
            const percentage = ((value / totalBeneficiaries) * 100).toFixed(2); // Calculate percentage for tooltip
            return `${tooltipItem.label}: ${value} (${percentage}%)`;
          },
        },
      },
      legend: {
        position: "top",
        labels: {
          usePointStyle: true, // Use circular legend markers
        },
      },
    },
  };

  return (
    <div
      style={{
        width: "100%",
        height: "300px",
        marginBottom: "100px",
        marginTop: "20px",
        margin: "0 auto",
      }}
    >
      <div style={{ fontSize: "25px", fontWeight: "700", color: "black" }}>
        Top 5 Schemes by Predicted Beneficiaries
      </div>
      <hr />
      <Pie data={data} options={options} />
    </div>
  );
}





export function Insurance() {
  // Initialize the insurance schemes array using useState
  const [schemes, setSchemes] = useState([
    // Urban schemes
    { name: "Whole Life Assurance (Suraksha)" },
    { name: "Convertible Whole Life Assurance (Suvidha)" },
    { name: "Endowment Assurance (Santosh)" },
    { name: "Joint Life Assurance (Yugal Suraksha)" },
    { name: "Anticipated Endowment Assurance (Sumangal)" },
    { name: "Children Policy (Bal Jeevan Bima)" },

    // Rural schemes
    { name: "Whole Life Assurance (Gram Suraksha)" },
    { name: "Convertible Whole Life Assurance (Gram Suvidha)" },
    { name: "Endowment Assurance (Gram Santosh)" },
    { name: "10 Years Rural PLI (Gram Priya)" },
    { name: "Anticipated Endowment Assurance (Gram Sumangal)" },
    { name: "Children Policy (Bal Jeevan Bima)" },
  ]);

  // Sort the schemes in descending order by name (you can adjust sorting criteria as needed)
  const sortedSchemes = [...schemes].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="py-3" style={{ marginTop: "114px" }}>
      {/* Title */}
      <div className="mb-2 d-flex justify-content-between align-items-center">
        <div style={{ fontSize: "20px", fontWeight: "600" }}>Insurance</div>
        <div className="text-muted">View all</div>
      </div>
      <hr />

      {/* Scrollable container for the insurance schemes list */}
      <div
        style={{
          height: "calc(3 * 90px)", // Height of the wrapper equal to 3 schemes (assuming 90px per scheme)
          overflowY: "auto", // Make the container scrollable
          scrollbarWidth: "none", // Firefox (hides scrollbar)
          msOverflowStyle: "none", // Internet Explorer (hides scrollbar)
        }}
      >
        {sortedSchemes.map((scheme, index) => (
          <div key={index} className="d-flex justify-content-between align-items-center mb-3">
            {/* Scheme Card */}
            <div className="d-flex justify-content-center align-items-center">
              <div
                className="p-3 rounded d-flex justify-content-center align-items-center shadow bi bi-search"
                style={{ marginRight: "20px" }}
              ></div>
              <div>
                <b>{scheme.name}</b>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}




export function Salary() {
  return (
    <div className="py-3 my-2">
      <div className="mb-2 d-flex justify-content-between align-items-center ">
        <div style={{ fontSize: "20px", fontWeight: "700", color: "black" }}>
          Partners
        </div>
        {/* <div className="text-muted">View all</div> */}
      </div>
      <hr />

      <div className="d-flex py-2 styleScrollsend">
        {/* <div
          className="p-4 bg-dark text-white fw-bold d-flex justify-content-center align-items-center"
          style={{ borderRadius: "50px",
            backgroundImage: "url(" + Dem + ")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
             width: "60px", height: "60px" }}
        >
          {" "}
          +{" "}
        </div> */}
        <div
          className="p-4 shadow text-white fw-bold mx-3 d-flex justify-content-center align-items-center"
          style={{
            borderRadius: "50px",
            width: "60px",
            height: "60px",
            backgroundImage: "url(" + Dem1 + ")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          {/* {" "}
          +{" "} */}
        </div>
        <div
          className="p-4 shadow text-white fw-bold mx-3 d-flex justify-content-center align-items-center"
          style={{
            borderRadius: "50px",
            width: "60px",
            height: "60px",
            backgroundImage: "url(" + Dem2 + ")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          {/* {" "}
          +{" "} */}
        </div>
        <div
          className="p-4 shadow text-white fw-bold mx-3 d-flex justify-content-center align-items-center"
          style={{
            borderRadius: "50px",
            width: "60px",
            height: "60px",
            backgroundImage: "url(" + Dem3 + ")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          {/* {" "}
          +{" "} */}
        </div>
        <div
          className="p-4 shadow text-white fw-bold mx-3 d-flex justify-content-center align-items-center"
          style={{
            borderRadius: "50px",
            width: "60px",
            height: "60px",
            backgroundImage: "url(" + Dem4 + ")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          {/* {" "}
          +{" "} */}
        </div>
      </div>
    </div>
  );
}

export function SchedulPayement() {
  return (
    <div className="py-3 my-2 ej">
      <div className="mb-2 d-flex align-items-center">
        <div style={{ fontSize: "20px", fontWeight: "700", color: "black" }}>
          Important Information
        </div>
      </div>
      <hr />

      <div
        className="d-flex  styleScrollX "
        style={{ overflowX: "scroll", width: "100%" }}
      >
        <div
          className="py-2 px-4 text-white d-flex justify-content-between flex-column"
          style={{
            borderRadius: "10px",
            width: "180px",
            height: "200px",
            flexShrink: "0",
            backgroundColor: "#ffcb00",
          }}
        >
          {" "}
          <p style={{ fontSize: "24px", fontWeight: "700" }}>Rural</p>
          <div>
            {/* <span className="bi bi-playstation"></span> */}
            <p style={{fontSize:"24px"}}>Area</p>
          </div>
        </div>
        <div
          className="py-2 px-4 text-white d-flex justify-content-between flex-column mx-3"
          style={{
            borderRadius: "10px",
            width: "180px",
            height: "200px",
            flexShrink: "0",
            backgroundColor: "#ff2700",
          }}
        >
          {" "}
          <p style={{ fontSize: "24px", fontWeight: "700" }}>12-12-2024</p>
          <div>
            {/* <span className="bi bi-discord"></span> */}
            <p style={{fontSize:"24px"}}>Upcoming Dak Mela /Chaupal</p>

          </div>
        </div>
        <div
          className="py-2 px-4 text-white d-flex justify-content-between flex-column mx-3"
          style={{
            borderRadius: "10px",
            width: "180px",
            height: "200px",
            flexShrink: "0",
            backgroundColor: "rgb(135, 206, 235)",
          }}
        >
          {" "}
          <p style={{ fontSize: "24px", fontWeight: "700" }}>450</p>
          <div>
            {/* <span className="bi bi-xbox"></span> */}
            <p style={{fontSize:"24px"}}>Total POSB accounts</p>
          </div>
        </div>
        <div
          className="py-2 px-4 text-white d-flex justify-content-between flex-column mx-3"
          style={{
            borderRadius: "10px",
            width: "180px",
            height: "200px",
            flexShrink: "0",
            backgroundColor: "rgba(50, 205, 50, 0.8)",
          }}
        >
          {" "}
          <p style={{ fontSize: "24px", fontWeight: "700" }}>450</p>

          <div>
            {/* <span className="bi bi-steam"></span> */}
            <p style={{fontSize:"24px"}}>Total IPPB Outlet</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function BottomNav() {
  return (

    <div className="py-3 px-2 justify-content-between bottomNav">
      <a href="" className="bi bi-pie-chart-fill">
      </a>
      <a href="" className="bi bi-bar-chart-line">
      </a>
      <a href="" className="bi bi-arrow-down-up">
      </a>
      <a href="" className="bi bi-wallet2">
      </a>  <a href="" className="bi bi-emoji-sunglasses">
      </a>
    </div>
  )
}
