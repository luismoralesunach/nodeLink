'use client'
import { createContext, useContext, useReducer } from 'react'

const UserContext = createContext(null)

const initialState = {
  user: null, 
}

type Action = 

function userReducer(state, action) {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload }
    case 'LOGOUT':
      return { ...state, user: null }
    default:
      return state
  }
}

export function UserProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, initialState)
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  return useContext(UserContext)
}
