'use client'

import { useState } from "react"
import { UserRegister } from "../types/User"

export default function Register(){

    const [ newUser, setNewUser ] = useState<UserRegister>({
        username: "",
        email: "",
        password: "",
        first_name: "",
        last_name: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setNewUser({
            ...newUser,
            [name]: value,
        })
    return(
        <div>

        </div>
    )
}