'use client'
import { useState } from "react"
import { useUser } from "../../context/UserContext"


export default function Profile (){

    const { state } = useUser()
    const { user, profile } = state

    const [profileData, setProfileData] = useState(
        {
            user: user.id,
            bio: profile.bio,
        }
    )

    return(

        <div>
            Profile page
        </div>
    )
}