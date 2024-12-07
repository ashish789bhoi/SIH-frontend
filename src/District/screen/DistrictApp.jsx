import React from "react";
import Sidenav from "./components/Sidenav";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from "./components/Main";
import { BottomNav } from "./components/Cards";
// import { bgTop } from "./assets/images/bgTop.png";

function DistrictApp() {
  return (
    <>
      {/* <div className="headerPartern">
        <div class="mbprofile"></div>
      </div> */}
      <Sidenav />
      <Main />
      <BottomNav />
    </>
  );
}

export default DistrictApp;
