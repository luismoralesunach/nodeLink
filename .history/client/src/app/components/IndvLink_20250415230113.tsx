import { useState, useEffect} from 'react'
import { FaTrash } from "react-icons/fa";
import { useLinks } from '../context/LinksContext';
import { FaPencilAlt } from "react-icons/fa";

export default function IndvLink({link}:any){

    const { removeLink } = useLinks()

    return(
    <div key={link.id} className="bg-gray-50 border border-black rounded-md mt-2 flex items-center justify-between px-2">
        <div className='flex flex-col'>
        <div>{link.title}</div>
        <div>{link.url}</div>
        </div>

        <div>
            
        </div>

        <div 
        onClick={()=>removeLink(link.id)}
        className='hover:scale-110 hover:cursor-pointer'>
        <FaTrash />
        </div>
    </div>
    )
}