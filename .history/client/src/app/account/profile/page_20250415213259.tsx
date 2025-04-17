'use client'

import { useState } from "react"
import { useUser } from "../../context/UserContext"

export default function Profile() {
  const { state, setPreview, preview, updateProfile } = useUser()
  const { user } = state

  console.log("Preview: ", preview)

  const [profileData, setProfileData] = useState({
    user: preview.user,
    bio: preview.bio,
    bio_text_color: preview.bio_text_color,
    background_color: preview.background_color,
    link_color: preview.link_color,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    const updated = { ...profileData, [name]: value }

    setProfileData(updated)
    //@ts-ignore
    setPreview(prev => ({ ...prev, ...updated }))

  }

  const handleSave = async()=>{
    await updateProfile(profileData)
  }

  return (
    <div className="w-full max-w-xl mx-auto py-10 px-6">
      <h2 className="text-2xl font-semibold mb-6 text-center">Edit Profile</h2>

      <div className="space-y-6">
   
        <div>
          <label className="block text-sm font-medium mb-1">Display Name</label>
          <input
            type="text"
            name="user"
            value={profileData.user}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>

        {/* Bio */}
        <div>
          <label className="block text-sm font-medium mb-1">Bio</label>
          <textarea
            name="bio"
            value={profileData.bio}
            onChange={handleChange}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>

     
        <div>
          <label className="block text-sm font-medium mb-1">Background Color</label>
          <input
            type="color"
            name="background_color"
            value={profileData.background_color}
            onChange={handleChange}
            className="w-10 h-10 p-0 border-none bg-transparent"
          />
        </div>

       
        <div>
          <label className="block text-sm font-medium mb-1">Bio Text Color</label>
          <input
            type="color"
            name="bio_text_color"
            value={profileData.bio_text_color}
            onChange={handleChange}
            className="w-10 h-10 p-0 border-none bg-transparent"
          />
        </div>

        
        <div>
          <label className="block text-sm font-medium mb-1">Link Color</label>
          <input
            type="color"
            name="link_color"
            value={profileData.link_color}
            onChange={handleChange}
            className="w-10 h-10 p-0 border-none bg-transparent"
          />
        </div>
        <button
          onClick={handleSave}
         className="border border-black rounded-md w-32 hover:bg-gray-200 hover:scale-105">
          Save
        </button>
      </div>
    </div>
  )
}
