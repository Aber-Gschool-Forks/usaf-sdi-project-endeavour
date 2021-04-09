import '../styles/BreweryMore.css';
import fetch from "../AsyncFetch";
import { useState, useEffect } from 'react';

export default function BreweryMore ({list, listAdd, url}){
    const [ count, setCount ] = useState([1]);
    const [ nextList, setNextList ] = useState();
    function eventHandler(e) {
        e.preventDefault();
        listAdd(list.concat(nextList));
        setCount([count[0]+1]);
      }
    useEffect(() => {
        fetch(url + '&page=' + (count[0]+1))
        .then((data) => {
            setNextList(data);
        })
    }, count);
    return (
        <div className='brewery-more' onClick={eventHandler}>
            <p>Click here for more breweries!</p>
        </div>
    )
}