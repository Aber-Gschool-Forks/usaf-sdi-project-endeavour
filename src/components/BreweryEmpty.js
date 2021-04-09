import '../styles/BreweryEmpty.css';
import { Link } from "react-router-dom";

export default function BreweryEmpty (){
    return (
        <div className='brewery-empty'>
            <Link className='brewery-empty-link' to="/"><h2>You're search returned no results, click here to try a different search!</h2></Link>
        </div>
    )
}