import { useContext, useEffect } from "react";
import { BreweryContext } from "../Context";
import "../styles/BreweryListItem.css";

export default function BreweryListItem({brewery, index}) {
  const { setCurrentBrew, currentBrew } = useContext(BreweryContext);
  useEffect(() => {
    if(index === 0){
      setCurrentBrew(brewery)
    }
  }, []);
  function eventHandler(e) {
    e.preventDefault();
    setCurrentBrew(brewery);
  }
  return (
    <div className="brewery-list-item btn" onClick={eventHandler}>
      <div className='brewery-list-item-name'>{brewery.name}</div>
      <div className='brewery-list-item-info'>{(brewery.street||"N/A") + ", " + brewery.city}</div>
    </div>
  );
}
