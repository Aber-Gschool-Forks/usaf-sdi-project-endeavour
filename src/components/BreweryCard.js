import "../styles/BreweryCard.css";
import { useState, useContext } from "react";
import { BreweryContext } from "../Context";
import formatPhoneNumber from "../FormatPhoneNumber";

export default function BreweryCard() {
  const { currentBrew } = useContext(BreweryContext);
  var brewName, brewCity, brewState, brewPostal, brewCityStateZip, brewStreet, brewType, brewPhone, brewLat, brewLong, brewUrl;
  if( currentBrew ){
    brewName = currentBrew.name;
    brewCity = currentBrew.city;
    brewState = currentBrew.State;
    brewPostal = currentBrew.postal_code;
    brewCityStateZip = brewCity + ', ' + brewState + " " + brewPostal;
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
        <div className ='brewery-card-citystatezip'>{brewCityStateZip}</div>
        <a href={brewUrl} className ='brewery-card-url'>{brewUrl}</a>
        <div className ='brewery-card-phone'>{formatPhoneNumber(brewPhone)}</div>
        <div className ='brewery-card-type'>{brewType}</div>
        <a className="googleLink" href={`https://www.google.com/maps/search/?api=1&query=${brewLat},${brewLong}+beer+${brewCity}+${brewState}&zoom=13`} target="_blank">Open in Google Maps</a>
      </div>
    </div>
  );
}
