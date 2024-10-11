import{BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home";
import About from "./components/About";
import UserProfile from "./components/UserProfile.js";
import Footer from "./components/Footer.";
import NavBar from "./components/navBar";
import LoginSignup from "./components/SignIn"




function App(){
  return(
    <>
      <BrowserRouter>
          <NavBar/>
        <Routes>
          <Route path="/" element={<LoginSignup/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/Userprofile" element={<UserProfile />}/>
        </Routes>
        

      </BrowserRouter>

      <Footer/>
      
    </>
  )
}
export default App