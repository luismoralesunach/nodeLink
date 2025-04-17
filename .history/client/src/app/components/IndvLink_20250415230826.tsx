import { useState, useEffect} from 'react'
import { FaTrash } from "react-icons/fa";
import { useLinks } from '../context/LinksContext';
import { useUser } from '../context/UserContext';
import { FaPencilAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";


export default function IndvLink({link}:any){

    const { removeLink, updateLink } = useLinks()
    const [ isEditable, setIsEditable ] = useState(false)

    const [ updatedLink, setUpdatedLink ] = useState({
        id: link.id,
        title: link.title,
        url: link.url
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        

    const handleSave = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if(isEditable){
            updateLink(updatedLink)
            setIsEditable(false)
        }
    }



    return(
    <div key={link.id} className="bg-gray-50 border border-black rounded-md mt-2 flex items-center justify-between px-2">
        <div className='flex flex-col w-[80%]'>
        <div>{link.title}</div>
        <div>{link.url}</div>
        </div>


        <div
        onClick={()=>setIsEditable(!isEditable)}
         className='w-[10%] hover:scale-110 hover:cursor-pointer'>
        {!isEditable ? (  
            <FaPencilAlt />
        ):
        <FaCheck />
        }
        </div>

        <div 
        onClick={()=>removeLink(link.id)}
        className='w-[10%] hover:scale-110 hover:cursor-pointer'>
        <FaTrash />
        </div>
    </div>
    )
}