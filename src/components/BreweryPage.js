import { useEffect } from "react";
import { BreweryContext } from "../Context";
import fetch from "../AsyncFetch";
import BreweryList from "./BreweryList";
import PerDiemCard from "./PerDiemCard";
import BreweryCard from "./BreweryCard";
import { Link } from "react-router-dom";
import BreweryListItem from "./BreweryListItem";

var link = "https://api.openbrewerydb.org/breweries";

export default function BreweryPage({ history }) {
  var breweryFetch = [];
  const city = history.location.cityField;
  const state = history.location.stateField;
  const zip = history.location.zip;
  useEffect(() => {
    fetch(link).then((data) => (breweryFetch = data));
  });
  return (
    <BreweryContext.Provider>
      <div className="brewery-page">
        <BreweryList />
        <BreweryListItem />
        <PerDiemCard />
        <BreweryCard />
      </div>
      <Link to={`/brewery-results/${city}`}>
        <h1>{city}</h1>
      </Link>
      <h1>This is how we know we are in brewery results page</h1>
      <h1>{zip}</h1>
      <h1>{state}</h1>
    </BreweryContext.Provider>
  );
}
