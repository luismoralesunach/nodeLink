'use client'
import { createContext, useContext, useState } from "react"

const PreviewContext = createContext<any>(null)

export function PreviewProvider({ children }: { children: React.ReactNode }) {
  const [previewData, setPreviewData] = useState(null)

  return (
    <PreviewContext.Provider value={{ previewData, setPreviewData }}>
      {children}
    </PreviewContext.Provider>
  )
}

export const usePreview = () => useContext(PreviewContext)
