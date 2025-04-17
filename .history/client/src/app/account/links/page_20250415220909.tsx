'use client'

import { useUser } from "../../context/UserContext"
import { useEffect, useState } from 'react'
import AddLink from '../../components/AddLink'


export default function Links(){

    const { preview } = useUser()
    const { links } = preview;
    const [ isAddShown, setIsAddShown ] = useState(false)

    console.log("Links: ", preview)

    return(
        <div className="w-full flex flex-col items-center bg-l">
           <div className="w-full mt-12 flex flex-col items-center">
            <button
            onClick={()=> setIsAddShown(!isAddShown)}
            className="border border-black rounded-md w-[90%] h-10 hover:cursor-pointer hover:scale-105"
            >{!isAddShown ? '+Add' : "Save"}</button>
            <div className="w-[90%]">
            {isAddShown && <AddLink/>}
            </div>
           </div>

           <div className="w-[90%]">
            {links.map((link:any)=>(
                <div key={link.id} className=" border border-black rounded-md mt-2 flex flex-col items-center justify-between px-2">
                    <div>{link.title}</div>
                    <div>{link.url}</div>
                </div>
            ))
            }
           </div>
        </div>
    )
}