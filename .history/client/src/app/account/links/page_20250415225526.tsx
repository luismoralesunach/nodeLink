'use client'

import { useEffect, useState } from 'react'
import AddLink from '../../components/AddLink'
import IndvLink from '../../components/IndvLink'
import { useLinks } from "@/app/context/LinksContext"



export default function Links(){

    const { state } = useLinks()
    console.log("Links state", state)
    const { links } = state
    console.log("Links", links)
    const [ isAddShown, setIsAddShown ] = useState(false)
  



    return(
        <div className="w-full flex flex-col items-center">
           <div className="w-full mt-12 flex flex-col items-center">
            <button
            onClick={()=> setIsAddShown(!isAddShown)}
            className="border border-black rounded-md w-[90%] h-10 hover:cursor-pointer hover:scale-105"
            >{!isAddShown ? '+Add' : "Close"}</button>
            <div className="w-[90%]">
            {isAddShown && <AddLink/>}
            </div>
           </div>
        <hr className="my-6 border-t border-gray-300" />

           <div className="w-[90%]">
            {links && links.map((link:any)=>(
               <IndvLink key={link.id} link={link} />
            ))
            }
           </div>
        </div>
    )
}