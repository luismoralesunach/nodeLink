'use client'

import { useUser } from "../context/UserContext"

import Sidebar from "../components/Sidebar"


export default function AccountLayout({ children }: { children: React.ReactNode }) {

    const { state } = useUser()
    return (
      <section className="flex ">
        <div>

        </div>
        <Sidebar/>
        {children}
      </section>
    )
  }
  