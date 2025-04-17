import { useState } from "react";
import { useUser } from "../../context/UserContext";

export default function AddLink(){

    const { state } = useState()
    

    const [ newLink, setNewLink ] = useState({
        user:
        url: "",
        title: ""
    })

    return(
        <div>
            <label>Enter URL</label>
            
        </div>
    )
}