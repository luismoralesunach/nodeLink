'use client'

import { useUser } from "../context/UserContext"

export default function AccountPage() {

    const { state } = useUser()
    const { user, profile } = state
    console.log("User: ",user)

    console.log("Profile: ", profile)
    return(
        <div>
            <h1>Account page</h1>
        </div>
    )
}