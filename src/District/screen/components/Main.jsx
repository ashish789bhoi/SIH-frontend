// import React from "react";
import {allstats} from "../components/Cards";
const {
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
} = allstats();

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
            <PredictedSchemeCard />
            <PaymentLimit />
            <IncomeAndOccupationDetails />
            <AgeAndFemaleStats />
            <Population />
            <SchemeBeneficiaryList />

            <Partners />
          </div>
          {/* data second side */}
          <div className="last-child">
            <Datastact />
            
            <TopSchemes />
            <Insurance />

            <ImportantInformation />
          </div>
        </div>
      </div>
    </div>
  );
}
