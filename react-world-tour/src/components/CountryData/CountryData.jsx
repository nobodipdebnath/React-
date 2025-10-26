import React from 'react'

export const CountryData = (props) => {
    const {country, handelVisitedCountries, handelVisitedFlags} = props;
  return (
    <div>
        <h4>Country Data : {country.name.common} </h4>
    </div>
  )
}
