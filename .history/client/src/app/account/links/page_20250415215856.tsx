'use client'

import { useUser } from "../../context/UserContext"
import { useEffect, useState } from 'react'


export default function Links(){

    const { preview } = useUser()
    const { links } = preview;

    console.log("Links: ", preview)

    return(
        <div>
           <div>
            <button
            className="border border-black rounded-md w"
            >+Add</button>
           </div>

           <div>

           </div>
        </div>
    )
}