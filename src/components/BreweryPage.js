import "../styles/BreweryPage.css";
import { BreweryProvider } from "../Context";
import { breweryAPI, perDiemAPI } from '../Urls';
import BreweryList from "./BreweryList";
import PerDiemCard from "./PerDiemCard";
import BreweryCard from "./BreweryCard";


export default function BreweryPage({ history }) {
  const city = history.location.cityField;
  const state = history.location.stateField;
  const zip = history.location.zipcode;
  const brewUrl = breweryAPI(city, state.State, zip);
  const perDiemUrl = perDiemAPI(city, state.Code, zip);
  
  return (
    <BreweryProvider>
      <div className="brewery-page">
          <BreweryList className="brewery-list" url={brewUrl}/>
          <br />
          <PerDiemCard className="per-diem-card"url={perDiemUrl}/>
          <BreweryCard className="brewery-card"/>
      </div>
    </BreweryProvider>
  );
}
