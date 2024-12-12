import { useState } from "react";
import Spend from "../assets/images/spend.png";
import Income from "../assets/images/income.png";
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

//function which ggives target amount and achieved amount



export function allstats(){
  // const [data, setData] = useState({
  //   "status": "success",
  //   "data": {
  //     "average_age": 32.3,
  //     "average_income_excluding_students": 23710,
  //     "beneficiaries_percentage": {
  //       "Kisan Vikas Patra": 13.35,
  //       "Mahila Samman Savings Certificate": 6.54,
  //       "National Savings Certificates (VIIIth Issue)": 13.35,
  //       "National Savings Monthly Income Account": 13.35,
  //       "National Savings Recurring Deposit Account": 13.35,
  //       "National Savings Time Deposit Account": 13.35,
  //       "Post Office Savings Account": 13.35,
  //       "Public Provident Fund Account": 13.35,
  //       "Senior Citizens Savings Scheme": 0,
  //       "Sukanya Samriddhi Account": 0
  //     },
  //     "most_popular_scheme": "Post Office Savings Account",
  //     "popular_occupation": "Teacher",
  //     "scheme_statistics": {
  //       "Kisan Vikas Patra": [100, 100],
  //       "Mahila Samman Savings Certificate": [49, 49],
  //       "National Savings Certificates (VIIIth Issue)": [100, 100],
  //       "National Savings Monthly Income Account": [100, 100],
  //       "National Savings Recurring Deposit Account": [100, 100],
  //       "National Savings Time Deposit Account": [100, 100],
  //       "Post Office Savings Account": [100, 100],
  //       "Public Provident Fund Account": [100, 100],
  //       "Senior Citizens Savings Scheme": [0, 0],
  //       "Sukanya Samriddhi Account": [0, 0]
  //     },
  //     "total_children": 52,
  //     "total_female_population": 49,
  //     "total_senior_citizens": 0
  //   }
  // });

  const datanew = {
    "status": "success",
    "data": {
      "average_age": 32.3,
      "average_income_excluding_students": 23710,
      "beneficiaries_percentage": {
        "Kisan Vikas Patra": 13.35,
        "Mahila Samman Savings Certificate": 6.54,
        "National Savings Certificates (VIIIth Issue)": 13.35,
        "National Savings Monthly Income Account": 13.35,
        "National Savings Recurring Deposit Account": 13.35,
        "National Savings Time Deposit Account": 13.35,
        "Post Office Savings Account": 13.35,
        "Public Provident Fund Account": 13.35,
        "Senior Citizens Savings Scheme": 0,
        "Sukanya Samriddhi Account": 0
      },
      "most_popular_scheme": "Post Office Savings Account",
      "popular_occupation": "Teacher",
      "scheme_statistics": {
        "Kisan Vikas Patra": [100, 100],
        "Mahila Samman Savings Certificate": [49, 49],
        "National Savings Certificates (VIIIth Issue)": [100, 100],
        "National Savings Monthly Income Account": [100, 100],
        "National Savings Recurring Deposit Account": [100, 100],
        "National Savings Time Deposit Account": [100, 100],
        "Post Office Savings Account": [100, 100],
        "Public Provident Fund Account": [100, 100],
        "Senior Citizens Savings Scheme": [0, 0],
        "Sukanya Samriddhi Account": [0, 0]
      },
      "total_children": 52,
      "total_female_population": 49,
      "total_senior_citizens": 0
    }
  }

  function PaymentLimit() {
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
  
  // function which gives average income and popular occupation
  function IncomeAndOccupationDetails() {
    // State for dynamic values
    // const [averageIncome, setAverageIncome] = useState(2254); // Example initial average income
    // const [popularOccupation, setPopularOccupation] = useState("Teacher"); // Example initial popular occupation value
  
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
            <div className="fw-bold">{datanew.data.average_income_excluding_students}</div>
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
            <div className="fw-bold">{datanew.data.popular_occupation}</div>
          </div>
        </div>
      </div>
    );
  }
  
  // function which gives average age group and total female
  function AgeAndFemaleStats() {
    // State for dynamic values
    // const [avgAgeGroup, setAvgAgeGroup] = useState(2254); // Example initial value for average age group
    // const [totalFemale, setTotalFemale] = useState(2254); // Example initial value for total female
  
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
            <div className="fw-bold">{datanew.data.average_age}</div>
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
            <div className="fw-bold">{datanew.data.total_female_population}</div>
          </div>
        </div>
      </div>
    );
  }
  
  // Function which gives popular scheme name
  function PredictedSchemeCard() {
    // State to hold the scheme name
    // const [schemeName, setSchemeName] = useState("Sukanya Yojna");
  
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
          {datanew.data.most_popular_scheme}
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="col-4 d-flex justify-content-end">
            {/* Placeholder for future content */}
          </div>
        </div>
      </div>
    );
  }
  
  
  // function which gives senior citizen and total children
  function Population() {
    // State for dynamic values
    // const [seniorCitizen, setSeniorCitizen] = useState(2254); // Example initial value for Senior Citizen
    // const [totalChildren, setTotalChildren] = useState(2254); // Example initial value for Total Children
  
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
            <div className="fw-bold">{datanew.data.total_senior_citizens}</div>
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
            <div className="fw-bold">{datanew.data.total_children}</div>
          </div>
        </div>
      </div>
    );
  }
  
  // function which gives the list of schemes data
  function SchemeBeneficiaryList() {
    // Initialize the schemes data in the given format
    const schemeData = datanew.data.scheme_statistics;
  
    // Convert the scheme data into an array of objects
    const schemes = Object.entries(schemeData).map(([name, values]) => {
      const [beneficiaryPredicted, percentage] = values;
      return { name, beneficiaryPredicted, percentage };
    });
  
    // Sort schemes in descending order by percentage
    const sortedSchemes = [...schemes].sort((a, b) => b.percentage - a.percentage);
  
    return (
      <div className="py-3">
        {/* Title */}
        <div className="mb-2 d-flex justify-content-between align-items-center">
          <div style={{ fontSize: "20px", fontWeight: "600" }}>List of Schemes</div>
          <div className="text-muted">View all</div>
        </div>
        <hr />
  
        {/* Scrollable container for the schemes list */}
        <div
          style={{
            height: "calc(3 * 90px)", // Height for 3 schemes
            overflowY: "auto",
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE
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
                  <p>Beneficiary Predicted - {scheme.beneficiaryPredicted}</p>
                </div>
              </div>
              <div className="text-dark" style={{ fontSize: "20px", fontWeight: "500" }}>
                {scheme.percentage}%{" "}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
    
  //giving graph which not imp
  function Datastact() {
    return (
      <div className="col-12" style={{ height: "250px" }}>
        <Example />
      </div>
    );
  }
  
  // function to set the data for the bar chart
  function TopSchemes() {
    // Initialize the schemes data with percentages directly
    const schemes = datanew.data.beneficiaries_percentage
   
  
    // Convert schemes object into an array of objects
    const schemeArray = Object.entries(schemes).map(([name, percentage]) => ({
      name,
      percentage,
    }));
  
    // Sort schemes in descending order by percentage
    const sortedSchemes = schemeArray.sort((a, b) => b.percentage - a.percentage);
  
    // Take top 4 schemes
    const top4Schemes = sortedSchemes.slice(0, 4);
  
    // Sum up the remaining schemes' percentages for "Others"
    const othersPercentage = sortedSchemes
      .slice(4)
      .reduce((acc, scheme) => acc + scheme.percentage, 0);
  
    // Create final dataset with top 4 + "Others"
    const finalData = [
      ...top4Schemes,
      { name: "Others", percentage: othersPercentage },
    ];
  
    // Prepare data for the Pie chart
    const data = {
      labels: finalData.map((scheme) => scheme.name),
      datasets: [
        {
          label: "Scheme Population Representation",
          data: finalData.map((scheme) => scheme.percentage),
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
          formatter: (value, context) => `${value.toFixed(2)}%`,
          color: "#fff",
          font: {
            weight: "bold",
            size: 14,
          },
        },
        tooltip: {
          callbacks: {
            label: function (tooltipItem) {
              const value = tooltipItem.raw;
              return `${tooltipItem.label}: ${value.toFixed(2)}%`;
            },
          },
        },
        legend: {
          position: "top",
          labels: {
            usePointStyle: true,
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
          Top 4 Schemes + Others
        </div>
        <hr />
        <Pie data={data} options={options} />
      </div>
    );
  }
  
  
  
  
  function Insurance() {
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
  
  function Partners() {
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
          </div>
        </div>
      </div>
    );
  }
  
  function ImportantInformation() {
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
  
  function BottomNav() {
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

  return{
  BottomNav,
  PaymentLimit,
  IncomeAndOccupationDetails,
  AgeAndFemaleStats,
  PredictedSchemeCard,
  Population,
  SchemeBeneficiaryList,
  Datastact,
  TopSchemes,
  Insurance,
  Partners,
  ImportantInformation
  }
  
}