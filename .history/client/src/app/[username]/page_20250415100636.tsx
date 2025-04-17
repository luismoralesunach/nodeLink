import { useState, useEffect } from "react"
import axios from "axios"
import { API_URL} from '../types/Links'
import { useParams } from "next/navigation"



interface UserPageProps {
    possibleUsername: string

}
export default function UserPage ({possibleUsername} : UserPageProps) {

    const [ user, setUser ] = useState(null)
    const [ profile, setProfile ] = useState<any>(user)
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
        <div style={ {backgroundColor: profile?.background_color}} className="w-full max-w-xl mx-auto py-10 px-6">
            <h1>{profile.username}</h1>

            <ul>
                {profile?.links.map((link:any)=>(
                    <li key={link.id} className="mb-4">
                        <a href={link.url} className="text-blue-500 hover:underline">
                            {link.title}
                        </a>
                        
                ))}
            </ul>
        </div>
    )
}
