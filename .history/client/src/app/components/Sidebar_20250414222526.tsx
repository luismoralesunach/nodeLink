import Link from "next/link"
import { useUser } from '../context/UserContext'


export default function Sidebar() {

    const { state } = useUser()
    const { user } = state

    cons

    return(
        <nav>
            <h1>{user.first_name} {user.last_name}</h1>
            <h3>{user.username}</h3>
            <ul>
                <li><Link href="/dashboard">Home</Link></li>
                <li><Link href="/dashboard/links">Links</Link></li>
                <li><Link href="/dashboard/profile">Profile</Link></li>
            </ul>
        </nav>
    )
}