'use client'

import Link from "next/link"
import { useUser } from '../context/UserContext'


export default function Sidebar() {

    const { state } = useUser()
    const { user } = state

    console.log("User: ", user)

    return(
        <nav className="w-border border-black">
           
            <ul>
                <li><Link href="/dashboard">Home</Link></li>
                <li><Link href="/dashboard/links">Links</Link></li>
                <li><Link href="/dashboard/profile">Profile</Link></li>
            </ul>
        </nav>
    )
}