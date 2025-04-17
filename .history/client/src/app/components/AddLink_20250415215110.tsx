import { useState } from "react";
import { useUser } from "../../context/UserContext";

export default function AddLink(){

    const { state } = useUser


    const [ newLink, setNewLink ] = useState({
        user: state.user.id,
        url: "",
        title: ""
    })

    return(
        <div>
            <label>Enter URL</label>
            
        </div>
    )
}