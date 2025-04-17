'use client'

import { useUser } from "../../context/UserContext"
import { useEffect, useState } from 'react'
import AddLink from 


export default function Links(){

    const { preview } = useUser()
    const { links } = preview;
    const [ isAddShown, setIsAddShown ] = useState(false)

    console.log("Links: ", preview)

    return(
        <div className="w-full flex flex-col items-center">
           <div className="w-full mt-12">
            <button
            onClick={()=> setIsAddShown(!isAddShown)}
            className="border border-black rounded-md w-[90%] h-10 hover:cursor-pointer hover:scale-105"
            >{!isAddShown ? '+Add' : "Save"}</button>
           </div>

           <div>

           </div>
        </div>
    )
}