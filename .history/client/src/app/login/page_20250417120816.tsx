'use client'

import { useState } from "react"
import { UserLogin } from "../types/User"
import { useUser } from "../context/UserContext"
import { useRouter } from "next/navigation"
import { isValidEmail, isValidPasswordandUsername } from '../utils/validate'

export default function Login() {
  const { login } = useUser()
  const router = useRouter()

  const [user, setUser] = useState<UserLogin>({
    email: "",
    password: ""
  })

  const [emailError, setEmailError] = useState("")
  const [ passwordError, setPasswordError ] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUser((prev) => ({ ...prev, [name]: value }))



    if (name === "email") {
      if (!isValidEmail(value)) {
        setEmailError("Please enter a valid email address.")
      } else {
        setEmailError("")
      }
    }
    if (name === "password") {
      if (!isValidPasswordandUsername(value)) {
        setEmailError("Special characters not valid.")
      } else {
        setPa("")
      }
    }
  }

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!isValidEmail(user.email)) {
      setEmailError("Please enter a valid email address.")
      return
    }

    try {
      await login(user)
      router.push("/account")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="h-full flex justify-center items-center">
      <form
        onSubmit={handleLogin}
        className="rounded-xl my-20 border border-black w-[40%] h-full flex justify-center items-center flex-col gap-3"
      >
        <label htmlFor="email">Email</label>
        <input
          className="border border-black rounded-sm px-2 py-1"
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          required
        />
        {emailError && <p className="text-red-600 text-sm">{emailError}</p>}

        <label htmlFor="password">Password</label>
        <input
          className="border border-black rounded-sm px-2 py-1"
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          required
        />
        {passwordError && <p className="text-red-600 text-sm">{passwordError}</p>}

        <button
          className="border border-black rounded-lg h-8 w-32 hover:cursor-pointer hover:scale-105"
          type="submit"
        >
          Login
        </button>

        <p className="">Don't have an account? <a className="underline" href="/register">Register</a></p>
      </form>
    </div>
  )
}
