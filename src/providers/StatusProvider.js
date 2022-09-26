import {useContext, createContext, useState} from "react";

const StatusContext=createContext()

export const useStatusProvider=()=> useContext(StatusContext)


export default function StatusProvider({children}){

    const [status,setStatus]=useState('default')


    return (
        <StatusContext.Provider value={{status,setStatus}}>
            {children}
        </StatusContext.Provider>
    )
}