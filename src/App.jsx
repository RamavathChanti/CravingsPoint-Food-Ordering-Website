import React, { useState } from "react";
import Navbar from "./assets/component/Navbar";
import { Route, Routes } from "react-router-dom";
import Home1 from "./Pages/Home/Home1";
import Cart1 from "./Pages/Cart/Cart1";
import PlaceOrder1 from "./Pages/PlaceOrder/PlaceOrder1";
import Footer from "./assets/component/Footer/Footer";
import LoginPopup from "./assets/component/LoginPopup/LoginPopup";

const App = () => {

    const [showLogin,setShowLogin] = useState(false)

  return (

    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
       <div className='app'>
    <Navbar setShowLogin={setShowLogin}/>
    <Routes>
         <Route path="/" element={<Home1/>}/>
         <Route path="/cart" element={<Cart1/>} />
         <Route path="/order" element={<PlaceOrder1/>}/>
    </Routes>
    </div>

    <Footer />

    </>
   
  )
}

export default App;


