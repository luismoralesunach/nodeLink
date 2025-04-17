import { useState, useEffect } from "react"




export default function UserPage (){

    const [ user, setUser ] = useState(null)
    const [ profile, setProfile ] = useState(user)

    useEffect(()=>{
        
    },[profile])

    return(
        <div>

        </div>
    )
}
