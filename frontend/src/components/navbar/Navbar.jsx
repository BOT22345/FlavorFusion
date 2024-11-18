import "./Navbar.css"
import {assets} from "../../assets/assets.js"
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext.jsx";

export const Navbar = ({setShowLogin}) => {
  const [menu,setMenu]=useState("home");
  
  const {getTotalCartAmount,token,setToken}=useContext(StoreContext);

  const navigate=useNavigate();

  const logout=()=>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  }
  return (
    <div className="navbar">
        <Link to="/">
        <div className="logoContainer">
          <img className="logo" src={assets.logo}></img>
          <img src={assets.logoText} className="logo-text"></img>
        </div>
        </Link>
        <ul className="navbar-menu">
          <li className={menu==="home"?"active":""} onClick={()=>{setMenu("home")}}><Link to="/">Home</Link></li>
          <a href="#explore-menu" className={menu==="menu"?"active":""} onClick={()=>{setMenu("menu")}}>Menu</a>
          <a href="#footer" className={menu==="mobile-app"?"active":""} onClick={()=>{setMenu("mobile-app")}}>Mobile-App</a>
          <a href="#footer" className={menu==="contact-us"?"active":""} onClick={()=>{setMenu("contact-us")}}>Contact Us</a>
        </ul>
        <div className="navbar-right">
          <img src={assets.searchIcon} className="assets-search-icon"></img>
          <div className="navbar-search-icon">
            <Link to="/cart">
            <img src={assets.basketIcon}className="basketIcon"></img>
            <div className={getTotalCartAmount()?"dot":""}></div>
            </Link>
          </div>
          {!token?<button onClick={()=>setShowLogin(true)}>sign in </button>
          :<div className="navbar-profile">
            <img src={assets.adminProfile}></img>
            <ul className="nav-profile-dropdown">
              <li><img className="icon" src={assets.orders}></img> <p>Orders</p></li>
              <li onClick={logout}><img className="icon" src={assets.logout}></img> <p>Logout</p></li>
            </ul>
            </div>}
          
        </div>
    </div>

  )
}
