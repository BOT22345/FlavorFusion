import "./Navbar.css"
import {assets} from "../../assets/assets.js"
import { useState } from "react"

export const Navbar = ({setShowLogin}) => {
  const [menu,setMenu]=useState("home");
  return (
    <div className="navbar">
        <div className="logoContainer">
          <img className="logo" src={assets.logo}></img>
          <img src={assets.logoText} className="logo-text"></img>
        </div>
        <ul className="navbar-menu">
          <li className={menu==="home"?"active":""} onClick={()=>{setMenu("home")}}>Home</li>
          <li className={menu==="menu"?"active":""} onClick={()=>{setMenu("menu")}}>Menu</li>
          <li className={menu==="mobile-app"?"active":""} onClick={()=>{setMenu("mobile-app")}}>Mobile-App</li>
          <li className={menu==="contact-us"?"active":""} onClick={()=>{setMenu("contact-us")}}>Contact Us</li>
        </ul>
        <div className="navbar-right">
          <img src={assets.searchIcon} className="assets-search-icon"></img>
          <div className="navbar-search-icon">
            <img src={assets.basketIcon}className="basketIcon"></img>
            <div className="dot"></div>
          </div>
          <button onClick={()=>setShowLogin(true)}>sign in </button>
        </div>
    </div>

  )
}
