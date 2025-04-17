'use client'
import { createContext, useContext, useReducer } from 'react'

const LinksContext = createContext(null)

const initialState = {
  links: [] // e.g. { id, title, url }
}

function linksReducer(state, action) {
  switch (action.type) {
    case 'ADD_LINK':
      return { ...state, links: [...state.links, action.payload] }
    case 'REMOVE_LINK':
      return {
        ...state,
        links: state.links.filter(link => link.id !== action.payload),
      }
    case 'UPDATE_LINK':
      return {
        ...state,
        links: state.links.map(link =>
          link.id === action.payload.id ? action.payload : link
        ),
      }
    default:
      return state
  }
}

export function LinksProvider({ children }) {
  const [state, dispatch] = useReducer(linksReducer, initialState)
  return (
    <LinksContext.Provider value={{ state, dispatch }}>
      {children}
    </LinksContext.Provider>
  )
}

export function useLinks() {
  return useContext(LinksContext)
}
