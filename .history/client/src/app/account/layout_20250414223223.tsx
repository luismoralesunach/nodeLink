'use client'

import { useUser } from "../context/UserContext"

import Sidebar from "../components/Sidebar"


export default function AccountLayout({ children }: { children: React.ReactNode }) {

    const { state } = useUser()
    const { user, profile } = state

    return (
      <section className="flex ">
        <div>
          <h1>{</h1>
        </div>
        <Sidebar/>
        {children}
      </section>
    )
  }
  