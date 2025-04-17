'use client'

import { useState } from "react"
import { UserLogin } from "../types/User"
import { useUser } from "../context/UserContext"
import { useRouter } from "next/navigation"
import { isGeneratorObject } from "util/types"

export default function Login(){

    // @ts-ignore
    const { login } = useUser()
    const router = useRouter()

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
    
    const handleLogin = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
           await login(user) 
              router.push("/account")
        } catch (error) {
            alert("Login failed")
        }
        }

    return(
        <div className="h-full flex justify-center items-center">
            
            <form className="rounded-xl my-20 border border-black w-[40%] h-full flex justify-center items-center flex-col gap-3">

                <label htmlFor="email">Email</label>
                <input className="border border-black rounded-sm" type="email" name="email" value={user.email} onChange={handleChange} required/>
                <label htmlFor="password">Password</label>
                <input className="border border-black rounded-sm" type="password" name="password" value={user.password} onChange={handleChange} required/>
                <button
                
                 className="border border-black rounded-lg h-8 w-32" 
                 type="submit">Login</button>
                <p className="">Don't have an account? <a className="underline" href="/register">Register</a></p>
            </form>
        </div>
    )
}