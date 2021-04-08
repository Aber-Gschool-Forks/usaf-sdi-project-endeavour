import { useState, useContext } from "react";
import { BreweryContext } from "../Context";

export default function BreweryCard() {
  const { currentBrew } = useContext(BreweryContext);
  return (
      <div className="BreweryCard">
        <h1>{currentBrew}</h1>
      </div>
  );
}
