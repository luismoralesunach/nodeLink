'use client'

import { useUser } from "../../context/UserContext"
import { useEffect, useState } from 'react'


export default function Links(){

    const { preview } = useUser()

    console.log("Links: ", preview)

    return(
        <div>
           Links page 
        </div>
    )
}