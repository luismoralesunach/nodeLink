'use client'

import { useState } from "react"
import { UserRegister } from "../types/User"

export default function Register(){

    const [ newUser, setNewUser ] = useState<UserRegister>({
        username: "",
        email: "",
        password: ""
    })

    return(
        <div>

        </div>
    )
}