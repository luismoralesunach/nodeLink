'use client'

import { useUser } from "../context/UserContext"

export default function AccountPage() {

    const { state } = useUser()
    console.log(state.user)
    return(
        <div>
            <h1>Account page</h1>
        </div>
    )
}