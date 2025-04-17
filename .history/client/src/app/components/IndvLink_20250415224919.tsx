import { useState, useEffect} from 'react'

export default function IndvLink({link}:any){

    return(
    <div key={link.id} className="bg-gray-50 border border-black rounded-md mt-2 flex flex-col items-center justify-between px-2">
        <div>{link.title}</div>
        <div>{link.url}</div>
    </div>
    )
}