'use client'

import { useUser } from "../../context/UserContext"
import { useEffect, useState } from 'react'


export default function Links(){

    const { preview } = useUser()
    const { links } = preview;

    console.log("Links: ", preview)

    return(
        <div className="flex flex-col items-center">
           <div className="mt-20">
            <button
            className="border border-black rounded-md w-44 h-10"
            >+Add</button>
           </div>

           <div>

           </div>
        </div>
    )
}