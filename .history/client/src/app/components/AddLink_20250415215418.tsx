import { useState } from "react";
import { useUser } from "../../context/UserContext";

export default function AddLink(){

    const { state } = useUser()


    const [ newLink, setNewLink ] = useState({
        user: state.user.id,
        url: "",
        title: ""
    })


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setNewLink(prev => ({ ...prev, [name]: value }))
    }
    return(
        <div>
            <label>Enter URL</label>
            <input
                type="text"
                name="url"
                value={newLink.url}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                />
            
        </div>
    )
}