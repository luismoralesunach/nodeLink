'use client'
import React, { createContext, useContext, useReducer, ReactNode, Dispatch } from 'react'
import { UserLogin } from '../types/User'
import axios from 'axios'

import { API_URL } from '../types/Links'


const initialState = {
  user: null, 
}

type User = any

type Action =
  | { type: 'SET_USER'; payload: User }
  | { type: 'LOGOUT' }
//   | { type: 'UPDATE_THEME'; payload: Partial<Theme> }

function userReducer(state: any, action: Action): any {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload }
    case 'LOGOUT':
      return { ...state, user: null }
    default:
      return state
  }
}


type UserContextType = {
    state: any
    dispatch: Dispatch<Action>
    }

const UserContext = createContext<UserContextType | undefined>(undefined)


export function UserProvider({ children }: {children: ReactNode}) {
  const [state, dispatch] = useReducer(userReducer, initialState)

  const login = async(creds :UserLogin)=>{
    try {
      const { data } = await axios.post(`${API_URL}users/login/`, creds)
      dispatch({ type: 'SET_USER', payload: data })
    } catch (error) {
      console.error('Login error:', error)
      throw Error('Login failed')
    }
  }

  export logout = () => {

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  return useContext(UserContext)
}
