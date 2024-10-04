import React from "react"
import {Link} from "react-router-dom"
function NavBar(){
    return(
        <nav className="">
            <ul className="navbar">
                <li className="navbarItem"><Link to= "/">Home</Link></li>
                <li className="navbarItem"><Link to= "/about">About</Link></li>
                <li className="navbarItem"><Link to= "/contact">Contact</Link></li>
            </ul>
     
        </nav>
    )
} 
export default NavBar 