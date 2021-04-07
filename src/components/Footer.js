import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <nav className="Footer-Links">
      <section className="Home-Link-Section">
        <Link className="Home-Link" to="/">
          <p>Home</p>
        </Link>
      </section>
      <div class="vertical"></div>
      <section className="About-Link-Section">
        <Link className="About-Link" to="/about">
          <p>About</p>
        </Link>
      </section>
    </nav>
  );
}
