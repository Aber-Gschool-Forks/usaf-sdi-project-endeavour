import "../styles/BreweryList.css";
import { useState, useEffect } from "react";
import BreweryListItem from './BreweryListItem'
import fetchData from "../AsyncFetch"
import BreweryEmpty from './BreweryEmpty';
import BreweryMore from './BreweryMore';

export default function BreweryList({url}) {
  const [ currentList, setCurrentList ] = useState([]);
  var emptyListItem, moreListItem;

  useEffect(() => {
     fetchData(url)
     .then(data => {setCurrentList(data)})
  },[]);

  if(currentList.length === 0){
    emptyListItem = <BreweryEmpty/>;
  }

  if(currentList.length > 0){
    moreListItem = <BreweryMore list={currentList} listAdd={setCurrentList} url={url}/>;
  }

  return (
  <div className='brewery-list'>
    <div class="bg"></div>
    <div class="bg bg2"></div>
    <div class="bg bg3"></div>
    {emptyListItem}
    {currentList.map((b, i) =>{
    return <BreweryListItem brewery={b} index={i} key={i} />;
    })}
    {moreListItem}
  </div>
  );
}