'use client'

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
    }   

    return(
        <div className="bg-[#B5FCCD] w-full h-full flex justify-center items-center">
            <form>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={user.email} onChange={handleChange} required/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={user.password} onChange={handleChange} required/>
                <button type="submit">Login</button>
                <p>Don't have an account? <a href="/register">Register</a></p>
            </form>
        </div>
    )
}