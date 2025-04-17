'use client'

import Link from "next/link"
import { useUser } from '../context/UserContext'


export default function Sidebar() {

    const { state } = useUser()
    const { user } = state

    console.log("User: ", user)

    return(
        <nav className="flex flex-col items-center h-full border border-black rounded-t-lg">
           
            <ul className="flex flex-col gap-4">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/dashboard/links">Links</Link></li>
                <li><Link href="/dashboard/profile">Profile</Link></li>
            </ul>
        </nav>
    )
}