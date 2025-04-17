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
        <div className="h-full flex justify-center items-center">
            
            <form className="rounded-xl my-20 border border-black w-[60%] h-full flex justify-center items-center flex-col gap-3">

                <label htmlFor="email">Email</label>
                <input className="border border-black rounded-sm" type="email" name="email" value={user.email} onChange={handleChange} required/>
                <label htmlFor="password">Password</label>
                <input className="border border-black rounded-sm" type="password" name="password" value={user.password} onChange={handleChange} required/>
                <button className="border border-black rounded-lg h-8" type="submit">Login</button>
                <p className="">Don't have an account? <a className="underline" href="/register">Register</a></p>
            </form>
        </div>
    )
}