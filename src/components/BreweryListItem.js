import { useContext } from "react";
import { BreweryContext } from "../Context";
import "../styles/BreweryListItem.css";
//import "../styles/BreweryListItemEx.css";

export default function BreweryListItem({brewery}) {
  const { setCurrentBrew } = useContext(BreweryContext);
  function eventHandler(e) {
    e.preventDefault();
    setCurrentBrew(brewery);
  }
  return (
    <div className="brewery-list-item btn" onClick={eventHandler}>
      <div className='brewery-list-item-name'>{brewery.name}</div>
      <div className='brewery-list-item-info'>{brewery.street + ", " + brewery.city}</div>
    </div>
  );
}
