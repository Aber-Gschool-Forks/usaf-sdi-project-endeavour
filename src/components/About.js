import "../styles/About.css";

export default function About() {
  return (
    
    <div>
        <section className="aboutBody">
          <h1 className="authors">Authors</h1>
          <ul className="authorList">This website was made possible by the hard working crews that flew the Space Shuttle Endeavour (pronounced En-Dave-Eeyore).  To honor them, we have created
          this website to be a quick reference for military members when arriving at a new location.  It is vitally important to know how much money Uncle Sam will be allowing you to spend on
          beer while you are traveling, so you will not only be presented with a list of nearby breweries, but also how much per diem you will be making at your location.  Happy Drinking!</ul>
            <a className="authorLink" href="https://www.linkedin.com/in/ericeash/" target="_parent">Eric Eash</a>
              <div className="authorInfo">The styler of the group, he values pretty over functional!</div>
            <a className="authorLink" href="https://www.linkedin.com/in/ethan-wise-622a72190/" target="_blank">Ethan Wise</a>
              <div className="authorInfo">The headbanger, is able to decipher even the brokest of code!</div>
            <a className="authorLink" href="https://www.linkedin.com/in/michael-mason-8825985a/" target="_parent">Michael Mason</a>
              <div className="authorInfo">The idea man, able to talk his way into and out of a paper bag!</div>
            <a className="authorLink" href="url" target="_parent">Elgin Posadas</a>
              <div className="authorInfo">B.A. Baracus!  Nuff said!</div>
        </section>
    </div>
  
  );
}
