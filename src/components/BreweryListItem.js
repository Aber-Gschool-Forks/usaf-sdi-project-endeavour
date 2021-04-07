import { useState, useContext } from "react";
import { BreweryContext } from "../Context";

export default function BreweryListItem() {
  const { setCurrentBrewery } = useContext(BreweryContext);
  function eventHandler(e) {
    e.preventDefault();
    setCurrentBrewery("thisisatest");
  }
  return (
    <div className="BreweryListItem">
      <button onClick={eventHandler}>ChangeStuff</button>
    </div>
  );
}
