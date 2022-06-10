import { createContext } from 'react'; 

export const FsContext = createContext({});

export const FsContextPrv = ({children}) => { 
    return (
        <FsContext.Provider value={{}}> 
            {children}
        </FsContext.Provider>
    )
}; 

export default FsContextPrv; 