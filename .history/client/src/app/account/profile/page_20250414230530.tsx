'use client'
import { useState } from "react"
import { useUser } from "../../context/UserContext"


export default function Profile (){

    const { state } = useUser()
    const { profile } = state

    return(

        <div>
            Profile page
        </div>
    )
}