import { useEffect, useContext } from "react";
import { BreweryContext } from "../Context";
import fetch from "../AsyncFetch";
import BreweryList from "./BreweryList";
import PerDiemCard from "./PerDiemCard";
import BreweryCard from "./BreweryCard";
import { useHistory } from "react-router-dom";

var link = "https://api.openbrewerydb.org/breweries";

export default function BreweryPage({ history }) {
  var breweryFetch = [];
  useEffect(() => {
    fetch(link).then((data) => (breweryFetch = data));
  });
  return (
    <BreweryContext.Provider value={{ breweryFetch }}>
      <div className="brewery-page">
        <BreweryList />
        <PerDiemCard />
        <BreweryCard />
      </div>
      <h1>{history.location.stateField}</h1>
      <p>{history.location.cityField}</p>
    </BreweryContext.Provider>
  );
}
