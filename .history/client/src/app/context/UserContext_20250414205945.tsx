'use client'
import React, { createContext, useContext, useReducer, ReactNode, Dispatch } from 'react'
import { UserLogin } from '../types/User'
import axios from 'axios'

import { API_URL } from '../types/Links'


const initialState = {
  user: null, 
  username: null
}

type User = any

type Action =
  | { type: 'SET_USER'; payload: User }
  | { type: 'LOGOUT' }
//   | { type: 'UPDATE_THEME'; payload: Partial<Theme> }

function userReducer(state: any, action: Action): any {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload, username: action.payload.username }
    case 'LOGOUT':
      return { ...state, user: null }
    default:
      return state
  }
}


type UserContextType = {
    state: any
    dispatch: Dispatch<Action>
    login: (creds: UserLogin) => Promise<void>
    logout: () => void
    }

const UserContext = createContext<UserContextType | undefined>(undefined)


export function UserProvider({ children }: {children: ReactNode}) {
  const [state, dispatch] = useReducer(userReducer, initialState)

  const getProfile = async ()=>{
    try {
      
    } catch (error) {
      
    }
  }

  const login = async(creds :UserLogin)=>{
    try {
      const res = await axios.post(`${API_URL}users/login/`, creds)
      dispatch({ type: 'SET_USER', payload: res.data.user })
    } catch (error) {
      console.error('Login error:', error)
      throw Error('Login failed')
    }
  }

  const logout = () => {
    dispatch({ type: 'LOGOUT' })
  }


  return (
    <UserContext.Provider value={{ state, dispatch, login, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)
  if (!context) throw new Error('useUser must be used within UserProvider')
  return context
}