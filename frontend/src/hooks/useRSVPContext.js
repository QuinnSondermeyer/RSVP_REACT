import { RSVPConext } from "../context/RSVPContext";
import { useContext } from 'react'

export const useRSVPContext = () => {
    const context = useContext(RSVPConext)

    if (!context){
        throw Error('usedRSVPContext can only be used inside a RSVPContectProvidor')
    }

    return context
}