import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./screen/App";
import DistrictApp from "./screen/DistrictApp";
import "./screen/assets/css/style.css";
import "./screen/assets/css/responsive.css";


function DistrictMain() {
  return (
    <>
      <React.StrictMode>
        <DistrictApp />
      </React.StrictMode>
    </>
  );
}
export default DistrictMain;