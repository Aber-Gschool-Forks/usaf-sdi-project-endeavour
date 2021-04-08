import React, { useState, useEffect } from "react";
import { Link, Route, useHistory } from "react-router-dom";
import "../styles/SearchPage.css";
import Header from "./Header";
import Footer from './Footer';

function SearchForm() {
  const history = useHistory();
  //form docs: https://reactjs.org/docs/forms.html
  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.stateField.value);
    history.push({
      pathname: "/brewery-results",
      stateField: event.target.stateField.value,
      cityField: event.target.cityField.value,
      zipcode: event.target.zipcode.value,
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
              name="zipcode"
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
            <input
              type="text"
              className="State txtInput"
              placeholder="Enter your state here"
              name="stateField"
            >
            </input>
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
