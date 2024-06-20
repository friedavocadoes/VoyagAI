import React from "react";
import Home from "./home/Home";
//import Contact from "./components/Contact";
import { Route , Routes } from "react-router-dom";
function App() {
  return (
    <>
    <Home/>
    
   
  {/*<Routes>
    <Route path ="/" element ={<Home/>}/>
    <Route path ="/contact" element ={<Contact/>}/>
   { /*<Route path ="/continue" element ={<Continue/>}/>
  </Routes>

    */}
    </>

  )
}
export default App;
