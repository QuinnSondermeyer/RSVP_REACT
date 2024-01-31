import { createContext, useReducer } from 'react'

export const RSVPConext = createContext()

export const RSVPReducer = (state, action) => {
    switch (action.type) {
        case 'Set_RSVP':
            return {
                RSVPs: action.payload,
            }
        case 'Create_RSVP':
            return {
                RSVPs: [action.payload, ...state.RSVPs],
            }

        case 'Delete_RSVP':
            return {
                RSVPs: state.RSVPs.filter(
                    (vals) => vals.id !== action.payload._id
                ),
            }

        default:
            return state
    }
}

export const RSVPContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(RSVPReducer, {
        RSVPs: null,
    })

    return (
        <RSVPConext.Provider value={{ ...state, dispatch }}>
            {children}
        </RSVPConext.Provider>
    )
}
