import React  from "react";
import { useHistory } from "react-router-dom";
import USStates from '../USStates';
import "../styles/SearchPage.css";

function SearchForm() {
  const history = useHistory();
  //form docs: https://reactjs.org/docs/forms.html
  function handleSubmit(event) {
    let zipcode = event.target.zipCode.value || "+"
    let statefield = event.target.stateField.options[event.target.stateField.selectedIndex].text.replace(" ", "_") || "+"
    let statecode = event.target.stateField.value || "+"
    let cityfield = event.target.cityField.value.replace(" ", "_") || "+"

    event.preventDefault();

    if (event.target.zipCode.value === "" && event.target.stateField.options[event.target.stateField.selectedIndex].text == "" && event.target.cityField.value == "")  {
      return alert("Please either use the Zip code or the City")
    }

    history.push(`/brewery-results/${cityfield}/${statefield}/${statecode}/${zipcode}`)
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
                <option label=" "></option>
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
