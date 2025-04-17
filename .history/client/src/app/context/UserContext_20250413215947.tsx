'use client'

import { createContext, useContext, useState } from 'react'

const UserContext = createContext(null)

const initialState:any = {
    user: null
}


function userReducer (state: any,action){
    switch (action.type){
        case 'LOGIN': 
        return { ...state, user: action.payload}
    }
}