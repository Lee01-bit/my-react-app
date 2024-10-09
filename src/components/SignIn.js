import React, { useState } from "react";
import user_icon from "../images/person.png"
import email from "../images/email.png"
import password from "../images/password.png"
import "./signUp.css"


function LoginSignup(){

    const [action, setAction] = useState("Sign Up")
    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
        <form className="inputs">
            <div className="input"> 
                <img src={user_icon} alt=""></img> 
                <input type="text" placeholder="Name"></input>
            </div>
            <div className="input">
                <img src={email} alt=""></img>
                <input type="email" placeholder="Email"></input>
            </div>
            <div className="input">
                <img src={password} alt=""></img>
                <input type="password" placeholder="Password"></input>

            </div>
        </form>
        <div className="forgot">Forgot password</div>
        <div className="submitContainer">
            <div className= {action === "Login" ? "submit gray": "submit"} onClick={() =>{setAction("Sign Up")}}>Sign Up</div>
            <div className= {action === "Sign Up" ? "submit gray": "submit"} onClick={() =>{setAction("Login")}}>Login</div>

        </div>


        </div>
    )
}

export default LoginSignup