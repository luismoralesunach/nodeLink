'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error('Error from error.tsx:', error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 px-4 text-center">
      <h1 className="text-3xl font-semibold mb-4">Something went wrong</h1>
      <p className="text-md mb-6">We couldn’t load this page. Please try again.</p>
      <button
        onClick={reset}
        className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-900 transition"
      >
        Try again
      </button>
    </div>
  )
}
