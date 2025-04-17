import { useState, useEffect } from "react"
import axios from "axios"
import { API_URL} from '../types/Links'




export default function UserPage (){

    const [ user, setUser ] = useState(null)
    const [ profile, setProfile ] = useState(null)

    useEffect(()=>{
        try {
           const { data } = await axios.get(`${API_URL}`) 
        } catch (error) {
            
        }
    },[profile])

    return(
        <div>

        </div>
    )
}
