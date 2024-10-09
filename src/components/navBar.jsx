import React from "react"
import { Link } from "react-router-dom"
import user_icon from "../images/person.png"


function NavBar(){
    return(
        <>
            <nav >
                <ul className="navbar">
                    <li className="navbarUser"><Link to="/"><img src={user_icon}></img></Link></li>
                    <li className="navbarItem" ><Link to= "/home" >Home</Link></li>
                    <li className="navbarItem"><Link to= "/about">About</Link></li>
                    <li className="navbarItem" ><Link to= "/userProfile">User Profile</Link></li>
                </ul>
        
            </nav>

           
        </>
    )
} 
export default NavBar  