import{BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Home";
import About from "./About";
import NavBar from "./navBar";

function App(){
  return(
    
    <BrowserRouter>
          <NavBar></NavBar>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        {/* <Route path="/contact" element={<Contact/>}/> */}

      </Routes>
      
    </BrowserRouter>
  )
}
export default App