'use client'

import { useState } from "react"
import { UserRegister } from "../types/User"
import {
  isValidEmail,
  isValidPasswordandUsername,
  isValidName,
} from "../utils/validate"

export default function Register() {
  const [newUser, setNewUser] = useState<UserRegister>({
    username: "",
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  })

  const [ registerError, setRegisterError] = useState({
    usernameError: '',
    emailError: '',
    passwordError: '',
    firstNameError: '',
    lastNameError: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    // Validation for first and last name
    if ((name === "first_name" || name === "last_name") && value !== "") {
      if (!isValidName(value)) setRegisterError({ ...registerError, [`${name}Error`]: "Invalid name" })
    }

    // Validation for username and password (only letters and numbers)
    if ((name === "username" || name === "password") && value !== "") {
      if (!isValidPasswordandUsername(value)){
        setRegisterError({...registerError, [`${name} Error`]: "Special characters not valid"})
      }
    }

    // Lowercase email and validate format
    if (name === "email") {
      const lowercased = value.toLowerCase()
      if (lowercased !== "" && !isValidEmail(lowercased)) return
      setNewUser({ ...newUser, [name]: lowercased })
     
    }

    setNewUser({
      ...newUser,
      [name]: value,
    })
  }

  return (
    <div className="h-full flex justify-center items-center">
      <form className="rounded-xl my-20 border border-black w-[60%] h-full flex justify-center items-center flex-col gap-3">
        <label htmlFor="first_name">First Name</label>
        <input
          className="border border-black rounded-sm"
          type="text"
          name="first_name"
          value={newUser.first_name}
          onChange={handleChange}
        />

        <label htmlFor="last_name">Last Name</label>
        <input
          className="border border-black rounded-sm"
          type="text"
          name="last_name"
          value={newUser.last_name}
          onChange={handleChange}
        />

        <label htmlFor="username">Username</label>
        <input
          className="border border-black rounded-sm"
          type="text"
          name="username"
          value={newUser.username}
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          className="border border-black rounded-sm"
          type="email"
          name="email"
          value={newUser.email}
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input
          className="border border-black rounded-sm"
          type="password"
          name="password"
          value={newUser.password}
          onChange={handleChange}
        />

        <button className="border border-black rounded-lg h-8 w-32" type="submit">
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
