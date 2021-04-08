import { useState, useContext, useEffect } from "react";
import { BreweryContext } from "../Context";

export default function BreweryListItem() {
  const { setCurrentBrew } = useContext(BreweryContext);
  function eventHandler(e) {
    e.preventDefault();
    setCurrentBrew("thisisatest");
  }
  return (
    <div className="BreweryListItem">
      <h2 onClick={eventHandler}>ChangeStuff</h2>
    </div>
  );
}
