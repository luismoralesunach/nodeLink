import { useState, useEffect } from "react"
import axios from "axios"
import { API_URL} from '../types/Links'




export default function UserPage (){

    const [ user, setUser ] = useState(null)
    const [ profile, setProfile ] = useState(null)

    useEffect(()=>{
        const fetchUser = async()
    },[profile])

    return(
        <div>

        </div>
    )
}
