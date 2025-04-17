import { useUser } from "../context/UserContext"

export default function AccountPage() {

    const { state } = useUser()
    return(
        <div>
            <h1>Account page</h1>
        </div>
    )
}