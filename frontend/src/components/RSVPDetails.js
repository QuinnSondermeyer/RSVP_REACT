import { useRSVPContext } from '../hooks/useRSVPContext'

const RSVPDetails = ({ RSVP }) => {
    const { dispatch } = useRSVPContext()

    const handleClick = async () => {
        const response = await fetch('/api/rsvp/' + RSVP._id, {
            method: 'delete',
        })

        const json = await response.json()
        if (response.ok) {
            dispatch({ type: 'Delete_RSVP', payload: json })
        }
    }

    return (
        <div className="rsvp-details">
            <h4>Name: {RSVP.name}</h4>
            <p>
                <strong>Status: </strong>
                {RSVP.RSVPInfo}
            </p>
            <p>
                <strong> Description: </strong> {RSVP.description}
            </p>
            <p>
                <strong> Aditional Guests: </strong> {RSVP.addGuest}
            </p>
            <span onClick={handleClick}>delete</span>
        </div>
    )
}

export default RSVPDetails
