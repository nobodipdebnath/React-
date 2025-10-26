import React from "react";
import { CountryData } from "../CountryData/CountryData";

export const CountryDetails = (props) => {
  const {
  country,
  handelVisitedFlags,
  handelVisitedCountries,
} = props;
  return (
    <div>
      <h4>Country Details</h4>
      <hr />
      {/* <CountryData
        country={country}
        handelVisitedCountries={handelVisitedCountries}
        handelVisitedFlags={handelVisitedFlags}
      ></CountryData> */}

      <CountryData {...props} ></CountryData>
    </div>
  );
};
