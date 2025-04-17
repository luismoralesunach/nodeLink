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
           
            <ul className="my-5 w-full flex flex-col gap-4 items-center h-full">
                <li className="w-full"><Link href="/account" className={pathname === '/account' ? 'border border-black rounded-md' : ''}>Home</Link></li>
                <li className="w-full"><Link href="/account/links" className={pathname === '/account/links' ? 'border border-black rounded-m' :''}>Links</Link></li>
                <li className="w-full"><Link href="/account/profile" className={pathname === '/account/profile' ? 'border border-black rounded-m' :''}>Profile</Link></li>
            </ul>
        </nav>
    )
}