'use client'

import Link from "next/link"
import { useUser } from '../context/UserContext'
import { usePathname } from "next/navigation"


export default function Sidebar() {

    const pathname = usePathname()
    const { state } = useUser()
    const { user } = state

    console.log("User: ", user)

    return(
        <nav className="flex flex-col items-center h-full border border-black rounded-t-lg">
           
            <ul className="flex flex-col gap-4">
                <li><Link href="/account" className={``}>Home</Link></li>
                <li><Link href="/account/links">Links</Link></li>
                <li><Link href="/account/profile">Profile</Link></li>
            </ul>
        </nav>
    )
}