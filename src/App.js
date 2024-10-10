import{BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home";
import About from "./components/About";
import Userprofile from "./components/UserProfile";
import Footer from "./components/Footer.";
import NavBar from "./components/navBar";
import LoginSignup from "./components/SignIn"




function App({selectedItems, menuItem}){
  return(
    <>
      <BrowserRouter>
          <NavBar/>
        <Routes>
          <Route path="/" element={<LoginSignup/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/Userprofile" element={<Userprofile />}/>
        </Routes>
        

      </BrowserRouter>

      <Footer/>
      
    </>
  )
}
export default App