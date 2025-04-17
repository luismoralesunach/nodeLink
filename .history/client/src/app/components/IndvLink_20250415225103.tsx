import { useState, useEffect} from 'react'
import { FaTrash } from "react-icons/fa";

export default function IndvLink({link}:any){

    return(
    <div key={link.id} className="bg-gray-50 border border-black rounded-md mt-2 flex items-center justify-between px-2">
        <div>
        <div>{link.title}</div>
        <div>{link.url}</div>
        </div>

        <div>
        <FaTrash />
        </div>
    </div>
    )
}