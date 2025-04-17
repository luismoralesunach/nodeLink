'use client'

import { UserProvider } from "../context/UserContext"
import { LinksProvider } from "../context/LinksContext"

export default function Providers({ children }) {
  return (
    <UserProvider>
      
        <LinksProvider>{children}</LinksProvider>
     
    </UserProvider>
  )
}
