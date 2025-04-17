'use client'

import { useState, useEffect } from "react"
import axios from "axios"
import { API_URL } from '../types/Links'
import { useParams } from "next/navigation"
import { usePreview } from "../context/PreviewContext"



export default function UserPage( ) {
  const { previewData } = usePreview()
  const [profile, setProfile] = useState<any>(previewData || null)

  const params = useParams()
  const username = typeof params?.username === 'string' ? params.username : undefined
  const userToFetch = possibleUsername || username

  useEffect(() => {
    const fetchProfile = async () => {
      if (previewData || !userToFetch) return

      try {
        const response = await axios.get(`${API_URL}profile/${userToFetch}/`)
        setProfile(response.data)
      } catch (error) {
        console.error("Error fetching profile:", error)
      }
    }

    fetchProfile()
  }, [userToFetch, previewData])

  const rendered = previewData ?? profile
  console.log("Rendered Profile: ", rendered)

  if (!rendered) return <p className="text-center mt-10">Loading...</p>

  return (
    <div 
      style={{ backgroundColor: rendered.background_color }} 
      className="flex flex-col items-center h-[100vh] md:w-[100%] mx-auto py-10 px-6"
    >
      <img 
        className="rounded-full border border-white md:w-28 md:h-28 mb-4"
        src='../PP.png'
        alt="Profile Picture"
      />

      <h1 style={{ color: rendered.bio_text_color }} className="text-2xl font-semibold mb-2">
        {userToFetch}
      </h1>

      <p style={{ color: rendered.bio_text_color }} className="mb-6">
        {rendered.bio}
      </p>

      <ul className="space-y-3 w-full flex flex-col items-center">
        {rendered.links?.map((link: any) => (
          <li 
            key={link.id}
            className="border border-white rounded-md w-[90%]"
          >
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center py-2 px-4 rounded-md"
              style={{ color: rendered.link_color }}
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
