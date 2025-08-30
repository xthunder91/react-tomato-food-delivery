import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import LoginPopUp from "./components/LoginPopUp/LoginPopUp";
import AboutUs from "./components/AboutUs/AboutUs";


function App() {
  
  const [showLogin, setShowLogin] = useState(false);

  // const router= createBrowserRouter([
  //   {
  //     path: "/AboutUs",
  //     element: <><Navbar><AboutUs/></Navbar></>
  //   }
  // ])

  return (
    <>
    {/* <RouterProvider router={router} /> */}
    {showLogin ? <LoginPopUp setShowLogin={setShowLogin}/> : <></>}
    <div className="app">
      <div className="">
        <Navbar setShowLogin={setShowLogin}/>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Order" element={<PlaceOrder />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
      </div>
      <Footer />
      </div>
    
      
    </>
  )
}

export default App;