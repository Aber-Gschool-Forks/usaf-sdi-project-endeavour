import { createContext, useState } from "react";

export const BreweryContext = createContext();

export const BreweryProvider = ({children}) => {
    const [currentBrew, setCurrentBrew] = useState();
    const [currentList, setCurrentList] = useState();
    return (
        <BreweryContext.Provider
        value ={{
            currentBrew,
            setCurrentBrew,
            currentList,
            setCurrentList
        }}>
            {children}
            </BreweryContext.Provider>
    );
}


