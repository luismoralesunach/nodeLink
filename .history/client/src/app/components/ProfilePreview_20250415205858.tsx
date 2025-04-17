'use client'

import { usePreview } from "../context/PreviewContext"


interface ProfilePreviewProps {
    possibleUsername?: string
    }

export default function ProfilePreview() {
  const { previewData } = usePreview()

  console.log("Preview Data: ", previewData)

  if (!previewData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>No preview data available.</p>
      </div>
    )
  }

  return (
    <div 
      style={{ backgroundColor: previewData.background_color }} 
      className="flex flex-col items-center h-[100vh] md:w-[100%] mx-auto py-10 px-6"
    >
      <img 
        className="rounded-full border border-white md:w-28 md:h-28 mb-4"
        src='../PP.png'
        alt="Profile Picture"
      />

      <h1 style={{ color: previewData.bio_text_color }} className="text-2xl font-semibold mb-4">
        {previewData.username}
      </h1>

      <p style={{ color: previewData.bio_text_color }} className="mb-6">
        {previewData.bio}
      </p>

      <ul className="space-y-3 w-full flex flex-col items-center">
        {previewData.links.map((link: any) => (
          <li 
            className="border border-white rounded-md w-[90%]"
            key={link.id}
          >
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center py-2 px-4 rounded-md"
              style={{ backgroundColor: previewData.link_color, color: '#fff' }}
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
