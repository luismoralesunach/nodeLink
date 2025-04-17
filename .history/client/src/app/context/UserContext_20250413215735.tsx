'use client'

import { createContext, useContext, useState } from 'react'

const UserContext = createContext(null)

const initialState:any = {
    user: null
}
