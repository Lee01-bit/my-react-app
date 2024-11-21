import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../functions/function";
import "./loginSignup.css"

const LoginSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSignup, setIsSignup] = useState(false); 
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear any existing errors
    try {
      if (isSignup) {
        // Handle Signup
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("User signed up:", userCredential.user);
        alert("Signup successful!");
      } else {
        // Handle Login
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("User logged in:", userCredential.user);
        alert("Login successful!");
      }
      // Redirect to the home page after successful login/signup
      navigate("/home");
    } catch (err) {
      console.error("Error:", err.message);
      setError(err.message);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
      <h2>{isSignup ? "Sign Up" : "Log In"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isSignup ? "Sign Up" : "Log In"}</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
      <p>
        {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
        <button onClick={() => setIsSignup(!isSignup)} style={{ border: "none", background: "none", color: "blue", cursor: "pointer" }}>
          {isSignup ? "Log In" : "Sign Up"}
        </button>
      </p>
    </div>
  );
};

export default LoginSignup;
