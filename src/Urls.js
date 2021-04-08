


export function breweryAPI (city, state, zip) {
    // user submitted city and state

    if (zip){
        var brewUrl = `https://api.openbrewerydb.org/breweries?by_postal=${zip}`
    } else{
        var brewUrl= "https://api.openbrewerydb.org/breweries?by_city=" + city.replace(" ", "_") + "&by_state=" + state;
    }
    console.log(brewUrl);
    return brewUrl;
    // zip == undefined ? var 
}
 

export function perDiemAPI (city, state, zip) {
    city = city.replace(" ", "_")
    if (zip === ""){
        
        var perDiemUrl = `
        https://api.gsa.gov/travel/perdiem/v2/rates/city/${city}/state/${state}/year/2021?api_key=AgMo9KU7DfHFqTDXcAqse6udTXn6knH6uCLOh4K2`
    } else{
        var perDiemUrl = `https://api.gsa.gov/travel/perdiem/v2/rates/zip/${zip}/year/2021?api_key=AgMo9KU7DfHFqTDXcAqse6udTXn6knH6uCLOh4K2`;

    }
    return perDiemUrl;
}
