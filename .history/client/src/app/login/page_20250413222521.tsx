
import { useState } from "react"
import { UserLogin } from "../types/User"

export default function Login(){

    const [ user, setUser ] = useState<UserLogin>({
        email: "",
        password: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setUser((prev) => ({
            ...prev,
            [name]: value
        }))

    return(
        <div>

        </div>
    )
}