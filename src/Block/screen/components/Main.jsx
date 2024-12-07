import React from "react";
import {
  Balance,
  PaymentLimit,
  SpendORincome,
  Population,
  Insurance,
  Spendtrack,
  Latextspend,
  Datastact,
  Schemes,
  Salary,
  SchedulPayement,
} from "../components/Cards";

export default function Main() {
  return (
    <div className="main bg-light">
      <div className="py-3 p-2">
        <div className="pb-4 legend">
          {" "}
          Dashboard{" "}
        </div>
        <div className="Maindata">
          {/* data first side */}
          <div className="first-child ">
            <Balance />
            <PaymentLimit />
            <SpendORincome />
            <Spendtrack />
            <Population />
            <Latextspend />

            <Salary />
          </div>
          {/* data second side */}
          <div className="last-child">
            <Datastact />
            
            <Schemes />
            <Insurance />

            <SchedulPayement />
          </div>
        </div>
      </div>
    </div>
  );
}
