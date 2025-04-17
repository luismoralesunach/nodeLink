'use client'

import { useUser } from "../context/UserContext"

import Sidebar from "../components/Sidebar"


export default function AccountLayout({ children }: { children: React.ReactNode }) {

    const { state } = useUser()
    const { user, profile } = state

    console.log("User: ",user)

    return (
      <section className="flex ">
        <div>
          <h1>{user.username}'s Account</h1>
        </div>
        <div>
        <Sidebar/>

        </div>
        {children}
      </section>
    )
  }
  