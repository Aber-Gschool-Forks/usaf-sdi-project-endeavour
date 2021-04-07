import React, { useState, useEffect } from "react";
import { Link, Route, useHistory } from "react-router-dom";
import "../styles/SearchPage.css";
import Header from "./Header";

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
    <form className="searchForm" onSubmit={handleSubmit}>
      <label>Zip</label>
      <br />
      <input
        type="number"
        className="zipText"
        placeholder="Enter your zip code here"
        name="zipcode"
        maxLength= "5"
        min ="00000"
        max = "99999"
        onInput = {zipCodeValidator}

      ></input>
      <br />
      <label>OR</label>
      <br />
      <label>City:</label>
      <input
        type="text"
        className="City"
        placeholder="Enter your city here"
        name="cityField"
      ></input>
      <br />
      <label>State:</label>
      {/* Use a drop down for 2 letter states */}
      <input
        type="text"
        className="State"
        placeholder="Enter your state here"
        name="stateField"
      ></input>
      <br />

          <button className="submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchForm;
