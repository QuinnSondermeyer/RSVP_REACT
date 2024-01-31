import { useRSVPContext } from "../hooks/useRSVPContext"

const RSVPDetails = ({RSVP}) => {
    const {dispatch} = useRSVPContext()
    
    const handleClick = async () => {
        const response = await fetch('/api/RSVP'+ RSVP._id,{method: 'delete'})

        const json = await response.json()
        if(response.ok){
            dispatch({type:'Delete_RSVP', payload: json})
        }
    }
    
    return(
        <div>
            <h4> {RSVP.name} </h4>
            <p> <strong> {RSVP.RSVPInfo} </strong></p>
            <p> <strong> Description </strong> {RSVP.description}</p>
            <p> <strong> Aditional Guests </strong> {RSVP.addGuest}</p>
            <span onClick={handleClick}>delete</span>
        </div>
    )
}

export default RSVPDetails