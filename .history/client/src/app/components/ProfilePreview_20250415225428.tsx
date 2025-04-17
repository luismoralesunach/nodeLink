'use client'

import { useUser } from '../context/UserContext'
import { useLinks } from '../context/LinksContext'

export default function PreviewPage() {
  const { preview } = useUser()
  const { state } = useLinks()
  const { links } = state

  if (!preview) {
    return <p className="text-center mt-10">No preview data available.</p>
  }

  return (
    <div 
      style={{ backgroundColor: preview.background_color }} 
      className="flex flex-col items-center h-[100vh] md:w-[100%] mx-auto py-10 px-6"
    >
      <img 
        className="rounded-full border border-white md:w-28 md:h-28 mb-4"
        src="../PP.png"
        alt="Profile Picture"
      />

      <h1 style={{ color: preview.bio_text_color }} className="text-2xl font-semibold mb-2">
        {preview.username}
      </h1>

      <p style={{ color: preview.bio_text_color }} className="mb-6">
        {preview.bio}
      </p>
    <hr</hr>>
      <ul className="space-y-3 w-full flex flex-col items-center">
        {links && links?.map((link: any) => (
          <li 
            key={link.id}
            className="border border-white rounded-md w-[90%]"
          >
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center py-2 px-4 rounded-md"
              style={{ color: preview.link_color }}
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
