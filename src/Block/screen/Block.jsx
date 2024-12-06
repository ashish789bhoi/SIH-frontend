import React from "react";
import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import { BottomNav } from "./components/Cards";
// import { bgTop } from "./assets/images/bgTop.png";

function BlockApp() {
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

export default BlockApp;
