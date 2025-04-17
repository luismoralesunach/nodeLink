'use client'

import { useState, useEffect } from "react"
import axios from "axios"
import { API_URL } from '../types/Links'
import { useParams } from "next/navigation"
import { usePreview } from "../context/PreviewContext"

interface UserPageProps {
  possibleUsername?: string
 
}

export default function UserPage({ possibleUsername }: UserPageProps) {
    const { previewData } = usePreview()
    const [profile, setProfile] = useState<any>( previewData || null)


  const { username } = useParams()
  console.log("Params: ", username)

  const userToFetch = possibleUsername || username


  console.log("User to fetch: ", userToFetch)
  

  useEffect(() => {
    const fetchProfile = async () => {
        console.log("Fetching profile...")
      if (previewData){
        console.log("Not executing fetching anymore")
        return
      } 

      try {
        const response  = await axios.get(`${API_URL}profile/${userToFetch}/`)
        console.log("Response: ", response)
        setProfile(response.data)
      } catch (error) {
        console.error("Error fetching profile:", error)
      }
    }

    fetchProfile()
  }, [])


  return (
    <div 
    // style={{ backgroundColor: profile.background_color }} 
    className="flex flex-col items-center h-[100vh] md:w-[100%] mx-auto py-10 px-6">

    <img 
    className="rounded-full border border-white md:w-28 md:h-28 mb-4 "
    src='../PP.png'
    alt="Profile Picture"
    />
      <h1 
    //   style={{ color: profile.bio_text_color }} 
      className="text-2xl font-semibold mb-4">
        {username}
      </h1>

      <p 
    //   style={{ color: profile.bio_text_color }} 
      className="mb-6">
        bio
      </p>

      {/* <ul className="space-y-3 w-full flex flex-col items-center">
        {profile.links.map((link: any) => (
          <li 
          className="border border-white rounded-md w-[90%]"
          key={link.id}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center py-2 px-4 rounded-md"
            //   style={{ backgroundColor: profile.links_color, color: '#fff' }}
            >
              {link.title}
            </a>
          </li>
        ))}
    //   </ul> */}
    </div>
  )
}
