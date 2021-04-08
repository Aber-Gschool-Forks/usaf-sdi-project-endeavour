import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";
import SearchForm from "./SearchPage";
import BreweryPage from "./BreweryPage";
import About from "./About";
import Header from "./Header";
import Footer from './Footer';
//import ".styles/App.css";

function App() {
  return (
    <div className='app'>
      <Header />
    <Switch>
      <Route path="/brewery-results/:name" component={BreweryPage} />
      <Route path="/brewery-results/" component={BreweryPage} />
      <Route path="/about" component={About} />
      <Route path="/" component={SearchForm} />
    </Switch>
    <Footer />
    </div>
  );
}

export default App;


