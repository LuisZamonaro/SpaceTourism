import { createContext, useState } from "react";

export const OpenComponent = createContext()

export const OpenProvider = ({children}) => {

    const [openComp, setOpenComp] = useState(0)

    return (
        <OpenComponent.Provider value={{openComp, setOpenComp}}>{children}</OpenComponent.Provider>
    )
}