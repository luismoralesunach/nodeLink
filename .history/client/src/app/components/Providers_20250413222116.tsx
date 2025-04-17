'use client'

import { ReactNode } from 'react'
import { UserProvider } from '../context/UserContext'
import { LinksProvider } from '../context/LinksContext'

type ProvidersProps = {
  children: ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <UserProvider>
      <LinksProvider>{children}</LinksProvider>
    </UserProvider>
  )
}
