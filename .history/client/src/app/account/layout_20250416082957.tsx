"use client";

import { useUser } from "../context/UserContext"
import Sidebar from "../components/Sidebar"
import ProfilePreview from "../components/ProfilePreview"
import { useRouter } from "next/router"
import { useEffect } from "react"

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const { state } = useUser()
  const { user } = state
  const { username } = user

  useEffect(() => {
    if (!username) {
      router.push('/login')
    }
  }, [username])

  return (
    <section className="h-screen w-full">
      <div className="flex justify-center items-center h-20 bg-gray-200">
        <h1 className="font-semibold text-xl">{user.username}'s Account</h1>
      </div>

      <div className="flex h-[calc(100vh-5rem)] w-full">
        <div className="w-[15%] border-r border-gray-300">
          <Sidebar />
        </div>

        <div className="w-[55%] p-6 overflow-y-auto">
          {children}
        </div>

        <div className="w-[30%] flex justify-center items-start py-10 bg-gray-50 border-l border-gray-300">
          <div className="w-[320px] h-[600px] bg-white rounded-2xl shadow-lg border-2 border-gray-300 overflow-hidden">
            <ProfilePreview />
          </div>
        </div>
      </div>
    </section>
  )
}
