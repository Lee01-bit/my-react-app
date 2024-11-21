import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Userprofile from "./components/userProfile";
import Footer from "./components/Footer";
import NavBar from "./components/navBar";
import LoginSignup from "./components/LoginSignup";
import { CartProvider } from "./components/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </CartProvider>
  );
}

function Main() {
  const location = useLocation(); 

  // Conditionally render NavBar based on the current route
  const showNavBar = location.pathname !== "/"; 

  return (
    <>
      {showNavBar && <NavBar />} 
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/userprofile" element={<Userprofile />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
