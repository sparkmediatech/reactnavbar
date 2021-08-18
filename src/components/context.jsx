
import React, {useState, useEffects, useContext } from "react";
import sublinks from './data';


const AppContext  = React.createContext();

 export const AppProvider = ({children}) => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const [isModuleOpen, setIsModuleOpen] = useState(false);
    const [location, setLocation] = useState({});
    const [page, setPage] = useState({page: '', links: []})


    //fuctions
    const openSideBarFunction = () =>{
        setIsSideBarOpen(true)
    };

    const closeSideBarFuction = () =>{
        setIsSideBarOpen(false)
    };

    const openModuleFuction = (text, coordinates) =>{
        const page = sublinks.find((singleLink) => singleLink.page === text)
        setPage(page)
        setLocation(coordinates)
        setIsModuleOpen(true)
    };

    const closeModuleFuction = () =>{
        setIsModuleOpen(false)
    }



    return (<AppContext.Provider value={{
        isModuleOpen,
        isSideBarOpen,
        closeSideBarFuction,
        openModuleFuction,
        openSideBarFunction,
        closeModuleFuction,
        location,
        page,
    }}>
            {children}
    </AppContext.Provider>
    )
}
    
 export const useGlobalContext = () =>{
     return useContext(AppContext)
}





