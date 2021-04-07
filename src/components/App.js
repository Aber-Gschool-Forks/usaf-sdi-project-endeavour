import React, { useState, useEffect } from "react";



function App() {
  const [locationData, setLocationData] = useState([]);


  return( 
    // <LocationContext>
        <form>
          <label>Zip</label><br/>
          <input type="text"className="zipText"placeholder="Enter your zip code here"></input><br/>
          <label>OR</label><br/>
          <label>State</label><br/>
          {/* Use a drop down for 2 letter states */}
          <input type="text" className="State"></input>
          <label>City</label><br/>
          <input type="text" className="City"></input><br/>
          <button className="submit" type="submit">Submit</button> 
        </form>
  // </LocationContext>
  )
}

export default App;

{
  /*
"As a user, I want to input the Zip code into the zip code text block or if I don't know the zip code, I want to input my City and State into the city and state text block so that I can submit that data into the site."
*/
}