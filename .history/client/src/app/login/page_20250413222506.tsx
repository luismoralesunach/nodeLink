
import { useState } from "react"
import { UserLogin } from "../types/User"

export default function Login(){

    const [ user, setUser ] = useState<UserLogin>({
        email: "",
        password: ""
    })

    

    return(
        <div>

        </div>
    )
}