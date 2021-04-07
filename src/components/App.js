import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";
import SearchForm from "./SearchPage";
import BreweryPage from "./BreweryPage";
//import ".styles/App.css";

function App() {
  return (
    <Switch>
      <Route path="/brewery-results/:name" component={BreweryPage} />
      <Route path="/brewery-results/" component={BreweryPage} />
      <Route path="/" component={SearchForm} />
    </Switch>
  );
}

export default App;

/*
"As a user, I want to input the Zip code into the zip code text block or if I don't know the zip code, I want to input my City and State into the city and state text block so that I can submit that data into the site."
*/
