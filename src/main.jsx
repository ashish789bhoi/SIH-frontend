import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./screen/App";
import LoginMain from "./Login/LoginMain";
import "./District/screen/assets/css/style.css";
import "./Subdivision/screen/assets/css/style.css";

import "./District/screen/assets/css/responsive.css";
import "./Subdivision/screen/assets/css/responsive.css";

import DistrictMain from "./District/DistrictMain";
import SubdivisionMain from "./Subdivision/SubdivisionMain";
import BlockMain from "./Block/Block";

ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>
    <BrowserRouter>
    <Routes>
       <Route index element ={<LoginMain />} / >
       <Route path="/District" element ={<DistrictMain />} / >
       <Route path="/Subdivision" element ={<SubdivisionMain />} / >
       <Route path="/Block" element ={<BlockMain />} / >




    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
