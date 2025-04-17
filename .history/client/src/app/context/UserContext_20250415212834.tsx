'use client'
import React, { createContext, useContext, useReducer, ReactNode, Dispatch, useEffect, useState } from 'react'
import { UserLogin } from '../types/User'
import axios from 'axios'
import { API_URL } from '../types/Links'



const initialState = {
  user: null,
  profile: null
}



type User = any

type Action =
  | { type: 'SET_USER'; payload: User }
  | { type: 'LOGOUT' }
  | { type: 'SET_PROFILE_DATA'; payload: any }

function userReducer(state: any, action: Action): any {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload }
    case 'LOGOUT':
      return { ...state, user: null, profile: null }
    case 'SET_PROFILE_DATA':
      return { ...state, profile: action.payload }
    default:
      return state
  }
}

type UserContextType = {
  state: any
  dispatch: Dispatch<Action>
  preview: any;
  setPreview: any
  login: (creds: UserLogin) => Promise<void>
  logout: () => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(userReducer, initialState)
  const [ preview, setPreview ] = useState<any>(null)

  // 🔁 On mount, check localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    const storedProfile = localStorage.getItem('profile')
    if (storedUser) {
      dispatch({ type: 'SET_USER', payload: JSON.parse(storedUser) })
    }
    if (storedProfile) {
      dispatch({ type: 'SET_PROFILE_DATA', payload: JSON.parse(storedProfile) })
    }
  }, [])

  // ✅ Save to localStorage when state changes
  useEffect(() => {
    if (state.user) {
      localStorage.setItem('user', JSON.stringify(state.user))
    } else {
      localStorage.removeItem('user')
    }

    if (state.profile) {
      localStorage.setItem('profile', JSON.stringify(state.profile))
    } else {
      localStorage.removeItem('profile')
    }
  }, [state.user, state.profile])

  const getProfile = async (profile: string) => {
    try {
      const res = await axios.get(`${API_URL}profile/${profile}/`)
      dispatch({ type: 'SET_PROFILE_DATA', payload: res.data })
      setPreview(res.data) // Set preview data

    } catch (error) {
      console.error('Error fetching profile:', error)
    }
  }

  const login = async (creds: UserLogin) => {
    try {
      const res = await axios.post(`${API_URL}users/login/`, creds)
      dispatch({ type: 'SET_USER', payload: res.data.user })
      await getProfile(res.data.user.username)
    } catch (error) {
      console.error('Login error:', error)
      throw Error('Login failed')
    }
  }

  const logout = () => {
    dispatch({ type: 'LOGOUT' })
    localStorage.clear()
  }

  const updateProfile = (profile: any)=>{
    try {
      const response = axios.post(`${API_URL}profile/${profile}/update/`, profile)
      
    } catch (error) {
      
    }
  }

  return (
    <UserContext.Provider value={{ state, dispatch, login, logout, preview, setPreview }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)
  if (!context) throw new Error('useUser must be used within UserProvider')
  return context
}
