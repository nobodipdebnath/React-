import { useState } from "react";
import "./Country.css";
import { CountryDetails } from "../Country-Details/CountryDetails";
function Country({ country, handelVisitedCountries, handelVisitedFlags  }) {
  const { name, flags, capital, cca3, population } = country;

  const [visited, setVisited] = useState(false);

  const handelVisited = () => {
    setVisited(!visited);
  };


  return (
    <div className={`country ${visited ? "visited" : "non-visited"}`}>
      <h3 style={{ color: visited ? "Purple" : "white" }}>
        Name :{name?.common}{" "}
      </h3>
      <img src={flags.png} alt="" />
      <p>capital: {capital}</p>
      <p>population : {population}</p>
      <p>
        <small>Code : {cca3}</small>
      </p>
      <button onClick={() => handelVisitedCountries(country)}>Mark visited</button>
      <button onClick={() => handelVisitedFlags(country.flags.png)}>Add Flag</button>
      <button onClick={handelVisited}>{visited ? "Visited" : "Going"}</button>
      {visited ? "I have visited this Country" : "I want to visit this country"}
      <hr />
      <CountryDetails
        country={country}
        handelVisitedFlags ={handelVisitedFlags}
        handelVisitedCountries ={handelVisitedCountries}
      ></CountryDetails>
    </div>
  );
}

export default Country;
