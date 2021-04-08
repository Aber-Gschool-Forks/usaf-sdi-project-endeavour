import { createContext, useState } from "react";

export const BreweryContext = createContext();

export const BreweryProvider = ({children}) => {
    const [currentBrew, setCurrentBrew] = useState({});
    return (
        <BreweryContext.Provider
        value ={{
            currentBrew,
            setCurrentBrew,
        }}>
            {children}
            </BreweryContext.Provider>
    );
}


