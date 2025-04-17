'use client'

import { useState, useEffect } from "react"
import axios from "axios"
import { API_URL } from '../types/Links'
import { useParams } from "next/navigation"
import { usePreview } from "../context/PreviewContext"

interface UserPageProps {
  possibleUsername?: string
  possibleProfile?: any
}

export default function UserPage({ possibleUsername, possibleProfile }: UserPageProps) {
    const { previewData } = usePreview()

    if(previewData){
        console.log("Preview data: ", previewData)
    }

  const [profile, setProfile] = useState<any>(possibleProfile || null)

  console.log("Profile: ", profile)
  const { username } = useParams()

  const userToFetch = possibleUsername || username

  useEffect(() => {
    const fetchProfile = async () => {
      if (possibleProfile) return 

      try {
        const { data } = await axios.get(`${API_URL}profile/${userToFetch}/`)
        setProfile(data)
      } catch (error) {
        console.error("Error fetching profile:", error)
      }
    }

    fetchProfile()
  }, [userToFetch, possibleProfile])


  return (
    <div style={{ backgroundColor: profile.background_color }} className="flex flex-col items-center h-[100vh] md:w-[100%] mx-auto py-10 px-6">

    <img 
    className="rounded-full border border-white md:w-28 md:h-28 mb-4 "
    src='../PP.png'
    alt="Profile Picture"
    />
      <h1 style={{ color: profile.bio_text_color }} className="text-2xl font-semibold mb-4">
        {profile.username}
      </h1>

      <p style={{ color: profile.bio_text_color }} className="mb-6">
        {profile.bio}
      </p>

      <ul className="space-y-3 w-full flex flex-col items-center">
        {profile.links.map((link: any) => (
          <li 
          className="border border-white rounded-md w-[90%]"
          key={link.id}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center py-2 px-4 rounded-md"
              style={{ backgroundColor: profile.links_color, color: '#fff' }}
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
