import { useState, useContext } from "react";
import BreweryListItem from './BreweryListItem'

export default function BreweryList() {
  const { currentList } = useContext()
  return (
  <div className='brew-list'>
    {currentList.map((b, i) =>{
    return <BreweryListItem brewery={b} key={i} />;
    })}
  </div>
  );
}