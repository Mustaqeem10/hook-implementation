import { Link } from "react-router-dom";
import './style.css'

export default function NotFound() {
    return (
        <div className="error-page">
            <h1 style={{textAlign: "center"}}>Page not found</h1>
            <Link style={{textAlign: "center", display: "block"}} className="nav-link-active" to="/">Return to Home</Link>
        </div>
    )
}