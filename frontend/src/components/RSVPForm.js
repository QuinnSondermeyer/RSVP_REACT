import { useState } from 'react'
import { useRSVPContext } from '../hooks/useRSVPContext'

const RSVPForm = () => {
    const { dispatch } = useRSVPContext() // hook to update page on submission

    const [name, setName] = useState('')
    const [RSVPInfo, setRSVPInfo] = useState('')
    const [description, setDescription] = useState('')
    const [addGuest, setAddGuest] = useState('')
    const [error, setError] = useState(null)

    const handleSubmission = async (e) => {
        e.preventDefault()
        const RSVP = { name, RSVPInfo, description }

        const response = await fetch('/api/rsvp', {
            method: 'POST',
            body: JSON.stringify(RSVP), //change to JSON
            headers: { 'Content-Type': 'application/json' },
        })
        const json = await response.json()
        if (!response.ok) {
            setError(json.error)
            console.log('RSVP error', json)
        }
        if (response.ok) {
            setName('')
            setRSVPInfo('')
            setDescription('')
            setAddGuest('')

            setError(null)
            console.log('New RSVP Added', json)

            dispatch({ type: 'Create_RSVP', payload: json })
        }
    }

    return (
        <form className="create" onSubmit={handleSubmission}>
            <h3>Add RSVP</h3>
            <label>Name: </label>
            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />

            <label>Status (Coming, Maybe, Not Coming) </label>
            <input
                type="text"
                onChange={(e) => setRSVPInfo(e.target.value)}
                value={RSVPInfo}
            />

            <label>Further Information </label>
            <input
                type="text"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            />
            <label>Additional Guests </label>
            <input
                type="number"
                onChange={(e) => setAddGuest(e.target.value)}
                value={addGuest}
            />
            <button> Submit RSVP </button>
        </form>
    )
}

export default RSVPForm
