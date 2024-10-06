import{BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home";
import About from "./components/About";
import Userprofile from "./components/userProfile";
import Footer from "./components/Footer.";
import NavBar from "./components/navBar";
import CardItem from "./components/MenuItem"



function App(){
  return(
    <>
      <BrowserRouter>
          <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/Userprofile" element={<Userprofile/>}/>
        </Routes>
      </BrowserRouter>
      <CardItem></CardItem>


      
      <Footer></Footer>
      
    </>
  )
}
export default App