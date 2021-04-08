import "../styles/PerDiemCard.css";
import { useState, useEffect } from "react";
import PerDiemCityState from './mockPerDiemData.js'
import fetchData from "../AsyncFetch.js"

var perDiem = PerDiemCityState
//rates[0].rate[0].meals
export default function PerDiemCard({url}) {
  const [ breweryData, setBreweryData ] = useState();
  // Create the state for my per diem data
  const [perDiemData, setPerDiemData] = useState();
  //rates[0].rate[0].meals
  var perDiemTest;
  if (perDiemData === undefined){
    perDiemTest = '';
  } else {
    perDiemTest = perDiemData.rates[0].rate[0].meals;
  }

  useEffect(() => {
    fetchData(url)
    .then((data) => {
      setPerDiemData(data);console.log(data)})
  },[]);
  console.log(url)
  return (
  <div className="perDiemCard">
      <h1>Daily Per Diem Rate</h1>
     
      <h2>{"$ " + perDiemTest}</h2> 
        
      
  </div>
  )
}

