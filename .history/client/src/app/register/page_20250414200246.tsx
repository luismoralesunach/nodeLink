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
        <div className="h-full flex justify-center items-center">
            <form className="rounded-xl my-20 border border-black w-[60%] h-full flex justify-center items-center flex-col gap-3">
                <label htmlFor="first_name">First Name</label>
                <input className="border border-black rounded-sm" type="text" name="first_name" value={newUser.first_name} onChange={handleChange} />

                <label htmlFor="last_name">Last Name</label>
                <input className="border border-black rounded-sm" type="text" name="last_name" value={newUser.last_name} onChange={handleChange} />

                <label htmlFor="username">Username</label>
                <input className="border border-black rounded-sm" type="text" name="username"  value={newUser.username} onChange={handleChange} />

                <label htmlFor="email">Email</label>
                <input className="border border-black rounded-sm" type="email" name="email"  value={newUser.email} onChange={handleChange} />

                <label htmlFor="password">Password</label>
                <input className="border border-black rounded-sm" type="password" name="password" value={newUser.password} onChange={handleChange} />

                <button type="submit">Register</button>
                <p>Already have an account? <a href="/login">Login</a></p>
            </form>
        </div>
    )
}