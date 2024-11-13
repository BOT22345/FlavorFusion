import { Navbar } from "./components/navbar/Navbar";
import {Routes,Route} from "react-router-dom";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import PlaceOrder from "./pages/placeorder/PlaceOrder";
import "./App.css";
import Footer from "./components/footer/Footer";
import { useState } from "react";
import LoginPopup from "./components/loginPopup/LoginPopup";

const App = () => {
  const [showLogin,setShowLogin]=useState(false);
  return (<>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}></LoginPopup>:<></>}
    <div className="app">
      <Navbar setShowLogin={setShowLogin}></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/order" element={<PlaceOrder/>}></Route>
      </Routes>
    </div>
      <Footer></Footer>
  </>
  )
}

export default App