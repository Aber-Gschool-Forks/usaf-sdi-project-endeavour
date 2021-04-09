import { Link } from "react-router-dom";
import '../styles/Footer.css';

export default function Footer() {
  return (

    <div className="footer">
      <div className="Home-Link-Section">
        <Link className="Link" to="/">
          <p>Home&#127867;</p>
        </Link>
      </div>
      <div className="About-Link-Section">
          <Link className="Link" to="/about">
            <p>About</p>
          </Link>
        </div>
      <div className="vertical"/>
    </div>
    
  );
}
