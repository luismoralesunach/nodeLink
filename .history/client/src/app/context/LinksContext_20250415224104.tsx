'use client'
import {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  Dispatch,
} from 'react'

import axios from 'axios'
import { API_URL } from '../types/Links'

export type Link = {
  id: string
  title: string
  url: string

}

type State = {
  links: Link[]
}

type Action =
  | { type: 'ADD_LINK'; payload: Link }
  | { type: 'REMOVE_LINK'; payload: string } // payload = id
  | { type: 'UPDATE_LINK'; payload: Link }
  | { type: 'SET_LINKS'; payload: any[] }

type LinksContextType = {
  state: State
  dispatch: Dispatch<Action>
}


const initialState: State = {
  links: [],
}


function linksReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD_LINK':
      return { ...state, links: [...state.links, action.payload] }
    case 'REMOVE_LINK':
      return {
        ...state,
        links: state.links.filter((link) => link.id !== action.payload),
      }
    case "SET_LINKS":
      return { ...state, links: action.payload }
    case 'UPDATE_LINK':
      return {
        ...state,
        links: state.links.map((link) =>
          link.id === action.payload.id ? action.payload : link
        ),
      }
    default:
      return state
  }
}


const LinksContext = createContext<LinksContextType | undefined>(undefined)

export function LinksProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(linksReducer, initialState)

  const  addLink= async(linkInfo:any)=>{
    try {
      const { data } = await axios.post(`${API_URL}links/`, linkInfo)
      dispatch({ type: 'ADD_LINK', payload: data })
      
    } catch (error) {
      
    }
  }

  return (
    <LinksContext.Provider value={{ state, dispatch }}>
      {children}
    </LinksContext.Provider>
  )
}

export function useLinks(): LinksContextType {
  const context = useContext(LinksContext)
  if (!context) {
    throw new Error('useLinks must be used within a LinksProvider')
  }
  return context
}
