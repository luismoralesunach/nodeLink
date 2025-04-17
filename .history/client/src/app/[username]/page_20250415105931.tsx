'use client'

import { useState, useEffect } from "react"
import axios from "axios"
import { API_URL } from '../types/Links'
import { useParams } from "next/navigation"
// import PP from '../../../public/PP.png'

interface UserPageProps {
  possibleUsername?: string
  possibleProfile?: any
}

export default function UserPage({ possibleUsername, possibleProfile }: UserPageProps) {
  const [profile, setProfile] = useState<any>(possibleProfile || null)
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

  if (!profile) {
    return <div className="text-center py-10 text-gray-500">Loading profile...</div>
  }

  return (
    <div style={{ backgroundColor: profile.background_color }} className="flex flex-col items-center h-[100vh] md:w-[100%] mx-auto py-10 px-6">

    <img 
    cl
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
