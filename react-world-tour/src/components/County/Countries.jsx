import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countryes.css";

function Countries() {
  const [countries, setCountries] = useState([]);

  const [visitedCountries, setVisitedCountries] = useState([]);

  const [visitedFlags, setVisitedFlags] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,flags,population,cca3,capital")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handelVisitedCountries = country =>{
    // console.log('add this to your visited countries')
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  }

  const handelVisitedFlags = flag =>{
    const newVisitedFlag = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlag);
  }

  // remove item from an array in a state 
  // use filter to select all the element except the one you want to remove an array
  
  return (
    <div >
      <h3>Countries : {countries.length}</h3>
      {/* Visited Country */}
      <div>
        <h4>Visited Countries : {visitedCountries.length}</h4>
        <ul>
            {
              visitedCountries.map(country => <li key={country.cca3} >{country.name.common}</li>)
            }
        </ul>
      </div>
      <div className="flag-container">
        {
          visitedFlags.map((flag, idx) => <img key={idx} src={flag} ></img>)
        }

      </div>
      {/* Display Country */}
      <div className="country-container">
        {countries.map((country) => (
          <Country country={country}
           key={country.cca3}
           handelVisitedCountries ={handelVisitedCountries}
           handelVisitedFlags = {handelVisitedFlags }
           >
           </Country>
        ))}
      </div>
    </div>
  );
}

export default Countries;
