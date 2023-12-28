import { Link, Outlet } from "react-router-dom";


export default function About() {

    return (
        <div>

            <h2>About Page</h2>
            <nav>
                <Link to="us">About Us</Link>
                <Link to="mission">Our Mission</Link>
                <Link to="values">Our Values</Link>
            </nav>

            <Outlet  />
    
        </div>
    )
}