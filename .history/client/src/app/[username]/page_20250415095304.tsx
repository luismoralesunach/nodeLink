import { useState, useEffect } from "react"
import axios from "axios"
import { API_URL} from '../types/Links'
import { useParams } from "next/navigation"




export default function UserPage (){

    const [ user, setUser ] = useState(null)
    const [ profile, setProfile ] = useState(null)
    const { username } = useParams()

    useEffect(()=>{
        const fetchUser = async()=>{
            try {
            const { data } = await axios.get(`${API_URL}/profile/${username}`) 
            } catch (error) {
                
            }
        }
    },[profile])

    return(
        <div>

        </div>
    )
}
