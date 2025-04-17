'use client'

import { useState } from "react"
import { UserRegister } from "../types/User"
import {
  isValidEmail,
  isValidPasswordandUsername,
  isValidName,
} from "../utils/validate"
import { API_URL } from "../types/Links"
import axios from "axios"
import { useRouter } from "next/router"

export default function Register() {

  const router = useRouter() 
  const [newUser, setNewUser] = useState<UserRegister>({
    username: "",
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  })

  const [registerError, setRegisterError] = useState({
    usernameError: '',
    emailError: '',
    passwordError: '',
    firstNameError: '',
    lastNameError: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    let errors = { ...registerError }

    if (name === "first_name") {
      errors.firstNameError = value && !isValidName(value) ? "Invalid name" : ''
    }

    if (name === "last_name") {
      errors.lastNameError = value && !isValidName(value) ? "Invalid name" : ''
    }

    if (name === "username") {
      errors.usernameError = value && !isValidPasswordandUsername(value) ? "Special characters not valid" : ''
    }

    if (name === "password") {
      errors.passwordError = value && !isValidPasswordandUsername(value) ? "Special characters not valid" : ''
    }

    if (name === "email") {
      const lowercased = value.toLowerCase()
      errors.emailError = lowercased && !isValidEmail(lowercased) ? "Invalid email format" : ''
      setNewUser(prev => ({ ...prev, [name]: lowercased }))
    } else {
      setNewUser(prev => ({ ...prev, [name]: value }))
    }

    setRegisterError(errors)
  }

  const hasErrors = Object.values(registerError).some(error => error !== '')
  const isFormIncomplete = Object.values(newUser).some(value => value === "")


  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (hasErrors || isFormIncomplete) return
    try {
      const response = await axios.post(`${API_URL}users/users/`, newUser)
      if(response.data){
        alert("Register successful. Login to your account.")
        router.push("/login")
      }
    } catch (error:any) {
      console.error("Error registering user:", error)
      if(error.response && error.response.status === 400){
        setRegisterError(prev => ({ ...prev, emailError: "Email or username already in use" }))
      }
    }
  }

  return (
    <div className="h-full flex justify-center items-center">
      <form
      onSubmit={handleRegister}
       className="rounded-xl my-20 border border-black w-[60%] h-full flex justify-center items-center flex-col gap-3">
        <label htmlFor="first_name">First Name</label>
        <input
          className="border border-black rounded-sm"
          type="text"
          name="first_name"
          value={newUser.first_name}
          onChange={handleChange}
        />
        {registerError.firstNameError && <p className="text-red-500 text-sm">{registerError.firstNameError}</p>}

        <label htmlFor="last_name">Last Name</label>
        <input
          className="border border-black rounded-sm"
          type="text"
          name="last_name"
          value={newUser.last_name}
          onChange={handleChange}
        />
        {registerError.lastNameError && <p className="text-red-500 text-sm">{registerError.lastNameError}</p>}

        <label htmlFor="username">Username</label>
        <input
          className="border border-black rounded-sm"
          type="text"
          name="username"
          value={newUser.username}
          onChange={handleChange}
        />
        {registerError.usernameError && <p className="text-red-500 text-sm">{registerError.usernameError}</p>}

        <label htmlFor="email">Email</label>
        <input
          className="border border-black rounded-sm"
          type="email"
          name="email"
          value={newUser.email}
          onChange={handleChange}
        />
        {registerError.emailError && <p className="text-red-500 text-sm">{registerError.emailError}</p>}

        <label htmlFor="password">Password</label>
        <input
          className="border border-black rounded-sm"
          type="password"
          name="password"
          value={newUser.password}
          onChange={handleChange}
        />
        {registerError.passwordError && <p className="text-red-500 text-sm">{registerError.passwordError}</p>}

        <button
          className="hover:cursor-pointer hover:scale-105 border border-black rounded-lg h-8 w-32 disabled:bg-gray-400"
          type="submit"
          disabled={hasErrors || isFormIncomplete}
        >
          Register
        </button>

        <p>
          Already have an account?{" "}
          <a className="underline" href="/login">
            Login
          </a>
        </p>
      </form>
    </div>
  )
}
