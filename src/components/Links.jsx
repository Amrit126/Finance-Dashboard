import { Link } from 'react-router'

export function LinkElements() {
    return (
        <>
            <Link className="hover:underline" to="/">Dashboard</Link>
            <Link className="hover:underline" to="/transactions">Transactions</Link>
            <Link className="hover:underline" to="/settings">Settings</Link>
        </>
    )
}