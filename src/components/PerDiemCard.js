import "../styles/PerDiemCard.css";
import { useState, useEffect } from "react";
import PerDiemCityState from './mockPerDiemData.js'
import fetchData from "../AsyncFetch.js"

var perDiem = PerDiemCityState
//rates[0].rate[0].meals
export default function PerDiemCard({url}) {
  const [ breweryData, setBreweryData ] = useState();
  // Create the state for my per diem data
  const [perDiemData, setPerDiemData] = useState({rates: []});
  //rates[0].rate[0].meals
  var perDiemAmount;
  if (perDiemData === undefined || perDiemData.rates.length === 0){
    perDiemAmount = 'N/A';
  } else {
    perDiemAmount = perDiemData.rates[0].rate[0].meals;
  }

  useEffect(() => {
    fetchData(url)
    .then((data) => {setPerDiemData(data)})
  },[]);
  console.log(url)
  return (
  <div className="perDiemCard">
      <h1>Daily Per Diem Rate</h1>
     
      <h2>{"$ " + perDiemAmount}</h2> 
        
      
  </div>
  )
}

