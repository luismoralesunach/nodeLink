'use client'

import Link from "next/link"
import { useUser } from '../context/UserContext'
import { usePathname } from "next/navigation"

export default function Sidebar() {
  const pathname = usePathname()
  const { state, logout } = useUser()
  const { user } = state

  return (
    <nav className="flex flex-col items-center h-full p-4 border-t border-black rounded-tl-xl">
      <ul className="w-full flex flex-col gap-4 items-center">
        {[
          { href: '/account', label: 'Home' },
          { href: '/account/links', label: 'Links' },
          { href: '/account/profile', label: 'Profile' }
        ].map(({ href, label }) => (
          <li key={href} className="w-full flex justify-center">
            <Link
              href={href}
              className={`w-[90%] block text-center py-2 rounded-md transition 
                ${pathname === href 
                  ? 'border border-black font-semibold bg-gray-100' 
                  : 'border border-transparent hover:border-black'}`}
            >
              {label}
            </Link>
          </li>
          
        ))}
        <button className="border border-red-400 w-20 rounded-md hover:">Log out</button>
      </ul>
    </nav>
  )
}
