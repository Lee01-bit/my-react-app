import{BrowserRouter, Routes, Route, Switch} from "react-router-dom"
import Home from "./components/Home";
import About from "./components/About";
import Userprofile from "./components/userProfile";
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
          <Route path="/Userprofile" element={<Userprofile/>}/>
        </Routes>
        

      </BrowserRouter>

      <Footer/>
      
    </>
  )
}
export default App