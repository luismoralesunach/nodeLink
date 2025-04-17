'use client'

import { U}

export default function Providers({ children }) {
  return (
    <UserProvider>
      <ThemeProvider>
        <LinksProvider>{children}</LinksProvider>
      </ThemeProvider>
    </UserProvider>
  )
}
