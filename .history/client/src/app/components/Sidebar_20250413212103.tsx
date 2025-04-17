import Link from "next/link"


export default function Sidebar() {

    return(
        <nav>
            <ul>
                <li><Link href="/dashboard">Home</Link></li>
            </ul>
        </nav>
    )
}