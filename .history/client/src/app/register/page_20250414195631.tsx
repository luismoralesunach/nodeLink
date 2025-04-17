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
    }

    return(
        <div>
            <form className="h-full flex justify-center items-center flex-col gap-4">
                <label htmlFor="first_name">First Name</label>
                <input type="text" name="first_name" value={newUser.first_name} onChange={handleChange} />
                <input type="text" name="last_name" value={newUser.last_name} onChange={handleChange} />
                <input type="text" name="username" placeholder="Username" value={newUser.username} onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" value={newUser.email} onChange={handleChange} />
                <input type="password" name="password" placeholder="Password" value={newUser.password} onChange={handleChange} />
                <button type="submit">Register</button>
                <p>Already have an account? <a href="/login">Login</a></p>
            </form>
        </div>
    )
}