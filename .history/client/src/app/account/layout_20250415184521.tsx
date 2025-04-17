'use client'

import { useUser } from "../context/UserContext"
import Sidebar from "../components/Sidebar"
import UserPage from "../[username]/page"

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  const { state } = useUser()
  const { user, profile } = state
  const { username } = user;

  return (
    <section className="h-screen w-full">
      <div className="flex justify-center items-center h-20 bg-gray-200 ">
        <h1 className="font-semibold text-xl">{user.username}'s Account</h1>
      </div>

      <div className="flex h-[calc(100vh-5rem)] w-full">
        {/* Sidebar */}
        <div className="w-[15%] border-r border-gray-300">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="w-[55%] p-6 overflow-y-auto">
          {children}
        </div>

        {/* Emulator Preview */}
        <div className="w-[30%] flex justify-center items-start py-10 bg-gray-50 border-l border-gray-300">
          <div className="w-[320px] h-[600px] bg-white rounded-2xl shadow-lg border-2 border-gray-300 overflow-hidden">
    
            <UserPage possibleUsername={username}
         
             />
          </div>
        </div>
      </div>
    </section>
  )
}
