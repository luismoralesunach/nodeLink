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
     
     

      <ul className="space-y-3 w-full flex flex-col items-center">
       
        
  
      </ul>
    </div>
  )
}
