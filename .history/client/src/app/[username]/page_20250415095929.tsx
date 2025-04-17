import { useState, useEffect } from "react"
import axios from "axios"
import { API_URL} from '../types/Links'
import { useParams } from "next/navigation"



interface UserPageProps {
    possibleUsername: string

}
export default function UserPage ({possibleUsername} : UserPageProps) {

    const [ user, setUser ] = useState(null)
    const [ profile, setProfile ] = useState(null)
    const { username } = useParams()

    const userToFetch = possibleUsername || username


    useEffect(()=>{
        const fetchUser = async()=>{
            try {
            const { data } = await axios.get(`${API_URL}/profile/${userToFetch}`) 
            setUser(data)
            } catch (error) {
                console.error("Error fetching user data:", error)
                throw Error("User not found")
            }
        }   
    },[])

    return(
        <div>

        </div>
    )
}
