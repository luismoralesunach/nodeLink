'use client'

import { useUser } from "../../context/UserContext"
import { useEffect, useState } from 'react'


export default function Links(){

    const { preview } = useUser()
    const { links } = preview;

    console.log("Links: ", preview)

    return(
        <div className="w-full flex flex-col items-center">
           <div className="mt-12">
            <button
            className="border border-black rounded-md w-[90] h-10"
            >+Add</button>
           </div>

           <div>

           </div>
        </div>
    )
}