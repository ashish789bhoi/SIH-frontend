import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./screen/App";
// import DistrictApp from "./screen/DistrictApp";
// import SubDivisionApp from "./screen/SubDivisionApp";
import BlockApp from "./screen/Block";
import "./screen/assets/css/style.css";
import "./screen/assets/css/responsive.css";


function BlockMain() {
  return (
    <>
      <React.StrictMode>
        <BlockApp />
      </React.StrictMode>
    </>
  );
}

export default BlockMain;
