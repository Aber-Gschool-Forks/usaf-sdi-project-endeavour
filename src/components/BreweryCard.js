import "../styles/BreweryCard.css";
import { useContext } from "react";
import { BreweryContext } from "../Context";
import formatPhoneNumber from "../FormatPhoneNumber";

export default function BreweryCard() {
  const { currentBrew } = useContext(BreweryContext);
  const google = <img src='https://mustlovetraveling.com/wp-content/uploads/2018/11/google-maps.png'/>
  var brewName, brewCity, brewState, brewPostal, brewCityStateZip, brewStreet, brewType, brewPhone, brewLat, brewLong, brewUrl;
  if( currentBrew ){
    brewName = currentBrew.name||'N/A';
    brewCity = currentBrew.city||'N/A';
    brewState = currentBrew.state||'N/A';
    brewPostal = currentBrew.postal_code||'N/A';
    brewStreet = currentBrew.street||'N/A';
    brewType = currentBrew.brewery_type||'N/A';
    brewPhone = currentBrew.phone||'N/A';
    brewLat = currentBrew.latitude||'N/A';
    brewLong = currentBrew.longitude||'N/A';
    brewUrl = currentBrew.website_url||'N/A';
    brewCityStateZip = brewCity + ', ' + brewState + " " + brewPostal;
  }

  return (
    <div className="container">
      <div className="brewery-card">
        <div className ='brewery-card-name'>{brewName}</div>
        <div className ='brewery-card-street'>{brewStreet}</div>
        <div className ='brewery-card-citystatezip'>{brewCityStateZip}</div>
        <a href={brewUrl} className ='brewery-card-url'>{brewUrl}</a>
        <div className ='brewery-card-phone'>{formatPhoneNumber(brewPhone)}</div>
        <div className ='brewery-card-type'>{brewType}</div>
        <a className="googleLink" href={`https://www.google.com/maps/search/?api=1&query=${brewLat},${brewLong}+beer+${brewCity}+${brewState}&zoom=13`} target="_blank">{google}</a>
      </div>
    </div>
  );
}
