'use client'

import { useUser } from "../context/UserContext"

import Sidebar from "../components/Sidebar"


export default function AccountLayout({ children }: { children: React.ReactNode }) {

    const { state } = useUser()
    const { user, profile } = state

    console.log("User: ",user)

    return (
      <section className="">
        <div className="flex justify-center items-center h-20 bg-gray-200 ">
          <h1 className="font-semibold">{user.username}'s Account</h1>
        </div>

        <div className="flex rounded-t-md h-full  w-full  ">
          <div>
          <Sidebar/>
          </div>

          <div>
          </div>
            
        {children}
        </div>
      </section>
    )
  }
  