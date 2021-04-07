import { useState } from "react";
import { BreweryContext } from "../Context";

export default function BreweryCard() {
  const { currentBrewery, setCurrentBrewery } = useState();
  return (
    <BreweryContext.Provider value={{ setCurrentBrewery }}>
      <div className="BreweryCard">
        <h1>{currentBrewery}</h1>
      </div>
    </BreweryContext.Provider>
  );
}
