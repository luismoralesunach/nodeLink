'use client'

import { useUser } from "../../context/UserContext"
import { useEffect, useState } from 'react'
import AddLink from '../../components/AddLink'
import IndvLink from '../../components/IndvLink'
import { useLinks } from "@/app/context/LinksContext"


export default function Links(){

    const { preview } = useUser()
    const { links } = preview;
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

           <div className="w-[90%]">
            {links.map((link:any)=>(
               <IndvLink key={link.id} link={link} />
            ))
            }
           </div>
        </div>
    )
}