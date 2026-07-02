import React from "react";
// import Navbar from "./components/Navbar";
import './App.css'
import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
// import About from "./components/pages/About";
// import Contact from "./components/pages/Contact";
// import Services from "./components/pages/Services";
// import Home from "./components/pages/Home";

function App() {
  return <div className='App'>
    {/* <Navbar /> */}
      <LoginForm />
     {/* <Routes>
        <Route path="/website" element= {<Home />}/>
       <Route path="/about" element= {<About />}/>
        <Route path="/contact" element= {<Contact />}/>
         <Route path="/services" element= {<Services />}/>
     </Routes> */}
    </div>
      }
export default App;
