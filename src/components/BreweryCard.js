import "../styles/BreweryCard.css";
import { useState, useContext } from "react";
import { BreweryContext } from "../Context";

export default function BreweryCard() {
  const { currentBrew } = useContext(BreweryContext);
  var brewName, brewState, brewCity, brewPostal, brewStreet, brewType, brewPhone, brewLat, brewLong, brewUrl;
  if( currentBrew ){
    brewName = currentBrew.name;
    brewCity = currentBrew.city;
    brewState = currentBrew.state;
    brewPostal = currentBrew.postal_code;
    brewStreet = currentBrew.street;
    brewType = currentBrew.brewery_type;
    brewPhone = currentBrew.phone;
    brewLat = currentBrew.latitude;
    brewLong = currentBrew.longitude;
    brewUrl = currentBrew.website_url;
  }
  return (
    <div className="container">
      <div className="brewery-card">
        <div className ='brewery-card-name'>{brewName}</div>
        <div className ='brewery-card-street'>{brewStreet}</div>
        <div className ='brewery-card-citystatezip'>{brewCity + ", " + brewState + " " + brewPostal}</div>
        <a href={brewUrl} className ='brewery-card-url'>{brewUrl}</a>
        <div className ='brewery-card-phone'>{brewPhone}</div>
        <div className ='brewery-card-type'>{brewType}</div>
        <div className ='brewery-card-latitude'>{brewLat}</div>
        <div className ='brewery-card-longitude'>{brewLong}</div>
      </div>
    </div>
  );
}
