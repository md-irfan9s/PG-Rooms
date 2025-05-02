import React, { useContext, useState } from "react"
import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";  
import Services from "./pages/Services";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import { AppContext } from "./context/AppContext";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import LoadingBar from 'react-top-loading-bar';

function App() {

  const {setIsLoggedIn} = useContext(AppContext);
  const [progress, setProgress] = useState(0);


  return (
    <div>

      <LoadingBar
        color='#FFA500'
        progress={progress}
      />
      <Navbar setProgress={setProgress}/> 

      <Routes>

        <Route path="/" element = {<Home />}/>
        <Route path="/services" element = {<Services/>}/>
        <Route path="/about" element = {<About />}/>
        <Route path="/gallery" element = {<Gallery />}/>
        <Route path="/pricing" element = {<Pricing />}/>
        <Route path="/contact" element = {<Contact />}/>
        <Route path="/login" element = {<Login setIsLoggedIn = {setIsLoggedIn}/>}/>
          <Route path="/signup" element = {<SignUp setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/dashboard" element = {<Dashboard />}/>


      </Routes>


    </div>
  );
}

export default App;
