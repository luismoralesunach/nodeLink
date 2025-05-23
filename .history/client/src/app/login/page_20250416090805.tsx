'use client'

import { useState } from "react"
import { UserLogin } from "../types/User"
import { useUser } from "../context/UserContext"
import { useRouter } from "next/navigation"
import { isValidEmail } from '../utils/validate'

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
    
    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
      
        if (!isValidEmail(user.email)) {
          alert("Please enter a valid email address.")
          return
        }
      
        try {
          await login(user)
          router.push("/account")
        } catch (error) {
          console.log(error)
          alert("Login failed. Please check your credentials.")
        }
      }
      

    return(
        <div className="h-full flex justify-center items-center">
            
            <form 
            onSubmit={handleLogin}
            className="rounded-xl my-20 border border-black w-[40%] h-full flex justify-center items-center flex-col gap-3">

                <label htmlFor="email">Email</label>
                <input className="border border-black rounded-sm" type="email" name="email" value={user.email} onChange={handleChange} required/>
                <label htmlFor="password">Password</label>
                <input className="border border-black rounded-sm" type="password" name="password" value={user.password} onChange={handleChange} required/>
                <button
                 className="border border-black rounded-lg h-8 w-32 hover:cursor-pointer hover:scale-105" 
                 type="submit">Login</button>
                <p className="">Don't have an account? <a className="underline" href="/register">Register</a></p>
            </form>
        </div>
    )
}