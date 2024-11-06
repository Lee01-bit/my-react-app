import React from "react";
import { Link } from "react-router-dom";
import user_icon from "../images/person.png";
import { ShoppingCart } from "@mui/icons-material";
import { useCart } from "../components/CartContext";  

function NavBar() {
const { cart } = useCart();  

return (
<nav>
    <ul className="navbar">
    <li className="navbarUser">
        <Link to="/">
        <img src={user_icon} alt="User Icon" />
        </Link>
    </li>
    <li className="navbarItem">
        <Link to="/home">Home</Link>
    </li>
    <li className="navbarItem">
        <Link to="/about">About</Link>
    </li>
    <li className="navbarItem">
        <Link to="/userProfile">User Profile</Link>
    </li>
    <li className="navbarItem">
        <Link to="/cart">
        <ShoppingCart size={30} />
        <span>{cart.length}</span> {/* Display cart item count */}
        </Link>
    </li>
    </ul>
</nav>
);
}

export default NavBar;
