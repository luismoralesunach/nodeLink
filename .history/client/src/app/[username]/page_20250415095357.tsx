import { useState, useEffect } from "react"
import axios from "axios"
import { API_URL} from '../types/Links'
import { useParams } from "next/navigation"




export default function UserPage ({possibleUsername}){

    const [ user, setUser ] = useState(null)
    const [ profile, setProfile ] = useState(null)
    const { username } = useParams()

    useEffect(()=>{
        const fetchUser = async()=>{
            try {
            const { data } = await axios.get(`${API_URL}/profile/${username}`) 
            setUser(data)
            } catch (error) {
                console.error("Error fetching user data:", error)
                throw Error("User not found")
            }
        }
    },[profile])

    return(
        <div>

        </div>
    )
}
