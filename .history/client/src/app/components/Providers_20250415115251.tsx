'use client'

import { ReactNode } from 'react'
import { UserProvider } from '../context/UserContext'
import { LinksProvider } from '../context/LinksContext'
import { PreviewProvider } from '../context/PreviewContext'

type ProvidersProps = {
  children: ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <UserProvider>
      <PreviewProvider>
      <LinksProvider>{children}</LinksProvider>
      </PreviewProvider>
    </UserProvider>
  )
}
