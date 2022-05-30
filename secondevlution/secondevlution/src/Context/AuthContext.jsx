

import {  createContext, useState } from "react";


export const isAuth = createContext()


export const IsAuthprovider = ({children})=>{

    const [log,setLog] = useState(false)

    const toggle = (set)=>{
        setLog(set)
    }



    return <isAuth.Provider value={{log,toggle}}>{children}</isAuth.Provider>
}
