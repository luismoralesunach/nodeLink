'use client'
import { useState } from "react"
import { useUser } from "../../context/UserContext"


export default function Profile (){

    const { state } = useUser()
    const { user, profile } = state

    const [profileData, setProfileData] = useState(
        {
            user: profile.user,
            bio: profile.bio,
            bio_text_color: profile.bio_text_color,
            profile_background: profile.profile_background,
        }
    )

    return(

        <div>
            Profile page
        </div>
    )
}