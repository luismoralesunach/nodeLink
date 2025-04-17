'use client'

import { User}

export default function Providers({ children }) {
  return (
    <UserProvider>
      <ThemeProvider>
        <LinksProvider>{children}</LinksProvider>
      </ThemeProvider>
    </UserProvider>
  )
}
