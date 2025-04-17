'use client'

import { useState } from "react"
import { UserRegister } from "../types/User"

// Validate password: only letters and numbers
function isValidPassword(password: string): boolean {
  const passwordRegex = /^[a-zA-Z0-9]+$/
  return passwordRegex.test(password)
}

// Validate name: only letters, spaces, and hyphens
function isValidName(name: string): boolean {
  const nameRegex = /^[a-zA-Z\s\-]+$/
  return nameRegex.test(name)
}

export default function Register() {
  const [newUser, setNewUser] = useState<UserRegister>({
    username: "",
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    // Handle validation
    if (name === "first_name" || name === "last_name") {
      if (!isValidName(value) && value !== "") return
    }

    if (name === "username") {
      // Optional: block special characters if needed
      const usernameRegex = /^[a-zA-Z0-9_]*$/
      if (!usernameRegex.test(value)) return
    }

    if (name === "password") {
      if (!isValidPassword(value) && value !== "") return
    }

    setNewUser({
      ...newUser,
      [name]: name === "email" ? value.toLowerCase() : value,
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
