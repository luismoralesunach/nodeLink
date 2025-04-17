import Link from "next/link"


export default function Sidebar() {

    return(
        <nav>
            <ul>
                <li><Link href="/dashboard">Home</Link></li>
                <li><Link href="/dashboard/links">Lnks</Link></li>
                <li><Link href="/dashboard/profile">Home</Link></li>

            </ul>
        </nav>
    )
}