import "../styles/BreweryPage.css";
import { useParams } from 'react-router-dom';
import { BreweryProvider } from "../Context";
import { breweryAPI, perDiemAPI } from '../Urls';
import BreweryList from "./BreweryList";
import PerDiemCard from "./PerDiemCard";
import BreweryCard from "./BreweryCard";


export default function BreweryPage() {
  const { cityfield, statefield, statecode, zipcode } = useParams();
  const brewUrl = breweryAPI(cityfield, statefield, zipcode, 1);
  const perDiemUrl = perDiemAPI(cityfield, statecode, zipcode);
  
  return (
    <BreweryProvider>
      <div className="brewery-page a">
        <div className="brewery-list-container">
          <BreweryList className="brewery-list" url={brewUrl}/>
        </div>
        <div className="per-diem-card-container">
          <PerDiemCard className="per-diem-card"url={perDiemUrl}/>
        </div>
        <div className="brewery-card-container">
          <BreweryCard className="brewery-card"/>
        </div>
      </div>
    </BreweryProvider>
  );
}
