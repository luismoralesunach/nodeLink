'use client'

import { createContext, useContext, useReducer } from 'react'

const UserContext = createContext(null)

const initialState:any = {
    user: null
}


function userReducer (state: any,action: any){
    switch (action.type){
        case 'LOGIN': 
            return { ...state, user: action.payload}

        case 'LOGOUT':
            return { ...state, user: null}
        default:
            return state
    }
}

export function UserProvider({children}: {children: React.ReactNode}){
    const [state, dispatch] = useReducer(userReducer, initialState)

    return(
        <Us
    )
}