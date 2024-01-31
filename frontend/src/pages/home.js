import { useEffect } from "react"
// context hook
import { useRSVPContext } from "../hooks/useRSVPContext"
// components
import RSVPDetails from "../components/RSVPDetails"
import RSVPForm from "../components/RSVPForm"


const Home = () => {
    const{RSVPs, dispatch} = useRSVPContext()

    useEffect ( () => {
        const fetchRSVP = async () => {
            const response = await fetch('/api/rsvp')
            const json = await response.json()

            if (response.ok){
                dispatch({type: 'Set_RSVP', payload: json})
            }
        }
        fetchRSVP()
    })

    return(
        <div className="home">
            <div className="RSVPs">
                {RSVPs && RSVPs.map((RSVPs) => (
                    <RSVPDetails key={RSVPs._id} RSVPs = {RSVPs}/>))}
            </div>
                <RSVPForm/>
        </div>
    )
}

export default Home