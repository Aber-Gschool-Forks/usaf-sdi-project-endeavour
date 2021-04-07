import { useState, useEffect } from "react";
import { BreweryContext } from "../BreweryContext";

function BreweryPage() {
  const { breweryData, setBreweryData } = useState();

  return (
    <BreweryContext.Provider value={{ breweryData, setBreweryData }}>
      <div className="brewery-page">
        <BreweryList />
        <PerDiemCard />
        <BreweryCard />
      </div>
    </BreweryContext.Provider>
  );
}
