import "../styles/BreweryList.css";
import { useState, useEffect, useContext } from "react";
import { BreweryContext } from '../Context';
import BreweryListItem from './BreweryListItem'
import mockBreweryData from './mockBreweryData';
import fetchData from "../AsyncFetch"

export default function BreweryList({url}) {
  const [ currentList, setCurrentList ] = useState([]);
  const { setCurrentBrew } = useContext(BreweryContext);

  useEffect(() => {
     fetchData(url)
     .then(data => setCurrentList(data))
     .then(setTimeout(setCurrentBrew(currentList), 10))
     .then(console.log(currentList));
  },[]);

  return (
  <div className='brewery-list'>
    {currentList.map((b, i) =>{
    return <BreweryListItem brewery={b} key={i} />;
    })}
  </div>
  );
}