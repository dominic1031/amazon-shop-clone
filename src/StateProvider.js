import React, { createContext, useContext, useReducer } from 'react'
import { initialState } from './reducer'

// data layer will be accessible to every component
// preps data layer
export const StateContext = createContext()

// wraps app and provides data layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

// pulls info from data layer
export const useStateValue = () => useContext(StateContext)
