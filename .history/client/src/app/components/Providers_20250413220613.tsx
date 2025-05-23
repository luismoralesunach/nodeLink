'use client'

import { UserProvider } from '@/context/UserContext'
import { ThemeProvider } from '@/context/ThemeContext'
import { LinksProvider } from '@/context/LinksContext'

export default function Providers({ children }) {
  return (
    <UserProvider>
      <ThemeProvider>
        <LinksProvider>{children}</LinksProvider>
      </ThemeProvider>
    </UserProvider>
  )
}
