import{BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home";
import About from "./components/About";
import UserProfile from "./components/userProfile";
import Footer from "./components/Footer.";
import NavBar from "./components/navBar";
import LoginSignup from "./components/SignIn"
import { Cart } from "./components/cart";
import { CartProvider } from "./components/CartContext";




function App(){
  return(
    <>
    <CartProvider>
      <BrowserRouter>
          <NavBar/>
        <Routes>
          <Route path="/" element={<LoginSignup/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/Userprofile" element={<UserProfile />}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
        
      </BrowserRouter>
      <Footer/>
      </CartProvider>
      
    </>
  )
}
export default App