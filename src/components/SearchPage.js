import React, { useState, useEffect } from "react";
import { Link, Route, useHistory } from "react-router-dom";
import "../styles/SearchPage.css";
import Header from "./Header";
import Footer from './Footer';


const USStates = [
"AL",
"AK",
"AZ",
"AR",
"CA",
"CO",
"CT",
"DE",
"FL",
"GA",
"HI",
"ID",
"IL",
"IN",
"IA",
"KS",
"KY",
"LA",
"ME",
"MD",
"MA",
"MI",
"MN",
"MS",
"MO",
"MT",
"NE",
"NV",
"NH",
"NJ",
"NM",
"NY",
"NC",
"ND",
"OH",
"OK",
"OR",
"PA",
"RI",
"SC",
"SD",
"TN",
"TX",
"UT",
"VT",
"VA",
"WA",
"WV",
"WI",
"WY",
]
function SearchForm() {
  const history = useHistory();
  //form docs: https://reactjs.org/docs/forms.html
  function handleSubmit(event) {
    let zipcode = event.target.zipCode.value
    let statefield = event.target.stateField.value
    let cityfield = event.target.cityField.value
    event.preventDefault();
    console.log(event.target.stateField.value);
    if (zipcode === "" && cityfield == "" )  {
      return alert("Please either use the Zip code or the City, bitch")
      
      // They need to use city and state
    }
    history.push({
      pathname: "/brewery-results",
      stateField: statefield,
      cityField: cityfield,
      zipcode: zipcode,
    });
  }
  //Do NoT dElEtE
  function zipCodeValidator (event) {
    if (event.target.value.length > 5) {
        event.target.value = event.target.value.slice(0, 5)
    }
}
  
  return (
    <div>
    <Header />
    <div className="titlePage">
      <div className="searchFormContainer">
        <form className="searchForm" onSubmit={handleSubmit}>
          <h1>Enter your location to find hot breweries in your area!</h1>
            <label>Zip</label>
          <br />
          <br />
            <input
              type="number"
              className="zipText txtInput"
              placeholder="Enter your zip code here"
              name="zipCode"
              maxLength= "5"
              min ="00000"
              max = "99999"
              onInput = {zipCodeValidator}
            >
            </input>
          <br />
          <br />
            <label>OR</label>
          <br />
          <br />
            <label>City:</label>
            <br />
            <input
              type="text"
              className="City txtInput"
              placeholder="Enter your city here"
              name="cityField"
            >
            </input>
          <br />
          <br />
            <label>State:</label>
            <br />
            {/* Use a drop down for 2 letter states */}
            <select className="State txtInput" placeholder="Choose your state here" name="stateField">
              {USStates.map(USState => {
                return (
                  <option value={USState}>{USState}</option>
                )
              })}
            </select>
          <br />
          <br />
            <button className="submit" type="submit">
              Submit
            </button>
        </form>
      </div>
    </div>
    <Footer />
    </div>
  );
}




export default SearchForm;
