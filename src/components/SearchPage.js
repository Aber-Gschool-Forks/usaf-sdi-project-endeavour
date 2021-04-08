import React, { useState, useEffect } from "react";
import { Link, Route, useHistory } from "react-router-dom";
import "../styles/SearchPage.css";



const USStates = [
{
  State: "Alabama",
  Code: "AL"
},
{
  State: "Alaska",
  Code: "AK"
},
{
  State: "Arizona",
  Code: "AZ"
},
{
  State: "Arkansas",
  Code: "AR"
},
{
  State: "California",
  Code: "CA"
},
{
  State: "Colorado",
  Code: "CO"
},
{
  State: "Connecticut",
  Code: "CT"
},
{
  State: "Delaware",
  Code: "DE"
},
{
  State: "Florida",
  Code: "FL"
},
{
  State: "Georgia",
  Code: "GA"
},
{
  State: "Hawaii",
  Code: "HI"
},
{
  State: "Idaho",
  Code: "ID"
},
{
  State: "Illinois",
  Code: "IL"
},
{
  State: "Indiana",
  Code: "IN"
},
{
  State: "Iowa",
  Code: "IA"
},
{
  State: "Kansas",
  Code: "KS"
},
{
  State: "Kentucky",
  Code: "KY"
},
{
  State: "Lousiana",
  Code: "LA"
},
{
  State: "Maine",
  Code: "ME"
},
{
  State: "Maryland",
  Code: "MD"
},
{
  State: "Massachusetts",
  Code: "MA"
},
{
  State: "Michigan",
  Code: "MI"
},
{
  State: "Minnesota",
  Code: "MN"
},
{
  State: "Mississippi",
  Code: "MS"
},
{
  State: "Missouri",
  Code: "MO"
},
{
  State: "Montana",
  Code: "MT"
},
{
  State: "Nebraska",
  Code: "NE"
},
{
  State: "Nevada",
  Code: "NV"
},
{
  State: "New Hampshire",
  Code: "NH"
},
{
  State: "New Jersey",
  Code: "NJ"
},
{
  State: "New Mexico",
  Code: "NM"
},
{
  State: "New York",
  Code: "NY"
},
{
  State: "North Carolina",
  Code: "NC"
},
{
  State: "North Dakota",
  Code: "ND"
},
{
  State: "Ohio",
  Code: "OH"
},
{
  State: "Oklahoma",
  Code: "OK"
},
{
  State: "Oregon",
  Code: "OR"
},
{
  State: "Pennsylvania",
  Code: "PA"
},
{
  State: "Rhode Island",
  Code: "RI"
},
{
  State: "South Carolina",
  Code: "SC"
},
{
  State: "South Dakota",
  Code: "SD"
},
{
  State: "Tennessee",
  Code: "TN"
},
{
  State: "Texas",
  Code: "TX"
},
{
  State: "Utah",
  Code: "UT"
},
{
  State: "Vermont",
  Code: "VT"
},
{
  State: "Virgina",
  Code: "VA"
},
{
  State: "Washington",
  Code: "WA"
},
{
  State: "West Virgina",
  Code: "WV"
},
{
  State: "Wisconsin",
  Code: "WI"
},
{
  State: "Wyoming",
  Code: "WY"
},
]

function SearchForm() {
  const history = useHistory();
  //form docs: https://reactjs.org/docs/forms.html
  function handleSubmit(event) {
    let zipcode = event.target.zipCode.value
    let statefield = event.target.stateField.value
    let cityfield = event.target.cityField.value
    event.preventDefault();
    if (zipcode === "" && cityfield == "" )  {
      return alert("Please either use the Zip code or the City, bitch")
      
      // They need to use city and state
    }

    history.push({
      pathname: "/brewery-results",
      stateField: {
        State: event.target.stateField.options[event.target.stateField.selectedIndex].text,
        Code: event.target.stateField.value
      },
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
                    <option value={USState.Code}>{USState.State}</option>
                  )
                })}
              </select>
            <br />
            <br />
              <button className="submit" type="submit">
                Find BEER!
              </button>
          </form>
        </div>
      </div>
  );
}




export default SearchForm;
